import { lte } from "drizzle-orm";
import type { Database } from "@/db/client";
import { requests } from "@/db/schema";

/**
 * Supprime définitivement les demandes arrivées à échéance, avec leurs données
 * de santé (suppression en cascade). Les preuves de consentement restent, sans
 * lien vers la demande. À exécuter chaque jour (npm run leads:purge).
 */
export async function purgeExpiredLeads(db: Database, now: Date = new Date()): Promise<number> {
  const deleted = await db.delete(requests).where(lte(requests.deleteAfter, now)).returning({ id: requests.id });
  return deleted.length;
}
