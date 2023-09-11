alter table "public"."practice_to_promotion" add constraint "practice_to_promotion_promotion_id_practice_id_key" unique ("promotion_id", "practice_id");
