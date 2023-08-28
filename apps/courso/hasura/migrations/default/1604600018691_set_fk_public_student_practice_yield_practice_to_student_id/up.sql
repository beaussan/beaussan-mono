alter table "public"."student_practice_yield" drop constraint "student_practice_yield_practice_to_student_id_fkey",
             add constraint "student_practice_yield_practice_to_student_id_fkey"
             foreign key ("practice_to_student_id")
             references "public"."practice_to_student"
             ("id") on update restrict on delete cascade;
