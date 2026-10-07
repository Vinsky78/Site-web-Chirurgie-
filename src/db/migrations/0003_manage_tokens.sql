CREATE TABLE "leads"."access_tokens" (
	"token_hash" text PRIMARY KEY NOT NULL,
	"request_id" uuid NOT NULL,
	"purpose" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "leads"."access_tokens" ADD CONSTRAINT "access_tokens_request_id_requests_id_fk" FOREIGN KEY ("request_id") REFERENCES "leads"."requests"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "access_tokens_request_id_idx" ON "leads"."access_tokens" USING btree ("request_id");