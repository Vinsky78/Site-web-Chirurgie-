import "server-only";
import config from "@payload-config";
import { getPayload } from "payload";
import type { Locale } from "@/i18n/routing";
import type { Intervention } from "@/content/types";
import { interventionFromCms } from "./mapping";

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
