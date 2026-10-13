import type { Locale } from "@/i18n/routing";
import type { Guide } from "../types";
import { guidesFr } from "./fr";
import { guidesEnGb } from "./en-gb";
import { guide as preparingForSurgery } from "./items/preparing-for-surgery";
import { guide as afterSurgeryAtHome } from "./items/after-surgery-at-home";
import { guide as scarCare } from "./items/scar-care";
import { guide as anaesthesia } from "./items/anaesthesia";
import { guide as complicationsAndRights } from "./items/complications-and-rights";
import { guide as aestheticMedicineVsSurgery } from "./items/aesthetic-medicine-vs-surgery";
import { guide as costAndFinancing } from "./items/cost-and-financing";
import { guide as combiningProcedures } from "./items/combining-procedures";
import { guide as healthPrerequisites } from "./items/health-prerequisites";
import { guide as bodyImageAndExpectations } from "./items/body-image-and-expectations";
import { guide as breastImplantsLongTerm } from "./items/breast-implants-long-term";
import { guide as revisionSurgery } from "./items/revision-surgery";

/** Guides pratiques ajoutés en octobre 2026 (un fichier par guide, deux marchés). */
const ITEMS = [
  preparingForSurgery,
  afterSurgeryAtHome,
  scarCare,
  anaesthesia,
  complicationsAndRights,
  aestheticMedicineVsSurgery,
  costAndFinancing,
  combiningProcedures,
  healthPrerequisites,
  bodyImageAndExpectations,
  breastImplantsLongTerm,
  revisionSurgery,
];

/** Guides en fichiers typés (développement, CI, amorçage du CMS). */
export const GUIDES_FROM_FILES: Record<Locale, Guide[]> = {
  fr: [...guidesFr, ...ITEMS.map((item) => item.fr)],
  "en-gb": [...guidesEnGb, ...ITEMS.map((item) => item["en-gb"])],
};
