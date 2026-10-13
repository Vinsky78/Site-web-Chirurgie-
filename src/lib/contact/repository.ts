import type { ContactInput } from "./schema";

/** Demande telle qu'elle est enregistrée : sans les champs d'anti-spam ni le consentement. */
export type StoredContact = Omit<ContactInput, "website" | "startedAt" | "consent"> & { locale: string; reference: string };

export interface ContactRepository {
  save(contact: StoredContact): Promise<void>;
}

/** Développement et tests de bout en bout : en mémoire, jamais journalisé. */
class InMemoryContactRepository implements ContactRepository {
  private readonly contacts: StoredContact[] = [];

  async save(contact: StoredContact): Promise<void> {
    this.contacts.push(contact);
  }
}

/** Collection `contact-requests` du CMS, traitée dans /admin. */
class CmsContactRepository implements ContactRepository {
  async save(contact: StoredContact): Promise<void> {
    const [{ default: config }, { getPayload }] = await Promise.all([import("@payload-config"), import("payload")]);
    const payload = await getPayload({ config });
    await payload.create({
      collection: "contact-requests",
      data: { ...contact, status: "new" },
      // Le site crée la demande ; personne ne peut le faire par l'API.
      overrideAccess: true,
    });
  }
}

class NotConfiguredContactRepository implements ContactRepository {
  async save(): Promise<void> {
    throw new Error("CONTACT_STORAGE_NOT_CONFIGURED");
  }
}

let instance: ContactRepository | undefined;

/** Même règle que les candidatures : mémoire en développement ou avec LEAD_STORAGE=memory, CMS si la base est configurée. */
export function getContactRepository(): ContactRepository {
  if (!instance) {
    if (process.env.LEAD_STORAGE === "memory" || (process.env.NODE_ENV !== "production" && !process.env.DATABASE_URL)) {
      instance = new InMemoryContactRepository();
    } else if (process.env.DATABASE_URL && process.env.PAYLOAD_SECRET) {
      instance = new CmsContactRepository();
    } else {
      instance = new NotConfiguredContactRepository();
    }
  }
  return instance;
}
