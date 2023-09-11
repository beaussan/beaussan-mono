CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."practice_to_student"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "student_id" uuid NOT NULL, "promotion_practice_id" uuid NOT NULL, "grade" integer, "student_output" jsonb, "feedback" text, "graded" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") , FOREIGN KEY ("promotion_practice_id") REFERENCES "public"."practice_to_promotion"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("student_id", "promotion_practice_id"));
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
CREATE TRIGGER "set_public_practice_to_student_updated_at"
BEFORE UPDATE ON "public"."practice_to_student"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_practice_to_student_updated_at" ON "public"."practice_to_student" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
