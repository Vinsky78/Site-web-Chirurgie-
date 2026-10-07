import { findForbiddenTerms } from "@/content/charter";
import { hasRole } from "./roles";

/**
 * Règles de relecture médicale, indépendantes de Payload pour être testées.
 *
 * 1. Seul un relecteur médical peut passer une fiche en « relue » ; son nom,
 *    sa qualification et la date sont alors renseignés automatiquement.
 * 2. Toute modification du contenu médical par quelqu'un d'autre repasse la
 *    fiche en brouillon : elle sort de l'index jusqu'à une nouvelle relecture.
 */

/** Champs d'une fiche d'intervention dont la modification impose une nouvelle relecture. */
export const MEDICAL_CONTENT_FIELDS = [
  "title",
  "summary",
  "description",
  "indications",
  "contraindications",
  "risks",
  "procedure",
  "recovery",
  "alternatives",
  "faq",
] as const;

/** Champs relus des autres gabarits (sous-pages, guides, lexique). */
export const SUBPAGE_CONTENT_FIELDS = ["title", "summary", "answer", "sections", "sources"] as const;
export const GUIDE_CONTENT_FIELDS = ["title", "summary", "answer", "steps", "warningSigns", "resources"] as const;
export const GLOSSARY_CONTENT_FIELDS = ["term", "aliases", "definition", "detail"] as const;

export interface ReviewState {
  status: "draft" | "reviewed";
  reviewer?: string | null;
  qualification?: string | null;
  reviewedAt?: string | null;
}

interface Reviewer {
  name?: string | null;
  qualification?: string | null;
  role?: unknown;
}

const DRAFT: ReviewState = { status: "draft", reviewer: null, qualification: null, reviewedAt: null };

/** Retire les identifiants de lignes générés par le CMS pour comparer le contenu seul. */
function stripIds(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripIds);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== "id")
        .map(([key, v]) => [key, stripIds(v)]),
    );
  }
  return value;
}

export function medicalContentChanged(
  data: Record<string, unknown>,
  original: Record<string, unknown> | undefined,
  fields: readonly string[] = MEDICAL_CONTENT_FIELDS,
): boolean {
  if (!original) return true;
  return fields.some(
    (field) =>
      field in data && JSON.stringify(stripIds(data[field])) !== JSON.stringify(stripIds(original[field])),
  );
}

export function nextReviewState({
  requested,
  previous,
  contentChanged,
  user,
  now,
}: {
  requested: ReviewState | undefined;
  previous: ReviewState | undefined;
  contentChanged: boolean;
  user: Reviewer | null | undefined;
  now: Date;
}): ReviewState {
  const wantsReviewed = (requested?.status ?? previous?.status) === "reviewed";
  if (!wantsReviewed) return DRAFT;

  if (hasRole(user, "medical-reviewer")) {
    // Nouvelle validation (ou contenu modifié par le relecteur lui-même) : signature horodatée.
    if (previous?.status !== "reviewed" || contentChanged) {
      return {
        status: "reviewed",
        reviewer: user?.name ?? null,
        qualification: user?.qualification ?? null,
        reviewedAt: now.toISOString(),
      };
    }
    return previous;
  }

  // Pas relecteur : la validation existante n'est conservée que si le contenu n'a pas bougé.
  if (previous?.status === "reviewed" && !contentChanged) return previous;
  return DRAFT;
}

/** Erreurs de charte éditoriale, avec le chemin du champ fautif (ex. "risks.0.detail"). */
export function charterErrors(
  data: Record<string, unknown>,
  fields: readonly string[] = MEDICAL_CONTENT_FIELDS,
): { path: string; message: string }[] {
  const errors: { path: string; message: string }[] = [];
  const walk = (value: unknown, path: string) => {
    if (typeof value === "string") {
      const terms = findForbiddenTerms(value);
      if (terms.length > 0) {
        errors.push({ path, message: `Terme interdit par la charte éditoriale : « ${terms.join(" », « ")} ».` });
      }
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => walk(item, `${path}.${index}`));
    } else if (value && typeof value === "object") {
      for (const [key, v] of Object.entries(value)) if (key !== "id") walk(v, path ? `${path}.${key}` : key);
    }
  };
  for (const field of fields) if (field in data) walk(data[field], field);
  return errors;
}
