import type { Locale } from "@/i18n/routing";
import type { GlossaryTerm, Intervention, InterventionSubpage } from "../types";
import type { Dossier } from "./types";
import { dossier as liposuction } from "./liposuction";
import { dossier as blepharoplasty } from "./blepharoplasty";
import { dossier as facelift } from "./facelift";
import { dossier as otoplasty } from "./otoplasty";
import { dossier as breastLift } from "./breast-lift";
import { dossier as breastReduction } from "./breast-reduction";
import { dossier as gynecomastia } from "./gynecomastia";
import { dossier as fatGrafting } from "./fat-grafting";
import { dossier as armLift } from "./arm-lift";
import { dossier as thighLift } from "./thigh-lift";
import { dossier as bodyLift } from "./body-lift";
import { dossier as buttockAugmentation } from "./buttock-augmentation";
import { dossier as labiaplasty } from "./labiaplasty";
import { dossier as breastImplantRevision } from "./breast-implant-revision";
import { dossier as browLift } from "./brow-lift";
import { dossier as genioplasty } from "./genioplasty";

/** Dossiers ajoutés en octobre 2026 (un fichier par intervention), dans l'ordre d'affichage. */
export const DOSSIERS: Dossier[] = [
  liposuction,
  blepharoplasty,
  facelift,
  otoplasty,
  breastLift,
  breastReduction,
  gynecomastia,
  fatGrafting,
  armLift,
  thighLift,
  bodyLift,
  buttockAugmentation,
  labiaplasty,
  breastImplantRevision,
  browLift,
  genioplasty,
];

export const dossierInterventions = (locale: Locale): Intervention[] => DOSSIERS.map((d) => d[locale].intervention);
export const dossierSubpages = (locale: Locale): InterventionSubpage[] => DOSSIERS.flatMap((d) => d[locale].subpages);
export const dossierGlossary = (locale: Locale): GlossaryTerm[] => DOSSIERS.flatMap((d) => d[locale].glossary);
