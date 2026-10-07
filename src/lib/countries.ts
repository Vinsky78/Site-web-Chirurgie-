/**
 * Règles de conformité par pays (Phase 1 – audit juridique).
 *
 * Ces règles pilotent l'affichage : une fonctionnalité interdite dans un pays
 * est désactivée dans le code, pas seulement dans la charte éditoriale.
 * Source : rapport Phase 1. À faire valider par un avocat local avant chaque
 * ouverture de marché (champ `legalReview`).
 */

export const COUNTRY_CODES = ["FR", "GB", "DE", "NL", "BE", "CH", "ES", "IT"] as const;
export type CountryCode = (typeof COUNTRY_CODES)[number];

/** Pays dans lesquels la plateforme accepte des demandes aujourd'hui. */
export const ACTIVE_COUNTRIES = ["FR"] as const satisfies readonly CountryCode[];
export type ActiveCountry = (typeof ACTIVE_COUNTRIES)[number];

export interface CountryRules {
  code: CountryCode;
  /** Publicité pour la chirurgie esthétique autorisée (sous conditions). */
  advertisingAllowed: boolean;
  /** Photos avant/après autorisées sur la plateforme. */
  beforeAfterAllowed: boolean;
  /** Témoignages de patients autorisés. */
  testimonialsAllowed: boolean;
  /** Prix affichés par praticien autorisés (sinon fourchettes éditoriales uniquement). */
  surgeonPricesAllowed: boolean;
  /** Délai de réflexion légal en jours entre devis et intervention, ou null si non légal. */
  legalReflectionDays: number | null;
  /** Délai recommandé par les instances professionnelles, si pas de délai légal. */
  recommendedReflectionDays: number | null;
  /** Devis écrit obligatoire avant l'intervention. */
  writtenQuoteMandatory: boolean;
  /** Registre officiel utilisé pour vérifier les titres des chirurgiens. */
  verificationRegistry: string;
  /** Statut de la validation juridique locale. */
  legalReview: "pending" | "validated";
}

export const COUNTRY_RULES: Record<CountryCode, CountryRules> = {
  FR: {
    code: "FR",
    advertisingAllowed: false,
    beforeAfterAllowed: false,
    testimonialsAllowed: false,
    surgeonPricesAllowed: false,
    legalReflectionDays: 15,
    recommendedReflectionDays: null,
    writtenQuoteMandatory: true,
    verificationRegistry: "RPPS / Conseil national de l'Ordre des médecins",
    legalReview: "pending",
  },
  GB: {
    code: "GB",
    advertisingAllowed: true,
    beforeAfterAllowed: true,
    testimonialsAllowed: true,
    surgeonPricesAllowed: true,
    legalReflectionDays: null,
    recommendedReflectionDays: 14,
    writtenQuoteMandatory: false,
    verificationRegistry: "GMC Specialist Register + CQC",
    legalReview: "pending",
  },
  DE: {
    code: "DE",
    advertisingAllowed: true,
    beforeAfterAllowed: false,
    testimonialsAllowed: false,
    surgeonPricesAllowed: true,
    legalReflectionDays: null,
    recommendedReflectionDays: 14,
    writtenQuoteMandatory: false,
    verificationRegistry: "Landesärztekammer",
    legalReview: "pending",
  },
  NL: {
    code: "NL",
    advertisingAllowed: true,
    beforeAfterAllowed: false,
    testimonialsAllowed: false,
    surgeonPricesAllowed: true,
    legalReflectionDays: null,
    recommendedReflectionDays: 14,
    writtenQuoteMandatory: false,
    verificationRegistry: "BIG-register",
    legalReview: "pending",
  },
  BE: {
    code: "BE",
    advertisingAllowed: false,
    beforeAfterAllowed: false,
    testimonialsAllowed: false,
    surgeonPricesAllowed: false,
    legalReflectionDays: 15,
    recommendedReflectionDays: null,
    writtenQuoteMandatory: true,
    verificationRegistry: "INAMI / Ordre des médecins",
    legalReview: "pending",
  },
  CH: {
    code: "CH",
    advertisingAllowed: true,
    beforeAfterAllowed: false,
    testimonialsAllowed: false,
    surgeonPricesAllowed: true,
    legalReflectionDays: null,
    recommendedReflectionDays: 14,
    writtenQuoteMandatory: false,
    verificationRegistry: "MedReg + titre FMH",
    legalReview: "pending",
  },
  ES: {
    code: "ES",
    advertisingAllowed: true,
    beforeAfterAllowed: false,
    testimonialsAllowed: false,
    surgeonPricesAllowed: true,
    legalReflectionDays: null,
    recommendedReflectionDays: 14,
    writtenQuoteMandatory: false,
    verificationRegistry: "Colegio de Médicos",
    legalReview: "pending",
  },
  IT: {
    code: "IT",
    advertisingAllowed: true,
    beforeAfterAllowed: false,
    testimonialsAllowed: false,
    surgeonPricesAllowed: true,
    legalReflectionDays: null,
    recommendedReflectionDays: 14,
    writtenQuoteMandatory: false,
    verificationRegistry: "Albo dell'Ordine dei Medici (FNOMCeO)",
    legalReview: "pending",
  },
};

/**
 * Les règles les plus strictes l'emportent : un contenu visible depuis plusieurs
 * pays n'affiche une fonctionnalité que si tous ces pays l'autorisent.
 */
export function strictestRules(codes: readonly CountryCode[]): Pick<
  CountryRules,
  "beforeAfterAllowed" | "testimonialsAllowed" | "surgeonPricesAllowed" | "advertisingAllowed"
> {
  const rules = codes.map((code) => COUNTRY_RULES[code]);
  return {
    advertisingAllowed: rules.every((r) => r.advertisingAllowed),
    beforeAfterAllowed: rules.every((r) => r.beforeAfterAllowed),
    testimonialsAllowed: rules.every((r) => r.testimonialsAllowed),
    surgeonPricesAllowed: rules.every((r) => r.surgeonPricesAllowed),
  };
}

/** Pays de référence de chaque locale publiée. */
export const LOCALE_COUNTRY = {
  fr: "FR",
  "en-gb": "GB",
} as const satisfies Record<string, CountryCode>;
