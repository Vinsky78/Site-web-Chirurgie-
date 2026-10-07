import type { InterventionId } from "@/content/types";
import type { CountryCode } from "@/lib/countries";

/** Vérification de l'inscription à l'ordre ou au registre du pays (RPPS en France, GMC au Royaume-Uni). */
export type Verification =
  | { status: "pending" }
  | { status: "verified"; registry: string; registrationNumber: string; verifiedAt: string }
  | { status: "suspended" };

export interface Surgeon {
  id: string;
  name: string;
  country: CountryCode;
  city: string;
  specialties: InterventionId[];
  verification: Verification;
  /** Adresse de réception des demandes. Jamais exposée publiquement. */
  contactEmail: string;
}

/** Vue publique : sans coordonnées privées. */
export type PublicSurgeon = Omit<Surgeon, "contactEmail" | "verification"> & {
  registry: string;
  verifiedAt: string;
};
