alter table "public"."practice_yield_expected_output" drop constraint "practice_yield_expected_output_practice_yield_id_fkey",
  add constraint "practice_yield_expected_output_practice_yield_id_fkey"
  foreign key ("practice_yield_id")
  references "public"."practice_yield"
  ("id") on update cascade on delete cascade;
