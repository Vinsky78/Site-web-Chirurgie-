import type { Locale } from "@/i18n/routing";
import type {
  GlossaryTerm,
  Guide,
  Intervention,
  InterventionSubpage,
  MedicalReview,
  Source,
  TextSection,
} from "@/content/types";
import type { Surgeon } from "@/content/surgeons/types";
import type {
  GlossaryTerm as CmsGlossaryTerm,
  Guide as CmsGuide,
  Intervention as CmsIntervention,
  InterventionSubpage as CmsSubpage,
  Surgeon as CmsSurgeon,
} from "@/payload-types";

type Texts = { text: string }[] | null | undefined;

const texts = (rows: Texts): string[] => (rows ?? []).map((row) => row.text);
const rows = (values: string[]) => values.map((text) => ({ text }));

type CmsSection = { heading: string; paragraphs?: { text: string }[] | null; bullets?: { text: string }[] | null };

function sectionsFromCms(sections: CmsSection[] | null | undefined): TextSection[] {
  return (sections ?? []).map(({ heading, paragraphs, bullets }) => ({
    heading,
    paragraphs: texts(paragraphs),
    ...(bullets && bullets.length > 0 && { bullets: texts(bullets) }),
  }));
}

const sectionsToCms = (sections: TextSection[]) =>
  sections.map(({ heading, paragraphs, bullets }) => ({
    heading,
    paragraphs: rows(paragraphs),
    bullets: rows(bullets ?? []),
  }));

const sourcesFromCms = (sources: { label: string; url?: string | null }[] | null | undefined): Source[] =>
  (sources ?? []).map(({ label, url }) => (url ? { label, url } : { label }));

const sourcesToCms = (sources: Source[]) => sources.map(({ label, url }) => ({ label, url: url ?? null }));

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

/** Sous-page du CMS vers les pages ; undefined si elle n'existe pas dans cette locale. */
export function subpageFromCms(doc: CmsSubpage, locale: Locale): InterventionSubpage | undefined {
  if (!doc.title || !doc.summary || !doc.answer) return undefined;
  return {
    interventionId: doc.interventionId,
    kind: doc.kind,
    locale,
    title: doc.title,
    summary: doc.summary,
    answer: doc.answer,
    sections: sectionsFromCms(doc.sections),
    sources: sourcesFromCms(doc.sources),
    medicalReview: reviewFromCms(doc.medicalReview),
    updatedAt: doc.updatedAt.slice(0, 10),
  };
}

export function subpageToCms(item: InterventionSubpage) {
  return {
    interventionId: item.interventionId,
    kind: item.kind,
    title: item.title,
    summary: item.summary,
    answer: item.answer,
    sections: sectionsToCms(item.sections),
    sources: sourcesToCms(item.sources),
    medicalReview: { status: "draft" as const },
  } satisfies Omit<CmsSubpage, "id" | "createdAt" | "updatedAt">;
}

export function guideFromCms(doc: CmsGuide, locale: Locale): Guide | undefined {
  if (!doc.slug || !doc.title || !doc.summary || !doc.answer) return undefined;
  return {
    id: doc.guideId,
    locale,
    slug: doc.slug,
    title: doc.title,
    summary: doc.summary,
    answer: doc.answer,
    steps: sectionsFromCms(doc.steps),
    warningSigns: texts(doc.warningSigns),
    resources: sourcesFromCms(doc.resources),
    interventions: doc.interventions ?? [],
    medicalReview: reviewFromCms(doc.medicalReview),
    updatedAt: doc.updatedAt.slice(0, 10),
  };
}

export function guideToCms(item: Guide) {
  return {
    guideId: item.id,
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    answer: item.answer,
    steps: sectionsToCms(item.steps),
    warningSigns: rows(item.warningSigns),
    resources: sourcesToCms(item.resources),
    interventions: [...item.interventions],
    medicalReview: { status: "draft" as const },
  } satisfies Omit<CmsGuide, "id" | "createdAt" | "updatedAt">;
}

export function glossaryTermFromCms(doc: CmsGlossaryTerm, locale: Locale): GlossaryTerm | undefined {
  if (!doc.slug || !doc.term || !doc.definition) return undefined;
  return {
    id: doc.termId,
    locale,
    slug: doc.slug,
    term: doc.term,
    aliases: texts(doc.aliases),
    definition: doc.definition,
    detail: texts(doc.detail),
    medicalReview: reviewFromCms(doc.medicalReview),
    updatedAt: doc.updatedAt.slice(0, 10),
  };
}

export function glossaryTermToCms(item: GlossaryTerm) {
  return {
    termId: item.id,
    slug: item.slug,
    term: item.term,
    aliases: rows(item.aliases),
    definition: item.definition,
    detail: rows(item.detail),
    medicalReview: { status: "draft" as const },
  } satisfies Omit<CmsGlossaryTerm, "id" | "createdAt" | "updatedAt">;
}

/** Convertit un profil du CMS vers le type de l'annuaire (la publication est décidée ensuite par isListed). */
export function surgeonFromCms(doc: CmsSurgeon): Surgeon {
  return {
    slug: doc.slug,
    displayName: doc.displayName,
    lastName: doc.lastName,
    specialty: doc.specialty,
    country: doc.country,
    registryNumber: doc.registryNumber,
    practice: {
      name: doc.practiceName,
      address: doc.address,
      postalCode: doc.postalCode,
      city: doc.city,
      citySlug: doc.citySlug ?? "",
    },
    languages: doc.languages,
    interventions: doc.interventions,
    bio: doc.bio ?? undefined,
    verification: {
      status: doc.verification.status,
      verifiedAt: doc.verification.verifiedAt ?? undefined,
    },
    subscriptionActive: doc.subscriptionActive === true,
  };
}
