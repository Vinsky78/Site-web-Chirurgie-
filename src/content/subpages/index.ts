import { cache } from "react";
import { isLocale, type Locale } from "@/i18n/routing";
import { SUBPAGE_KINDS, type InterventionId, type InterventionSubpage, type SubpageKind } from "../types";
import { contentSource } from "../interventions";
import { SUBPAGES_FROM_FILES } from "./files";

export { SUBPAGE_SLUGS, subpageKindFromSlug } from "./slugs";

const loadLocale = cache(async (locale: Locale): Promise<InterventionSubpage[]> => {
  if (!isLocale(locale)) return [];
  if (contentSource() === "files") return SUBPAGES_FROM_FILES[locale];
  const { findSubpagesInCms } = await import("@/cms/queries");
  return findSubpagesInCms(locale);
});

/** Sous-pages d'un dossier, dans l'ordre éditorial (risques, prix, convalescence…). */
export async function getSubpages(locale: Locale, interventionId: InterventionId): Promise<InterventionSubpage[]> {
  const items = (await loadLocale(locale)).filter((item) => item.interventionId === interventionId);
  return items.sort((a, b) => SUBPAGE_KINDS.indexOf(a.kind) - SUBPAGE_KINDS.indexOf(b.kind));
}

export async function getSubpage(
  locale: Locale,
  interventionId: InterventionId,
  kind: SubpageKind,
): Promise<InterventionSubpage | undefined> {
  return (await loadLocale(locale)).find((item) => item.interventionId === interventionId && item.kind === kind);
}
