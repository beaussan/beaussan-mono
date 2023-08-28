CREATE TABLE "public"."student_to_promotion"("promotion_id" uuid NOT NULL, "student_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("promotion_id","student_id") , FOREIGN KEY ("student_id") REFERENCES "public"."promotion"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON UPDATE restrict ON DELETE restrict);
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
CREATE TRIGGER "set_public_student_to_promotion_updated_at"
BEFORE UPDATE ON "public"."student_to_promotion"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_student_to_promotion_updated_at" ON "public"."student_to_promotion" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
