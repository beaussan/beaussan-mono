CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."practice_yield"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "method" text NOT NULL, "name" text NOT NULL, "practice_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("method") REFERENCES "public"."practice_yield_type"("name") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("practice_id") REFERENCES "public"."practice"("id") ON UPDATE restrict ON DELETE restrict);
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
CREATE TRIGGER "set_public_practice_yield_updated_at"
BEFORE UPDATE ON "public"."practice_yield"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_practice_yield_updated_at" ON "public"."practice_yield" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
