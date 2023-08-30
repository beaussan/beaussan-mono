alter table "public"."student" drop constraint "student_user_id_fkey",
  add constraint "student_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete restrict;
