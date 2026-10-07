import type { CountryCode } from "@/lib/countries";

/**
 * Registres officiels consultables par le public, pour que chacun puisse
 * refaire la vérification. Pays non ouverts : à compléter avant ouverture.
 */
export const PUBLIC_REGISTRIES: Partial<Record<CountryCode, { name: string; url: string }>> = {
  FR: { name: "RPPS", url: "https://annuaire.sante.fr/" },
  GB: { name: "GMC", url: "https://www.gmc-uk.org/registrants" },
};
