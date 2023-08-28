CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."student_practice_yield"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "practice_yield_id" uuid NOT NULL, "practice_to_student_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("practice_yield_id") REFERENCES "public"."practice_yield"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("practice_to_student_id") REFERENCES "public"."practice_to_student"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("practice_yield_id", "practice_to_student_id"));
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
CREATE TRIGGER "set_public_student_practice_yield_updated_at"
BEFORE UPDATE ON "public"."student_practice_yield"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_student_practice_yield_updated_at" ON "public"."student_practice_yield" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
