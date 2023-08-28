ALTER TABLE "public"."user" ADD COLUMN "display_name" text;
ALTER TABLE "public"."user" ALTER COLUMN "display_name" DROP NOT NULL;
