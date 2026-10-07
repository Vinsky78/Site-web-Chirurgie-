import type { LeadInput } from "./schema";
import { PostgresLeadRepository } from "./postgres";

/** Demande telle qu'elle est stockée : sans les champs techniques d'anti-spam. */
export type StoredLead = Omit<LeadInput, "website" | "startedAt"> & {
  id: string;
  createdAt: string;
  locale: string;
};

export interface LeadRepository {
  save(lead: StoredLead): Promise<void>;
}

/**
 * Stockage de développement, en mémoire, jamais journalisé.
 * En production, LEAD_STORAGE=postgres et DATABASE_URL (base chez un hébergeur
 * certifié HDS) activent PostgresLeadRepository ; sans cela, la soumission
 * échoue explicitement plutôt que de perdre des données.
 */
class InMemoryLeadRepository implements LeadRepository {
  private readonly leads: StoredLead[] = [];

  async save(lead: StoredLead): Promise<void> {
    this.leads.push(lead);
  }
}

class NotConfiguredLeadRepository implements LeadRepository {
  async save(): Promise<void> {
    throw new Error("LEAD_STORAGE_NOT_CONFIGURED");
  }
}

let instance: LeadRepository | undefined;

export function getLeadRepository(): LeadRepository {
  if (!instance) {
    const mode = process.env.LEAD_STORAGE;
    if (mode === "postgres" && process.env.DATABASE_URL) {
      instance = new PostgresLeadRepository(process.env.DATABASE_URL);
    } else if (process.env.NODE_ENV === "production" && mode !== "memory") {
      instance = new NotConfiguredLeadRepository();
    } else {
      instance = new InMemoryLeadRepository();
    }
  }
  return instance;
}
