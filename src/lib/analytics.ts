/**
 * Mesure d'audience sans cookie (Plausible, hébergé dans l'UE ; décision de
 * fin de Phase 6). Inactive tant que NEXT_PUBLIC_PLAUSIBLE_DOMAIN n'est pas
 * défini. Règle : aucun événement ne porte une intervention, une réponse du
 * formulaire ou un identifiant ; seulement le gabarit de page et l'étape.
 */

type EventProps = Record<string, string | number>;

declare global {
  interface Window {
    plausible?: ((event: string, options?: { props?: EventProps; u?: string }) => void) & { q?: unknown[] };
  }
}

export function trackEvent(name: string, props?: EventProps): void {
  if (typeof window === "undefined") return;
  window.plausible?.(name, props ? { props } : undefined);
}

/** Sections jamais mesurées : espace pro et lien personnel du patient (jeton dans l'adresse). */
const EXCLUDED_SECTIONS = new Set(["pro", "ma-demande", "my-request"]);

/** Gabarits de page, à partir des adresses publiques des deux marchés. */
const TEMPLATES: Record<string, readonly string[]> = {
  interventions: ["interventions", "fiche", "sous-page"],
  procedures: ["interventions", "fiche", "sous-page"],
  guides: ["guides", "guide"],
  lexique: ["lexique", "terme"],
  glossary: ["lexique", "terme"],
  chirurgiens: ["annuaire", "profil", "ville"],
  surgeons: ["annuaire", "profil", "ville"],
  demande: ["demande"],
  request: ["demande"],
  rejoindre: ["candidature"],
  join: ["candidature"],
  informations: ["information", "information"],
  information: ["information", "information"],
};

/** Segments de l'adresse, sans la locale. */
function segments(pathname: string): string[] {
  return pathname.split("/").filter(Boolean).slice(1);
}

export function isTracked(pathname: string): boolean {
  return !EXCLUDED_SECTIONS.has(segments(pathname)[0] ?? "");
}

/** Gabarit d'une page, pour regrouper les Web Vitals sans transmettre l'adresse. */
export function pageTemplate(pathname: string): string {
  const parts = segments(pathname);
  if (parts.length === 0) return "accueil";
  const templates = TEMPLATES[parts[0]];
  if (!templates) return "autre";
  // Pages ville de l'annuaire : /chirurgiens/ville/<ville>.
  const depth = parts[1] === "ville" || parts[1] === "city" ? 3 : parts.length;
  return templates[Math.min(depth, templates.length) - 1];
}
