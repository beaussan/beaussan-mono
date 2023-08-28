ALTER TABLE "public"."practice_to_student_yield" ADD COLUMN "submited" boolean NOT NULL DEFAULT TRUE;
update "public"."practice_to_student_yield" set submited = true;
update "public"."practice_to_student" set submited = true;
