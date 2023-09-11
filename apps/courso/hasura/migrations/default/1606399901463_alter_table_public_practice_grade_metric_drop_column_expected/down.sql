ALTER TABLE "public"."practice_grade_metric" ADD COLUMN "expected" text;
ALTER TABLE "public"."practice_grade_metric" ALTER COLUMN "expected" DROP NOT NULL;
