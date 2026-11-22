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

type MismatchCounts = {
  idOnlyKeys: number;
  extraKeys: number;
  arrayLengths: number;
  numbers: number;
};

type MismatchExample = {
  key: string;
  idValue: string;
  enValue: string;
  type: string;
  numericNote?: string;
};

type FileAnalysis = {
  path: string;
  maps: TranslationMap[];
  languages: Set<Language>;
  hasJaBranch: boolean;
  usesPickLang: boolean;
  hasTranslation: boolean;
  unreadable: string[];
  mismatchCounts: MismatchCounts;
  discrepancyCount: number;
  mismatchExamples: MismatchExample[];
  numberMismatchesBefore: number;
  numberMismatchesAfter: number;
  numberMismatchesRemoved: number;
  numberMismatchesAdded: number;
  formatOnlyPairs: number;
  numberFormatAmbiguities: number;
  kind: "halaman konten" | "wrapper";
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

function prepareNumberText(text: string, language: Language): string {
  const gradePatterns: Partial<Record<Language, RegExp>> = {
    id: /\bkelas\s*[789]\s*[a-z]?\b/gi,
    en: /\bgrade\s*[789]\s*[a-z]?\b/gi,
    "ms-MY": /\btingkatan\s*[1-3]\s*[a-z]?\b/gi,
    ja: /中学\s*[1-3]\s*年/g,
    "zh-CN": /[七八九1-9]\s*年级/g,
    ru: /\b[789]\s*класс\b/gi,
  };
  return text
    .replace(/\bRp(?=\s*[+-]?\d)/gi, " ")
    .replace(/\\,/g, " ")
    .replace(/\{,\}/g, ",")
    .replace(
      /\\(?:underline|overline|text|mathrm|mathbf|mathit|operatorname)\s*\{([^{}]*)\}/g,
      "$1",
    )
    .replace(/\\[A-Za-z]+/g, " ")
    .replace(/[{}]/g, " ")
    .replace(gradePatterns[language] ?? /$^/, " ");
}

function numberTokensIn(text: string, language: Language): string[] {
  const tokens =
    prepareNumberText(text, language).match(
      /(?<![A-Za-z0-9_])([+-]?\d+(?:[.,\u00a0\u202f ]\d+)*)(?:st|nd|rd|th)?(?![A-Za-z0-9_])/giu,
    ) ?? [];
  return tokens.map((token) => token.replace(/(?:st|nd|rd|th)$/i, ""));
}

function numbersIn(text: string, language: Language): string[] {
  return numberTokensIn(text, language)
    .map((token) => normalizeNumber(token, language))
    .filter((value): value is string => value !== undefined);
}

const numberNormalizationExamples: Array<[string, Language, string[]]> = [
  ["1.234,5", "id", ["1234.5"]],
  ["1,234.5", "en", ["1234.5"]],
  ["Rp1.234.500", "id", ["1234500"]],
  ["$1,234,500", "en", ["1234500"]],
  ["1\\,234{,}5", "ru", ["1234.5"]],
  ["4,\\underline{6}38", "id", ["4.638"]],
  ["2nd decimal", "en", ["2"]],
  ["中学1年", "ja", []],
];

function displayValue(
  snapshot: LocaleSnapshot | undefined,
  key: string,
): string {
  if (!snapshot) return "—";
  const value = snapshot.values.get(key);
  if (value !== undefined) return value.replace(/\s+/g, " ").trim();
  const arrayLength = snapshot.arrays.get(key);
  if (arrayLength !== undefined) return `[array length ${arrayLength}]`;
  const childCount = [...snapshot.keys].filter((candidate) =>
    candidate.startsWith(`${key}.`),
  ).length;
  if (childCount) return `[object with ${childCount} keys]`;
  return snapshot.keys.has(key) ? "[dynamic value]" : "—";
}

function compactValue(value: string, maxLength = 180): string {
  const normalized = value.replace(/\|/g, "\\|").replace(/`/g, "\\`");
  return normalized.length > maxLength
    ? `${normalized.slice(0, maxLength - 1)}…`
    : normalized;
}

function legacyNumbersIn(text: string, language: Language): string[] {
  const tokens =
    text.match(
      /(?<![\p{L}\p{N}_])[+-]?\d+(?:[.,\u00a0\u202f ]\d+)*(?![\p{L}\p{N}_])/gu,
    ) ?? [];
  return tokens
    .map((token) => normalizeNumber(token, language))
    .filter((value): value is string => value !== undefined);
}

function assertNumberNormalizationExamples(): void {
  for (const [text, language, expected] of numberNormalizationExamples) {
    const actual = numbersIn(text, language);
    if (actual.join(",") !== expected.join(",")) {
      throw new Error(
        `Number normalization failed for ${language} value ${JSON.stringify(text)}: ${actual.join(",")}`,
      );
    }
  }
}

assertNumberNormalizationExamples();

function analyzeMap(
  map: TranslationMap,
  source: ts.SourceFile,
  declarations: Map<string, ts.Expression[]>,
): {
  lines: string[];
  counts: MismatchCounts;
  examples: MismatchExample[];
  unreadable: string[];
  numberMismatchesBefore: number;
  numberMismatchesAfter: number;
  numberMismatchesRemoved: number;
  numberMismatchesAdded: number;
  formatOnlyPairs: number;
  numberFormatAmbiguities: number;
} {
  const snapshots = new Map<Language, LocaleSnapshot>();
  const unreadable: string[] = [];
  const counts: MismatchCounts = {
    idOnlyKeys: 0,
    extraKeys: 0,
    arrayLengths: 0,
    numbers: 0,
  };
  const examples: MismatchExample[] = [];
  let numberMismatchesBefore = 0;
  let numberMismatchesAfter = 0;
  let numberMismatchesRemoved = 0;
  let numberMismatchesAdded = 0;
  let formatOnlyPairs = 0;
  let numberFormatAmbiguities = 0;

  const addExample = (example: MismatchExample) => {
    const category = example.type[0];
    if (
      examples.filter((candidate) => candidate.type[0] === category).length < 12
    ) {
      examples.push(example);
    }
  };

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
        counts.idOnlyKeys += onlyId.length;
        for (const key of onlyId) {
          addExample({
            key,
            idValue: displayValue(id, key),
            enValue: displayValue(snapshots.get("en"), key),
            type: `a — key id hilang di ${language}`,
          });
        }
      }
      if (onlyOther.length) {
        lines.push(
          `- **${language}, key tambahan:** ${onlyOther.map((key) => `\`${key}\``).join(", ")}`,
        );
        counts.extraKeys += onlyOther.length;
        for (const key of onlyOther) {
          addExample({
            key,
            idValue: displayValue(id, key),
            enValue: displayValue(snapshots.get("en"), key),
            type: `b — key tambahan di ${language}`,
          });
        }
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
        counts.arrayLengths++;
        addExample({
          key,
          idValue: displayValue(id, key),
          enValue: displayValue(snapshots.get("en"), key),
          type: `c — panjang array berbeda (${lengths.map(([language, length]) => `${language}=${length}`).join(", ")})`,
        });
      }
    }

    for (const language of ["en", "ja"] as const) {
      const other = snapshots.get(language);
      if (!other) continue;
      const sharedValues = [...id.values.keys()].filter((key) =>
        other.values.has(key),
      );
      for (const key of sharedValues.sort()) {
        const idText = id.values.get(key) ?? "";
        const otherText = other.values.get(key) ?? "";
        const legacyIdNumbers = legacyNumbersIn(idText, "id");
        const legacyOtherNumbers = legacyNumbersIn(otherText, language);
        const idTokens = numberTokensIn(idText, "id");
        const otherTokens = numberTokensIn(otherText, language);
        const idNumbers = numbersIn(idText, "id");
        const otherNumbers = numbersIn(otherText, language);
        const legacyMismatch =
          (legacyIdNumbers.length || legacyOtherNumbers.length) &&
          legacyIdNumbers.join(",") !== legacyOtherNumbers.join(",");
        const mismatch =
          (idNumbers.length || otherNumbers.length) &&
          idNumbers.join(",") !== otherNumbers.join(",");
        if (legacyMismatch) numberMismatchesBefore++;
        if (mismatch) {
          numberMismatchesAfter++;
          counts.numbers++;
          const sameNumberToken = idTokens.join(",") === otherTokens.join(",");
          if (sameNumberToken) numberFormatAmbiguities++;
          const numericNote =
            !idNumbers.length || !otherNumbers.length
              ? `angka digit hanya ditemukan di ${idNumbers.length ? "id" : language}; kemungkinan angka lain ditulis dengan kata, perlu review`
              : sameNumberToken
                ? `token angka sama; tafsir pemisah locale berbeda: id=[${idNumbers.join(", ")}], ${language}=[${otherNumbers.join(", ")}]`
                : `beda nilai setelah normalisasi: id=[${idNumbers.join(", ")}], ${language}=[${otherNumbers.join(", ")}]`;
          lines.push(
            `- **Angka berbeda pada \`${key}\` (id vs ${language}):** id=[${idNumbers.join(", ")}], ${language}=[${otherNumbers.join(", ")}]`,
          );
          addExample({
            key,
            idValue: idText,
            enValue: displayValue(snapshots.get("en"), key),
            type: `d — angka berbeda setelah normalisasi (id vs ${language})`,
            numericNote,
          });
        } else if (legacyMismatch) {
          numberMismatchesRemoved++;
        } else if (
          idNumbers.length > 0 &&
          idNumbers.join(",") === otherNumbers.join(",") &&
          idTokens.join(",") !== otherTokens.join(",") &&
          idTokens.map((token) => token.replace(/[.,\s]/g, "")).join(",") ===
            otherTokens.map((token) => token.replace(/[.,\s]/g, "")).join(",")
        ) {
          formatOnlyPairs++;
        }
        if (!legacyMismatch && mismatch) numberMismatchesAdded++;
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
  return {
    lines,
    counts,
    examples,
    unreadable,
    numberMismatchesBefore,
    numberMismatchesAfter,
    numberMismatchesRemoved,
    numberMismatchesAdded,
    formatOnlyPairs,
    numberFormatAmbiguities,
  };
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
  const mismatchCounts: MismatchCounts = {
    idOnlyKeys: 0,
    extraKeys: 0,
    arrayLengths: 0,
    numbers: 0,
  };
  const mismatchExamples: MismatchExample[] = [];
  let numberMismatchesBefore = 0;
  let numberMismatchesAfter = 0;
  let numberMismatchesRemoved = 0;
  let numberMismatchesAdded = 0;
  let formatOnlyPairs = 0;
  let numberFormatAmbiguities = 0;

  maps.forEach((map, index) => {
    const result = analyzeMap(map, source, declarations);
    mismatchCounts.idOnlyKeys += result.counts.idOnlyKeys;
    mismatchCounts.extraKeys += result.counts.extraKeys;
    mismatchCounts.arrayLengths += result.counts.arrayLengths;
    mismatchCounts.numbers += result.counts.numbers;
    mismatchExamples.push(...result.examples);
    numberMismatchesBefore += result.numberMismatchesBefore;
    numberMismatchesAfter += result.numberMismatchesAfter;
    numberMismatchesRemoved += result.numberMismatchesRemoved;
    numberMismatchesAdded += result.numberMismatchesAdded;
    formatOnlyPairs += result.formatOnlyPairs;
    numberFormatAmbiguities += result.numberFormatAmbiguities;
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

  const discrepancyCount = Object.values(mismatchCounts).reduce(
    (total, count) => total + count,
    0,
  );
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
    mismatchCounts,
    discrepancyCount,
    mismatchExamples,
    numberMismatchesBefore,
    numberMismatchesAfter,
    numberMismatchesRemoved,
    numberMismatchesAdded,
    formatOnlyPairs,
    numberFormatAmbiguities,
    kind: text.includes("MateriTopicPage") ? "wrapper" : "halaman konten",
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
const totalMismatchCounts = allFiles.reduce<MismatchCounts>(
  (totals, file) => ({
    idOnlyKeys: totals.idOnlyKeys + file.mismatchCounts.idOnlyKeys,
    extraKeys: totals.extraKeys + file.mismatchCounts.extraKeys,
    arrayLengths: totals.arrayLengths + file.mismatchCounts.arrayLengths,
    numbers: totals.numbers + file.mismatchCounts.numbers,
  }),
  { idOnlyKeys: 0, extraKeys: 0, arrayLengths: 0, numbers: 0 },
);
const totalLegacyNumberMismatches = allFiles.reduce(
  (total, file) => total + file.numberMismatchesBefore,
  0,
);
const totalNormalizedNumberMismatches = allFiles.reduce(
  (total, file) => total + file.numberMismatchesAfter,
  0,
);
const totalRemovedNumberMismatches = allFiles.reduce(
  (total, file) => total + file.numberMismatchesRemoved,
  0,
);
const totalAddedNumberMismatches = allFiles.reduce(
  (total, file) => total + file.numberMismatchesAdded,
  0,
);
const totalFormatOnlyPairs = allFiles.reduce(
  (total, file) => total + file.formatOnlyPairs,
  0,
);
const totalNumberFormatAmbiguities = allFiles.reduce(
  (total, file) => total + file.numberFormatAmbiguities,
  0,
);

function selectMismatchExamples(file: FileAnalysis): MismatchExample[] {
  const selected: MismatchExample[] = [];
  for (const category of ["a", "b", "c", "d"]) {
    const example = file.mismatchExamples.find(
      (candidate) =>
        candidate.type.startsWith(category) &&
        !selected.some(
          (existing) =>
            existing.key === candidate.key && existing.type === candidate.type,
        ),
    );
    if (example) selected.push(example);
  }
  for (const example of file.mismatchExamples) {
    if (selected.length >= 5) break;
    if (
      !selected.some(
        (existing) =>
          existing.key === example.key && existing.type === example.type,
      )
    ) {
      selected.push(example);
    }
  }
  return selected.slice(0, 5);
}

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
  `- Normalisasi angka: ${totalLegacyNumberMismatches} mismatch dengan ekstraktor lama; ${totalNormalizedNumberMismatches} sesudah perbaikan; ${totalRemovedNumberMismatches} mismatch lama tidak lagi terdeteksi; ${totalAddedNumberMismatches} mismatch baru terungkap; ${totalFormatOnlyPairs} pasangan angka yang hanya berbeda format dinormalisasi sebagai nilai sama dan tidak dihitung sebagai mismatch; ${totalNumberFormatAmbiguities} pasangan token sama yang ditafsirkan berbeda menurut locale perlu review format.`,
  "- Label jenjang seperti Kelas 7 / Grade 7 / 中学1年 diabaikan pada perbandingan angka karena penomoran jenjang berbeda menurut bahasa.",
  "",
  "### 10 file dengan ketidaksesuaian terbanyak",
  "",
  "| File | Total | (a) Key id hilang | (b) Key ekstra | (c) Panjang array | (d) Angka |",
  "| --- | ---: | ---: | ---: | ---: | ---: |",
  ...(topDiscrepancies.length
    ? topDiscrepancies.map(
        (file) =>
          `| [\`${markdownPath(file.path)}\`](${markdownPath(file.path)}) | ${file.discrepancyCount} | ${file.mismatchCounts.idOnlyKeys} | ${file.mismatchCounts.extraKeys} | ${file.mismatchCounts.arrayLengths} | ${file.mismatchCounts.numbers} |`,
      )
    : ["| Tidak ada ketidaksesuaian terdeteksi | 0 | 0 | 0 | 0 | 0 |"]),
  "",
  "### Jumlah ketidaksesuaian per jenis (seluruh file)",
  "",
  "| Jenis | Jumlah |",
  "| --- | ---: |",
  `| (a) Key ada di id tetapi tidak ada di locale lain | ${totalMismatchCounts.idOnlyKeys} |`,
  `| (b) Key ada di locale lain tetapi tidak ada di id | ${totalMismatchCounts.extraKeys} |`,
  `| (c) Panjang array berbeda | ${totalMismatchCounts.arrayLengths} |`,
  `| (d) Angka berbeda setelah normalisasi | ${totalMismatchCounts.numbers} |`,
  "",
  "### Contoh perbaikan ekstraksi angka",
  "",
  "| Teks | Bahasa | Ekstraktor lama | Setelah perbaikan |",
  "| --- | --- | --- | --- |",
  ...numberNormalizationExamples.map(
    ([text, language]) =>
      `| \`${compactValue(text)}\` | ${language} | [${legacyNumbersIn(text, language).join(", ") || "—"}] | [${numbersIn(text, language).join(", ") || "—"}] |`,
  ),
  "",
  "False positive yang terkonfirmasi: ekstraktor lama memecah `4,\\underline{6}38` menjadi tiga angka (`4`, `6`, `38`), bukan satu desimal (`4.638`); notasi KaTeX `1\\,234{,}5` juga terpecah menjadi tiga angka. Perbaikan membuka markup KaTeX, membaca awalan mata wang `Rp`, menangani akhiran ordinal Inggris, dan mengecualikan angka label jenjang lintas bahasa.",
  "",
  "### Contoh konkret untuk 5 file teratas",
  "",
  "Nilai dipendekkan bila terlalu panjang. Untuk kategori (d), perbedaan yang ditampilkan adalah nilai numerik yang tetap berbeda setelah normalisasi; pasangan yang hanya berbeda format tidak dihitung sebagai mismatch.",
  "",
  ...topDiscrepancies.slice(0, 5).flatMap((file) => {
    const examples = selectMismatchExamples(file);
    return [
      `#### [\`${markdownPath(file.path)}\`](${markdownPath(file.path)})`,
      "",
      "| Key | Nilai id | Nilai en | Jenis | Pemeriksaan angka |",
      "| --- | --- | --- | --- | --- |",
      ...examples.map(
        (example) =>
          `| \`${compactValue(example.key)}\` | ${compactValue(example.idValue)} | ${compactValue(example.enValue)} | ${example.type} | ${example.numericNote ?? "—"} |`,
      ),
      "",
    ];
  }),
  "### File tanpa terjemahan yang terdeteksi",
  "",
  "| File | Klasifikasi |",
  "| --- | --- |",
  ...allFiles
    .filter((file) => !file.hasTranslation)
    .map(
      (file) =>
        `| [\`${markdownPath(file.path)}\`](${markdownPath(file.path)}) | ${file.kind} |`,
    ),
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
