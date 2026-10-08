import type { LeadInput } from "./schema";

/**
 * Valeurs et règles du formulaire de demande, sans dépendance à Zod : le
 * formulaire les importe directement, et ne charge le schéma de validation
 * qu'après l'affichage de la page (environ 35 Ko de moins au chargement).
 */

export const TIMEFRAMES = ["lt3m", "3to6m", "6to12m", "gt12m", "unknown"] as const;
export const BUDGETS = ["lt3k", "3to6k", "6to10k", "gt10k", "unknown"] as const;
export const YES_NO = ["yes", "no"] as const;
export const SMOKER = ["yes", "no", "stopped"] as const;

export const MIN_AGE = 18;

/** Le patient choisit lui-même de 1 à 3 chirurgiens (Phase 1) : la demande n'est transmise qu'à eux. */
export const MAX_SURGEONS = 3;

/** Champs validés à chaque étape du formulaire multi-étapes. */
export const STEP_FIELDS = {
  project: ["interventionId", "country", "city", "timeframe", "budget"],
  health: ["smoker", "previousSurgerySameArea", "pregnancyPlanned"],
  surgeons: ["surgeons"],
  contact: ["firstName", "email", "phone", "birthYear", "isAdult", "consentHealthData", "consentNewsletter"],
} as const satisfies Record<string, readonly (keyof LeadInput)[]>;

export type StepId = keyof typeof STEP_FIELDS;

/** Interventions pour lesquelles un projet de grossesse change l'indication. */
export const PREGNANCY_RELEVANT = ["abdominoplasty", "breast-augmentation"] as const;

export function isPregnancyRelevant(interventionId: string | undefined): boolean {
  return (PREGNANCY_RELEVANT as readonly string[]).includes(interventionId ?? "");
}

/** Durée minimale de saisie (ms) en dessous de laquelle la soumission est considérée comme automatisée. */
export const MIN_FILL_DURATION_MS = 4000;
