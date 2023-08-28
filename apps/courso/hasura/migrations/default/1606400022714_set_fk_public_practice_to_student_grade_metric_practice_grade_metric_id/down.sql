alter table "public"."practice_to_student_grade_metric" drop constraint "practice_to_student_grade_metric_practice_grade_metric_id_fk",
          add constraint "practice_to_student_grade_metric_practice_grade_metric_id_fkey"
          foreign key ("practice_grade_metric_id")
          references "public"."practice_grade_metric"
          ("id")
          on update restrict
          on delete restrict;
