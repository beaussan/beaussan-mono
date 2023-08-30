alter table "public"."user" drop constraint "user_default_role_fkey",
  add constraint "user_default_role_fkey"
  foreign key ("default_role")
  references "public"."roles"
  ("value") on update restrict on delete restrict;
