import { z } from "zod";
import { INTERVENTION_IDS } from "@/content/types";
import { ACTIVE_COUNTRIES } from "@/lib/countries";
import { BUDGETS, isPregnancyRelevant, MAX_SURGEONS, MIN_AGE, SMOKER, TIMEFRAMES, YES_NO } from "./options";

/**
 * Demande de consultation.
 *
 * Minimisation (RGPD art. 5 et 9) : seules des questions fermées utiles au tri
 * par le chirurgien. Pas de texte libre sur la santé, pas de photo, pas de date
 * de naissance complète. Les messages d'erreur sont des clés de traduction
 * (namespace "form.errors").
 */

export {
  BUDGETS,
  isPregnancyRelevant,
  MAX_SURGEONS,
  MIN_AGE,
  MIN_FILL_DURATION_MS,
  PREGNANCY_RELEVANT,
  SMOKER,
  STEP_FIELDS,
  TIMEFRAMES,
  YES_NO,
  type StepId,
} from "./options";

const yesNo = z.enum(YES_NO, { error: "required" });

export const leadBaseSchema = z.object({
  // Étape 1 – projet
  interventionId: z.enum(INTERVENTION_IDS, { error: "required" }),
  country: z.enum(ACTIVE_COUNTRIES, { error: "required" }),
  city: z.string({ error: "required" }).trim().min(2, { error: "city" }).max(80, { error: "city" }),
  timeframe: z.enum(TIMEFRAMES, { error: "required" }),
  budget: z.enum(BUDGETS, { error: "required" }),

  // Étape 2 – critères médicaux fermés (données de santé)
  smoker: z.enum(SMOKER, { error: "required" }),
  previousSurgerySameArea: yesNo,
  pregnancyPlanned: yesNo.optional(),

  // Étape 4 – chirurgiens choisis (slugs de l'annuaire, contrôlés côté serveur)
  surgeons: z
    .array(z.string().regex(/^[a-z0-9-]{1,120}$/, { error: "surgeons" }), { error: "surgeons" })
    .max(MAX_SURGEONS, { error: "surgeonsMax" })
    .refine((slugs) => new Set(slugs).size === slugs.length, { error: "surgeons" }),

  // Étape 5 – contact et consentements
  firstName: z.string({ error: "required" }).trim().min(1, { error: "required" }).max(60, { error: "firstName" }),
  email: z.email({ error: "email" }).max(254, { error: "email" }),
  phone: z
    .string()
    .trim()
    .max(30, { error: "phone" })
    .regex(/^[+0-9 ().-]*$/, { error: "phone" })
    .optional(),
  birthYear: z.number({ error: "birthYear" }).int({ error: "birthYear" }).min(1900, { error: "birthYear" }),
  isAdult: z.literal(true, { error: "isAdult" }),
  consentHealthData: z.literal(true, { error: "consentHealthData" }),
  consentNewsletter: z.boolean(),

  // Anti-spam : champ invisible qui doit rester vide, et durée minimale de saisie.
  website: z.string().max(0, { error: "spam" }),
  startedAt: z.number().int(),
});

export type LeadInput = z.infer<typeof leadBaseSchema>;

export function ageFromBirthYear(birthYear: number, now: Date = new Date()): number {
  return now.getFullYear() - birthYear;
}

/**
 * L'année seule donne un âge à un an près : l'année est contrôlée en plus de la
 * case « J'ai 18 ans ou plus », qui reste la déclaration engageante.
 */
export function createLeadSchema(now: Date = new Date()) {
  // Contrôle d'âge au niveau du champ : il s'affiche même si d'autres champs sont encore invalides.
  const birthYear = leadBaseSchema.shape.birthYear
    .max(now.getFullYear(), { error: "birthYear" })
    .refine((year) => ageFromBirthYear(year, now) >= MIN_AGE, { error: "underage" });

  return leadBaseSchema.extend({ birthYear }).superRefine((data, ctx) => {
    if (isPregnancyRelevant(data.interventionId) && data.pregnancyPlanned === undefined) {
      ctx.addIssue({ code: "custom", path: ["pregnancyPlanned"], message: "required" });
    }
  });
}
