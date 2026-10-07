/** URL publique du site, sans slash final. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

/**
 * Nom de marque retenu en Phase 4. Dépôt de marque (INPI, EUIPO, UKIPO) et
 * noms de domaine pas encore vérifiés : surcharger avec NEXT_PUBLIC_SITE_NAME si besoin.
 */
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Éclaira";
