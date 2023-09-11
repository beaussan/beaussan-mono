CREATE TABLE public.session
(
  id             uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  session_token text                                  NOT NULL,
  user_id       uuid                                  NOT NULL,
  expires        timestamptz                          NOT NULL
);

ALTER TABLE ONLY public.session
  ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("user_id") REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE CASCADE;
