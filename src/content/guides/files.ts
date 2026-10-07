import type { Locale } from "@/i18n/routing";
import type { Guide } from "../types";
import { guidesFr } from "./fr";
import { guidesEnGb } from "./en-gb";

/** Guides en fichiers typés (développement, CI, amorçage du CMS). */
export const GUIDES_FROM_FILES: Record<Locale, Guide[]> = {
  fr: guidesFr,
  "en-gb": guidesEnGb,
};
