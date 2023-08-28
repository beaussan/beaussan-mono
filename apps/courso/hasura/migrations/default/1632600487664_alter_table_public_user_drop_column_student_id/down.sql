ALTER TABLE "public"."user" ADD COLUMN "student_id" uuid;
ALTER TABLE "public"."user" ALTER COLUMN "student_id" DROP NOT NULL;
ALTER TABLE "public"."user" ADD CONSTRAINT user_student_id_key UNIQUE (student_id);
