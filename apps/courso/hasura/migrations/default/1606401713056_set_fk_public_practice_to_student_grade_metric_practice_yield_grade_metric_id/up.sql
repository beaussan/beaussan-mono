alter table "public"."practice_to_student_grade_metric"
           add constraint "practice_to_student_grade_metric_practice_yield_grade_metric"
           foreign key ("practice_yield_grade_metric_id")
           references "public"."practice_yield_grade_metric"
           ("id") on update restrict on delete restrict;
