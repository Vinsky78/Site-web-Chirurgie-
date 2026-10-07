import type { Surgeon } from "./types";

/**
 * Chirurgiens FICTIFS pour le développement et les tests de bout en bout.
 * Ils ne sont chargés que si DIRECTORY_FIXTURES=1 (jamais en production) :
 * les vrais profils viennent du CMS après vérification au registre.
 * Numéros de registre volontairement invalides (préfixe 0000).
 */
/** Dates relatives à aujourd'hui, pour que les fixtures restent valides dans le temps. */
function monthsAgo(months: number): string {
  const date = new Date();
  date.setUTCMonth(date.getUTCMonth() - months);
  return date.toISOString().slice(0, 10);
}

const base = {
  specialty: "plastic-surgery",
  country: "FR",
  languages: ["fr", "en"],
  subscriptionActive: true,
  verification: { status: "verified", verifiedAt: monthsAgo(1) },
} satisfies Partial<Surgeon>;

const lyon = { postalCode: "69006", city: "Lyon", citySlug: "lyon" };

export const SURGEON_FIXTURES: Surgeon[] = [
  {
    ...base,
    slug: "alice-demo-lyon",
    displayName: "Dr Alice Démo",
    lastName: "Démo",
    registryNumber: "00000000001",
    practice: { ...lyon, name: "Cabinet fictif A", address: "1 rue de l'Exemple" },
    languages: ["fr", "en", "es"],
    interventions: ["rhinoplasty", "breast-augmentation"],
    bio: "Profil fictif utilisé pour le développement.",
  },
  {
    ...base,
    slug: "bruno-essai-lyon",
    displayName: "Dr Bruno Essai",
    lastName: "Essai",
    registryNumber: "00000000002",
    practice: { ...lyon, name: "Clinique fictive B", address: "2 rue de l'Exemple" },
    interventions: ["abdominoplasty", "breast-augmentation"],
  },
  {
    ...base,
    slug: "chloe-fictif-lyon",
    displayName: "Dr Chloé Fictif",
    lastName: "Fictif",
    specialty: "ent",
    registryNumber: "00000000003",
    practice: { ...lyon, name: "Cabinet fictif C", address: "3 rue de l'Exemple" },
    interventions: ["rhinoplasty"],
  },
  {
    ...base,
    slug: "david-test-paris",
    displayName: "Dr David Test",
    lastName: "Test",
    registryNumber: "00000000004",
    practice: { name: "Cabinet fictif D", address: "4 rue de l'Exemple", postalCode: "75008", city: "Paris", citySlug: "paris" },
    interventions: ["rhinoplasty", "abdominoplasty"],
  },
  {
    ...base,
    slug: "emma-perime-paris",
    displayName: "Dr Emma Périmé",
    lastName: "Périmé",
    registryNumber: "00000000005",
    practice: { name: "Cabinet fictif E", address: "5 rue de l'Exemple", postalCode: "75016", city: "Paris", citySlug: "paris" },
    interventions: ["rhinoplasty"],
    // Vérification de plus d'un an : ne doit jamais apparaître.
    verification: { status: "verified", verifiedAt: monthsAgo(13) },
  },
  {
    ...base,
    slug: "felix-attente-lyon",
    displayName: "Dr Félix Attente",
    lastName: "Attente",
    registryNumber: "00000000006",
    practice: { ...lyon, name: "Cabinet fictif F", address: "6 rue de l'Exemple" },
    interventions: ["abdominoplasty"],
    // Vérification en cours : ne doit jamais apparaître.
    verification: { status: "pending" },
  },
];
