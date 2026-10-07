import type { LeadInput } from "./schema";

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
 * En production, la base PostgreSQL chez un hébergeur certifié HDS (Phase 4)
 * remplacera cette implémentation ; tant qu'elle n'est pas configurée, la
 * soumission échoue explicitement plutôt que de perdre des données.
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
    instance =
      process.env.NODE_ENV === "production" && process.env.LEAD_STORAGE !== "memory"
        ? new NotConfiguredLeadRepository()
        : new InMemoryLeadRepository();
  }
  return instance;
}
