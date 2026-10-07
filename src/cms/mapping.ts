import type { Locale } from "@/i18n/routing";
import type { Intervention, MedicalReview } from "@/content/types";
import type { Intervention as CmsIntervention } from "@/payload-types";

type Texts = { text: string }[] | null | undefined;

const texts = (rows: Texts): string[] => (rows ?? []).map((row) => row.text);
const rows = (values: string[]) => values.map((text) => ({ text }));

function reviewFromCms(review: CmsIntervention["medicalReview"] | null | undefined): MedicalReview {
  if (review?.status === "reviewed" && review.reviewer && review.qualification && review.reviewedAt) {
    return {
      status: "reviewed",
      reviewer: review.reviewer,
      qualification: review.qualification,
      reviewedAt: review.reviewedAt.slice(0, 10),
    };
  }
  return { status: "draft" };
}

/**
 * Convertit une fiche du CMS (lue dans une locale, sans repli) vers le type
 * utilisé par les pages. Renvoie undefined si la fiche n'existe pas dans
 * cette locale.
 */
export function interventionFromCms(doc: CmsIntervention, locale: Locale): Intervention | undefined {
  if (!doc.slug || !doc.title || !doc.summary || !doc.procedure) return undefined;
  return {
    id: doc.interventionId,
    locale,
    slug: doc.slug,
    category: doc.category,
    title: doc.title,
    summary: doc.summary,
    description: texts(doc.description),
    indications: texts(doc.indications),
    contraindications: texts(doc.contraindications),
    risks: (doc.risks ?? []).map(({ name, detail }) => ({ name, detail })),
    procedure: {
      anaesthesia: doc.procedure.anaesthesia,
      duration: doc.procedure.duration,
      hospitalStay: doc.procedure.hospitalStay,
    },
    recovery: texts(doc.recovery),
    alternatives: texts(doc.alternatives),
    faq: (doc.faq ?? []).map(({ question, answer }) => ({ question, answer })),
    medicalReview: reviewFromCms(doc.medicalReview),
    updatedAt: doc.updatedAt.slice(0, 10),
  };
}

/**
 * Données CMS d'une fiche pour une locale (amorçage depuis les fichiers).
 * Le statut de relecture n'est jamais importé : une fiche arrive toujours en
 * brouillon et doit être validée dans le CMS par un relecteur médical.
 */
export function interventionToCms(item: Intervention) {
  return {
    interventionId: item.id,
    category: item.category,
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    description: rows(item.description),
    indications: rows(item.indications),
    contraindications: rows(item.contraindications),
    risks: item.risks.map(({ name, detail }) => ({ name, detail })),
    procedure: { ...item.procedure },
    recovery: rows(item.recovery),
    alternatives: rows(item.alternatives),
    faq: item.faq.map(({ question, answer }) => ({ question, answer })),
    medicalReview: { status: "draft" as const },
  } satisfies Omit<CmsIntervention, "id" | "createdAt" | "updatedAt">;
}
