CREATE TABLE "leads"."request_recipients" (
	"request_id" uuid NOT NULL,
	"surgeon_slug" text NOT NULL,
	CONSTRAINT "request_recipients_request_id_surgeon_slug_pk" PRIMARY KEY("request_id","surgeon_slug")
);
--> statement-breakpoint
ALTER TABLE "leads"."request_recipients" ADD CONSTRAINT "request_recipients_request_id_requests_id_fk" FOREIGN KEY ("request_id") REFERENCES "leads"."requests"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "request_recipients_surgeon_idx" ON "leads"."request_recipients" USING btree ("surgeon_slug");