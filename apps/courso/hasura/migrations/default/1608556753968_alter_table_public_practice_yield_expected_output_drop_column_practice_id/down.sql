ALTER TABLE "public"."practice_yield_expected_output" ADD COLUMN "practice_id" uuid;
ALTER TABLE "public"."practice_yield_expected_output" ALTER COLUMN "practice_id" DROP NOT NULL;
