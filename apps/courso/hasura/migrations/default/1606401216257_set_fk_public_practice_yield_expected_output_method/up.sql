alter table "public"."practice_yield_expected_output"
           add constraint "practice_yield_expected_output_method_fkey"
           foreign key ("method")
           references "public"."practice_yield_expected_output_types"
           ("name") on update restrict on delete restrict;
