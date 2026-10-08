import type { ApplicationInput } from "./schema";

/** Candidature telle qu'elle est enregistrée : sans les champs d'anti-spam ni le consentement. */
export type StoredApplication = Omit<ApplicationInput, "website" | "startedAt" | "consent"> & { locale: string };

export interface ApplicationRepository {
  save(application: StoredApplication): Promise<void>;
}

/** Développement et tests de bout en bout : en mémoire, jamais journalisé. */
class InMemoryApplicationRepository implements ApplicationRepository {
  private readonly applications: StoredApplication[] = [];

  async save(application: StoredApplication): Promise<void> {
    this.applications.push(application);
  }
}

/** Collection `surgeon-applications` du CMS, traitée dans /admin. */
class CmsApplicationRepository implements ApplicationRepository {
  async save(application: StoredApplication): Promise<void> {
    const [{ default: config }, { getPayload }] = await Promise.all([import("@payload-config"), import("payload")]);
    const payload = await getPayload({ config });
    await payload.create({
      collection: "surgeon-applications",
      data: { ...application, status: "new" },
      // Le site crée la candidature ; personne ne peut le faire par l'API.
      overrideAccess: true,
    });
  }
}

class NotConfiguredApplicationRepository implements ApplicationRepository {
  async save(): Promise<void> {
    throw new Error("APPLICATION_STORAGE_NOT_CONFIGURED");
  }
}

let instance: ApplicationRepository | undefined;

/** Même règle que les demandes : mémoire en développement ou avec LEAD_STORAGE=memory, CMS si la base est configurée. */
export function getApplicationRepository(): ApplicationRepository {
  if (!instance) {
    if (process.env.LEAD_STORAGE === "memory" || (process.env.NODE_ENV !== "production" && !process.env.DATABASE_URL)) {
      instance = new InMemoryApplicationRepository();
    } else if (process.env.DATABASE_URL && process.env.PAYLOAD_SECRET) {
      instance = new CmsApplicationRepository();
    } else {
      instance = new NotConfiguredApplicationRepository();
    }
  }
  return instance;
}
