CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."practice"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "student_input_from_template" jsonb NOT NULL, "metric_list" jsonb NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_practice_updated_at"
BEFORE UPDATE ON "public"."practice"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_practice_updated_at" ON "public"."practice" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
