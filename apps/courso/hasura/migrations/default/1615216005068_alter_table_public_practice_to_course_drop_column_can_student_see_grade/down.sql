ALTER TABLE "public"."practice_to_course" ADD COLUMN "can_student_see_grade" bool;
ALTER TABLE "public"."practice_to_course" ALTER COLUMN "can_student_see_grade" DROP NOT NULL;
ALTER TABLE "public"."practice_to_course" ALTER COLUMN "can_student_see_grade" SET DEFAULT false;
