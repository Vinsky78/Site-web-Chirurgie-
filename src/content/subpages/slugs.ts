import type { Locale } from "@/i18n/routing";
import { SUBPAGE_KINDS, type SubpageKind } from "../types";

/** Segment d'URL de chaque sous-page, par marché : /fr/interventions/rhinoplastie/prix. */
export const SUBPAGE_SLUGS: Record<Locale, Record<SubpageKind, string>> = {
  fr: {
    risks: "risques",
    cost: "prix",
    recovery: "convalescence",
    decision: "avant-de-se-decider",
    alternatives: "alternatives",
  },
  "en-gb": {
    risks: "risks",
    cost: "cost",
    recovery: "recovery",
    decision: "before-you-decide",
    alternatives: "alternatives",
  },
};

export function subpageKindFromSlug(locale: Locale, slug: string): SubpageKind | undefined {
  return SUBPAGE_KINDS.find((kind) => SUBPAGE_SLUGS[locale][kind] === slug);
}
