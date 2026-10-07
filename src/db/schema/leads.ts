import { boolean, index, integer, pgSchema, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";

/**
 * Schéma `leads` : demandes de consultation (données de santé).
 *
 * Séparé des contenus et de l'espace pro pour pouvoir restreindre ses droits
 * d'accès au niveau de PostgreSQL. Colonnes suffixées `_enc` : chiffrées par
 * l'application (src/lib/crypto/fieldCrypto.ts) avant l'écriture.
 */
export const leads = pgSchema("leads");

export const requests = leads.table(
  "requests",
  {
    id: uuid("id").primaryKey(),
    locale: text("locale").notNull(),
    interventionId: text("intervention_id").notNull(),
    country: text("country").notNull(),
    city: text("city").notNull(),
    timeframe: text("timeframe").notNull(),
    budget: text("budget").notNull(),
    firstNameEnc: text("first_name_enc").notNull(),
    emailEnc: text("email_enc").notNull(),
    phoneEnc: text("phone_enc"),
    /** HMAC de l'e-mail : retrouver les demandes d'une personne (droit d'accès, effacement) sans déchiffrer. */
    emailHash: text("email_hash").notNull(),
    birthYear: integer("birth_year").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
    /** Date de suppression définitive (création + durée de conservation). */
    deleteAfter: timestamp("delete_after", { withTimezone: true }).notNull(),
  },
  (t) => [index("requests_email_hash_idx").on(t.emailHash), index("requests_delete_after_idx").on(t.deleteAfter)],
);

/** Réponses médicales, dans une table à part et chiffrées d'un bloc. */
export const requestHealth = leads.table("request_health", {
  requestId: uuid("request_id")
    .primaryKey()
    .references(() => requests.id, { onDelete: "cascade" }),
  payloadEnc: text("payload_enc").notNull(),
});

/**
 * Chirurgiens choisis par le patient (1 à 3) : seuls destinataires de la
 * demande. Référencés par leur slug d'annuaire, supprimés avec la demande.
 */
export const requestRecipients = leads.table(
  "request_recipients",
  {
    requestId: uuid("request_id")
      .notNull()
      .references(() => requests.id, { onDelete: "cascade" }),
    surgeonSlug: text("surgeon_slug").notNull(),
    /** sent : pas encore ouverte ; viewed : ouverte dans l'espace pro. */
    status: text("status", { enum: ["sent", "viewed"] }).notNull().default("sent"),
    viewedAt: timestamp("viewed_at", { withTimezone: true }),
    /** Avis du chirurgien en un clic : la demande correspondait-elle à sa pratique ? */
    relevant: boolean("relevant"),
  },
  (t) => [primaryKey({ columns: [t.requestId, t.surgeonSlug] }), index("request_recipients_surgeon_idx").on(t.surgeonSlug)],
);

/**
 * Journal des consultations : chaque ouverture d'une demande dans l'espace pro
 * est tracée (qui, quand). Ajout seulement ; supprimé avec la demande.
 */
export const accessLog = leads.table(
  "access_log",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    requestId: uuid("request_id")
      .notNull()
      .references(() => requests.id, { onDelete: "cascade" }),
    /** Identifiant du compte pro (schéma pro), sans clé étrangère entre schémas. */
    proUserId: text("pro_user_id").notNull(),
    action: text("action", { enum: ["view"] }).notNull(),
    at: timestamp("at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("access_log_request_id_idx").on(t.requestId)],
);

/**
 * Preuves de consentement. Conservées après la purge de la demande (sans
 * aucune donnée de santé) pour pouvoir démontrer le consentement.
 */
export const consents = leads.table(
  "consents",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    requestId: uuid("request_id").references(() => requests.id, { onDelete: "set null" }),
    type: text("type", { enum: ["health_data", "newsletter"] }).notNull(),
    textVersion: text("text_version").notNull(),
    grantedAt: timestamp("granted_at", { withTimezone: true }).notNull(),
    withdrawnAt: timestamp("withdrawn_at", { withTimezone: true }),
  },
  (t) => [index("consents_request_id_idx").on(t.requestId)],
);
