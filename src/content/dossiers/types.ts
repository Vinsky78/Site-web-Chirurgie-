import type { Locale } from "@/i18n/routing";
import type { GlossaryTerm, Intervention, InterventionSubpage } from "../types";

/**
 * Dossier complet d'une intervention, par marché : fiche, 5 sous-pages et
 * entrées de lexique propres. Un fichier par intervention (src/content/dossiers),
 * assemblé dans les listes de fichiers de chaque gabarit.
 */
export interface DossierLocale {
  intervention: Intervention;
  subpages: InterventionSubpage[];
  glossary: GlossaryTerm[];
}

export type Dossier = Record<Locale, DossierLocale>;
