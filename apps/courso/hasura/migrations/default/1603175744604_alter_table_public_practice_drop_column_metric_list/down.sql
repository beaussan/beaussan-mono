ALTER TABLE "public"."practice" ADD COLUMN "metric_list" jsonb;
ALTER TABLE "public"."practice" ALTER COLUMN "metric_list" DROP NOT NULL;
