import type { Surgeon } from "./types";

/**
 * Règles de publication de l'annuaire (Phases 1 et 2).
 */

/** Contrôle au registre à refaire chaque année ; au-delà, le profil est retiré. */
export const VERIFICATION_VALIDITY_MONTHS = 12;

/** Une page ville n'existe qu'à partir de ce nombre de chirurgiens publiés (pas de page quasi vide). */
export const CITY_PAGE_MIN_SURGEONS = 3;

export function verificationExpiresAt(verifiedAt: string): Date {
  const date = new Date(verifiedAt);
  date.setUTCMonth(date.getUTCMonth() + VERIFICATION_VALIDITY_MONTHS);
  return date;
}

/** Un chirurgien est publié s'il est vérifié depuis moins d'un an et abonné. */
export function isListed(surgeon: Surgeon, now: Date = new Date()): boolean {
  const { status, verifiedAt } = surgeon.verification;
  return (
    status === "verified" &&
    verifiedAt !== undefined &&
    verificationExpiresAt(verifiedAt) > now &&
    surgeon.subscriptionActive
  );
}

/**
 * Ordre d'affichage : alphabétique par nom de famille. Aucun critère
 * commercial (Phase 1 : aucun chirurgien ne peut payer pour être mieux classé).
 */
export function sortSurgeons(surgeons: Surgeon[]): Surgeon[] {
  return [...surgeons].sort(
    (a, b) => a.lastName.localeCompare(b.lastName, "fr") || a.displayName.localeCompare(b.displayName, "fr"),
  );
}

export interface DirectoryFilters {
  intervention?: string;
  city?: string;
}

export function filterSurgeons(surgeons: Surgeon[], { intervention, city }: DirectoryFilters): Surgeon[] {
  return surgeons.filter(
    (s) =>
      (!intervention || (s.interventions as string[]).includes(intervention)) &&
      (!city || s.practice.citySlug === city),
  );
}

/** Villes ayant assez de chirurgiens publiés pour mériter une page. */
export function citiesWithPage(surgeons: Surgeon[]): { slug: string; name: string; count: number }[] {
  const byCity = new Map<string, { slug: string; name: string; count: number }>();
  for (const s of surgeons) {
    const entry = byCity.get(s.practice.citySlug) ?? { slug: s.practice.citySlug, name: s.practice.city, count: 0 };
    entry.count += 1;
    byCity.set(entry.slug, entry);
  }
  return [...byCity.values()]
    .filter((c) => c.count >= CITY_PAGE_MIN_SURGEONS)
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));
}
