import { z } from "zod";
import { INTERVENTION_IDS } from "@/content/types";

/** Durée minimale de saisie : en dessous, le message est traité comme un robot. */
export const MIN_FILL_DURATION_MS = 4_000;

export const CONTACT_SUBJECTS = ["project", "question", "surgeon", "press", "privacy", "other"] as const;
export const CONTACT_TIMEFRAMES = ["lt3m", "3to6m", "6to12m", "gt12m", "unknown"] as const;
export const CONTACT_CHANNELS = ["email", "phone"] as const;
export const CONTACT_SLOTS = ["morning", "lunch", "afternoon", "evening", "any"] as const;
export const MESSAGE_MAX = 1000;

const optionalText = (max: number, key: string) =>
  z
    .string()
    .trim()
    .max(max, { error: key })
    .optional()
    .transform((value) => value || undefined);

/**
 * Demande de contact. Minimisation (RGPD art. 5) : questions fermées pour le
 * projet, message libre limité et sans information médicale (avertissement
 * affiché). Les messages d'erreur sont des clés de traduction (`contact.errors.*`).
 */
export const contactSchema = z
  .object({
    subject: z.enum(CONTACT_SUBJECTS, { error: "required" }),
    intervention: z
      .enum(INTERVENTION_IDS)
      .optional()
      .or(z.literal("").transform(() => undefined)),
    timeframe: z
      .enum(CONTACT_TIMEFRAMES)
      .optional()
      .or(z.literal("").transform(() => undefined)),
    firstName: z.string({ error: "required" }).trim().min(1, { error: "required" }).max(60, { error: "firstName" }),
    email: z.email({ error: "email" }).max(254, { error: "email" }),
    phone: optionalText(30, "phone").refine((v) => v === undefined || /^[+0-9 ().-]{6,30}$/.test(v), { error: "phone" }),
    channel: z.enum(CONTACT_CHANNELS, { error: "required" }),
    slot: z
      .enum(CONTACT_SLOTS)
      .optional()
      .or(z.literal("").transform(() => undefined)),
    message: optionalText(MESSAGE_MAX, "message"),
    page: optionalText(200, "page"),
    consent: z.literal(true, { error: "consent" }),
    // Anti-spam : champ invisible qui doit rester vide, et durée minimale de saisie.
    website: z.string().max(0, { error: "spam" }),
    startedAt: z.number().int(),
  })
  .superRefine((data, ctx) => {
    for (const [field, message] of Object.entries(crossFieldErrors(data))) ctx.addIssue({ code: "custom", path: [field], message });
  });

/**
 * Règles entre champs. Exportées pour être aussi appliquées quand d'autres
 * champs sont invalides (zod ne lance pas la vérification d'ensemble dans ce
 * cas) : toutes les erreurs s'affichent dès le premier envoi.
 */
export function crossFieldErrors(data: { subject?: unknown; channel?: unknown; phone?: unknown; message?: unknown }): Partial<Record<"phone" | "message", string>> {
  const filled = (value: unknown) => typeof value === "string" && value.trim() !== "";
  const errors: Partial<Record<"phone" | "message", string>> = {};
  if (data.channel === "phone" && !filled(data.phone)) errors.phone = "phoneRequired";
  if (typeof data.subject === "string" && data.subject !== "project" && !filled(data.message)) errors.message = "required";
  return errors;
}

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;

export function contactFromFormData(form: FormData): Record<string, unknown> {
  const text = (name: string) => {
    const value = form.get(name);
    return typeof value === "string" ? value : undefined;
  };
  return {
    subject: text("subject"),
    intervention: text("intervention") ?? "",
    timeframe: text("timeframe") ?? "",
    firstName: text("firstName"),
    email: text("email"),
    phone: text("phone"),
    channel: text("channel"),
    slot: text("slot") ?? "",
    message: text("message"),
    page: text("page"),
    consent: form.get("consent") === "on",
    website: text("website") ?? "",
    startedAt: Number(text("startedAt")),
  };
}
