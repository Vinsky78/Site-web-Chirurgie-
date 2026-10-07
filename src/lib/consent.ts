"use client";

export type Consent = "granted" | "denied" | null;

const KEY = "consent-analytics";
const EVENT = "consent-change";

/** Lecture du choix de l'utilisateur ; null tant qu'il n'a pas répondu. */
export function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent): void {
  try {
    if (value === null) window.localStorage.removeItem(KEY);
    else window.localStorage.setItem(KEY, value);
  } catch {
    // Stockage indisponible : le choix vaut pour la page courante seulement.
  }
  window.dispatchEvent(new Event(EVENT));
}

export function subscribeConsent(callback: () => void): () => void {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
