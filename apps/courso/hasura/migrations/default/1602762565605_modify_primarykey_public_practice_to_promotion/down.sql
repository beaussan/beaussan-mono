alter table "public"."practice_to_promotion" drop constraint "practice_to_promotion_pkey";
alter table "public"."practice_to_promotion"
    add constraint "practice_to_promotion_pkey" 
    primary key ( "practice_id", "id", "promotion_id" );
