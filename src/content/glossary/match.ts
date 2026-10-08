import type { GlossaryTerm, Intervention } from "../types";

/**
 * Retrouve automatiquement les fiches qui emploient un terme du lexique (ou
 * l'une de ses variantes) : mot entier, sans tenir compte de la casse.
 */

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function termPattern(term: Pick<GlossaryTerm, "term" | "aliases">): RegExp {
  const forms = [term.term, ...term.aliases]
    .map((form) => form.trim())
    .filter(Boolean)
    // Les formes longues d'abord, pour que « anesthésie générale » l'emporte sur « anesthésie ».
    .sort((a, b) => b.length - a.length)
    .map(escape);
  return new RegExp(`(?<![\\p{L}\\p{N}])(?:${forms.join("|")})(?![\\p{L}\\p{N}])`, "iu");
}

/** Texte lisible d'une fiche (hors identifiants et métadonnées). */
export function interventionText(item: Intervention): string {
  return [
    item.title,
    item.summary,
    ...item.description,
    ...item.indications,
    ...item.contraindications,
    ...item.risks.flatMap((risk) => [risk.name, risk.detail]),
    ...Object.values(item.procedure),
    ...item.recovery,
    ...item.alternatives,
    ...item.faq.flatMap((entry) => [entry.question, entry.answer]),
  ].join("\n");
}

export function interventionsUsingTerm(term: GlossaryTerm, interventions: Intervention[]): Intervention[] {
  const pattern = termPattern(term);
  return interventions.filter((item) => pattern.test(interventionText(item)));
}

export function termsUsedBy(intervention: Intervention, terms: GlossaryTerm[]): GlossaryTerm[] {
  const text = interventionText(intervention);
  return terms.filter((term) => termPattern(term).test(text));
}
