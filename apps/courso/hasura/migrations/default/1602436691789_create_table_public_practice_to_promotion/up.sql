CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."practice_to_promotion"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "promotion_id" uuid NOT NULL, "practice_id" uuid NOT NULL, "can_student_see_grade" boolean NOT NULL DEFAULT false, "can_student_see_feedback" boolean NOT NULL DEFAULT false, "open_date" timestamptz, "close_date" timestamptz, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id","promotion_id","practice_id") , FOREIGN KEY ("practice_id") REFERENCES "public"."practice"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("promotion_id") REFERENCES "public"."promotion"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id", "promotion_id", "practice_id"));
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
CREATE TRIGGER "set_public_practice_to_promotion_updated_at"
BEFORE UPDATE ON "public"."practice_to_promotion"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_practice_to_promotion_updated_at" ON "public"."practice_to_promotion" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
