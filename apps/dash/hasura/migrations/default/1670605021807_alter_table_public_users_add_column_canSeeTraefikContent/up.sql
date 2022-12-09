alter table "public"."users" add column "canSeeTraefikContent" boolean
 not null default 'false';
