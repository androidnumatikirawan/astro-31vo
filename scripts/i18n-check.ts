import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const LANGUAGES = ["id", "en", "ms-MY", "ja", "zh-CN", "ru"] as const;
type Language = (typeof LANGUAGES)[number];

type TranslationMap = {
  label: string;
  node: ts.ObjectLiteralExpression;
  entries: Map<Language, ts.Expression | undefined>;
};

type LocaleSnapshot = {
  keys: Set<string>;
  arrays: Map<string, number>;
  values: Map<string, string>;
  readable: boolean;
  issues: string[];
};

type FileAnalysis = {
  path: string;
  maps: TranslationMap[];
  languages: Set<Language>;
  hasJaBranch: boolean;
  usesPickLang: boolean;
  hasTranslation: boolean;
  unreadable: string[];
  discrepancyCount: number;
  report: string[];
};

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pagesRoot = resolve(
  projectRoot,
  "artifacts/numatik/src/pages/buku-animasi-matematika",
);
const reportPath = resolve(projectRoot, "docs/i18n-report.md");

function isLanguage(value: string): value is Language {
  return LANGUAGES.includes(value as Language);
}

function propertyName(name: ts.PropertyName | undefined): string | undefined {
  if (!name) return undefined;
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNoSubstitutionTemplateLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }
  return undefined;
}

function unwrap(expression: ts.Expression): ts.Expression {
  let current = expression;
  while (
    ts.isParenthesizedExpression(current) ||
    ts.isAsExpression(current) ||
    ts.isTypeAssertionExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isNonNullExpression(current)
  ) {
    current = current.expression;
  }
  return current;
}

function isLanguageExpression(expression: ts.Expression): boolean {
  const value = unwrap(expression);
  const name = ts.isIdentifier(value)
    ? value.text.toLowerCase()
    : ts.isPropertyAccessExpression(value)
      ? value.name.text.toLowerCase()
      : "";
  return (
    name === "language" ||
    name === "lang" ||
    name === "locale" ||
    name === "currentlanguage" ||
    name === "currentlang" ||
    name === "currentlocale" ||
    name === "selectedlanguage" ||
    name === "selectedlang" ||
    name === "selectedlocale"
  );
}

function collectDeclarations(
  source: ts.SourceFile,
): Map<string, ts.Expression[]> {
  const declarations = new Map<string, ts.Expression[]>();
  const visit = (node: ts.Node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer
    ) {
      const values = declarations.get(node.name.text) ?? [];
      values.push(node.initializer);
      declarations.set(node.name.text, values);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  return declarations;
}

function resolveObject(
  expression: ts.Expression,
  declarations: Map<string, ts.Expression[]>,
  visited = new Set<string>(),
): ts.ObjectLiteralExpression | undefined {
  const value = unwrap(expression);
  if (ts.isObjectLiteralExpression(value)) return value;
  if (!ts.isIdentifier(value) || visited.has(value.text)) return undefined;

  visited.add(value.text);
  const candidates = declarations.get(value.text) ?? [];
  for (const candidate of candidates) {
    const resolved = resolveObject(candidate, declarations, visited);
    if (resolved) return resolved;
  }
  return undefined;
}

function resolveInitializer(
  expression: ts.Expression,
  declarations: Map<string, ts.Expression[]>,
  visited = new Set<string>(),
): ts.Expression {
  const value = unwrap(expression);
  if (!ts.isIdentifier(value) || visited.has(value.text)) return value;
  visited.add(value.text);
  const candidates = declarations.get(value.text) ?? [];
  for (const candidate of candidates) {
    const resolved = resolveInitializer(candidate, declarations, visited);
    if (resolved !== candidate || !ts.isIdentifier(resolved)) return resolved;
  }
  return value;
}

function mapSignature(
  entries: Map<Language, ts.Expression | undefined>,
): string {
  return LANGUAGES.filter((language) => entries.has(language))
    .map(
      (language) => `${language}:${entries.get(language)?.pos ?? "unresolved"}`,
    )
    .join("|");
}

function discoverTranslationMaps(source: ts.SourceFile): {
  maps: TranslationMap[];
  branches: Set<Language>;
  usesPickLang: boolean;
} {
  const declarations = collectDeclarations(source);
  const maps: TranslationMap[] = [];
  const signatures = new Set<string>();
  const branches = new Set<Language>();
  let usesPickLang = false;

  const addMap = (
    label: string,
    object: ts.ObjectLiteralExpression,
    allowSingleLocale = false,
  ) => {
    const languageProperties = new Map<Language, ts.Expression | undefined>();
    for (const property of object.properties) {
      if (ts.isSpreadAssignment(property)) continue;
      const key = propertyName(
        ts.isPropertyAssignment(property) ||
          ts.isMethodDeclaration(property) ||
          ts.isGetAccessorDeclaration(property) ||
          ts.isSetAccessorDeclaration(property)
          ? property.name
          : ts.isShorthandPropertyAssignment(property)
            ? property.name
            : undefined,
      );
      if (!key || !isLanguage(key)) continue;

      const initializer = ts.isPropertyAssignment(property)
        ? property.initializer
        : ts.isShorthandPropertyAssignment(property)
          ? property.name
          : undefined;
      languageProperties.set(key, initializer);
    }

    const hasSourceLanguage =
      languageProperties.has("id") ||
      languageProperties.has("en") ||
      languageProperties.has("ja");
    if (
      !hasSourceLanguage ||
      (!allowSingleLocale && languageProperties.size < 2)
    ) {
      return;
    }

    const signature = mapSignature(languageProperties);
    if (signatures.has(signature)) return;
    signatures.add(signature);
    maps.push({ label, node: object, entries: languageProperties });
  };

  const scopeLocales = new Map<
    ts.Node,
    Map<
      Language,
      { expression: ts.Expression; object: ts.ObjectLiteralExpression }
    >
  >();

  const nearestFunctionScope = (node: ts.Node): ts.Node => {
    let current: ts.Node | undefined = node.parent;
    while (current && !ts.isSourceFile(current)) {
      if (
        (ts.isFunctionDeclaration(current) ||
          ts.isFunctionExpression(current) ||
          ts.isArrowFunction(current) ||
          ts.isMethodDeclaration(current) ||
          ts.isConstructorDeclaration(current) ||
          ts.isGetAccessorDeclaration(current) ||
          ts.isSetAccessorDeclaration(current)) &&
        current.body &&
        ts.isBlock(current.body)
      ) {
        return current.body;
      }
      current = current.parent;
    }
    return source;
  };

  const visit = (node: ts.Node) => {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
      if (node.expression.text === "pickLang") usesPickLang = true;
    }

    if (ts.isBinaryExpression(node)) {
      const operator = node.operatorToken.kind;
      if (
        operator === ts.SyntaxKind.EqualsEqualsEqualsToken ||
        operator === ts.SyntaxKind.EqualsEqualsToken ||
        operator === ts.SyntaxKind.ExclamationEqualsEqualsToken ||
        operator === ts.SyntaxKind.ExclamationEqualsToken
      ) {
        const left = unwrap(node.left);
        const right = unwrap(node.right);
        const literal = ts.isStringLiteral(left)
          ? left
          : ts.isStringLiteral(right)
            ? right
            : undefined;
        if (
          literal &&
          isLanguage(literal.text) &&
          (isLanguageExpression(left) || isLanguageExpression(right))
        ) {
          branches.add(literal.text);
        }
      }
    }

    if (ts.isCaseClause(node) && ts.isStringLiteral(node.expression)) {
      let parent: ts.Node | undefined = node.parent;
      while (parent && !ts.isSwitchStatement(parent)) parent = parent.parent;
      if (
        isLanguage(node.expression.text) &&
        parent &&
        ts.isSwitchStatement(parent) &&
        isLanguageExpression(parent.expression)
      ) {
        branches.add(node.expression.text);
      }
    }

    if (ts.isObjectLiteralExpression(node)) {
      const parent = node.parent;
      const label =
        ts.isVariableDeclaration(parent) && ts.isIdentifier(parent.name)
          ? parent.name.text
          : `object@${source.getLineAndCharacterOfPosition(node.getStart()).line + 1}`;
      const allowSingle = label === "translations";
      addMap(label, node, allowSingle);
    }

    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer &&
      isLanguage(node.name.text)
    ) {
      const object = resolveObject(node.initializer, declarations);
      if (object) {
        const scope = nearestFunctionScope(node);
        const locales = scopeLocales.get(scope) ?? new Map();
        locales.set(node.name.text, { expression: node.initializer, object });
        scopeLocales.set(scope, locales);
      }
    }

    ts.forEachChild(node, visit);
  };
  visit(source);

  for (const [scope, locales] of scopeLocales) {
    if (
      locales.size < 2 ||
      (!locales.has("id") && !locales.has("en") && !locales.has("ja"))
    ) {
      continue;
    }
    const entries = new Map<Language, ts.Expression | undefined>();
    for (const [language, value] of locales) {
      entries.set(language, value.expression);
    }
    const signature = mapSignature(entries);
    if (signatures.has(signature)) continue;
    signatures.add(signature);
    const first = locales.values().next().value as
      { object: ts.ObjectLiteralExpression } | undefined;
    if (first) {
      maps.push({
        label: `locale constants@${source.getLineAndCharacterOfPosition(scope.getStart()).line + 1}`,
        node: first.object,
        entries,
      });
    }
  }

  return { maps, branches, usesPickLang };
}

function visibleText(
  expression: ts.Expression,
  source: ts.SourceFile,
): string | undefined {
  const value = unwrap(expression);
  if (
    ts.isStringLiteral(value) ||
    ts.isNoSubstitutionTemplateLiteral(value) ||
    ts.isNumericLiteral(value)
  ) {
    return value.text;
  }

  if (ts.isTemplateExpression(value)) {
    const parts = [value.head.text];
    for (const span of value.templateSpans) {
      const spanValue = unwrap(span.expression);
      if (
        ts.isStringLiteral(spanValue) ||
        ts.isNoSubstitutionTemplateLiteral(spanValue) ||
        ts.isNumericLiteral(spanValue)
      ) {
        parts.push(spanValue.text);
      }
      parts.push(span.literal.text);
    }
    return parts.join("");
  }

  const jsxText = (node: ts.Node): string => {
    if (ts.isJsxText(node)) return node.text;
    if (ts.isJsxExpression(node)) {
      if (!node.expression) return "";
      return visibleText(node.expression, source) ?? "";
    }
    if (ts.isJsxElement(node) || ts.isJsxFragment(node)) {
      return node.children.map(jsxText).join("");
    }
    if (ts.isJsxSelfClosingElement(node)) {
      const attributes: string[] = [];
      for (const property of node.attributes.properties) {
        if (!ts.isJsxAttribute(property) || !property.initializer) continue;
        if (ts.isStringLiteral(property.initializer)) {
          attributes.push(property.initializer.text);
        } else if (
          ts.isJsxExpression(property.initializer) &&
          property.initializer.expression
        ) {
          attributes.push(
            visibleText(property.initializer.expression, source) ?? "",
          );
        }
      }
      return attributes.join(" ");
    }
    return "";
  };

  if (
    ts.isJsxElement(value) ||
    ts.isJsxFragment(value) ||
    ts.isJsxSelfClosingElement(value)
  ) {
    return jsxText(value);
  }

  return undefined;
}

function flattenLocale(
  expression: ts.Expression,
  source: ts.SourceFile,
  declarations: Map<string, ts.Expression[]>,
): LocaleSnapshot {
  const snapshot: LocaleSnapshot = {
    keys: new Set(),
    arrays: new Map(),
    values: new Map(),
    readable: true,
    issues: [],
  };

  const issue = (message: string) => {
    snapshot.readable = false;
    snapshot.issues.push(message);
  };

  const visitObject = (
    current: ts.ObjectLiteralExpression,
    prefix: string,
    visited: Set<string>,
  ) => {
    for (const property of current.properties) {
      if (ts.isSpreadAssignment(property)) {
        issue(`spread property at ${prefix || "<root>"}`);
        continue;
      }
      if (
        !ts.isPropertyAssignment(property) &&
        !ts.isShorthandPropertyAssignment(property)
      ) {
        issue(`unsupported property at ${prefix || "<root>"}`);
        continue;
      }

      const key = propertyName(property.name);
      if (!key) {
        issue(`computed property at ${prefix || "<root>"}`);
        continue;
      }
      const keyPath = prefix ? `${prefix}.${key}` : key;
      snapshot.keys.add(keyPath);
      const initializer = ts.isPropertyAssignment(property)
        ? property.initializer
        : property.name;
      visitExpression(initializer, keyPath, visited);
    }
  };

  const visitExpression = (
    expression: ts.Expression,
    keyPath: string,
    visited: Set<string>,
  ) => {
    const value = resolveInitializer(expression, declarations);
    if (ts.isObjectLiteralExpression(value)) {
      visitObject(value, keyPath, visited);
      return;
    }
    if (ts.isArrayLiteralExpression(value)) {
      snapshot.arrays.set(keyPath, value.elements.length);
      value.elements.forEach((element) => {
        if (ts.isSpreadElement(element)) {
          issue(`spread array element at ${keyPath}`);
          return;
        }
        visitExpression(element, `${keyPath}[]`, visited);
      });
      return;
    }
    const text = visibleText(value, source);
    if (text !== undefined) snapshot.values.set(keyPath, text);
  };

  const root = resolveInitializer(expression, declarations);
  if (ts.isObjectLiteralExpression(root)) {
    visitObject(root, "", new Set());
  } else {
    visitExpression(root, "$value", new Set());
  }
  return snapshot;
}

function normalizeNumber(
  token: string,
  language: Language,
): string | undefined {
  let value = token.replace(/[\u00a0\u202f ]/g, "");
  let sign = "";
  if (value.startsWith("-") || value.startsWith("+")) {
    sign = value[0] === "-" ? "-" : "";
    value = value.slice(1);
  }
  if (!value) return undefined;

  const comma = value.lastIndexOf(",");
  const dot = value.lastIndexOf(".");
  let decimalSeparator: string | undefined;

  if (comma >= 0 && dot >= 0) {
    decimalSeparator = language === "id" || language === "ru" ? "," : ".";
  } else if (comma >= 0) {
    const trailing = value.length - comma - 1;
    if (
      language === "en" ||
      language === "ja" ||
      language === "ms-MY" ||
      language === "zh-CN"
    ) {
      decimalSeparator = trailing === 3 ? undefined : ",";
    } else {
      decimalSeparator = ",";
    }
  } else if (dot >= 0) {
    const trailing = value.length - dot - 1;
    if (language === "id" || language === "ru") {
      decimalSeparator = trailing === 3 ? undefined : ".";
    } else {
      decimalSeparator = ".";
    }
  }

  const decimalIndex = decimalSeparator
    ? value.lastIndexOf(decimalSeparator)
    : -1;
  const integerPart = decimalIndex >= 0 ? value.slice(0, decimalIndex) : value;
  const fractionalPart = decimalIndex >= 0 ? value.slice(decimalIndex + 1) : "";
  const integer =
    integerPart.replace(/[.,]/g, "").replace(/^0+(?=\d)/, "") || "0";
  const fraction = fractionalPart.replace(/[.,]/g, "").replace(/0+$/, "");
  return `${sign}${integer}${fraction ? `.${fraction}` : ""}`;
}

function numbersIn(text: string, language: Language): string[] {
  const tokens =
    text.match(
      /(?<![\p{L}\p{N}_])[+-]?\d+(?:[.,\u00a0\u202f ]\d+)*(?![\p{L}\p{N}_])/gu,
    ) ?? [];
  return tokens
    .map((token) => normalizeNumber(token, language))
    .filter((value): value is string => value !== undefined);
}

function analyzeMap(
  map: TranslationMap,
  source: ts.SourceFile,
  declarations: Map<string, ts.Expression[]>,
): { lines: string[]; score: number; unreadable: string[] } {
  const snapshots = new Map<Language, LocaleSnapshot>();
  const unreadable: string[] = [];
  for (const [language, expression] of map.entries) {
    if (!expression) {
      unreadable.push(`${language}: locale value cannot be resolved`);
      continue;
    }
    const snapshot = flattenLocale(expression, source, declarations);
    snapshots.set(language, snapshot);
    if (!snapshot.readable) {
      unreadable.push(
        `${language}: ${[...new Set(snapshot.issues)].join(", ")}`,
      );
    }
  }

  const lines: string[] = [];
  let score = 0;
  const id = snapshots.get("id");
  if (id) {
    for (const language of LANGUAGES) {
      if (language === "id") continue;
      const other = snapshots.get(language);
      if (!other) continue;

      const onlyId = [...id.keys].filter((key) => !other.keys.has(key)).sort();
      const onlyOther = [...other.keys]
        .filter((key) => !id.keys.has(key))
        .sort();
      if (onlyId.length) {
        lines.push(
          `- **${language}, key id yang tidak ada:** ${onlyId.map((key) => `\`${key}\``).join(", ")}`,
        );
        score += onlyId.length;
      }
      if (onlyOther.length) {
        lines.push(
          `- **${language}, key tambahan:** ${onlyOther.map((key) => `\`${key}\``).join(", ")}`,
        );
        score += onlyOther.length;
      }
    }

    const arrayPaths = new Set([
      ...[...snapshots.values()].flatMap((snapshot) => [
        ...snapshot.arrays.keys(),
      ]),
    ]);
    for (const key of [...arrayPaths].sort()) {
      const lengths = LANGUAGES.flatMap((language) => {
        const length = snapshots.get(language)?.arrays.get(key);
        return length === undefined ? [] : [[language, length] as const];
      });
      if (new Set(lengths.map(([, length]) => length)).size > 1) {
        lines.push(
          `- **Panjang array \`${key}\` berbeda:** ${lengths.map(([language, length]) => `${language}=${length}`).join(", ")}`,
        );
        score++;
      }
    }

    for (const language of ["en", "ja"] as const) {
      const other = snapshots.get(language);
      if (!other) continue;
      const sharedValues = [...id.values.keys()].filter((key) =>
        other.values.has(key),
      );
      for (const key of sharedValues.sort()) {
        const idNumbers = numbersIn(id.values.get(key) ?? "", "id");
        const otherNumbers = numbersIn(other.values.get(key) ?? "", language);
        if (
          (idNumbers.length || otherNumbers.length) &&
          idNumbers.join(",") !== otherNumbers.join(",")
        ) {
          lines.push(
            `- **Angka berbeda pada \`${key}\` (id vs ${language}):** id=[${idNumbers.join(", ")}], ${language}=[${otherNumbers.join(", ")}]`,
          );
          score++;
        }
      }
    }
  } else {
    lines.push(
      "- Perbandingan key/angka dilewati: tidak ada objek `id` yang terbaca.",
    );
  }

  if (unreadable.length) {
    lines.unshift(`- **tidak terbaca:** ${unreadable.join("; ")}`);
  }
  if (!lines.length)
    lines.push(
      "- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.",
    );
  return { lines, score, unreadable };
}

function listSourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return listSourceFiles(path);
    return /\.tsx?$/.test(entry.name) ? [path] : [];
  });
}

function analyzeFile(path: string): FileAnalysis {
  const text = readFileSync(path, "utf8");
  const source = ts.createSourceFile(
    path,
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const unreadable: string[] = [];
  const declarations = collectDeclarations(source);
  const { maps, branches, usesPickLang } = discoverTranslationMaps(source);
  const languages = new Set<Language>(branches);
  for (const map of maps) {
    for (const language of map.entries.keys()) languages.add(language);
  }

  const usesTranslationHook =
    text.includes("useTranslation") && /\bt\s*\(/.test(text);
  const hasTranslation =
    maps.length > 0 ||
    branches.size > 0 ||
    usesTranslationHook ||
    /\bi18n\.t\s*\(/.test(text);
  const report: string[] = [];
  let discrepancyCount = 0;

  maps.forEach((map, index) => {
    const result = analyzeMap(map, source, declarations);
    discrepancyCount += result.score;
    unreadable.push(...result.unreadable);
    const line =
      source.getLineAndCharacterOfPosition(map.node.getStart()).line + 1;
    report.push(`#### Peta ${index + 1}: \`${map.label}\` (baris ${line})`);
    report.push(
      `Bahasa: ${LANGUAGES.filter((language) => map.entries.has(language)).join(", ") || "tidak terbaca"}`,
    );
    report.push(...result.lines);
    report.push("");
  });

  if (unreadable.length && maps.length === 0) {
    report.push(`- **tidak terbaca:** ${[...new Set(unreadable)].join("; ")}`);
  }

  return {
    path,
    maps,
    languages,
    hasJaBranch: languages.has("ja"),
    usesPickLang,
    hasTranslation,
    unreadable: [...new Set(unreadable)],
    discrepancyCount,
    report,
  };
}

function markdownPath(path: string): string {
  return relative(resolve(projectRoot, "docs"), path).split(sep).join("/");
}

const topicDirectories = readdirSync(pagesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({
    name: entry.name,
    path: resolve(pagesRoot, entry.name),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const rootFiles = readdirSync(pagesRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.tsx?$/.test(entry.name))
  .map((entry) => resolve(pagesRoot, entry.name));

const topics = [
  { name: "(root)", path: pagesRoot, directFiles: rootFiles },
  ...topicDirectories.map((topic) => ({
    ...topic,
    directFiles: listSourceFiles(topic.path),
  })),
];

const analyses = new Map<string, FileAnalysis>();
for (const topic of topics) {
  for (const file of topic.directFiles) {
    if (!analyses.has(file)) analyses.set(file, analyzeFile(file));
  }
}

const allFiles = [...analyses.values()].sort((a, b) =>
  a.path.localeCompare(b.path),
);
const topDiscrepancies = allFiles
  .filter((file) => file.discrepancyCount > 0)
  .sort(
    (a, b) =>
      b.discrepancyCount - a.discrepancyCount || a.path.localeCompare(b.path),
  )
  .slice(0, 10);

const output: string[] = [
  "# Laporan pemeriksaan i18n materi",
  "",
  "Dihasilkan oleh `pnpm i18n:check` menggunakan TypeScript compiler API.",
  "Pemeriksaan membaca objek locale statis; spread atau key komputasi yang menghalangi pembacaan ditandai **tidak terbaca**.",
  "",
  "## Ringkasan",
  "",
  `- File sumber yang dipindai: ${allFiles.length}.`,
  `- File dengan objek terjemahan per bahasa: ${allFiles.filter((file) => file.maps.length > 0).length}.`,
  `- File dengan cabang \`ja\`: ${allFiles.filter((file) => file.hasJaBranch).length}.`,
  `- File tanpa terjemahan yang terdeteksi: ${allFiles.filter((file) => !file.hasTranslation).length}.`,
  `- File dengan objek yang tidak terbaca: ${allFiles.filter((file) => file.unreadable.length > 0).length}.`,
  "",
  "### 10 file dengan ketidaksesuaian terbanyak",
  "",
  "| File | Jumlah ketidaksesuaian |",
  "| --- | ---: |",
  ...(topDiscrepancies.length
    ? topDiscrepancies.map(
        (file) =>
          `| [\`${markdownPath(file.path)}\`](${markdownPath(file.path)}) | ${file.discrepancyCount} |`,
      )
    : ["| Tidak ada ketidaksesuaian terdeteksi | 0 |"]),
  "",
  "## Cakupan per topik",
  "",
  "| Topik | File | File dengan cabang ja | Memakai pickLang | Tanpa terjemahan sama sekali |",
  "| --- | ---: | ---: | ---: | --- |",
];

for (const topic of topics) {
  const files = topic.directFiles
    .map((file) => analyses.get(file))
    .filter((file): file is FileAnalysis => file !== undefined);
  const jaCount = files.filter((file) => file.hasJaBranch).length;
  const noTranslation = files
    .filter((file) => !file.hasTranslation)
    .map((file) => relative(topic.path, file.path).split(sep).join("/"));
  const topicPath =
    topic.name === "(root)"
      ? "../artifacts/numatik/src/pages/buku-animasi-matematika"
      : `../artifacts/numatik/src/pages/buku-animasi-matematika/${topic.name}`;
  const topicLabel =
    topic.name === "(root)" ? "(root)" : `[\`${topic.name}\`](${topicPath})`;
  const noTranslationLabel = noTranslation.length
    ? noTranslation.map((file) => `\`${file}\``).join(", ")
    : "—";
  output.push(
    `| ${topicLabel} | ${files.length} | ${jaCount}${jaCount === 0 ? " (**tanpa cabang ja**)" : ""} | ${files.filter((file) => file.usesPickLang).length} | ${noTranslationLabel} |`,
  );
}

const requestedTopics = [
  ["Perbandingan", "perbandingan"],
  ["Himpunan", "himpunan"],
  ["Garis dan Sudut", "garis-dan-sudut"],
  ["Aritmetika Sosial", "aritmetika-sosial"],
  ["PGL", "persamaan-garis-lurus"],
  ["Teorema Pythagoras", "teorema-pythagoras"],
  ["Bangun Ruang Sisi Datar", "bangun-ruang-sisi-datar"],
  ["Bilangan Berpangkat", "bilangan-berpangkat"],
  ["Kesebangunan", "kesebangunan-kekongruenan"],
  ["Transformasi Geometri", "transformasi-geometri"],
  ["BRSL", "bangun-ruang-sisi-lengkung"],
  ["Statistika", "statistika"],
  ["Peluang", "peluang"],
  ["Fungsi Kuadrat", "fungsi-kuadrat"],
  ["Persamaan Kuadrat", "persamaan-kuadrat"],
] as const;

output.push(
  "",
  "### Topik yang diminta",
  "",
  "| Topik | Folder ada | Berisi terjemahan |",
  "| --- | --- | --- |",
);
for (const [label, directoryName] of requestedTopics) {
  const topic = topics.find((entry) => entry.name === directoryName);
  const files = topic?.directFiles
    .map((file) => analyses.get(file))
    .filter((file): file is FileAnalysis => file !== undefined);
  const hasTranslation = Boolean(files?.some((file) => file.hasTranslation));
  output.push(
    `| ${label} | ${topic ? "Ya" : "Tidak"} | ${topic ? (hasTranslation ? "Ya" : "Tidak") : "—"} |`,
  );
}

for (const topic of topics) {
  const files = topic.directFiles
    .map((file) => analyses.get(file))
    .filter((file): file is FileAnalysis => file !== undefined)
    .filter((file) => file.maps.length > 0 || file.unreadable.length > 0);
  output.push("", `## Topik ${topic.name}`, "");
  if (!files.length) {
    output.push("Tidak ada objek terjemahan per bahasa yang dapat dianalisis.");
    continue;
  }
  for (const file of files) {
    output.push(
      `### [\`${markdownPath(file.path)}\`](${markdownPath(file.path)})`,
      "",
    );
    if (file.report.length) output.push(...file.report);
    else
      output.push(
        "- Tidak ada perbedaan key, panjang array, atau angka yang terdeteksi.",
        "",
      );
  }
}

writeFileSync(reportPath, `${output.join("\n").trimEnd()}\n`);
console.log(
  `Wrote ${relative(projectRoot, reportPath)} (${allFiles.length} files scanned).`,
);
