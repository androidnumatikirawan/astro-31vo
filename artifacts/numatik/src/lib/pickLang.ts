import type { Language } from "@/contexts/LanguageContext";

type LanguageMap = Partial<Record<Language, unknown>>;
export type LanguageMapValue<T extends LanguageMap> = Exclude<
  T[Extract<keyof T, Language>],
  undefined
>;

const LANGUAGE_FALLBACKS: Record<Language, readonly Language[]> = {
  id: ["id"],
  en: ["en", "id"],
  "ms-MY": ["ms-MY", "id", "en"],
  ja: ["ja", "id"],
  "zh-CN": ["zh-CN", "en", "id"],
  ru: ["ru", "en", "id"],
};

const LANGUAGES = ["id", "en", "ms-MY", "ja", "zh-CN", "ru"] as const;

const isLanguage = (value: string): value is Language =>
  (LANGUAGES as readonly string[]).includes(value);

export const normalizeLanguage = (
  value: string | null | undefined,
): Language | undefined => {
  if (value === "ms") return "ms-MY";
  if (value === "zh") return "zh-CN";
  return value && isLanguage(value) ? value : undefined;
};

export const resolveLanguage = (
  urlLanguage: string | null,
  savedLanguage: string | null,
): Language => {
  if (urlLanguage !== null) return normalizeLanguage(urlLanguage) ?? "id";
  return normalizeLanguage(savedLanguage) ?? "id";
};

export const pickLang = <T extends LanguageMap>(
  map: T,
  language: Language,
): LanguageMapValue<T> => {
  for (const candidate of LANGUAGE_FALLBACKS[language]) {
    const translation = map[candidate];
    if (translation !== undefined) {
      return translation as LanguageMapValue<T>;
    }
  }

  throw new Error(`No translation available for "${language}" or its fallback languages.`);
};
