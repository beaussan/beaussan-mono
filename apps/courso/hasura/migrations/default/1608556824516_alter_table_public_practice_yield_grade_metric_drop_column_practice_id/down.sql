ALTER TABLE "public"."practice_yield_grade_metric" ADD COLUMN "practice_id" text;
ALTER TABLE "public"."practice_yield_grade_metric" ALTER COLUMN "practice_id" DROP NOT NULL;
