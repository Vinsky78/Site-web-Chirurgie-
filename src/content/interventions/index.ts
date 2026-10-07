import type { Locale } from "@/i18n/routing";
import type { Intervention, InterventionId } from "../types";
import { interventionsFr } from "./fr";
import { interventionsEnGb } from "./en-gb";

/**
 * Source de contenu provisoire, en fichiers typés. Elle sera remplacée par le
 * CMS headless (Phase 4) sans changer cette interface.
 */
const byLocale: Record<Locale, Intervention[]> = {
  fr: interventionsFr,
  "en-gb": interventionsEnGb,
};

export function getInterventions(locale: Locale): Intervention[] {
  return byLocale[locale];
}

export function getInterventionBySlug(locale: Locale, slug: string): Intervention | undefined {
  return byLocale[locale].find((item) => item.slug === slug);
}

export function getInterventionById(locale: Locale, id: InterventionId): Intervention | undefined {
  return byLocale[locale].find((item) => item.id === id);
}

/** Slugs de la même intervention dans chaque locale, pour hreflang et le sélecteur de langue. */
export function getAlternateSlugs(id: InterventionId): Partial<Record<Locale, string>> {
  const result: Partial<Record<Locale, string>> = {};
  for (const [locale, items] of Object.entries(byLocale) as [Locale, Intervention[]][]) {
    const match = items.find((item) => item.id === id);
    if (match) result[locale] = match.slug;
  }
  return result;
}

export function isIndexable(intervention: Intervention): boolean {
  return intervention.medicalReview.status === "reviewed";
}
