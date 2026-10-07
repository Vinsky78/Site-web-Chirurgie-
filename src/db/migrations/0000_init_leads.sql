CREATE SCHEMA "leads";
--> statement-breakpoint
CREATE TABLE "leads"."consents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"request_id" uuid,
	"type" text NOT NULL,
	"text_version" text NOT NULL,
	"granted_at" timestamp with time zone NOT NULL,
	"withdrawn_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "leads"."request_health" (
	"request_id" uuid PRIMARY KEY NOT NULL,
	"payload_enc" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leads"."requests" (
	"id" uuid PRIMARY KEY NOT NULL,
	"locale" text NOT NULL,
	"intervention_id" text NOT NULL,
	"country" text NOT NULL,
	"city" text NOT NULL,
	"timeframe" text NOT NULL,
	"budget" text NOT NULL,
	"first_name_enc" text NOT NULL,
	"email_enc" text NOT NULL,
	"phone_enc" text,
	"email_hash" text NOT NULL,
	"birth_year" integer NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"delete_after" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "leads"."consents" ADD CONSTRAINT "consents_request_id_requests_id_fk" FOREIGN KEY ("request_id") REFERENCES "leads"."requests"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "leads"."request_health" ADD CONSTRAINT "request_health_request_id_requests_id_fk" FOREIGN KEY ("request_id") REFERENCES "leads"."requests"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "consents_request_id_idx" ON "leads"."consents" USING btree ("request_id");--> statement-breakpoint
CREATE INDEX "requests_email_hash_idx" ON "leads"."requests" USING btree ("email_hash");--> statement-breakpoint
CREATE INDEX "requests_delete_after_idx" ON "leads"."requests" USING btree ("delete_after");