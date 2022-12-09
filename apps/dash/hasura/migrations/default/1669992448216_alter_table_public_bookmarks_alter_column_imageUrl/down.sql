alter table "public"."bookmarks" rename column "faviconUrl" to "imageUrl";
alter table "public"."bookmarks" alter column "imageUrl" set not null;
