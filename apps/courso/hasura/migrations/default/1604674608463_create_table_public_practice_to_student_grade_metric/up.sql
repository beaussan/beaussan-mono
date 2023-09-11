CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."practice_to_student_grade_metric"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "practice_grade_metric_id" uuid NOT NULL, "practice_to_student_id" uuid NOT NULL, "percent_grade" integer NOT NULL, "feedback" jsonb NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("practice_grade_metric_id") REFERENCES "public"."practice_grade_metric"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("practice_to_student_id") REFERENCES "public"."practice_to_student"("id") ON UPDATE restrict ON DELETE restrict);
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
CREATE TRIGGER "set_public_practice_to_student_grade_metric_updated_at"
BEFORE UPDATE ON "public"."practice_to_student_grade_metric"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_practice_to_student_grade_metric_updated_at" ON "public"."practice_to_student_grade_metric" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
