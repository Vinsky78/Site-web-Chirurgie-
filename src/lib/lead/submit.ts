import { createLeadSchema, isPregnancyRelevant, MIN_FILL_DURATION_MS, type LeadInput } from "./schema";
import type { LeadRepository, StoredLead } from "./repository";

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "invalid"; fieldErrors: Partial<Record<keyof LeadInput, string>> }
  | { ok: false; reason: "underage" | "spam" | "unavailable" };

interface SubmitDeps {
  repository: LeadRepository;
  now?: Date;
  generateId?: () => string;
}

/**
 * Logique métier de la soumission, indépendante de Next.js pour être testée.
 * Aucune donnée de la demande n'est écrite dans les journaux.
 */
export async function submitLead(raw: unknown, locale: string, deps: SubmitDeps): Promise<SubmitResult> {
  const now = deps.now ?? new Date();
  const parsed = createLeadSchema(now).safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof LeadInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof LeadInput | undefined;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    if (fieldErrors.website) return { ok: false, reason: "spam" };
    if (fieldErrors.birthYear === "underage") return { ok: false, reason: "underage" };
    return { ok: false, reason: "invalid", fieldErrors };
  }

  const data = parsed.data;
  if (now.getTime() - data.startedAt < MIN_FILL_DURATION_MS) {
    return { ok: false, reason: "spam" };
  }

  const lead: StoredLead = {
    interventionId: data.interventionId,
    country: data.country,
    city: data.city,
    timeframe: data.timeframe,
    budget: data.budget,
    smoker: data.smoker,
    previousSurgerySameArea: data.previousSurgerySameArea,
    firstName: data.firstName,
    email: data.email,
    phone: data.phone,
    birthYear: data.birthYear,
    isAdult: data.isAdult,
    consentHealthData: data.consentHealthData,
    consentNewsletter: data.consentNewsletter,
    // La question grossesse n'est conservée que lorsqu'elle est pertinente.
    pregnancyPlanned: isPregnancyRelevant(data.interventionId) ? data.pregnancyPlanned : undefined,
    id: deps.generateId?.() ?? crypto.randomUUID(),
    createdAt: now.toISOString(),
    locale,
  };

  try {
    await deps.repository.save(lead);
  } catch {
    return { ok: false, reason: "unavailable" };
  }
  return { ok: true };
}
