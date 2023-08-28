alter table "public"."practice_yield_expected_output" add foreign key ("practice_id") references "public"."practice"("id") on update restrict on delete restrict;
