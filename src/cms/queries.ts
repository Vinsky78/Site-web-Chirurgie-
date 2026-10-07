import "server-only";
import config from "@payload-config";
import { getPayload } from "payload";
import type { Locale } from "@/i18n/routing";
import type { GlossaryTerm, Guide, Intervention, InterventionSubpage } from "@/content/types";
import { glossaryTermFromCms, guideFromCms, interventionFromCms, subpageFromCms } from "./mapping";

/** Fiches d'une locale, lues par l'API locale de Payload (côté serveur, sans HTTP). */
export async function findInterventionsInCms(locale: Locale): Promise<Intervention[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "interventions",
    locale,
    fallbackLocale: false,
    depth: 0,
    pagination: false,
    sort: "interventionId",
  });
  return docs.flatMap((doc) => interventionFromCms(doc, locale) ?? []);
}

export async function findSubpagesInCms(locale: Locale): Promise<InterventionSubpage[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "intervention-subpages",
    locale,
    fallbackLocale: false,
    depth: 0,
    pagination: false,
  });
  return docs.flatMap((doc) => subpageFromCms(doc, locale) ?? []);
}

export async function findGuidesInCms(locale: Locale): Promise<Guide[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "guides",
    locale,
    fallbackLocale: false,
    depth: 0,
    pagination: false,
    sort: "guideId",
  });
  return docs.flatMap((doc) => guideFromCms(doc, locale) ?? []);
}

export async function findGlossaryInCms(locale: Locale): Promise<GlossaryTerm[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "glossary-terms",
    locale,
    fallbackLocale: false,
    depth: 0,
    pagination: false,
  });
  return docs.flatMap((doc) => glossaryTermFromCms(doc, locale) ?? []);
}
