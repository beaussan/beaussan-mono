-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;
--
-- SET check_function_bodies = false;
--
-- CREATE TABLE public.roles
-- (
--   "value"       text NOT NULL,
--   "description" text,
--   PRIMARY KEY ("value"),
--   UNIQUE ("value")
-- );
--
-- CREATE TABLE public.account
-- (
--   id                       uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
--   type                     text                                  NOT NULL,
--   provider                 text                                  NOT NULL,
--   provider_account_id      text                                  NOT NULL,
--   refresh_token            text,
--   access_token             text,
--   expires_at               bigint,
--   token_type               text,
--   scope                    text,
--   id_token                 text,
--   session_state            text,
--   oauth_token_secret       text,
--   oauth_token              text,
--   user_id                  uuid                                  NOT NULL,
--   refresh_token_expires_in bigint
-- );
--
-- CREATE TABLE public.session
-- (
--   id             uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
--   session_token text                                  NOT NULL,
--   user_id       uuid                                  NOT NULL,
--   expires        timestamptz                          NOT NULL
-- );
--
-- CREATE TABLE public.user
-- (
--   id              uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
--   name            text,
--   email           text UNIQUE NOT NULL,
--   email_verified  timestamptz,
--   image           text,
--   default_role    text    NOT NULL,
--   FOREIGN KEY ("default_role") REFERENCES "public"."roles" ("value") ON UPDATE restrict ON DELETE restrict
-- );
--
-- CREATE TABLE public.allowed_role
-- (
--   "user_id" uuid NOT NULL,
--   "role"    text NOT NULL,
--   PRIMARY KEY ("user_id", "role"),
--   FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON UPDATE restrict ON DELETE cascade,
--   FOREIGN KEY ("role") REFERENCES "public"."roles" ("value") ON UPDATE restrict ON DELETE restrict
-- );
--
-- CREATE TABLE public.verification_token
-- (
--   token      text NOT NULL PRIMARY KEY,
--   identifier text NOT NULL,
--   expires    timestamptz NOT NULL
-- );
--
--
-- ALTER TABLE ONLY public.account
--   ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("user_id") REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE CASCADE;
--
-- ALTER TABLE ONLY public.session
--   ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("user_id") REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE CASCADE;
--
-- insert into public.roles values ('user');
