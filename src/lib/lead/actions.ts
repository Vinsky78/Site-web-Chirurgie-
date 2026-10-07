"use server";

import { after } from "next/server";
import { getLocale } from "next-intl/server";
import { isLocale, type Locale } from "@/i18n/routing";
import { getListedSurgeons } from "@/content/surgeons";
import { getInterventionById } from "@/content/interventions";
import type { InterventionId } from "@/content/types";
import { COUNTRY_CODES, COUNTRY_RULES, type CountryCode } from "@/lib/countries";
import { getEmailSender } from "@/lib/email";
import { absoluteUrl } from "@/lib/seo";
import { notifyNewLead } from "./notify";
import { getLeadRepository, type LeadRepository, type StoredLead } from "./repository";
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
    // Les e-mails partent après la réponse : le patient n'attend pas Brevo.
    onSaved: async (lead) => {
      if (isLocale(locale)) after(() => sendLeadEmails(lead, locale));
    },
  });
}

async function sendLeadEmails(lead: StoredLead, locale: Locale): Promise<void> {
  try {
    const country = lead.country as CountryCode;
    const surgeons = await getListedSurgeons(country, locale);
    await notifyNewLead(lead, locale, {
      sender: getEmailSender(),
      surgeonNames: async (slugs) =>
        slugs.map((slug) => surgeons.find((s) => s.slug === slug)?.displayName).filter((n): n is string => Boolean(n)),
      proEmails: async (slugs) => {
        if (!process.env.DATABASE_URL) return [];
        const [{ getDb }, { proEmailsForSurgeons }] = await Promise.all([
          import("@/db/client"),
          import("@/lib/pro/recipients"),
        ]);
        return proEmailsForSurgeons(getDb(), slugs);
      },
      category: async (id) => {
        const intervention = await getInterventionById(locale, id as InterventionId);
        const { getTranslations } = await import("next-intl/server");
        const t = await getTranslations({ locale, namespace: "categories" });
        return intervention ? t(intervention.category) : "";
      },
      manageUrl: (token) => absoluteUrl(locale, { pathname: "/ma-demande/[token]", params: { token } }),
      proUrl: absoluteUrl(locale, "/pro"),
      reflectionDays: COUNTRY_RULES[country]?.legalReflectionDays ?? null,
    });
  } catch (error) {
    console.error("E-mails de la demande impossibles :", error instanceof Error ? error.message : "erreur inconnue");
  }
}
