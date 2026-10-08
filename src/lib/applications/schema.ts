import { z } from "zod";
import { INTERVENTION_IDS } from "@/content/types";
import { LANGUAGES, SPECIALTIES } from "@/content/surgeons/types";
import { interventionsOutsideSpecialty } from "@/content/surgeons/verification";
import { COUNTRY_CODES } from "@/lib/countries";

/** Durée minimale de saisie : en dessous, la candidature est traitée comme un robot. */
export const MIN_FILL_DURATION_MS = 4_000;

/**
 * Candidature d'un chirurgien (Phase 7). Données professionnelles seulement,
 * toutes vérifiables au registre officiel ; aucun texte libre.
 * Les messages d'erreur sont des clés de traduction (`join.errors.*`).
 */
export const applicationSchema = z
  .object({
    fullName: z.string({ error: "required" }).trim().min(3, { error: "fullName" }).max(120, { error: "fullName" }),
    email: z.email({ error: "email" }).max(254, { error: "email" }),
    phone: z
      .string()
      .trim()
      .max(30, { error: "phone" })
      .regex(/^[+0-9 ().-]*$/, { error: "phone" })
      .optional()
      .transform((value) => value || undefined),
    country: z.enum(COUNTRY_CODES, { error: "required" }),
    registryNumber: z
      .string({ error: "required" })
      .trim()
      .regex(/^[A-Za-z0-9][A-Za-z0-9 ./-]{2,29}$/, { error: "registryNumber" }),
    specialty: z.enum(SPECIALTIES, { error: "required" }),
    city: z.string({ error: "required" }).trim().min(2, { error: "city" }).max(80, { error: "city" }),
    interventions: z.array(z.enum(INTERVENTION_IDS), { error: "interventions" }).min(1, { error: "interventions" }),
    languages: z.array(z.enum(LANGUAGES), { error: "languages" }).min(1, { error: "languages" }),
    consent: z.literal(true, { error: "consent" }),
    // Anti-spam : champ invisible qui doit rester vide, et durée minimale de saisie.
    website: z.string().max(0, { error: "spam" }),
    startedAt: z.number().int(),
  })
  .superRefine((data, ctx) => {
    if (interventionsOutsideSpecialty(data.specialty, data.interventions).length > 0) {
      ctx.addIssue({ code: "custom", path: ["interventions"], message: "outsideSpecialty" });
    }
  });

export type ApplicationInput = z.infer<typeof applicationSchema>;
export type ApplicationField = keyof ApplicationInput;

/** Lecture d'un FormData : les cases multiples deviennent des listes. */
export function applicationFromFormData(form: FormData): Record<string, unknown> {
  const text = (name: string) => {
    const value = form.get(name);
    return typeof value === "string" ? value : undefined;
  };
  return {
    fullName: text("fullName"),
    email: text("email"),
    phone: text("phone"),
    country: text("country"),
    registryNumber: text("registryNumber"),
    specialty: text("specialty"),
    city: text("city"),
    interventions: form.getAll("interventions").filter((v) => typeof v === "string"),
    languages: form.getAll("languages").filter((v) => typeof v === "string"),
    consent: form.get("consent") === "on",
    website: text("website") ?? "",
    startedAt: Number(text("startedAt")),
  };
}
