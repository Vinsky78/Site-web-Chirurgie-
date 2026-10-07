import { cache } from "react";
import { routing, type Locale } from "@/i18n/routing";
import { GUIDE_IDS, type Guide, type GuideId, type InterventionId } from "../types";
import { contentSource } from "../interventions";
import { GUIDES_FROM_FILES } from "./files";

const loadLocale = cache(async (locale: Locale): Promise<Guide[]> => {
  const items =
    contentSource() === "files"
      ? GUIDES_FROM_FILES[locale]
      : await (await import("@/cms/queries")).findGuidesInCms(locale);
  return [...items].sort((a, b) => GUIDE_IDS.indexOf(a.id) - GUIDE_IDS.indexOf(b.id));
});

export async function getGuides(locale: Locale): Promise<Guide[]> {
  return loadLocale(locale);
}

export async function getGuideBySlug(locale: Locale, slug: string): Promise<Guide | undefined> {
  return (await loadLocale(locale)).find((item) => item.slug === slug);
}

/** Guides qui citent une intervention (maillage depuis la fiche, deux au plus). */
export async function getGuidesFor(locale: Locale, interventionId: InterventionId, limit = 2): Promise<Guide[]> {
  return (await loadLocale(locale)).filter((item) => item.interventions.includes(interventionId)).slice(0, limit);
}

export async function getGuideAlternateSlugs(id: GuideId): Promise<Partial<Record<Locale, string>>> {
  const result: Partial<Record<Locale, string>> = {};
  for (const locale of routing.locales) {
    const match = (await loadLocale(locale)).find((item) => item.id === id);
    if (match) result[locale] = match.slug;
  }
  return result;
}
