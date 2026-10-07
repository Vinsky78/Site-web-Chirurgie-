import "server-only";
import config from "@payload-config";
import { getPayload } from "payload";
import type { Locale } from "@/i18n/routing";
import type { CountryCode } from "@/lib/countries";
import type { Surgeon } from "@/content/surgeons/types";
import { surgeonFromCms } from "./mapping";

/** Profils vérifiés et abonnés d'un pays (le délai d'un an est contrôlé ensuite par isListed). */
export async function findSurgeonsInCms(country: CountryCode, locale: Locale): Promise<Surgeon[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "surgeons",
    locale,
    fallbackLocale: false,
    depth: 0,
    pagination: false,
    where: {
      country: { equals: country },
      "verification.status": { equals: "verified" },
      subscriptionActive: { equals: true },
    },
  });
  return docs.map(surgeonFromCms);
}
