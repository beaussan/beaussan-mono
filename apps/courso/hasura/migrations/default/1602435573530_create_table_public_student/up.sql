CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."student"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "email" text, "display_name" text, "user_id" uuid, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("user_id"));
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
CREATE TRIGGER "set_public_student_updated_at"
BEFORE UPDATE ON "public"."student"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_student_updated_at" ON "public"."student" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
