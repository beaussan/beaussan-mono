alter table "public"."bookmarks" add constraint "bookmarks_userId_position_key" unique ("userId", "position");
