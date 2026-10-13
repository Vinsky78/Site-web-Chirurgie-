import type { Locale } from "@/i18n/routing";
import { dossierInterventions } from "../dossiers";
import type { Intervention } from "../types";
import { interventionsFr } from "./fr";
import { interventionsEnGb } from "./en-gb";

/**
 * Contenus en fichiers typés : source par défaut (développement, CI) et
 * données d'amorçage du CMS (`npm run cms:seed`).
 */
export const INTERVENTIONS_FROM_FILES: Record<Locale, Intervention[]> = {
  fr: [...interventionsFr, ...dossierInterventions("fr")],
  "en-gb": [...interventionsEnGb, ...dossierInterventions("en-gb")],
};
