alter table "public"."user" drop constraint "user_email_key";
alter table "public"."user" alter column "email" drop not null;
