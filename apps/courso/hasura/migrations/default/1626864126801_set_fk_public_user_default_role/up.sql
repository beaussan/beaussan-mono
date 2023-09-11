alter table "public"."user"
           add constraint "user_default_role_fkey"
           foreign key ("default_role")
           references "public"."roles"
           ("value") on update restrict on delete restrict;
