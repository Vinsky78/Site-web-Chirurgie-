import { and, eq, inArray, ne } from "drizzle-orm";
import type { Database } from "@/db/client";
import { proUsers, surgeonLinks } from "@/db/schema";

/** Adresses des comptes pro (chirurgiens et assistants) reliés à ces fiches. */
export async function proEmailsForSurgeons(db: Database, slugs: string[]): Promise<string[]> {
  if (slugs.length === 0) return [];
  const rows = await db
    .selectDistinct({ email: proUsers.email })
    .from(surgeonLinks)
    .innerJoin(proUsers, eq(proUsers.id, surgeonLinks.userId))
    .where(and(inArray(surgeonLinks.surgeonSlug, slugs), ne(proUsers.role, "staff")));
  return rows.map((r) => r.email);
}
