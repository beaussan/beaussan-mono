CREATE TABLE "public"."traefikRoutes" ("name" text NOT NULL, "provider" text NOT NULL, "rule" text NOT NULL, "calculatedUrl" text, "service" text NOT NULL, "lastSeenAlive" timestamptz NOT NULL, "isUp" boolean NOT NULL, PRIMARY KEY ("name") );