import { drizzle } from "drizzle-orm/postgres-js";
import type { PgDatabase, PgQueryResultHKT } from "drizzle-orm/pg-core";
import postgres from "postgres";
import * as schema from "./schema";

/** Base de données Drizzle, quel que soit le pilote (postgres.js en production, PGlite dans les tests). */
export type Database = PgDatabase<PgQueryResultHKT, typeof schema>;

let instance: Database | undefined;

export function getDb(url: string = requireDatabaseUrl()): Database {
  if (!instance) {
    // Taille de pool modeste : une instance applicative par conteneur.
    instance = drizzle(postgres(url, { max: 5 }), { schema });
  }
  return instance;
}

export function requireDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL n'est pas défini.");
  return url;
}
