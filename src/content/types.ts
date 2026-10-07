import type { Locale } from "@/i18n/routing";

export const INTERVENTION_IDS = ["rhinoplasty", "abdominoplasty", "breast-augmentation", "blepharoplasty", "facelift", "otoplasty", "liposuction", "breast-reduction", "mastopexy", "gynecomastia", "hair-transplant", "botulinum-toxin", "hyaluronic-fillers", "brachioplasty", "buttock-augmentation", "genioplasty", "breast-implant-removal", "thigh-lift"] as const;
export type InterventionId = (typeof INTERVENTION_IDS)[number];

export const CATEGORY_IDS = ["face", "body", "breast", "hair", "injectables"] as const;
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
