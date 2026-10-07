import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "cms"."enum_surgeons_languages" AS ENUM('fr', 'en', 'de', 'nl', 'es', 'it', 'ar', 'pt');
  CREATE TYPE "cms"."enum_surgeons_interventions" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum_surgeons_specialty" AS ENUM('plastic-surgery', 'ent', 'maxillofacial', 'oculoplastic');
  CREATE TYPE "cms"."enum_surgeons_country" AS ENUM('FR', 'GB', 'DE', 'NL', 'BE', 'CH', 'ES', 'IT');
  CREATE TYPE "cms"."enum_surgeons_verification_status" AS ENUM('pending', 'verified', 'suspended');
  CREATE TYPE "cms"."enum__surgeons_v_version_languages" AS ENUM('fr', 'en', 'de', 'nl', 'es', 'it', 'ar', 'pt');
  CREATE TYPE "cms"."enum__surgeons_v_version_interventions" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum__surgeons_v_version_specialty" AS ENUM('plastic-surgery', 'ent', 'maxillofacial', 'oculoplastic');
  CREATE TYPE "cms"."enum__surgeons_v_version_country" AS ENUM('FR', 'GB', 'DE', 'NL', 'BE', 'CH', 'ES', 'IT');
  CREATE TYPE "cms"."enum__surgeons_v_version_verification_status" AS ENUM('pending', 'verified', 'suspended');
  CREATE TABLE "cms"."surgeons_languages" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum_surgeons_languages",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."surgeons_interventions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum_surgeons_interventions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."surgeons" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"display_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"specialty" "cms"."enum_surgeons_specialty" NOT NULL,
  	"country" "cms"."enum_surgeons_country" DEFAULT 'FR' NOT NULL,
  	"registry_number" varchar NOT NULL,
  	"practice_name" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"postal_code" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"city_slug" varchar,
  	"verification_status" "cms"."enum_surgeons_verification_status" DEFAULT 'pending' NOT NULL,
  	"verification_renew" boolean DEFAULT false,
  	"verification_verified_at" timestamp(3) with time zone,
  	"verification_verified_by" varchar,
  	"verification_evidence" varchar,
  	"subscription_active" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."surgeons_locales" (
  	"bio" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."_surgeons_v_version_languages" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum__surgeons_v_version_languages",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."_surgeons_v_version_interventions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum__surgeons_v_version_interventions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."_surgeons_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_display_name" varchar NOT NULL,
  	"version_last_name" varchar NOT NULL,
  	"version_slug" varchar NOT NULL,
  	"version_specialty" "cms"."enum__surgeons_v_version_specialty" NOT NULL,
  	"version_country" "cms"."enum__surgeons_v_version_country" DEFAULT 'FR' NOT NULL,
  	"version_registry_number" varchar NOT NULL,
  	"version_practice_name" varchar NOT NULL,
  	"version_address" varchar NOT NULL,
  	"version_postal_code" varchar NOT NULL,
  	"version_city" varchar NOT NULL,
  	"version_city_slug" varchar,
  	"version_verification_status" "cms"."enum__surgeons_v_version_verification_status" DEFAULT 'pending' NOT NULL,
  	"version_verification_renew" boolean DEFAULT false,
  	"version_verification_verified_at" timestamp(3) with time zone,
  	"version_verification_verified_by" varchar,
  	"version_verification_evidence" varchar,
  	"version_subscription_active" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."_surgeons_v_locales" (
  	"version_bio" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD COLUMN "surgeons_id" integer;
  ALTER TABLE "cms"."surgeons_languages" ADD CONSTRAINT "surgeons_languages_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."surgeons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."surgeons_interventions" ADD CONSTRAINT "surgeons_interventions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."surgeons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."surgeons_locales" ADD CONSTRAINT "surgeons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."surgeons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_surgeons_v_version_languages" ADD CONSTRAINT "_surgeons_v_version_languages_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."_surgeons_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_surgeons_v_version_interventions" ADD CONSTRAINT "_surgeons_v_version_interventions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."_surgeons_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_surgeons_v" ADD CONSTRAINT "_surgeons_v_parent_id_surgeons_id_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."surgeons"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cms"."_surgeons_v_locales" ADD CONSTRAINT "_surgeons_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_surgeons_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "surgeons_languages_order_idx" ON "cms"."surgeons_languages" USING btree ("order");
  CREATE INDEX "surgeons_languages_parent_idx" ON "cms"."surgeons_languages" USING btree ("parent_id");
  CREATE INDEX "surgeons_interventions_order_idx" ON "cms"."surgeons_interventions" USING btree ("order");
  CREATE INDEX "surgeons_interventions_parent_idx" ON "cms"."surgeons_interventions" USING btree ("parent_id");
  CREATE UNIQUE INDEX "surgeons_slug_idx" ON "cms"."surgeons" USING btree ("slug");
  CREATE INDEX "surgeons_city_slug_idx" ON "cms"."surgeons" USING btree ("city_slug");
  CREATE INDEX "surgeons_updated_at_idx" ON "cms"."surgeons" USING btree ("updated_at");
  CREATE INDEX "surgeons_created_at_idx" ON "cms"."surgeons" USING btree ("created_at");
  CREATE UNIQUE INDEX "surgeons_locales_locale_parent_id_unique" ON "cms"."surgeons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_surgeons_v_version_languages_order_idx" ON "cms"."_surgeons_v_version_languages" USING btree ("order");
  CREATE INDEX "_surgeons_v_version_languages_parent_idx" ON "cms"."_surgeons_v_version_languages" USING btree ("parent_id");
  CREATE INDEX "_surgeons_v_version_interventions_order_idx" ON "cms"."_surgeons_v_version_interventions" USING btree ("order");
  CREATE INDEX "_surgeons_v_version_interventions_parent_idx" ON "cms"."_surgeons_v_version_interventions" USING btree ("parent_id");
  CREATE INDEX "_surgeons_v_parent_idx" ON "cms"."_surgeons_v" USING btree ("parent_id");
  CREATE INDEX "_surgeons_v_version_version_slug_idx" ON "cms"."_surgeons_v" USING btree ("version_slug");
  CREATE INDEX "_surgeons_v_version_version_city_slug_idx" ON "cms"."_surgeons_v" USING btree ("version_city_slug");
  CREATE INDEX "_surgeons_v_version_version_updated_at_idx" ON "cms"."_surgeons_v" USING btree ("version_updated_at");
  CREATE INDEX "_surgeons_v_version_version_created_at_idx" ON "cms"."_surgeons_v" USING btree ("version_created_at");
  CREATE INDEX "_surgeons_v_created_at_idx" ON "cms"."_surgeons_v" USING btree ("created_at");
  CREATE INDEX "_surgeons_v_updated_at_idx" ON "cms"."_surgeons_v" USING btree ("updated_at");
  CREATE UNIQUE INDEX "_surgeons_v_locales_locale_parent_id_unique" ON "cms"."_surgeons_v_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_surgeons_fk" FOREIGN KEY ("surgeons_id") REFERENCES "cms"."surgeons"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_surgeons_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("surgeons_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cms"."surgeons_languages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."surgeons_interventions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."surgeons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."surgeons_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_surgeons_v_version_languages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_surgeons_v_version_interventions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_surgeons_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_surgeons_v_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "cms"."surgeons_languages" CASCADE;
  DROP TABLE "cms"."surgeons_interventions" CASCADE;
  DROP TABLE "cms"."surgeons" CASCADE;
  DROP TABLE "cms"."surgeons_locales" CASCADE;
  DROP TABLE "cms"."_surgeons_v_version_languages" CASCADE;
  DROP TABLE "cms"."_surgeons_v_version_interventions" CASCADE;
  DROP TABLE "cms"."_surgeons_v" CASCADE;
  DROP TABLE "cms"."_surgeons_v_locales" CASCADE;
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_surgeons_fk";
  
  DROP INDEX "cms"."payload_locked_documents_rels_surgeons_id_idx";
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP COLUMN "surgeons_id";
  DROP TYPE "cms"."enum_surgeons_languages";
  DROP TYPE "cms"."enum_surgeons_interventions";
  DROP TYPE "cms"."enum_surgeons_specialty";
  DROP TYPE "cms"."enum_surgeons_country";
  DROP TYPE "cms"."enum_surgeons_verification_status";
  DROP TYPE "cms"."enum__surgeons_v_version_languages";
  DROP TYPE "cms"."enum__surgeons_v_version_interventions";
  DROP TYPE "cms"."enum__surgeons_v_version_specialty";
  DROP TYPE "cms"."enum__surgeons_v_version_country";
  DROP TYPE "cms"."enum__surgeons_v_version_verification_status";`)
}
