import type { ContactRepository, StoredContact } from "./repository";
import { contactSchema, crossFieldErrors, MIN_FILL_DURATION_MS, type ContactField } from "./schema";
import { newReference } from "./sheet";

export type ContactResult =
  | { ok: true; reference: string }
  | { ok: false; reason: "invalid"; fieldErrors: Partial<Record<ContactField, string>> }
  | { ok: false; reason: "spam" | "unavailable" };

interface SubmitDeps {
  repository: ContactRepository;
  /** Après l'enregistrement (e-mails). Son échec ne fait jamais échouer la demande. */
  onSaved?: (contact: StoredContact) => Promise<void>;
  now?: Date;
  generateReference?: () => string;
}

/** Logique de la demande de contact, indépendante de Next.js. Aucune donnée n'est journalisée. */
export async function submitContact(raw: unknown, locale: string, deps: SubmitDeps): Promise<ContactResult> {
  const now = deps.now ?? new Date();
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField | undefined;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    if (fieldErrors.website) return { ok: false, reason: "spam" };
    if (raw && typeof raw === "object") {
      for (const [field, message] of Object.entries(crossFieldErrors(raw))) fieldErrors[field as ContactField] ??= message;
    }
    return { ok: false, reason: "invalid", fieldErrors };
  }

  const data = parsed.data;
  if (now.getTime() - data.startedAt < MIN_FILL_DURATION_MS) return { ok: false, reason: "spam" };

  const contact: StoredContact = {
    subject: data.subject,
    // Intervention et délai n'ont de sens que pour un projet.
    intervention: data.subject === "project" ? data.intervention : undefined,
    timeframe: data.subject === "project" ? data.timeframe : undefined,
    firstName: data.firstName,
    email: data.email,
    phone: data.phone,
    channel: data.channel,
    slot: data.slot,
    message: data.message,
    page: data.page,
    locale,
    reference: deps.generateReference?.() ?? newReference(),
  };
  try {
    await deps.repository.save(contact);
  } catch (error) {
    console.error("Demande de contact non enregistrée :", error instanceof Error ? error.message : "erreur inconnue");
    return { ok: false, reason: "unavailable" };
  }
  try {
    await deps.onSaved?.(contact);
  } catch {
    // Les e-mails sont secondaires.
  }
  return { ok: true, reference: contact.reference };
}
