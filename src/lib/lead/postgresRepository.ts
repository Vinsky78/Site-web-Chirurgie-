import type { Database } from "@/db/client";
import { consents, requestHealth, requests } from "@/db/schema";
import { blindIndex, encrypt, encryptOptional, type Keyring } from "@/lib/crypto/fieldCrypto";
import type { LeadRepository, StoredLead } from "./repository";

/** Durée de conservation d'une demande sur la plateforme (Phase 1 : 6 mois). */
export const LEAD_RETENTION_MONTHS = 6;

/** Version des textes de consentement affichés ; à incrémenter à chaque changement de formulation. */
export const CONSENT_TEXT_VERSION = "2026-10-07";

export function deleteAfter(createdAt: Date): Date {
  const date = new Date(createdAt);
  date.setUTCMonth(date.getUTCMonth() + LEAD_RETENTION_MONTHS);
  return date;
}

export class PostgresLeadRepository implements LeadRepository {
  constructor(
    private readonly db: Database,
    private readonly keyring: Keyring,
  ) {}

  async save(lead: StoredLead): Promise<void> {
    const createdAt = new Date(lead.createdAt);
    const health = {
      smoker: lead.smoker,
      previousSurgerySameArea: lead.previousSurgerySameArea,
      pregnancyPlanned: lead.pregnancyPlanned,
    };

    await this.db.transaction(async (tx) => {
      await tx.insert(requests).values({
        id: lead.id,
        locale: lead.locale,
        interventionId: lead.interventionId,
        country: lead.country,
        city: lead.city,
        timeframe: lead.timeframe,
        budget: lead.budget,
        firstNameEnc: encrypt(lead.firstName, this.keyring),
        emailEnc: encrypt(lead.email, this.keyring),
        phoneEnc: encryptOptional(lead.phone, this.keyring),
        emailHash: blindIndex(lead.email, this.keyring),
        birthYear: lead.birthYear,
        createdAt,
        deleteAfter: deleteAfter(createdAt),
      });

      await tx.insert(requestHealth).values({
        requestId: lead.id,
        payloadEnc: encrypt(JSON.stringify(health), this.keyring),
      });

      await tx.insert(consents).values([
        { requestId: lead.id, type: "health_data", textVersion: CONSENT_TEXT_VERSION, grantedAt: createdAt },
        ...(lead.consentNewsletter
          ? [{ requestId: lead.id, type: "newsletter" as const, textVersion: CONSENT_TEXT_VERSION, grantedAt: createdAt }]
          : []),
      ]);
    });
  }
}
