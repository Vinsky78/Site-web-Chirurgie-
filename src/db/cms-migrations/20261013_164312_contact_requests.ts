import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "cms"."enum_contact_requests_status" AS ENUM('new', 'in-progress', 'done');
  CREATE TYPE "cms"."enum_contact_requests_subject" AS ENUM('project', 'question', 'surgeon', 'press', 'privacy', 'other');
  CREATE TYPE "cms"."enum_contact_requests_intervention" AS ENUM('rhinoplasty', 'abdominoplasty', 'breast-augmentation', 'liposuction', 'blepharoplasty', 'facelift', 'otoplasty', 'breast-lift', 'breast-reduction', 'gynecomastia', 'fat-grafting', 'arm-lift', 'thigh-lift', 'body-lift', 'buttock-augmentation', 'labiaplasty', 'breast-implant-revision', 'brow-lift', 'genioplasty');
  CREATE TYPE "cms"."enum_contact_requests_timeframe" AS ENUM('lt3m', '3to6m', '6to12m', 'gt12m', 'unknown');
  CREATE TYPE "cms"."enum_contact_requests_channel" AS ENUM('email', 'phone');
  CREATE TYPE "cms"."enum_contact_requests_slot" AS ENUM('morning', 'lunch', 'afternoon', 'evening', 'any');
  CREATE TABLE "cms"."contact_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "cms"."enum_contact_requests_status" DEFAULT 'new' NOT NULL,
  	"notes" varchar,
  	"reference" varchar NOT NULL,
  	"subject" "cms"."enum_contact_requests_subject" NOT NULL,
  	"intervention" "cms"."enum_contact_requests_intervention",
  	"timeframe" "cms"."enum_contact_requests_timeframe",
  	"first_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"channel" "cms"."enum_contact_requests_channel" NOT NULL,
  	"slot" "cms"."enum_contact_requests_slot",
  	"message" varchar,
  	"page" varchar,
  	"locale" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD COLUMN "contact_requests_id" integer;
  CREATE INDEX "contact_requests_reference_idx" ON "cms"."contact_requests" USING btree ("reference");
  CREATE INDEX "contact_requests_updated_at_idx" ON "cms"."contact_requests" USING btree ("updated_at");
  CREATE INDEX "contact_requests_created_at_idx" ON "cms"."contact_requests" USING btree ("created_at");
  ALTER TABLE "cms"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_requests_fk" FOREIGN KEY ("contact_requests_id") REFERENCES "cms"."contact_requests"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_contact_requests_id_idx" ON "cms"."payload_locked_documents_rels" USING btree ("contact_requests_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cms"."contact_requests" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "cms"."contact_requests" CASCADE;
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_requests_fk";
  
  DROP INDEX "cms"."payload_locked_documents_rels_contact_requests_id_idx";
  ALTER TABLE "cms"."payload_locked_documents_rels" DROP COLUMN "contact_requests_id";
  DROP TYPE "cms"."enum_contact_requests_status";
  DROP TYPE "cms"."enum_contact_requests_subject";
  DROP TYPE "cms"."enum_contact_requests_intervention";
  DROP TYPE "cms"."enum_contact_requests_timeframe";
  DROP TYPE "cms"."enum_contact_requests_channel";
  DROP TYPE "cms"."enum_contact_requests_slot";`)
}
