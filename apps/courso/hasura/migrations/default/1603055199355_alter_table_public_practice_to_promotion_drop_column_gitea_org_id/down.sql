ALTER TABLE "public"."practice_to_promotion" ADD COLUMN "gitea_org_id" text;
ALTER TABLE "public"."practice_to_promotion" ALTER COLUMN "gitea_org_id" DROP NOT NULL;
