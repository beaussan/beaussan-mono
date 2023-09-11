alter table "public"."practice_to_student_grade_metric" add foreign key ("practice_to_student_id") references "public"."practice_to_student"("id") on update restrict on delete restrict;
