alter table "public"."bookmarks" alter column "imageUrl" drop not null;
alter table "public"."bookmarks" rename column "imageUrl" to "faviconUrl";
