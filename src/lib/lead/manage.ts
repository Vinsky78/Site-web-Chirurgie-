import { and, eq, gt, isNull } from "drizzle-orm";
import type { Database } from "@/db/client";
import { accessTokens, consents, requestHealth, requestRecipients, requests } from "@/db/schema";
import { decrypt, type Keyring } from "@/lib/crypto/fieldCrypto";
import { hashManageToken, isManageTokenFormat } from "./manageToken";

/**
 * Gestion d'une demande par le patient, via son lien personnel (droit
 * d'accès et d'effacement, RGPD art. 15 et 17). Le jeton n'est jamais stocké
 * en clair ; un jeton inconnu ou expiré ne donne rien.
 */

export interface ManagedRequest {
  id: string;
  createdAt: Date;
  deleteAfter: Date;
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
  recipients: { slug: string; status: "sent" | "viewed" }[];
}

async function requestIdForToken(db: Database, token: string, now: Date): Promise<string | null> {
  if (!isManageTokenFormat(token)) return null;
  const [row] = await db
    .select({ requestId: accessTokens.requestId })
    .from(accessTokens)
    .where(and(eq(accessTokens.tokenHash, hashManageToken(token)), eq(accessTokens.purpose, "manage"), gt(accessTokens.expiresAt, now)));
  return row?.requestId ?? null;
}

export async function findByToken(
  db: Database,
  keyring: Keyring,
  token: string,
  now: Date = new Date(),
): Promise<ManagedRequest | null> {
  const id = await requestIdForToken(db, token, now);
  if (!id) return null;
  const [row] = await db
    .select()
    .from(requests)
    .innerJoin(requestHealth, eq(requestHealth.requestId, requests.id))
    .where(eq(requests.id, id));
  if (!row) return null;
  const recipients = await db
    .select({ slug: requestRecipients.surgeonSlug, status: requestRecipients.status })
    .from(requestRecipients)
    .where(eq(requestRecipients.requestId, id));
  const r = row.requests;
  return {
    id: r.id,
    createdAt: r.createdAt,
    deleteAfter: r.deleteAfter,
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
    recipients,
  };
}

/**
 * Supprime la demande et tout ce qui en dépend (santé, destinataires, journal,
 * lien). Les preuves de consentement restent, marquées retirées, sans lien
 * vers la demande. Renvoie les chirurgiens à prévenir.
 */
export async function deleteByToken(
  db: Database,
  token: string,
  now: Date = new Date(),
): Promise<{ surgeonSlugs: string[]; locale: string } | null> {
  const id = await requestIdForToken(db, token, now);
  if (!id) return null;
  return db.transaction(async (tx) => {
    const recipients = await tx
      .select({ slug: requestRecipients.surgeonSlug })
      .from(requestRecipients)
      .where(eq(requestRecipients.requestId, id));
    await tx
      .update(consents)
      .set({ withdrawnAt: now })
      .where(and(eq(consents.requestId, id), isNull(consents.withdrawnAt)));
    const [deleted] = await tx.delete(requests).where(eq(requests.id, id)).returning({ locale: requests.locale });
    return { surgeonSlugs: recipients.map((r) => r.slug), locale: deleted.locale };
  });
}
