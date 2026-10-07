import type { InterventionId } from "@/content/types";
import type { CountryCode } from "@/lib/countries";
import type { PublicSurgeon, Surgeon } from "./types";

/**
 * Annuaire des chirurgiens. Source provisoire vide : les fiches seront
 * alimentées par la base (Phase 4) après vérification du registre de chaque
 * praticien. Aucune fiche fictive n'est publiée.
 */
export const SURGEONS: Surgeon[] = [];

export function isVerified(surgeon: Surgeon): boolean {
  return surgeon.verification.status === "verified";
}

export function toPublic(surgeon: Surgeon): PublicSurgeon | undefined {
  if (surgeon.verification.status !== "verified") return undefined;
  const { contactEmail: _contact, verification, ...rest } = surgeon;
  void _contact;
  return { ...rest, registry: verification.registry, verifiedAt: verification.verifiedAt };
}

export interface DirectoryFilter {
  country?: CountryCode;
  interventionId?: InterventionId;
}

/** Chirurgiens vérifiés uniquement, sans coordonnées privées, triés par nom (aucun classement payant). */
export function listPublicSurgeons(filter: DirectoryFilter = {}, source: Surgeon[] = SURGEONS): PublicSurgeon[] {
  return source
    .filter((s) => !filter.country || s.country === filter.country)
    .filter((s) => !filter.interventionId || s.specialties.includes(filter.interventionId))
    .map(toPublic)
    .filter((s): s is PublicSurgeon => s !== undefined)
    .sort((a, b) => a.name.localeCompare(b.name));
}
