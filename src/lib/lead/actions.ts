"use server";

import { getLocale } from "next-intl/server";
import { getLeadRepository, type LeadRepository } from "./repository";
import { submitLead, type SubmitResult } from "./submit";

export async function submitLeadAction(input: unknown): Promise<SubmitResult> {
  const locale = await getLocale();
  let repository: LeadRepository;
  try {
    repository = await getLeadRepository();
  } catch (error) {
    // Erreur de configuration (clés, URL) : journalisée sans aucune donnée du formulaire.
    console.error("Stockage des demandes indisponible :", error instanceof Error ? error.message : "erreur inconnue");
    return { ok: false, reason: "unavailable" };
  }
  return submitLead(input, locale, { repository });
}
