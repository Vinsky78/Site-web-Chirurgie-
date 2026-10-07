import { and, desc, eq, inArray } from "drizzle-orm";
import type { Database } from "@/db/client";
import { accessLog, requestHealth, requestRecipients, requests, surgeonLinks } from "@/db/schema";
import { decrypt, type Keyring } from "@/lib/crypto/fieldCrypto";

/**
 * Boîte de réception de l'espace pro. Un compte ne voit que les demandes
 * adressées aux fiches auxquelles il est relié (surgeon_links) : le contrôle
 * est fait ici, dans chaque requête, et pas seulement dans l'interface.
 */

export interface InboxItem {
  id: string;
  createdAt: Date;
  interventionId: string;
  city: string;
  status: "sent" | "viewed";
  relevant: boolean | null;
}

export interface RequestDetail {
  id: string;
  createdAt: Date;
  locale: string;
  interventionId: string;
  country: string;
  city: string;
  timeframe: string;
  budget: string;
  birthYear: number;
  firstName: string;
  email: string;
  phone: string | null;
  health: { smoker: string; previousSurgerySameArea: string; pregnancyPlanned?: string };
  relevant: boolean | null;
}

export async function linkedSurgeonSlugs(db: Database, userId: string): Promise<string[]> {
  const rows = await db.select({ slug: surgeonLinks.surgeonSlug }).from(surgeonLinks).where(eq(surgeonLinks.userId, userId));
  return rows.map((r) => r.slug);
}

/** Liste sans aucune donnée personnelle ni médicale : rien n'est déchiffré avant l'ouverture. */
export async function listInbox(db: Database, slugs: string[]): Promise<InboxItem[]> {
  if (slugs.length === 0) return [];
  const rows = await db
    .select({
      id: requests.id,
      createdAt: requests.createdAt,
      interventionId: requests.interventionId,
      city: requests.city,
      status: requestRecipients.status,
      relevant: requestRecipients.relevant,
    })
    .from(requestRecipients)
    .innerJoin(requests, eq(requests.id, requestRecipients.requestId))
    .where(inArray(requestRecipients.surgeonSlug, slugs))
    .orderBy(desc(requests.createdAt));

  // Un chirurgien relié à plusieurs fiches peut recevoir deux fois la même demande : une ligne par demande.
  const byId = new Map<string, InboxItem>();
  for (const row of rows) {
    const existing = byId.get(row.id);
    if (!existing) byId.set(row.id, row);
    else if (row.status === "sent") existing.status = "sent";
  }
  return [...byId.values()];
}

/**
 * Ouvre une demande : vérifie que le compte en est destinataire, déchiffre,
 * trace la consultation et passe le statut à « ouverte ». Renvoie null sinon.
 */
export async function openRequest(
  db: Database,
  keyring: Keyring,
  { requestId, userId, slugs, now = new Date() }: { requestId: string; userId: string; slugs: string[]; now?: Date },
): Promise<RequestDetail | null> {
  if (slugs.length === 0 || !isUuid(requestId)) return null;
  const recipientScope = and(eq(requestRecipients.requestId, requestId), inArray(requestRecipients.surgeonSlug, slugs));

  const recipients = await db.select().from(requestRecipients).where(recipientScope);
  if (recipients.length === 0) return null;

  const [row] = await db
    .select()
    .from(requests)
    .innerJoin(requestHealth, eq(requestHealth.requestId, requests.id))
    .where(eq(requests.id, requestId));
  if (!row) return null;

  await db.transaction(async (tx) => {
    await tx.insert(accessLog).values({ requestId, proUserId: userId, action: "view", at: now });
    await tx
      .update(requestRecipients)
      .set({ status: "viewed", viewedAt: now })
      .where(and(recipientScope, eq(requestRecipients.status, "sent")));
  });

  const r = row.requests;
  return {
    id: r.id,
    createdAt: r.createdAt,
    locale: r.locale,
    interventionId: r.interventionId,
    country: r.country,
    city: r.city,
    timeframe: r.timeframe,
    budget: r.budget,
    birthYear: r.birthYear,
    firstName: decrypt(r.firstNameEnc, keyring),
    email: decrypt(r.emailEnc, keyring),
    phone: r.phoneEnc ? decrypt(r.phoneEnc, keyring) : null,
    health: JSON.parse(decrypt(row.request_health.payloadEnc, keyring)),
    relevant: recipients.find((x) => x.relevant !== null)?.relevant ?? null,
  };
}

/** Avis en un clic du chirurgien sur la pertinence de la demande. */
export async function markRelevance(
  db: Database,
  { requestId, slugs, relevant }: { requestId: string; slugs: string[]; relevant: boolean },
): Promise<boolean> {
  if (slugs.length === 0 || !isUuid(requestId)) return false;
  const updated = await db
    .update(requestRecipients)
    .set({ relevant })
    .where(and(eq(requestRecipients.requestId, requestId), inArray(requestRecipients.surgeonSlug, slugs)))
    .returning({ requestId: requestRecipients.requestId });
  return updated.length > 0;
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}
