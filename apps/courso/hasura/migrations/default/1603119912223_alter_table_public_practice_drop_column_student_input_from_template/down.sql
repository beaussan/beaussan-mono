ALTER TABLE "public"."practice" ADD COLUMN "student_input_from_template" jsonb;
ALTER TABLE "public"."practice" ALTER COLUMN "student_input_from_template" DROP NOT NULL;
