import { isVerified, SURGEONS } from "@/lib/surgeons/directory";
import type { Surgeon } from "@/lib/surgeons/types";
import type { StoredLead } from "./repository";

export const MIN_SURGEONS = 1;
export const MAX_SURGEONS = 3;

/** Envoi d'une demande à un chirurgien (e-mail chiffré, espace pro…). */
export interface Notifier {
  notify(surgeon: Surgeon, lead: StoredLead): Promise<void>;
}

export type DispatchResult =
  | { ok: true; sent: string[] }
  | { ok: false; reason: "selection" | "unknown-surgeon" | "not-eligible" | "unavailable" };

interface DispatchDeps {
  notifier: Notifier;
  surgeons?: Surgeon[];
}

/**
 * Transmet une demande aux chirurgiens choisis par le patient (1 à 3).
 * Règles : chirurgiens vérifiés, même pays, compétents pour l'intervention.
 * Le modèle économique exclut toute rémunération au lead : rien n'est facturé ici.
 * Aucune donnée de la demande n'est journalisée.
 */
export async function dispatchLead(lead: StoredLead, surgeonIds: string[], deps: DispatchDeps): Promise<DispatchResult> {
  const unique = [...new Set(surgeonIds)];
  if (unique.length < MIN_SURGEONS || unique.length > MAX_SURGEONS) return { ok: false, reason: "selection" };

  const directory = deps.surgeons ?? SURGEONS;
  const chosen: Surgeon[] = [];
  for (const id of unique) {
    const surgeon = directory.find((s) => s.id === id);
    if (!surgeon) return { ok: false, reason: "unknown-surgeon" };
    if (!isVerified(surgeon) || surgeon.country !== lead.country || !surgeon.specialties.includes(lead.interventionId)) {
      return { ok: false, reason: "not-eligible" };
    }
    chosen.push(surgeon);
  }

  try {
    for (const surgeon of chosen) await deps.notifier.notify(surgeon, lead);
  } catch {
    return { ok: false, reason: "unavailable" };
  }
  return { ok: true, sent: chosen.map((s) => s.id) };
}
