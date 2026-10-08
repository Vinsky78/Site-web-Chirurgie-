import { cache } from "react";
import { isLocale, routing, type Locale } from "@/i18n/routing";
import type { GlossaryTerm } from "../types";
import { contentSource } from "../interventions";
import { GLOSSARY_FROM_FILES } from "./files";

const loadLocale = cache(async (locale: Locale): Promise<GlossaryTerm[]> => {
  if (!isLocale(locale)) return [];
  const items =
    contentSource() === "files"
      ? GLOSSARY_FROM_FILES[locale]
      : await (await import("@/cms/queries")).findGlossaryInCms(locale);
  // Ordre alphabétique de la langue du marché (« é » classé avec « e »).
  return [...items].sort((a, b) => a.term.localeCompare(b.term, locale, { sensitivity: "base" }));
});

export async function getGlossary(locale: Locale): Promise<GlossaryTerm[]> {
  return loadLocale(locale);
}

export async function getTermBySlug(locale: Locale, slug: string): Promise<GlossaryTerm | undefined> {
  return (await loadLocale(locale)).find((item) => item.slug === slug);
}

export async function getTermAlternateSlugs(id: string): Promise<Partial<Record<Locale, string>>> {
  const result: Partial<Record<Locale, string>> = {};
  for (const locale of routing.locales) {
    const match = (await loadLocale(locale)).find((item) => item.id === id);
    if (match) result[locale] = match.slug;
  }
  return result;
}

/** Première lettre pour l'index alphabétique, sans accent ni ligature (« É » → « E », « Œ » → « O »). */
export function initialOf(term: string): string {
  const base = term.normalize("NFD").replace(/\p{M}/gu, "").charAt(0).toUpperCase();
  return ({ Œ: "O", Æ: "A" } as Record<string, string>)[base] ?? base;
}
