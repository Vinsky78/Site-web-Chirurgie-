import type { Locale } from "@/i18n/routing";
import type { GlossaryTerm } from "../types";
import { glossaryFr } from "./fr";
import { glossaryEnGb } from "./en-gb";

/** Lexique en fichiers typés (développement, CI, amorçage du CMS). */
export const GLOSSARY_FROM_FILES: Record<Locale, GlossaryTerm[]> = {
  fr: glossaryFr,
  "en-gb": glossaryEnGb,
};
