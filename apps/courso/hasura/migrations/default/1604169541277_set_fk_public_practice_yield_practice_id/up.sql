alter table "public"."practice_yield" drop constraint "practice_yield_practice_id_fkey",
             add constraint "practice_yield_practice_id_fkey"
             foreign key ("practice_id")
             references "public"."practice"
             ("id") on update restrict on delete cascade;
