CREATE TABLE public.verification_token
(
  token      text NOT NULL PRIMARY KEY,
  identifier text NOT NULL,
  expires    timestamptz NOT NULL
);
