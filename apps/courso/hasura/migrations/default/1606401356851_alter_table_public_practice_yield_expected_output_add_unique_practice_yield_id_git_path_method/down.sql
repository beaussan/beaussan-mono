alter table "public"."practice_yield_expected_output" drop constraint "practice_yield_expected_output_practice_yield_id_git_path_method_key";
alter table "public"."practice_yield_expected_output" add constraint "practice_yield_expected_output_practice_yield_id_git_path_key" unique ("practice_yield_id", "git_path");
