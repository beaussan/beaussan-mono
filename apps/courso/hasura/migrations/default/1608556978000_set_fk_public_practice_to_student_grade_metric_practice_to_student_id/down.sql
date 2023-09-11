alter table "public"."practice_to_student_grade_metric" drop constraint "practice_to_student_grade_metric_practice_to_student_id_fkey",
          add constraint "practice_to_student_grade_metric_practice_to_student_id_fkey"
          foreign key ("practice_to_student_id")
          references "public"."practice_to_student"
          ("id")
          on update restrict
          on delete restrict;
