import { cache } from "react";
import type { Locale } from "@/i18n/routing";
import type { CountryCode } from "@/lib/countries";
import { contentSource } from "../interventions";
import { SURGEON_FIXTURES } from "./fixtures";
import { isListed, sortSurgeons } from "./rules";
import type { Surgeon } from "./types";

/**
 * Accès à l'annuaire. Ne renvoie que les chirurgiens publiables (vérifiés
 * depuis moins d'un an et abonnés), triés sans critère commercial.
 * - CONTENT_SOURCE=cms : profils du CMS ;
 * - sinon : chirurgiens fictifs si DIRECTORY_FIXTURES=1, annuaire vide sinon.
 */
const loadCountry = cache(async (country: CountryCode, locale: Locale): Promise<Surgeon[]> => {
  let all: Surgeon[];
  if (contentSource() === "cms") {
    const { findSurgeonsInCms } = await import("@/cms/surgeonQueries");
    all = await findSurgeonsInCms(country, locale);
  } else {
    all = process.env.DIRECTORY_FIXTURES === "1" ? SURGEON_FIXTURES : [];
  }
  const now = new Date();
  return sortSurgeons(all.filter((s) => s.country === country && isListed(s, now)));
});

/** Chirurgiens publiés d'un pays ; la présentation est dans la langue de la page. */
export async function getListedSurgeons(country: CountryCode, locale: Locale): Promise<Surgeon[]> {
  return loadCountry(country, locale);
}

export async function getListedSurgeonBySlug(
  country: CountryCode,
  locale: Locale,
  slug: string,
): Promise<Surgeon | undefined> {
  return (await loadCountry(country, locale)).find((s) => s.slug === slug);
}
