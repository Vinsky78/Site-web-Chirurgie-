import { cache } from "react";
import { isLocale, routing, type Locale } from "@/i18n/routing";
import type { Intervention, InterventionId, MedicalReview } from "../types";
import { INTERVENTIONS_FROM_FILES } from "./files";

/**
 * Accès aux fiches d'intervention, quelle que soit la source :
 * - CONTENT_SOURCE=cms : CMS Payload (production) ;
 * - sinon : fichiers typés de src/content (développement, CI).
 * Les pages ne dépendent que de ces fonctions.
 */
export function contentSource(env: Record<string, string | undefined> = process.env): "cms" | "files" {
  return env.CONTENT_SOURCE === "cms" ? "cms" : "files";
}

/** Une seule lecture par locale et par requête, même si plusieurs composants la demandent. */
const loadLocale = cache(async (locale: Locale): Promise<Intervention[]> => {
  // Segment inconnu (ex. /llms.txt pris pour une locale) : aucun contenu, la mise en page renvoie une 404.
  if (!isLocale(locale)) return [];
  if (contentSource() === "files") return INTERVENTIONS_FROM_FILES[locale];
  const { findInterventionsInCms } = await import("@/cms/queries");
  return findInterventionsInCms(locale);
});

export async function getInterventions(locale: Locale): Promise<Intervention[]> {
  return loadLocale(locale);
}

export async function getInterventionBySlug(locale: Locale, slug: string): Promise<Intervention | undefined> {
  return (await loadLocale(locale)).find((item) => item.slug === slug);
}

export async function getInterventionById(locale: Locale, id: InterventionId): Promise<Intervention | undefined> {
  return (await loadLocale(locale)).find((item) => item.id === id);
}

/** Slugs de la même intervention dans chaque locale, pour hreflang et le sélecteur de langue. */
export async function getAlternateSlugs(
  id: InterventionId,
  locales: readonly Locale[] = routing.locales,
): Promise<Partial<Record<Locale, string>>> {
  const result: Partial<Record<Locale, string>> = {};
  for (const locale of locales) {
    const match = await getInterventionById(locale, id);
    if (match) result[locale] = match.slug;
  }
  return result;
}

/** Un contenu (fiche, sous-page, guide, entrée de lexique) n'est indexé qu'une fois relu. */
export function isIndexable(content: { medicalReview: MedicalReview }): boolean {
  return content.medicalReview.status === "reviewed";
}
