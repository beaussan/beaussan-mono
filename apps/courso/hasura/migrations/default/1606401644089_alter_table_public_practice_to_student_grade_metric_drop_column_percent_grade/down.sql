ALTER TABLE "public"."practice_to_student_grade_metric" ADD COLUMN "percent_grade" int4;
ALTER TABLE "public"."practice_to_student_grade_metric" ALTER COLUMN "percent_grade" DROP NOT NULL;
