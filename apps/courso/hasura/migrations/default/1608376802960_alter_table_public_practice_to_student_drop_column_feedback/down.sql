ALTER TABLE "public"."practice_to_student" ADD COLUMN "feedback" text;
ALTER TABLE "public"."practice_to_student" ALTER COLUMN "feedback" DROP NOT NULL;
