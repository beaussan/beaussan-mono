alter table "public"."user" alter column "email" set not null;
alter table "public"."user" add constraint "user_email_key" unique ("email");
