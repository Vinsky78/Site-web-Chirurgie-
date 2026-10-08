import type { InterventionId } from "../types";
import type { CountryCode } from "@/lib/countries";
import type { Specialty } from "./types";

/**
 * Vérification des qualifications (Phase 7). Un chirurgien n'est publié que si
 * un administrateur a fait tous les contrôles de son pays, et seulement tant
 * que son assurance est valide.
 * Registres et titres d'après l'audit de la Phase 1 : à confirmer par le
 * juriste de chaque pays avant son ouverture.
 */

/** Spécialités habilitées par intervention : une intervention hors spécialité est refusée. */
export const SPECIALTIES_BY_INTERVENTION: Record<InterventionId, readonly Specialty[]> = {
  rhinoplasty: ["plastic-surgery", "ent", "maxillofacial"],
  abdominoplasty: ["plastic-surgery"],
  "breast-augmentation": ["plastic-surgery"],
};

/** Interventions déclarées qui ne relèvent pas de la spécialité. */
export function interventionsOutsideSpecialty(specialty: Specialty, interventions: readonly InterventionId[]): InterventionId[] {
  return interventions.filter((id) => !SPECIALTIES_BY_INTERVENTION[id].includes(specialty));
}

/** Contrôles à cocher par l'administrateur, communs à tous les pays. */
export const VERIFICATION_CHECKS = ["registryIdentity", "specialtyTitle", "noSanction", "insurance", "facility"] as const;
export type VerificationCheck = (typeof VERIFICATION_CHECKS)[number];

export const CHECK_LABELS: Record<VerificationCheck, string> = {
  registryIdentity: "Identité et numéro conformes à la fiche du registre, consultée aujourd'hui",
  specialtyTitle: "Titre de spécialiste inscrit au registre",
  noSanction: "Aucune sanction ni suspension en cours",
  insurance: "Attestation d'assurance responsabilité civile professionnelle reçue",
  facility: "Lieu d'exercice autorisé pour la chirurgie esthétique",
};

export interface CountryVerification {
  registry: { name: string; url: string };
  /** Titre attendu au registre pour la chirurgie plastique. */
  specialtyTitle: string;
  /** Autorisation du lieu d'exercice à contrôler. */
  facility: string;
}

export const COUNTRY_VERIFICATION: Record<CountryCode, CountryVerification> = {
  FR: {
    registry: { name: "RPPS (Annuaire Santé) et Ordre des médecins", url: "https://annuaire.sante.fr/" },
    specialtyTitle: "Qualification en chirurgie plastique, reconstructrice et esthétique (ou ORL, maxillo-faciale selon l'acte)",
    facility: "Autorisation ARS de l'installation de chirurgie esthétique",
  },
  GB: {
    registry: { name: "GMC, registre des spécialistes", url: "https://www.gmc-uk.org/registrants" },
    specialtyTitle: "Plastic surgery (ou ENT, oral and maxillofacial surgery selon l'acte)",
    facility: "Enregistrement CQC de la clinique",
  },
  DE: {
    registry: { name: "Arztsuche de la Landesärztekammer", url: "https://www.bundesaerztekammer.de/" },
    specialtyTitle: "Facharzt für Plastische und Ästhetische Chirurgie (« Schönheitschirurg » ne suffit pas)",
    facility: "Clinique ou cabinet déclaré auprès des autorités du Land",
  },
  NL: {
    registry: { name: "BIG-register", url: "https://zoeken.bigregister.nl/" },
    specialtyTitle: "Plastisch chirurg",
    facility: "Clinique labellisée ZKN ou équivalent",
  },
  BE: {
    registry: { name: "Ordomedic et numéro INAMI", url: "https://ordomedic.be/" },
    specialtyTitle: "Spécialiste habilité par la loi du 23 mai 2013 pour les actes déclarés",
    facility: "Lieu d'exercice conforme à la loi du 23 mai 2013",
  },
  CH: {
    registry: { name: "MedReg", url: "https://www.medregom.admin.ch/" },
    specialtyTitle: "Titre fédéral de chirurgie plastique, reconstructive et esthétique",
    facility: "Autorisation cantonale de pratiquer",
  },
  ES: {
    registry: { name: "Collège des médecins de la province (CGCOM)", url: "https://www.cgcom.es/" },
    specialtyTitle: "Cirugía Plástica, Estética y Reparadora",
    facility: "Autorisation sanitaire du centre",
  },
  IT: {
    registry: { name: "Albo FNOMCeO", url: "https://portale.fnomceo.it/" },
    specialtyTitle: "Chirurgia plastica, ricostruttiva ed estetica",
    facility: "Autorisation régionale de la structure",
  },
};

/** Consigne affichée dans le CMS pour le pays du chirurgien. */
export function verificationGuide(country: CountryCode): string {
  const { registry, specialtyTitle, facility } = COUNTRY_VERIFICATION[country];
  return [
    `Registre : ${registry.name} (${registry.url})`,
    `Titre attendu : ${specialtyTitle}`,
    `Lieu d'exercice : ${facility}`,
    "Conserver la capture de la fiche du registre dans la preuve interne.",
  ].join("\n");
}

export interface VerificationRequest {
  checks?: Partial<Record<VerificationCheck, boolean | null>> | null;
  insuranceExpiresAt?: string | null;
}

/**
 * Ce qui empêche de prononcer la vérification : contrôles non cochés,
 * assurance absente ou expirée. Liste vide : la vérification est possible.
 */
export function verificationBlockers(request: VerificationRequest, now: Date): string[] {
  const blockers = VERIFICATION_CHECKS.filter((check) => request.checks?.[check] !== true).map(
    (check) => `Contrôle non fait : ${CHECK_LABELS[check]}.`,
  );
  if (!request.insuranceExpiresAt) {
    blockers.push("Date d'expiration de l'assurance manquante.");
  } else if (new Date(request.insuranceExpiresAt) <= now) {
    blockers.push("L'assurance est expirée.");
  }
  return blockers;
}
