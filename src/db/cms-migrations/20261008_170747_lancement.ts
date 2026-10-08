import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "cms"."enum_surgeon_applications_interventions" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation');
  CREATE TYPE "cms"."enum_surgeon_applications_languages" AS ENUM('fr', 'en', 'de', 'nl', 'es', 'it', 'ar', 'pt');
  CREATE TYPE "cms"."enum_surgeon_applications_status" AS ENUM('new', 'checking', 'accepted', 'rejected');
  CREATE TYPE "cms"."enum_surgeon_applications_country" AS ENUM('FR', 'GB', 'DE', 'NL', 'BE', 'CH', 'ES', 'IT');
  CREATE TYPE "cms"."enum_surgeon_applications_specialty" AS ENUM('plastic-surgery', 'ent', 'maxillofacial', 'oculoplastic');
  CREATE TABLE "cms"."surgeon_applications_interventions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum_surgeon_applications_interventions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."surgeon_applications_languages" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "cms"."enum_surgeon_applications_languages",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cms"."surgeon_applications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "cms"."enum_surgeon_applications_status" DEFAULT 'new' NOT NULL,
  	"notes" varchar,
  	"full_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"country" "cms"."enum_surgeon_applications_country" NOT NULL,
  	"registry_number" varchar NOT NULL,
  	"specialty" "cms"."enum_surgeon_applications_specialty" NOT NULL,
  	"city" varchar NOT NULL,
  	"locale" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "cms"."surgeons" ADD COLUMN "verification_checks_registry_identity" boolean DEFAULT false;
  ALTER TABLE "cms"."surgeons" ADD COLUMN "verification_checks_specialty_title" boolean DEFAULT false;
  ALTER TABLE "cms"."surgeons" ADD COLUMN "verification_checks_no_sanction" boolean DEFAULT false;
  ALTER TABLE "cms"."surgeons" ADD COLUMN "verification_checks_insurance" boolean DEFAULT false;
  ALTER TABLE "cms"."surgeons" ADD COLUMN "verification_checks_facility" boolean DEFAULT false;
  ALTER TABLE "cms"."surgeons" ADD COLUMN "verification_insurance_expires_at" timestamp(3) with time zone;
  ALTER TABLE "cms"."_surgeons_v" ADD COLUMN "version_verification_checks_registry_identity" boolean DEFAULT false;
  ALTER TABLE "cms"."_surgeons_v" ADD COLUMN "version_verification_checks_specialty_title" boolean DEFAULT false;
  ALTER TABLE "cms"."_surgeons_v" ADD COLUMN "version_verification_checks_no_sanction" boolean DEFAULT false;
  ALTER TABLE "cms"."_surgeons_v" ADD COLUMN "version_verification_checks_insurance" boolean DEFAULT false;
  ALTER TABLE "cms"."_surgeons_v" ADD COLUMN "version_verification_checks_facility" boolean DEFAULT false;
  ALTER TABLE "cms"."_surgeons_v" ADD COLUMN "version_verification_insurance_expires_at" timestamp(3) with time zone;
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD COLUMN "surgeon_applications_id" integer;
  ALTER TABLE "cms"."surgeon_applications_interventions" ADD CONSTRAINT "surgeon_applications_interventions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."surgeon_applications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cms"."surgeon_applications_languages" ADD CONSTRAINT "surgeon_applications_languages_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "cms"."surgeon_applications"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "surgeon_applications_interventions_order_idx" ON "cms"."surgeon_applications_interventions" USING btree ("order");
  CREATE INDEX "surgeon_applications_interventions_parent_idx" ON "cms"."surgeon_applications_interventions" USING btree ("parent_id");
  CREATE INDEX "surgeon_applications_languages_order_idx" ON "cms"."surgeon_applications_languages" USING btree ("order");
  CREATE INDEX "surgeon_applications_languages_parent_idx" ON "cms"."surgeon_applications_languages" USING btree ("parent_id");
  CREATE INDEX "surgeon_applications_updated_at_idx" ON "cms"."surgeon_applications" USING btree ("updated_at");
  CREATE INDEX "surgeon_applications_created_at_idx" ON "cms"."surgeon_applications" USING btree ("created_at");
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_surgeon_applications_fk" FOREIGN KEY ("surgeon_applications_id") REFERENCES "cms"."surgeon_applications"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_surgeon_applications_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("surgeon_applications_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cms"."surgeon_applications_interventions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."surgeon_applications_languages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cms"."surgeon_applications" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "cms"."surgeon_applications_interventions" CASCADE;
  DROP TABLE "cms"."surgeon_applications_languages" CASCADE;
  DROP TABLE "cms"."surgeon_applications" CASCADE;
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_surgeon_applications_fk";
  
  DROP INDEX "cms"."payload_locked_documents_rels_surgeon_applications_id_idx";
  ALTER TABLE "cms"."surgeons" DROP COLUMN "verification_checks_registry_identity";
  ALTER TABLE "cms"."surgeons" DROP COLUMN "verification_checks_specialty_title";
  ALTER TABLE "cms"."surgeons" DROP COLUMN "verification_checks_no_sanction";
  ALTER TABLE "cms"."surgeons" DROP COLUMN "verification_checks_insurance";
  ALTER TABLE "cms"."surgeons" DROP COLUMN "verification_checks_facility";
  ALTER TABLE "cms"."surgeons" DROP COLUMN "verification_insurance_expires_at";
  ALTER TABLE "cms"."_surgeons_v" DROP COLUMN "version_verification_checks_registry_identity";
  ALTER TABLE "cms"."_surgeons_v" DROP COLUMN "version_verification_checks_specialty_title";
  ALTER TABLE "cms"."_surgeons_v" DROP COLUMN "version_verification_checks_no_sanction";
  ALTER TABLE "cms"."_surgeons_v" DROP COLUMN "version_verification_checks_insurance";
  ALTER TABLE "cms"."_surgeons_v" DROP COLUMN "version_verification_checks_facility";
  ALTER TABLE "cms"."_surgeons_v" DROP COLUMN "version_verification_insurance_expires_at";
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP COLUMN "surgeon_applications_id";
  DROP TYPE "cms"."enum_surgeon_applications_interventions";
  DROP TYPE "cms"."enum_surgeon_applications_languages";
  DROP TYPE "cms"."enum_surgeon_applications_status";
  DROP TYPE "cms"."enum_surgeon_applications_country";
  DROP TYPE "cms"."enum_surgeon_applications_specialty";`)
}
