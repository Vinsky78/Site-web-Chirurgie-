import type { Locale } from "@/i18n/routing";
import { dossierSubpages } from "../dossiers";
import type { InterventionSubpage } from "../types";
import { subpagesFr } from "./fr";
import { subpagesEnGb } from "./en-gb";

/** Sous-pages en fichiers typés (développement, CI, amorçage du CMS). */
export const SUBPAGES_FROM_FILES: Record<Locale, InterventionSubpage[]> = {
  fr: [...subpagesFr, ...dossierSubpages("fr")],
  "en-gb": [...subpagesEnGb, ...dossierSubpages("en-gb")],
};
