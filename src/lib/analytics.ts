/** Identifiant GA4 (ex. G-XXXXXXXXXX). Sans lui, aucun script de mesure n'est chargé et aucun bandeau n'est affiché. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || undefined;

const GA_ID_PATTERN = /^G-[A-Z0-9]{4,}$/;

export function isValidGaId(id: string | undefined): id is string {
  return id !== undefined && GA_ID_PATTERN.test(id);
}

/** Pages jamais mesurées : le formulaire de demande porte des données de santé (RGPD art. 9). */
const UNTRACKED = [/\/demande(\/|$)/, /\/pro(\/|$)/, /\/design-system(\/|$)/];

export function shouldTrack(pathname: string): boolean {
  return !UNTRACKED.some((pattern) => pattern.test(pathname));
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaInitialised?: boolean;
  }
}
