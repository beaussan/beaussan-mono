alter table "public"."traefikRoutes" add column "created_at" timestamptz
 null default now();
