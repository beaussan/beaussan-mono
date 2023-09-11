alter table "public"."student_to_promotion" add constraint "student_to_promotion_promotion_id_student_id_key" unique ("promotion_id", "student_id");
