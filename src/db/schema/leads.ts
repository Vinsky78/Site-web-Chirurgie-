import { index, integer, pgSchema, text, timestamp, uuid } from "drizzle-orm/pg-core";

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
