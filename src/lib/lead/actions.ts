"use server";

import { getLocale } from "next-intl/server";
import { isLocale } from "@/i18n/routing";
import { getListedSurgeons } from "@/content/surgeons";
import { COUNTRY_CODES, type CountryCode } from "@/lib/countries";
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
  return submitLead(input, locale, {
    repository,
    availableSurgeons: async (country, interventionId) => {
      if (!(COUNTRY_CODES as readonly string[]).includes(country) || !isLocale(locale)) return [];
      const surgeons = await getListedSurgeons(country as CountryCode, locale);
      return surgeons.filter((s) => (s.interventions as string[]).includes(interventionId)).map((s) => s.slug);
    },
  });
}
