import type { Locale } from "@/i18n/routing";
import { CATEGORY_IDS, type CategoryId, type InterventionId } from "./types";

/**
 * Taxonomie (Phase 2) : catégorie → intervention, et stratégie de mots-clés.
 * Les mots-clés servent à rédiger les titres et textes ; ils ne sont pas
 * injectés dans une balise meta keywords (ignorée par les moteurs).
 */
export type SearchIntent = "information" | "comparison" | "practical";

export interface KeywordPlan {
  primary: string;
  secondary: string[];
  intent: SearchIntent;
}

export const KEYWORDS: Partial<Record<InterventionId, Record<Locale, KeywordPlan>>> = {
  rhinoplasty: {
    fr: {
      primary: "rhinoplastie",
      secondary: ["rhinoplastie risques", "rhinoplastie convalescence", "rhinoplastie délai de réflexion"],
      intent: "information",
    },
    "en-gb": {
      primary: "rhinoplasty",
      secondary: ["rhinoplasty risks", "rhinoplasty recovery time", "nose job UK regulation"],
      intent: "information",
    },
  },
  abdominoplasty: {
    fr: {
      primary: "abdominoplastie",
      secondary: ["abdominoplastie risques", "abdominoplastie cicatrice", "abdominoplastie après grossesse"],
      intent: "information",
    },
    "en-gb": {
      primary: "tummy tuck",
      secondary: ["tummy tuck risks", "tummy tuck recovery", "abdominoplasty after pregnancy"],
      intent: "information",
    },
  },
  "breast-augmentation": {
    fr: {
      primary: "augmentation mammaire",
      secondary: ["augmentation mammaire prothèses", "augmentation mammaire risques", "augmentation mammaire convalescence"],
      intent: "information",
    },
    "en-gb": {
      primary: "breast augmentation",
      secondary: ["breast implants risks", "breast augmentation recovery", "breast implant safety UK"],
      intent: "information",
    },
  },
};

export function isCategory(value: string): value is CategoryId {
  return (CATEGORY_IDS as readonly string[]).includes(value);
}

/** Arborescence du site : chemins (après la locale) à publier, hors fiches. */
export function staticPaths(): string[] {
  return ["", "/interventions", "/chirurgiens", ...CATEGORY_IDS.map((c) => `/interventions/categories/${c}`)];
}
