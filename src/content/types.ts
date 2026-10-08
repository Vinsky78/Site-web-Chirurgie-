import type { Locale } from "@/i18n/routing";

export const INTERVENTION_IDS = ["rhinoplasty", "abdominoplasty", "breast-augmentation"] as const;
export type InterventionId = (typeof INTERVENTION_IDS)[number];

export const CATEGORY_IDS = ["face", "body", "breast"] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

/**
 * Statut de relecture médicale. Un contenu en brouillon est affiché avec un
 * bandeau et exclu de l'indexation (noindex) tant qu'un chirurgien qualifié ne
 * l'a pas relu.
 */
export type MedicalReview =
  | { status: "draft" }
  | { status: "reviewed"; reviewer: string; qualification: string; reviewedAt: string };

export interface Risk {
  name: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Intervention {
  id: InterventionId;
  locale: Locale;
  /** Segment d'URL localisé. */
  slug: string;
  category: CategoryId;
  title: string;
  /** Phrase d'accroche factuelle, utilisée aussi comme meta description. */
  summary: string;
  description: string[];
  indications: string[];
  contraindications: string[];
  /** Section obligatoire : aucun contenu publié sans risques. */
  risks: Risk[];
  procedure: {
    anaesthesia: string;
    duration: string;
    hospitalStay: string;
  };
  recovery: string[];
  alternatives: string[];
  faq: FaqItem[];
  medicalReview: MedicalReview;
  /** Date de dernière mise à jour éditoriale (ISO 8601). */
  updatedAt: string;
}

/** Une source citée en bas de page (recommandation officielle, société savante, article). */
export interface Source {
  label: string;
  url?: string;
}

/** Section de texte simple : intertitre, paragraphes et, au besoin, une liste à puces. */
export interface TextSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

/**
 * Sous-pages d'un dossier d'intervention (Phase 2) : chacune répond à une
 * intention de recherche distincte.
 */
export const SUBPAGE_KINDS = ["risks", "cost", "recovery", "decision", "alternatives"] as const;
export type SubpageKind = (typeof SUBPAGE_KINDS)[number];

/** Gabarit « sous-page d'intervention » : réponse en tête, détail, sources, lien vers le pilier. */
export interface InterventionSubpage {
  interventionId: InterventionId;
  kind: SubpageKind;
  locale: Locale;
  title: string;
  /** Meta description, 160 caractères au plus. */
  summary: string;
  /** La réponse directe à la question, affichée en tête de page. */
  answer: string;
  sections: TextSection[];
  sources: Source[];
  medicalReview: MedicalReview;
  updatedAt: string;
}

export const GUIDE_IDS = [
  "choosing-a-surgeon",
  "surgery-abroad",
  "preparing-consultation",
  "quote-and-cooling-off",
  "warning-signs-after-surgery",
  "right-time",
] as const;
export type GuideId = (typeof GUIDE_IDS)[number];

/** Gabarit « guide transverse » : réponse, étapes, signaux d'alerte, ressources officielles. */
export interface Guide {
  id: GuideId;
  locale: Locale;
  slug: string;
  title: string;
  summary: string;
  answer: string;
  steps: TextSection[];
  warningSigns: string[];
  /** Ressources officielles du marché (autorités, registres, sociétés savantes). */
  resources: Source[];
  /** Fiches citées par le guide (maillage). */
  interventions: InterventionId[];
  medicalReview: MedicalReview;
  updatedAt: string;
}

/** Gabarit « entrée de lexique » : définition en deux phrases et liens vers les fiches concernées. */
export interface GlossaryTerm {
  /** Identifiant stable, commun aux marchés (ex. "seroma"). */
  id: string;
  locale: Locale;
  slug: string;
  term: string;
  /** Autres formes du terme, utilisées pour retrouver les fiches qui l'emploient. */
  aliases: string[];
  /** Définition en deux phrases au plus. */
  definition: string;
  detail: string[];
  medicalReview: MedicalReview;
  updatedAt: string;
}
