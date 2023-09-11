alter table "public"."practice_yield_grade_metric"
           add constraint "practice_yield_grade_metric_expected_yield_id_fkey"
           foreign key ("expected_yield_id")
           references "public"."practice_yield_expected_output"
           ("id") on update restrict on delete restrict;
