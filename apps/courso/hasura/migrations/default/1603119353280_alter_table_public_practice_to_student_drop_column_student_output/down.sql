ALTER TABLE "public"."practice_to_student" ADD COLUMN "student_output" jsonb;
ALTER TABLE "public"."practice_to_student" ALTER COLUMN "student_output" DROP NOT NULL;
