import type { InterventionId } from "../types";
import type { CountryCode } from "@/lib/countries";

/** Spécialités habilitées, selon l'intervention (ex. rhinoplastie : plastique ou ORL). */
export const SPECIALTIES = ["plastic-surgery", "ent", "maxillofacial", "oculoplastic"] as const;
export type Specialty = (typeof SPECIALTIES)[number];

/** Langues de consultation proposées (codes ISO 639-1). */
export const LANGUAGES = ["fr", "en", "de", "nl", "es", "it", "ar", "pt"] as const;
export type Language = (typeof LANGUAGES)[number];

export interface SurgeonVerification {
  status: "pending" | "verified" | "suspended";
  /** Date du dernier contrôle au registre officiel (ISO 8601). */
  verifiedAt?: string;
  /** Fin de validité de l'assurance responsabilité civile professionnelle (ISO 8601). */
  insuranceExpiresAt?: string;
}

/**
 * Chirurgien de l'annuaire. Uniquement des informations professionnelles,
 * déjà publiques dans les registres officiels : ni avis, ni photos avant/après,
 * ni prix (interdits en France), ni classement payant.
 */
export interface Surgeon {
  slug: string;
  /** Civilité et nom tels qu'inscrits au registre, ex. « Dr Claire Martin ». */
  displayName: string;
  /** Nom de famille, pour le tri alphabétique. */
  lastName: string;
  specialty: Specialty;
  country: CountryCode;
  /** Numéro au registre officiel (RPPS en France, GMC au Royaume-Uni). */
  registryNumber: string;
  practice: {
    name: string;
    address: string;
    postalCode: string;
    city: string;
    /** Segment d'URL de la ville, ex. « lyon ». */
    citySlug: string;
  };
  languages: Language[];
  interventions: InterventionId[];
  /** Présentation factuelle, relue selon la charte éditoriale. */
  bio?: string;
  verification: SurgeonVerification;
  /** Abonnement fixe en cours (le montant ne dépend jamais du nombre de demandes). */
  subscriptionActive: boolean;
}
