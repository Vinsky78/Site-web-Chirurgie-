import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "cms"."enum_intervention_subpages_intervention_id" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum_intervention_subpages_kind" AS ENUM('risks', 'cost', 'recovery', 'decision', 'alternatives');
  CREATE TYPE "cms"."enum_intervention_subpages_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TYPE "cms"."enum__intervention_subpages_v_version_intervention_id" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum__intervention_subpages_v_version_kind" AS ENUM('risks', 'cost', 'recovery', 'decision', 'alternatives');
  CREATE TYPE "cms"."enum__intervention_subpages_v_version_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TYPE "cms"."enum_guides_interventions" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum_guides_guide_id" AS ENUM('choosing-a-surgeon', 'surgery-abroad', 'preparing-consultation', 'quote-and-cooling-off', 'warning-signs-after-surgery', 'right-time');
  CREATE TYPE "cms"."enum_guides_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TYPE "cms"."enum__guides_v_version_interventions" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum__guides_v_version_guide_id" AS ENUM('choosing-a-surgeon', 'surgery-abroad', 'preparing-consultation', 'quote-and-cooling-off', 'warning-signs-after-surgery', 'right-time');
  CREATE TYPE "cms"."enum__guides_v_version_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TYPE "cms"."enum_glossary_terms_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TYPE "cms"."enum__glossary_terms_v_version_medical_review_status" AS ENUM('draft', 'reviewed');
  CREATE TABLE "cms"."intervention_subpages_sections_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."intervention_subpages_sections_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."intervention_subpages_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."intervention_subpages_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "cms"."intervention_subpages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"intervention_id" "cms"."enum_intervention_subpages_intervention_id" NOT NULL,
  	"kind" "cms"."enum_intervention_subpages_kind" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."intervention_subpages_locales" (
  	"title" varchar NOT NULL,
  	"summary" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"medical_review_status" "cms"."enum_intervention_subpages_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"medical_review_reviewer" varchar,
  	"medical_review_qualification" varchar,
  	"medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."_intervention_subpages_v_version_sections_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_intervention_subpages_v_version_sections_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_intervention_subpages_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_intervention_subpages_v_version_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_intervention_subpages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_intervention_id" "cms"."enum__intervention_subpages_v_version_intervention_id" NOT NULL,
  	"version_kind" "cms"."enum__intervention_subpages_v_version_kind" NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."_intervention_subpages_v_locales" (
  	"version_title" varchar NOT NULL,
  	"version_summary" varchar NOT NULL,
  	"version_answer" varchar NOT NULL,
  	"version_medical_review_status" "cms"."enum__intervention_subpages_v_version_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"version_medical_review_reviewer" varchar,
  	"version_medical_review_qualification" varchar,
  	"version_medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."guides_steps_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."guides_steps_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."guides_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."guides_warning_signs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."guides_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "cms"."guides_interventions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum_guides_interventions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."guides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"guide_id" "cms"."enum_guides_guide_id" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."guides_locales" (
  	"slug" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"summary" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"medical_review_status" "cms"."enum_guides_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"medical_review_reviewer" varchar,
  	"medical_review_qualification" varchar,
  	"medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."_guides_v_version_steps_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_guides_v_version_steps_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_guides_v_version_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_guides_v_version_warning_signs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_guides_v_version_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_guides_v_version_interventions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum__guides_v_version_interventions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."_guides_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_guide_id" "cms"."enum__guides_v_version_guide_id" NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."_guides_v_locales" (
  	"version_slug" varchar NOT NULL,
  	"version_title" varchar NOT NULL,
  	"version_summary" varchar NOT NULL,
  	"version_answer" varchar NOT NULL,
  	"version_medical_review_status" "cms"."enum__guides_v_version_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"version_medical_review_reviewer" varchar,
  	"version_medical_review_qualification" varchar,
  	"version_medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."glossary_terms_aliases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."glossary_terms_detail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cms"."glossary_terms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"term_id" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."glossary_terms_locales" (
  	"slug" varchar NOT NULL,
  	"term" varchar NOT NULL,
  	"definition" varchar NOT NULL,
  	"medical_review_status" "cms"."enum_glossary_terms_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"medical_review_reviewer" varchar,
  	"medical_review_qualification" varchar,
  	"medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cms"."_glossary_terms_v_version_aliases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_glossary_terms_v_version_detail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "cms"."_glossary_terms_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_term_id" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cms"."_glossary_terms_v_locales" (
  	"version_slug" varchar NOT NULL,
  	"version_term" varchar NOT NULL,
  	"version_definition" varchar NOT NULL,
  	"version_medical_review_status" "cms"."enum__glossary_terms_v_version_medical_review_status" DEFAULT 'draft' NOT NULL,
  	"version_medical_review_reviewer" varchar,
  	"version_medical_review_qualification" varchar,
  	"version_medical_review_reviewed_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "cms"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD COLUMN "intervention_subpages_id" integer;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD COLUMN "guides_id" integer;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD COLUMN "glossary_terms_id" integer;
  ALTER TABLE "cms"."intervention_subpages_sections_paragraphs" ADD CONSTRAINT "intervention_subpages_sections_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."intervention_subpages_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."intervention_subpages_sections_bullets" ADD CONSTRAINT "intervention_subpages_sections_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."intervention_subpages_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."intervention_subpages_sections" ADD CONSTRAINT "intervention_subpages_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."intervention_subpages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."intervention_subpages_sources" ADD CONSTRAINT "intervention_subpages_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."intervention_subpages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."intervention_subpages_locales" ADD CONSTRAINT "intervention_subpages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."intervention_subpages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sections_paragraphs" ADD CONSTRAINT "_intervention_subpages_v_version_sections_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_intervention_subpages_v_version_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sections_bullets" ADD CONSTRAINT "_intervention_subpages_v_version_sections_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_intervention_subpages_v_version_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sections" ADD CONSTRAINT "_intervention_subpages_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_intervention_subpages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sources" ADD CONSTRAINT "_intervention_subpages_v_version_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_intervention_subpages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_intervention_subpages_v" ADD CONSTRAINT "_intervention_subpages_v_parent_id_intervention_subpages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."intervention_subpages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cms"."_intervention_subpages_v_locales" ADD CONSTRAINT "_intervention_subpages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_intervention_subpages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."guides_steps_paragraphs" ADD CONSTRAINT "guides_steps_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."guides_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."guides_steps_bullets" ADD CONSTRAINT "guides_steps_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."guides_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."guides_steps" ADD CONSTRAINT "guides_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."guides_warning_signs" ADD CONSTRAINT "guides_warning_signs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."guides_resources" ADD CONSTRAINT "guides_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."guides_interventions" ADD CONSTRAINT "guides_interventions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."guides_locales" ADD CONSTRAINT "guides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v_version_steps_paragraphs" ADD CONSTRAINT "_guides_v_version_steps_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_guides_v_version_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v_version_steps_bullets" ADD CONSTRAINT "_guides_v_version_steps_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_guides_v_version_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v_version_steps" ADD CONSTRAINT "_guides_v_version_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v_version_warning_signs" ADD CONSTRAINT "_guides_v_version_warning_signs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v_version_resources" ADD CONSTRAINT "_guides_v_version_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v_version_interventions" ADD CONSTRAINT "_guides_v_version_interventions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v" ADD CONSTRAINT "_guides_v_parent_id_guides_id_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."guides"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cms"."_guides_v_locales" ADD CONSTRAINT "_guides_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."glossary_terms_aliases" ADD CONSTRAINT "glossary_terms_aliases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."glossary_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."glossary_terms_detail" ADD CONSTRAINT "glossary_terms_detail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."glossary_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."glossary_terms_locales" ADD CONSTRAINT "glossary_terms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."glossary_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_glossary_terms_v_version_aliases" ADD CONSTRAINT "_glossary_terms_v_version_aliases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_glossary_terms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_glossary_terms_v_version_detail" ADD CONSTRAINT "_glossary_terms_v_version_detail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_glossary_terms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."_glossary_terms_v" ADD CONSTRAINT "_glossary_terms_v_parent_id_glossary_terms_id_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."glossary_terms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cms"."_glossary_terms_v_locales" ADD CONSTRAINT "_glossary_terms_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cms"."_glossary_terms_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "intervention_subpages_sections_paragraphs_order_idx" ON "cms"."intervention_subpages_sections_paragraphs" USING btree ("_order");
  CREATE INDEX "intervention_subpages_sections_paragraphs_parent_id_idx" ON "cms"."intervention_subpages_sections_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "intervention_subpages_sections_paragraphs_locale_idx" ON "cms"."intervention_subpages_sections_paragraphs" USING btree ("_locale");
  CREATE INDEX "intervention_subpages_sections_bullets_order_idx" ON "cms"."intervention_subpages_sections_bullets" USING btree ("_order");
  CREATE INDEX "intervention_subpages_sections_bullets_parent_id_idx" ON "cms"."intervention_subpages_sections_bullets" USING btree ("_parent_id");
  CREATE INDEX "intervention_subpages_sections_bullets_locale_idx" ON "cms"."intervention_subpages_sections_bullets" USING btree ("_locale");
  CREATE INDEX "intervention_subpages_sections_order_idx" ON "cms"."intervention_subpages_sections" USING btree ("_order");
  CREATE INDEX "intervention_subpages_sections_parent_id_idx" ON "cms"."intervention_subpages_sections" USING btree ("_parent_id");
  CREATE INDEX "intervention_subpages_sections_locale_idx" ON "cms"."intervention_subpages_sections" USING btree ("_locale");
  CREATE INDEX "intervention_subpages_sources_order_idx" ON "cms"."intervention_subpages_sources" USING btree ("_order");
  CREATE INDEX "intervention_subpages_sources_parent_id_idx" ON "cms"."intervention_subpages_sources" USING btree ("_parent_id");
  CREATE INDEX "intervention_subpages_sources_locale_idx" ON "cms"."intervention_subpages_sources" USING btree ("_locale");
  CREATE INDEX "intervention_subpages_updated_at_idx" ON "cms"."intervention_subpages" USING btree ("updated_at");
  CREATE INDEX "intervention_subpages_created_at_idx" ON "cms"."intervention_subpages" USING btree ("created_at");
  CREATE UNIQUE INDEX "intervention_subpages_locales_locale_parent_id_unique" ON "cms"."intervention_subpages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_intervention_subpages_v_version_sections_paragraphs_order_idx" ON "cms"."_intervention_subpages_v_version_sections_paragraphs" USING btree ("_order");
  CREATE INDEX "_intervention_subpages_v_version_sections_paragraphs_parent_id_idx" ON "cms"."_intervention_subpages_v_version_sections_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_intervention_subpages_v_version_sections_paragraphs_locale_idx" ON "cms"."_intervention_subpages_v_version_sections_paragraphs" USING btree ("_locale");
  CREATE INDEX "_intervention_subpages_v_version_sections_bullets_order_idx" ON "cms"."_intervention_subpages_v_version_sections_bullets" USING btree ("_order");
  CREATE INDEX "_intervention_subpages_v_version_sections_bullets_parent_id_idx" ON "cms"."_intervention_subpages_v_version_sections_bullets" USING btree ("_parent_id");
  CREATE INDEX "_intervention_subpages_v_version_sections_bullets_locale_idx" ON "cms"."_intervention_subpages_v_version_sections_bullets" USING btree ("_locale");
  CREATE INDEX "_intervention_subpages_v_version_sections_order_idx" ON "cms"."_intervention_subpages_v_version_sections" USING btree ("_order");
  CREATE INDEX "_intervention_subpages_v_version_sections_parent_id_idx" ON "cms"."_intervention_subpages_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_intervention_subpages_v_version_sections_locale_idx" ON "cms"."_intervention_subpages_v_version_sections" USING btree ("_locale");
  CREATE INDEX "_intervention_subpages_v_version_sources_order_idx" ON "cms"."_intervention_subpages_v_version_sources" USING btree ("_order");
  CREATE INDEX "_intervention_subpages_v_version_sources_parent_id_idx" ON "cms"."_intervention_subpages_v_version_sources" USING btree ("_parent_id");
  CREATE INDEX "_intervention_subpages_v_version_sources_locale_idx" ON "cms"."_intervention_subpages_v_version_sources" USING btree ("_locale");
  CREATE INDEX "_intervention_subpages_v_parent_idx" ON "cms"."_intervention_subpages_v" USING btree ("parent_id");
  CREATE INDEX "_intervention_subpages_v_version_version_updated_at_idx" ON "cms"."_intervention_subpages_v" USING btree ("version_updated_at");
  CREATE INDEX "_intervention_subpages_v_version_version_created_at_idx" ON "cms"."_intervention_subpages_v" USING btree ("version_created_at");
  CREATE INDEX "_intervention_subpages_v_created_at_idx" ON "cms"."_intervention_subpages_v" USING btree ("created_at");
  CREATE INDEX "_intervention_subpages_v_updated_at_idx" ON "cms"."_intervention_subpages_v" USING btree ("updated_at");
  CREATE UNIQUE INDEX "_intervention_subpages_v_locales_locale_parent_id_unique" ON "cms"."_intervention_subpages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "guides_steps_paragraphs_order_idx" ON "cms"."guides_steps_paragraphs" USING btree ("_order");
  CREATE INDEX "guides_steps_paragraphs_parent_id_idx" ON "cms"."guides_steps_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "guides_steps_paragraphs_locale_idx" ON "cms"."guides_steps_paragraphs" USING btree ("_locale");
  CREATE INDEX "guides_steps_bullets_order_idx" ON "cms"."guides_steps_bullets" USING btree ("_order");
  CREATE INDEX "guides_steps_bullets_parent_id_idx" ON "cms"."guides_steps_bullets" USING btree ("_parent_id");
  CREATE INDEX "guides_steps_bullets_locale_idx" ON "cms"."guides_steps_bullets" USING btree ("_locale");
  CREATE INDEX "guides_steps_order_idx" ON "cms"."guides_steps" USING btree ("_order");
  CREATE INDEX "guides_steps_parent_id_idx" ON "cms"."guides_steps" USING btree ("_parent_id");
  CREATE INDEX "guides_steps_locale_idx" ON "cms"."guides_steps" USING btree ("_locale");
  CREATE INDEX "guides_warning_signs_order_idx" ON "cms"."guides_warning_signs" USING btree ("_order");
  CREATE INDEX "guides_warning_signs_parent_id_idx" ON "cms"."guides_warning_signs" USING btree ("_parent_id");
  CREATE INDEX "guides_warning_signs_locale_idx" ON "cms"."guides_warning_signs" USING btree ("_locale");
  CREATE INDEX "guides_resources_order_idx" ON "cms"."guides_resources" USING btree ("_order");
  CREATE INDEX "guides_resources_parent_id_idx" ON "cms"."guides_resources" USING btree ("_parent_id");
  CREATE INDEX "guides_resources_locale_idx" ON "cms"."guides_resources" USING btree ("_locale");
  CREATE INDEX "guides_interventions_order_idx" ON "cms"."guides_interventions" USING btree ("order");
  CREATE INDEX "guides_interventions_parent_idx" ON "cms"."guides_interventions" USING btree ("parent_id");
  CREATE UNIQUE INDEX "guides_guide_id_idx" ON "cms"."guides" USING btree ("guide_id");
  CREATE INDEX "guides_updated_at_idx" ON "cms"."guides" USING btree ("updated_at");
  CREATE INDEX "guides_created_at_idx" ON "cms"."guides" USING btree ("created_at");
  CREATE UNIQUE INDEX "guides_slug_idx" ON "cms"."guides_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "guides_locales_locale_parent_id_unique" ON "cms"."guides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_guides_v_version_steps_paragraphs_order_idx" ON "cms"."_guides_v_version_steps_paragraphs" USING btree ("_order");
  CREATE INDEX "_guides_v_version_steps_paragraphs_parent_id_idx" ON "cms"."_guides_v_version_steps_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_steps_paragraphs_locale_idx" ON "cms"."_guides_v_version_steps_paragraphs" USING btree ("_locale");
  CREATE INDEX "_guides_v_version_steps_bullets_order_idx" ON "cms"."_guides_v_version_steps_bullets" USING btree ("_order");
  CREATE INDEX "_guides_v_version_steps_bullets_parent_id_idx" ON "cms"."_guides_v_version_steps_bullets" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_steps_bullets_locale_idx" ON "cms"."_guides_v_version_steps_bullets" USING btree ("_locale");
  CREATE INDEX "_guides_v_version_steps_order_idx" ON "cms"."_guides_v_version_steps" USING btree ("_order");
  CREATE INDEX "_guides_v_version_steps_parent_id_idx" ON "cms"."_guides_v_version_steps" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_steps_locale_idx" ON "cms"."_guides_v_version_steps" USING btree ("_locale");
  CREATE INDEX "_guides_v_version_warning_signs_order_idx" ON "cms"."_guides_v_version_warning_signs" USING btree ("_order");
  CREATE INDEX "_guides_v_version_warning_signs_parent_id_idx" ON "cms"."_guides_v_version_warning_signs" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_warning_signs_locale_idx" ON "cms"."_guides_v_version_warning_signs" USING btree ("_locale");
  CREATE INDEX "_guides_v_version_resources_order_idx" ON "cms"."_guides_v_version_resources" USING btree ("_order");
  CREATE INDEX "_guides_v_version_resources_parent_id_idx" ON "cms"."_guides_v_version_resources" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_resources_locale_idx" ON "cms"."_guides_v_version_resources" USING btree ("_locale");
  CREATE INDEX "_guides_v_version_interventions_order_idx" ON "cms"."_guides_v_version_interventions" USING btree ("order");
  CREATE INDEX "_guides_v_version_interventions_parent_idx" ON "cms"."_guides_v_version_interventions" USING btree ("parent_id");
  CREATE INDEX "_guides_v_parent_idx" ON "cms"."_guides_v" USING btree ("parent_id");
  CREATE INDEX "_guides_v_version_version_guide_id_idx" ON "cms"."_guides_v" USING btree ("version_guide_id");
  CREATE INDEX "_guides_v_version_version_updated_at_idx" ON "cms"."_guides_v" USING btree ("version_updated_at");
  CREATE INDEX "_guides_v_version_version_created_at_idx" ON "cms"."_guides_v" USING btree ("version_created_at");
  CREATE INDEX "_guides_v_created_at_idx" ON "cms"."_guides_v" USING btree ("created_at");
  CREATE INDEX "_guides_v_updated_at_idx" ON "cms"."_guides_v" USING btree ("updated_at");
  CREATE INDEX "_guides_v_version_version_slug_idx" ON "cms"."_guides_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_guides_v_locales_locale_parent_id_unique" ON "cms"."_guides_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "glossary_terms_aliases_order_idx" ON "cms"."glossary_terms_aliases" USING btree ("_order");
  CREATE INDEX "glossary_terms_aliases_parent_id_idx" ON "cms"."glossary_terms_aliases" USING btree ("_parent_id");
  CREATE INDEX "glossary_terms_aliases_locale_idx" ON "cms"."glossary_terms_aliases" USING btree ("_locale");
  CREATE INDEX "glossary_terms_detail_order_idx" ON "cms"."glossary_terms_detail" USING btree ("_order");
  CREATE INDEX "glossary_terms_detail_parent_id_idx" ON "cms"."glossary_terms_detail" USING btree ("_parent_id");
  CREATE INDEX "glossary_terms_detail_locale_idx" ON "cms"."glossary_terms_detail" USING btree ("_locale");
  CREATE UNIQUE INDEX "glossary_terms_term_id_idx" ON "cms"."glossary_terms" USING btree ("term_id");
  CREATE INDEX "glossary_terms_updated_at_idx" ON "cms"."glossary_terms" USING btree ("updated_at");
  CREATE INDEX "glossary_terms_created_at_idx" ON "cms"."glossary_terms" USING btree ("created_at");
  CREATE UNIQUE INDEX "glossary_terms_slug_idx" ON "cms"."glossary_terms_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "glossary_terms_locales_locale_parent_id_unique" ON "cms"."glossary_terms_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_glossary_terms_v_version_aliases_order_idx" ON "cms"."_glossary_terms_v_version_aliases" USING btree ("_order");
  CREATE INDEX "_glossary_terms_v_version_aliases_parent_id_idx" ON "cms"."_glossary_terms_v_version_aliases" USING btree ("_parent_id");
  CREATE INDEX "_glossary_terms_v_version_aliases_locale_idx" ON "cms"."_glossary_terms_v_version_aliases" USING btree ("_locale");
  CREATE INDEX "_glossary_terms_v_version_detail_order_idx" ON "cms"."_glossary_terms_v_version_detail" USING btree ("_order");
  CREATE INDEX "_glossary_terms_v_version_detail_parent_id_idx" ON "cms"."_glossary_terms_v_version_detail" USING btree ("_parent_id");
  CREATE INDEX "_glossary_terms_v_version_detail_locale_idx" ON "cms"."_glossary_terms_v_version_detail" USING btree ("_locale");
  CREATE INDEX "_glossary_terms_v_parent_idx" ON "cms"."_glossary_terms_v" USING btree ("parent_id");
  CREATE INDEX "_glossary_terms_v_version_version_term_id_idx" ON "cms"."_glossary_terms_v" USING btree ("version_term_id");
  CREATE INDEX "_glossary_terms_v_version_version_updated_at_idx" ON "cms"."_glossary_terms_v" USING btree ("version_updated_at");
  CREATE INDEX "_glossary_terms_v_version_version_created_at_idx" ON "cms"."_glossary_terms_v" USING btree ("version_created_at");
  CREATE INDEX "_glossary_terms_v_created_at_idx" ON "cms"."_glossary_terms_v" USING btree ("created_at");
  CREATE INDEX "_glossary_terms_v_updated_at_idx" ON "cms"."_glossary_terms_v" USING btree ("updated_at");
  CREATE INDEX "_glossary_terms_v_version_version_slug_idx" ON "cms"."_glossary_terms_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_glossary_terms_v_locales_locale_parent_id_unique" ON "cms"."_glossary_terms_v_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_intervention_subpages_fk" FOREIGN KEY ("intervention_subpages_id") REFERENCES "cms"."intervention_subpages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guides_fk" FOREIGN KEY ("guides_id") REFERENCES "cms"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_glossary_terms_fk" FOREIGN KEY ("glossary_terms_id") REFERENCES "cms"."glossary_terms"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_intervention_subpages_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("intervention_subpages_id");
  CREATE INDEX "payload_locked_documents_rels_guides_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("guides_id");
  CREATE INDEX "payload_locked_documents_rels_glossary_terms_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("glossary_terms_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cms"."intervention_subpages_sections_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."intervention_subpages_sections_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."intervention_subpages_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."intervention_subpages_sources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."intervention_subpages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."intervention_subpages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sections_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sections_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_intervention_subpages_v_version_sources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_intervention_subpages_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_intervention_subpages_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides_steps_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides_steps_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides_warning_signs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides_interventions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."guides_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v_version_steps_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v_version_steps_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v_version_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v_version_warning_signs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v_version_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v_version_interventions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_guides_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."glossary_terms_aliases" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."glossary_terms_detail" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."glossary_terms" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."glossary_terms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_glossary_terms_v_version_aliases" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_glossary_terms_v_version_detail" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_glossary_terms_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."_glossary_terms_v_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "cms"."intervention_subpages_sections_paragraphs" CASCADE;
  DROP TABLE "cms"."intervention_subpages_sections_bullets" CASCADE;
  DROP TABLE "cms"."intervention_subpages_sections" CASCADE;
  DROP TABLE "cms"."intervention_subpages_sources" CASCADE;
  DROP TABLE "cms"."intervention_subpages" CASCADE;
  DROP TABLE "cms"."intervention_subpages_locales" CASCADE;
  DROP TABLE "cms"."_intervention_subpages_v_version_sections_paragraphs" CASCADE;
  DROP TABLE "cms"."_intervention_subpages_v_version_sections_bullets" CASCADE;
  DROP TABLE "cms"."_intervention_subpages_v_version_sections" CASCADE;
  DROP TABLE "cms"."_intervention_subpages_v_version_sources" CASCADE;
  DROP TABLE "cms"."_intervention_subpages_v" CASCADE;
  DROP TABLE "cms"."_intervention_subpages_v_locales" CASCADE;
  DROP TABLE "cms"."guides_steps_paragraphs" CASCADE;
  DROP TABLE "cms"."guides_steps_bullets" CASCADE;
  DROP TABLE "cms"."guides_steps" CASCADE;
  DROP TABLE "cms"."guides_warning_signs" CASCADE;
  DROP TABLE "cms"."guides_resources" CASCADE;
  DROP TABLE "cms"."guides_interventions" CASCADE;
  DROP TABLE "cms"."guides" CASCADE;
  DROP TABLE "cms"."guides_locales" CASCADE;
  DROP TABLE "cms"."_guides_v_version_steps_paragraphs" CASCADE;
  DROP TABLE "cms"."_guides_v_version_steps_bullets" CASCADE;
  DROP TABLE "cms"."_guides_v_version_steps" CASCADE;
  DROP TABLE "cms"."_guides_v_version_warning_signs" CASCADE;
  DROP TABLE "cms"."_guides_v_version_resources" CASCADE;
  DROP TABLE "cms"."_guides_v_version_interventions" CASCADE;
  DROP TABLE "cms"."_guides_v" CASCADE;
  DROP TABLE "cms"."_guides_v_locales" CASCADE;
  DROP TABLE "cms"."glossary_terms_aliases" CASCADE;
  DROP TABLE "cms"."glossary_terms_detail" CASCADE;
  DROP TABLE "cms"."glossary_terms" CASCADE;
  DROP TABLE "cms"."glossary_terms_locales" CASCADE;
  DROP TABLE "cms"."_glossary_terms_v_version_aliases" CASCADE;
  DROP TABLE "cms"."_glossary_terms_v_version_detail" CASCADE;
  DROP TABLE "cms"."_glossary_terms_v" CASCADE;
  DROP TABLE "cms"."_glossary_terms_v_locales" CASCADE;
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_intervention_subpages_fk";
  
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_guides_fk";
  
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_glossary_terms_fk";
  
  DROP INDEX "cms"."payload_locked_documents_rels_intervention_subpages_id_idx";
  DROP INDEX "cms"."payload_locked_documents_rels_guides_id_idx";
  DROP INDEX "cms"."payload_locked_documents_rels_glossary_terms_id_idx";
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP COLUMN "intervention_subpages_id";
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP COLUMN "guides_id";
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP COLUMN "glossary_terms_id";
  DROP TYPE "cms"."enum_intervention_subpages_intervention_id";
  DROP TYPE "cms"."enum_intervention_subpages_kind";
  DROP TYPE "cms"."enum_intervention_subpages_medical_review_status";
  DROP TYPE "cms"."enum__intervention_subpages_v_version_intervention_id";
  DROP TYPE "cms"."enum__intervention_subpages_v_version_kind";
  DROP TYPE "cms"."enum__intervention_subpages_v_version_medical_review_status";
  DROP TYPE "cms"."enum_guides_interventions";
  DROP TYPE "cms"."enum_guides_guide_id";
  DROP TYPE "cms"."enum_guides_medical_review_status";
  DROP TYPE "cms"."enum__guides_v_version_interventions";
  DROP TYPE "cms"."enum__guides_v_version_guide_id";
  DROP TYPE "cms"."enum__guides_v_version_medical_review_status";
  DROP TYPE "cms"."enum_glossary_terms_medical_review_status";
  DROP TYPE "cms"."enum__glossary_terms_v_version_medical_review_status";`)
}
