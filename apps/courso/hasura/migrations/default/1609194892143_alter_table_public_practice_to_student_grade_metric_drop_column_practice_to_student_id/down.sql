ALTER TABLE "public"."practice_to_student_grade_metric" ADD COLUMN "practice_to_student_id" uuid;
ALTER TABLE "public"."practice_to_student_grade_metric" ALTER COLUMN "practice_to_student_id" DROP NOT NULL;
