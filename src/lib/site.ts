/** URL publique du site, sans slash final. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Chirurgie Esthétique Europe";

/** Réseaux officiels (liste séparée par des virgules), publiés dans les données structurées seulement s'ils sont renseignés. */
export const SAME_AS = (process.env.NEXT_PUBLIC_SAME_AS ?? "")
  .split(",")
  .map((url) => url.trim())
  .filter((url) => /^https:\/\//.test(url));

/** Adresse de contact publique, publiée dans les données structurées seulement si elle est renseignée. */
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined;

/** Codes de vérification Search Console et Bing Webmaster Tools. */
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;
export const BING_SITE_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim() || undefined;
