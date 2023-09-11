CREATE EXTENSION IF NOT EXISTS pgcrypto;
ALTER TABLE "public"."student" ADD COLUMN "claim_token" uuid NULL UNIQUE DEFAULT gen_random_uuid();
