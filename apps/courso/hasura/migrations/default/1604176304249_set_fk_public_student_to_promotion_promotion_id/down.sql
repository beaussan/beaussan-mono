alter table "public"."student_to_promotion" drop constraint "student_to_promotion_promotion_id_fkey",
          add constraint "student_to_promotion_promotion_id_fkey"
          foreign key ("promotion_id")
          references "public"."promotion"
          ("id")
          on update restrict
          on delete restrict;
