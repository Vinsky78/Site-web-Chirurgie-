import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { routing } from "./i18n/routing";
import { Interventions } from "./cms/collections/Interventions";
import { Users } from "./cms/collections/Users";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * CMS Payload, servi par la même application Next.js (/admin).
 * Tables dans le schéma PostgreSQL `cms`, séparé du schéma `leads` des
 * demandes. Évolutions de structure par migrations (`npm run cms:migrate`),
 * jamais par synchronisation automatique.
 */
export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  serverURL: process.env.NEXT_PUBLIC_SITE_URL,
  telemetry: false,
  admin: {
    user: Users.slug,
    importMap: { baseDir: dirname },
    meta: { titleSuffix: " · Éclaira CMS" },
  },
  collections: [Users, Interventions],
  editor: lexicalEditor(),
  localization: {
    locales: [...routing.locales],
    defaultLocale: routing.defaultLocale,
    // Pas de repli : une fiche absente d'un marché n'y est pas publiée.
    fallback: false,
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL },
    schemaName: "cms",
    push: false,
    migrationDir: path.resolve(dirname, "db/cms-migrations"),
  }),
  graphQL: { disable: true },
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
});
