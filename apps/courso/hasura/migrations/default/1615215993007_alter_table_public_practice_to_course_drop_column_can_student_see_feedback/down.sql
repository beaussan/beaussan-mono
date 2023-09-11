ALTER TABLE "public"."practice_to_course" ADD COLUMN "can_student_see_feedback" bool;
ALTER TABLE "public"."practice_to_course" ALTER COLUMN "can_student_see_feedback" DROP NOT NULL;
ALTER TABLE "public"."practice_to_course" ALTER COLUMN "can_student_see_feedback" SET DEFAULT false;
