CREATE TABLE "public"."bookmarks" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "userId" uuid NOT NULL, "displayName" text NOT NULL, "link" text NOT NULL, "imageUrl" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
