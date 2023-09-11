CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."practice_yield_expected_output"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "practice_id" uuid NOT NULL, "practice_yield_id" uuid NOT NULL, "git_path" text, "code_lang" text, PRIMARY KEY ("id") , FOREIGN KEY ("practice_id") REFERENCES "public"."practice"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("practice_yield_id") REFERENCES "public"."practice_yield"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("practice_yield_id", "git_path"));
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
CREATE TRIGGER "set_public_practice_yield_expected_output_updated_at"
BEFORE UPDATE ON "public"."practice_yield_expected_output"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_practice_yield_expected_output_updated_at" ON "public"."practice_yield_expected_output" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
