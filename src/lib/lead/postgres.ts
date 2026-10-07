import type { LeadRepository, StoredLead } from "./repository";

/** Durée de conservation par défaut d'une demande (13 mois), purgée ensuite. */
const RETENTION_MONTHS = 13;

/**
 * Stockage PostgreSQL. À n'activer (LEAD_STORAGE=postgres) qu'avec une base
 * hébergée en UE chez un hébergeur certifié HDS. Requêtes paramétrées uniquement ;
 * aucune donnée de la demande n'est écrite dans les journaux.
 */
export class PostgresLeadRepository implements LeadRepository {
  private poolPromise?: Promise<import("pg").Pool>;

  constructor(private readonly connectionString: string) {}

  private pool() {
    this.poolPromise ??= import("pg").then(
      ({ Pool }) => new Pool({ connectionString: this.connectionString, ssl: { rejectUnauthorized: true }, max: 5 }),
    );
    return this.poolPromise;
  }

  async save(lead: StoredLead): Promise<void> {
    const purgeAfter = new Date(lead.createdAt);
    purgeAfter.setMonth(purgeAfter.getMonth() + RETENTION_MONTHS);

    const pool = await this.pool();
    await pool.query(
      `INSERT INTO leads (
         id, created_at, locale, intervention_id, country, city, timeframe, budget,
         smoker, previous_surgery_same_area, pregnancy_planned, first_name, email, phone,
         birth_year, is_adult, consent_health_data, consent_newsletter, purge_after
       ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)`,
      [
        lead.id, lead.createdAt, lead.locale, lead.interventionId, lead.country, lead.city,
        lead.timeframe, lead.budget, lead.smoker, lead.previousSurgerySameArea,
        lead.pregnancyPlanned ?? null, lead.firstName, lead.email, lead.phone || null,
        lead.birthYear, lead.isAdult, lead.consentHealthData, lead.consentNewsletter ?? false,
        purgeAfter.toISOString(),
      ],
    );
  }
}
