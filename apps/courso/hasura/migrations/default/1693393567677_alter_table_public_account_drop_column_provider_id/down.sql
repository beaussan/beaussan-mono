alter table "public"."account" alter column "provider_id" drop not null;
alter table "public"."account" add column "provider_id" text;
