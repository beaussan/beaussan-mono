ALTER TABLE "public"."practice_to_student_grade_metric" ADD COLUMN "practice_grade_metric_id" uuid;
ALTER TABLE "public"."practice_to_student_grade_metric" ALTER COLUMN "practice_grade_metric_id" DROP NOT NULL;
ALTER TABLE "public"."practice_to_student_grade_metric" ADD CONSTRAINT practice_to_student_grade_metric_practice_grade_metric_id_fk FOREIGN KEY (practice_grade_metric_id) REFERENCES "public"."practice_grade_metric" (id) ON DELETE cascade ON UPDATE cascade;
