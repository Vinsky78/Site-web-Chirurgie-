import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema/index.ts",
  out: "./src/db/migrations",
  schemaFilter: ["leads"],
  dbCredentials: { url: process.env.DATABASE_URL ?? "postgres://chirurgie:chirurgie@localhost:5432/chirurgie" },
});
