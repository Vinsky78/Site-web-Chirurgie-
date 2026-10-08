import type { ApplicationRepository, StoredApplication } from "./repository";
import { applicationSchema, MIN_FILL_DURATION_MS, type ApplicationField } from "./schema";

export type ApplicationResult =
  | { ok: true }
  | { ok: false; reason: "invalid"; fieldErrors: Partial<Record<ApplicationField, string>> }
  | { ok: false; reason: "spam" | "unavailable" };

interface SubmitDeps {
  repository: ApplicationRepository;
  /** Après l'enregistrement (e-mails). Son échec ne fait jamais échouer la candidature. */
  onSaved?: (application: StoredApplication) => Promise<void>;
  now?: Date;
}

/** Logique de la candidature, indépendante de Next.js. Aucune donnée n'est journalisée. */
export async function submitApplication(raw: unknown, locale: string, deps: SubmitDeps): Promise<ApplicationResult> {
  const now = deps.now ?? new Date();
  const parsed = applicationSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ApplicationField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ApplicationField | undefined;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    if (fieldErrors.website) return { ok: false, reason: "spam" };
    return { ok: false, reason: "invalid", fieldErrors };
  }

  const data = parsed.data;
  if (now.getTime() - data.startedAt < MIN_FILL_DURATION_MS) return { ok: false, reason: "spam" };

  const application: StoredApplication = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    country: data.country,
    registryNumber: data.registryNumber,
    specialty: data.specialty,
    city: data.city,
    interventions: data.interventions,
    languages: data.languages,
    locale,
  };
  try {
    await deps.repository.save(application);
  } catch (error) {
    console.error("Candidature non enregistrée :", error instanceof Error ? error.message : "erreur inconnue");
    return { ok: false, reason: "unavailable" };
  }
  try {
    await deps.onSaved?.(application);
  } catch {
    // Les e-mails sont secondaires.
  }
  return { ok: true };
}
