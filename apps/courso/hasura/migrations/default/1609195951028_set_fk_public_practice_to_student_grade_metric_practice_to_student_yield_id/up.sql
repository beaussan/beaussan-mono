alter table "public"."practice_to_student_grade_metric" drop constraint "practice_to_student_grade_metric_practice_to_student_yield_i",
             add constraint "practice_to_student_grade_metric_practice_to_student_yield_i"
             foreign key ("practice_to_student_yield_id")
             references "public"."practice_to_student_yield"
             ("id") on update restrict on delete cascade;
