CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."practice_grade_metric"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, "practice_id" text NOT NULL, "expected_yield_id" uuid NOT NULL, "feedbacks" jsonb NOT NULL, "points" integer NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_practice_grade_metric_updated_at"
BEFORE UPDATE ON "public"."practice_grade_metric"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_practice_grade_metric_updated_at" ON "public"."practice_grade_metric" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
