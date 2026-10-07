import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Schéma dédié au CMS, séparé du schéma `leads` des demandes.
  await db.execute(sql`CREATE SCHEMA IF NOT EXISTS "cms";`)
  await db.execute(sql`
   CREATE TYPE "cms"."_locales" AS ENUM('fr', 'en-gb');
  CREATE TYPE "cms"."enum_users_role" AS ENUM('admin', 'editor', 'medical-reviewer');
  CREATE TYPE "cms"."enum_interventions_intervention_id" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum_interventions_category" AS ENUM('face', 'body', 'breast');
  CREATE TYPE "cms"."enum_interventions_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TYPE "cms"."enum__interventions_v_version_intervention_id" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum__interventions_v_version_category" AS ENUM('face', 'body', 'breast');
  CREATE TYPE "cms"."enum__interventions_v_version_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TABLE "cms"."users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "cms"."users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "cms"."enum_users_role" DEFAULT 'editor' NOT NULL,
  	"qualification" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "cms"."interventions_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."interventions_indications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."interventions_contraindications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."interventions_risks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"detail" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."interventions_recovery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."interventions_alternatives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."interventions_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."interventions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"intervention_id" "cms"."enum_interventions_intervention_id" NOT NULL,
  	"category" "cms"."enum_interventions_category" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."interventions_locales" (
  	"slug" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"summary" varchar NOT NULL,
  	"procedure_anaesthesia" varchar NOT NULL,
  	"procedure_duration" varchar NOT NULL,
  	"procedure_hospital_stay" varchar NOT NULL,
  	"medical_review_status" "cms"."enum_interventions_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"medical_review_reviewer" varchar,
  	"medical_review_qualification" varchar,
  	"medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."_interventions_v_version_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_interventions_v_version_indications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_interventions_v_version_contraindications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_interventions_v_version_risks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"detail" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_interventions_v_version_recovery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_interventions_v_version_alternatives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_interventions_v_version_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_interventions_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_intervention_id" "cms"."enum__interventions_v_version_intervention_id" NOT NULL,
  	"version_category" "cms"."enum__interventions_v_version_category" NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."_interventions_v_locales" (
  	"version_slug" varchar NOT NULL,
  	"version_title" varchar NOT NULL,
  	"version_summary" varchar NOT NULL,
  	"version_procedure_anaesthesia" varchar NOT NULL,
  	"version_procedure_duration" varchar NOT NULL,
  	"version_procedure_hospital_stay" varchar NOT NULL,
  	"version_medical_review_status" "cms"."enum__interventions_v_version_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"version_medical_review_reviewer" varchar,
  	"version_medical_review_qualification" varchar,
  	"version_medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "cms"."payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"interventions_id" integer
  );
  
  CREATE TABLE "cms"."payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "cms"."payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "cms"."users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_description" ADD CONSTRAINT "interventions_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_indications" ADD CONSTRAINT "interventions_indications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_contraindications" ADD CONSTRAINT "interventions_contraindications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_risks" ADD CONSTRAINT "interventions_risks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_recovery" ADD CONSTRAINT "interventions_recovery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_alternatives" ADD CONSTRAINT "interventions_alternatives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_faq" ADD CONSTRAINT "interventions_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."interventions_locales" ADD CONSTRAINT "interventions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_version_description" ADD CONSTRAINT "_interventions_v_version_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_version_indications" ADD CONSTRAINT "_interventions_v_version_indications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_version_contraindications" ADD CONSTRAINT "_interventions_v_version_contraindications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_version_risks" ADD CONSTRAINT "_interventions_v_version_risks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_version_recovery" ADD CONSTRAINT "_interventions_v_version_recovery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_version_alternatives" ADD CONSTRAINT "_interventions_v_version_alternatives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_version_faq" ADD CONSTRAINT "_interventions_v_version_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v" ADD CONSTRAINT "_interventions_v_parent_id_interventions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."interventions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cms"."_interventions_v_locales" ADD CONSTRAINT "_interventions_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_interventions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "cms"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_interventions_fk" FOREIGN KEY ("interventions_id") REFERENCES "cms"."interventions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "cms"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "cms"."users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "cms"."users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "cms"."users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "cms"."users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "cms"."users" USING btree ("email");
  CREATE INDEX "interventions_description_order_idx" ON "cms"."interventions_description" USING btree ("_order");
  CREATE INDEX "interventions_description_parent_id_idx" ON "cms"."interventions_description" USING btree ("_parent_id");
  CREATE INDEX "interventions_description_locale_idx" ON "cms"."interventions_description" USING btree ("_locale");
  CREATE INDEX "interventions_indications_order_idx" ON "cms"."interventions_indications" USING btree ("_order");
  CREATE INDEX "interventions_indications_parent_id_idx" ON "cms"."interventions_indications" USING btree ("_parent_id");
  CREATE INDEX "interventions_indications_locale_idx" ON "cms"."interventions_indications" USING btree ("_locale");
  CREATE INDEX "interventions_contraindications_order_idx" ON "cms"."interventions_contraindications" USING btree ("_order");
  CREATE INDEX "interventions_contraindications_parent_id_idx" ON "cms"."interventions_contraindications" USING btree ("_parent_id");
  CREATE INDEX "interventions_contraindications_locale_idx" ON "cms"."interventions_contraindications" USING btree ("_locale");
  CREATE INDEX "interventions_risks_order_idx" ON "cms"."interventions_risks" USING btree ("_order");
  CREATE INDEX "interventions_risks_parent_id_idx" ON "cms"."interventions_risks" USING btree ("_parent_id");
  CREATE INDEX "interventions_risks_locale_idx" ON "cms"."interventions_risks" USING btree ("_locale");
  CREATE INDEX "interventions_recovery_order_idx" ON "cms"."interventions_recovery" USING btree ("_order");
  CREATE INDEX "interventions_recovery_parent_id_idx" ON "cms"."interventions_recovery" USING btree ("_parent_id");
  CREATE INDEX "interventions_recovery_locale_idx" ON "cms"."interventions_recovery" USING btree ("_locale");
  CREATE INDEX "interventions_alternatives_order_idx" ON "cms"."interventions_alternatives" USING btree ("_order");
  CREATE INDEX "interventions_alternatives_parent_id_idx" ON "cms"."interventions_alternatives" USING btree ("_parent_id");
  CREATE INDEX "interventions_alternatives_locale_idx" ON "cms"."interventions_alternatives" USING btree ("_locale");
  CREATE INDEX "interventions_faq_order_idx" ON "cms"."interventions_faq" USING btree ("_order");
  CREATE INDEX "interventions_faq_parent_id_idx" ON "cms"."interventions_faq" USING btree ("_parent_id");
  CREATE INDEX "interventions_faq_locale_idx" ON "cms"."interventions_faq" USING btree ("_locale");
  CREATE UNIQUE INDEX "interventions_intervention_id_idx" ON "cms"."interventions" USING btree ("intervention_id");
  CREATE INDEX "interventions_updated_at_idx" ON "cms"."interventions" USING btree ("updated_at");
  CREATE INDEX "interventions_created_at_idx" ON "cms"."interventions" USING btree ("created_at");
  CREATE UNIQUE INDEX "interventions_slug_idx" ON "cms"."interventions_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "interventions_locales_locale_parent_id_unique" ON "cms"."interventions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_interventions_v_version_description_order_idx" ON "cms"."_interventions_v_version_description" USING btree ("_order");
  CREATE INDEX "_interventions_v_version_description_parent_id_idx" ON "cms"."_interventions_v_version_description" USING btree ("_parent_id");
  CREATE INDEX "_interventions_v_version_description_locale_idx" ON "cms"."_interventions_v_version_description" USING btree ("_locale");
  CREATE INDEX "_interventions_v_version_indications_order_idx" ON "cms"."_interventions_v_version_indications" USING btree ("_order");
  CREATE INDEX "_interventions_v_version_indications_parent_id_idx" ON "cms"."_interventions_v_version_indications" USING btree ("_parent_id");
  CREATE INDEX "_interventions_v_version_indications_locale_idx" ON "cms"."_interventions_v_version_indications" USING btree ("_locale");
  CREATE INDEX "_interventions_v_version_contraindications_order_idx" ON "cms"."_interventions_v_version_contraindications" USING btree ("_order");
  CREATE INDEX "_interventions_v_version_contraindications_parent_id_idx" ON "cms"."_interventions_v_version_contraindications" USING btree ("_parent_id");
  CREATE INDEX "_interventions_v_version_contraindications_locale_idx" ON "cms"."_interventions_v_version_contraindications" USING btree ("_locale");
  CREATE INDEX "_interventions_v_version_risks_order_idx" ON "cms"."_interventions_v_version_risks" USING btree ("_order");
  CREATE INDEX "_interventions_v_version_risks_parent_id_idx" ON "cms"."_interventions_v_version_risks" USING btree ("_parent_id");
  CREATE INDEX "_interventions_v_version_risks_locale_idx" ON "cms"."_interventions_v_version_risks" USING btree ("_locale");
  CREATE INDEX "_interventions_v_version_recovery_order_idx" ON "cms"."_interventions_v_version_recovery" USING btree ("_order");
  CREATE INDEX "_interventions_v_version_recovery_parent_id_idx" ON "cms"."_interventions_v_version_recovery" USING btree ("_parent_id");
  CREATE INDEX "_interventions_v_version_recovery_locale_idx" ON "cms"."_interventions_v_version_recovery" USING btree ("_locale");
  CREATE INDEX "_interventions_v_version_alternatives_order_idx" ON "cms"."_interventions_v_version_alternatives" USING btree ("_order");
  CREATE INDEX "_interventions_v_version_alternatives_parent_id_idx" ON "cms"."_interventions_v_version_alternatives" USING btree ("_parent_id");
  CREATE INDEX "_interventions_v_version_alternatives_locale_idx" ON "cms"."_interventions_v_version_alternatives" USING btree ("_locale");
  CREATE INDEX "_interventions_v_version_faq_order_idx" ON "cms"."_interventions_v_version_faq" USING btree ("_order");
  CREATE INDEX "_interventions_v_version_faq_parent_id_idx" ON "cms"."_interventions_v_version_faq" USING btree ("_parent_id");
  CREATE INDEX "_interventions_v_version_faq_locale_idx" ON "cms"."_interventions_v_version_faq" USING btree ("_locale");
  CREATE INDEX "_interventions_v_parent_idx" ON "cms"."_interventions_v" USING btree ("parent_id");
  CREATE INDEX "_interventions_v_version_version_intervention_id_idx" ON "cms"."_interventions_v" USING btree ("version_intervention_id");
  CREATE INDEX "_interventions_v_version_version_updated_at_idx" ON "cms"."_interventions_v" USING btree ("version_updated_at");
  CREATE INDEX "_interventions_v_version_version_created_at_idx" ON "cms"."_interventions_v" USING btree ("version_created_at");
  CREATE INDEX "_interventions_v_created_at_idx" ON "cms"."_interventions_v" USING btree ("created_at");
  CREATE INDEX "_interventions_v_updated_at_idx" ON "cms"."_interventions_v" USING btree ("updated_at");
  CREATE INDEX "_interventions_v_version_version_slug_idx" ON "cms"."_interventions_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_interventions_v_locales_locale_parent_id_unique" ON "cms"."_interventions_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "cms"."payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "cms"."payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "cms"."payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "cms"."payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "cms"."payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "cms"."payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "cms"."payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_interventions_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("interventions_id");
  CREATE INDEX "payload_preferences_key_idx" ON "cms"."payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "cms"."payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "cms"."payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "cms"."payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "cms"."payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "cms"."payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "cms"."payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "cms"."payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "cms"."payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "cms"."users_sessions" CASCADE;
  DROP TABLE "cms"."users" CASCADE;
  DROP TABLE "cms"."interventions_description" CASCADE;
  DROP TABLE "cms"."interventions_indications" CASCADE;
  DROP TABLE "cms"."interventions_contraindications" CASCADE;
  DROP TABLE "cms"."interventions_risks" CASCADE;
  DROP TABLE "cms"."interventions_recovery" CASCADE;
  DROP TABLE "cms"."interventions_alternatives" CASCADE;
  DROP TABLE "cms"."interventions_faq" CASCADE;
  DROP TABLE "cms"."interventions" CASCADE;
  DROP TABLE "cms"."interventions_locales" CASCADE;
  DROP TABLE "cms"."_interventions_v_version_description" CASCADE;
  DROP TABLE "cms"."_interventions_v_version_indications" CASCADE;
  DROP TABLE "cms"."_interventions_v_version_contraindications" CASCADE;
  DROP TABLE "cms"."_interventions_v_version_risks" CASCADE;
  DROP TABLE "cms"."_interventions_v_version_recovery" CASCADE;
  DROP TABLE "cms"."_interventions_v_version_alternatives" CASCADE;
  DROP TABLE "cms"."_interventions_v_version_faq" CASCADE;
  DROP TABLE "cms"."_interventions_v" CASCADE;
  DROP TABLE "cms"."_interventions_v_locales" CASCADE;
  DROP TABLE "cms"."payload_kv" CASCADE;
  DROP TABLE "cms"."payload_locked_documents" CASCADE;
  DROP TABLE "cms"."payload_locked_documents_rels" CASCADE;
  DROP TABLE "cms"."payload_preferences" CASCADE;
  DROP TABLE "cms"."payload_preferences_rels" CASCADE;
  DROP TABLE "cms"."payload_migrations" CASCADE;
  DROP TYPE "cms"."_locales";
  DROP TYPE "cms"."enum_users_role";
  DROP TYPE "cms"."enum_interventions_intervention_id";
  DROP TYPE "cms"."enum_interventions_category";
  DROP TYPE "cms"."enum_interventions_medical_review_status";
  DROP TYPE "cms"."enum__interventions_v_version_intervention_id";
  DROP TYPE "cms"."enum__interventions_v_version_category";
  DROP TYPE "cms"."enum__interventions_v_version_medical_review_status";`)
}
