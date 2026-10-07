import { boolean, index, integer, pgSchema, primaryKey, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Schéma `pro` : comptes de l'espace professionnel (chirurgiens, assistants)
 * et de l'équipe interne, gérés par Better Auth (src/lib/auth).
 *
 * Les noms de propriétés suivent ceux attendus par Better Auth (user, session,
 * account, verification, twoFactor). Aucune donnée de santé ici.
 */
export const pro = pgSchema("pro");

export const PRO_ROLES = ["surgeon", "assistant", "staff"] as const;
export type ProRole = (typeof PRO_ROLES)[number];

export const proUsers = pro.table("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  /** surgeon et assistant : espace pro ; staff : équipe interne (accès à /admin). */
  role: text("role", { enum: PRO_ROLES }).notNull().default("surgeon"),
  twoFactorEnabled: boolean("two_factor_enabled").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const proSessions = pro.table(
  "sessions",
  {
    id: text("id").primaryKey(),
    token: text("token").notNull().unique(),
    userId: text("user_id")
      .notNull()
      .references(() => proUsers.id, { onDelete: "cascade" }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("sessions_user_id_idx").on(t.userId)],
);

/** Identifiants de connexion ; le mot de passe est haché (scrypt) par Better Auth. */
export const proAccounts = pro.table(
  "accounts",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => proUsers.id, { onDelete: "cascade" }),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("accounts_user_id_idx").on(t.userId)],
);

export const proVerifications = pro.table("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Secret TOTP et codes de secours, chiffrés par Better Auth avec BETTER_AUTH_SECRET. */
export const proTwoFactors = pro.table(
  "two_factors",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => proUsers.id, { onDelete: "cascade" }),
    secret: text("secret").notNull(),
    backupCodes: text("backup_codes").notNull(),
    verified: boolean("verified").notNull().default(true),
    failedVerificationCount: integer("failed_verification_count").notNull().default(0),
    lockedUntil: timestamp("locked_until", { withTimezone: true }),
  },
  (t) => [index("two_factors_user_id_idx").on(t.userId), index("two_factors_secret_idx").on(t.secret)],
);

/**
 * Lien entre un compte et une fiche de l'annuaire (slug). Un chirurgien et
 * ses assistants partagent la même fiche, donc les mêmes demandes.
 */
export const surgeonLinks = pro.table(
  "surgeon_links",
  {
    userId: text("user_id")
      .notNull()
      .references(() => proUsers.id, { onDelete: "cascade" }),
    surgeonSlug: text("surgeon_slug").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.surgeonSlug] }), index("surgeon_links_slug_idx").on(t.surgeonSlug)],
);
