import type { LeadInput } from "./schema";

/** Demande telle qu'elle est stockée : sans les champs techniques d'anti-spam. */
export type StoredLead = Omit<LeadInput, "website" | "startedAt"> & {
  id: string;
  createdAt: string;
  locale: string;
  /** Jeton du lien de gestion envoyé au patient ; seul son hash est enregistré. */
  manageToken: string;
};

export interface LeadRepository {
  save(lead: StoredLead): Promise<void>;
}

/** Stockage de développement, en mémoire, jamais journalisé. */
class InMemoryLeadRepository implements LeadRepository {
  private readonly leads: StoredLead[] = [];

  async save(lead: StoredLead): Promise<void> {
    this.leads.push(lead);
  }
}

/** Production sans base configurée : la soumission échoue plutôt que de perdre des données. */
class NotConfiguredLeadRepository implements LeadRepository {
  async save(): Promise<void> {
    throw new Error("LEAD_STORAGE_NOT_CONFIGURED");
  }
}

let instance: LeadRepository | undefined;

/**
 * - DATABASE_URL défini : PostgreSQL, champs sensibles chiffrés.
 * - Sinon, en développement ou avec LEAD_STORAGE=memory : mémoire (démo, tests).
 * - Sinon, en production : refus explicite.
 */
export async function getLeadRepository(): Promise<LeadRepository> {
  if (!instance) {
    if (process.env.DATABASE_URL) {
      const [{ getDb }, { keyringFromEnv }, { PostgresLeadRepository }] = await Promise.all([
        import("@/db/client"),
        import("@/lib/crypto/fieldCrypto"),
        import("./postgresRepository"),
      ]);
      instance = new PostgresLeadRepository(getDb(), keyringFromEnv());
    } else if (process.env.NODE_ENV !== "production" || process.env.LEAD_STORAGE === "memory") {
      instance = new InMemoryLeadRepository();
    } else {
      instance = new NotConfiguredLeadRepository();
    }
  }
  return instance;
}
