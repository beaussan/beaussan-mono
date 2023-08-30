import { z } from 'zod';
import { clientEnvSchema, nodeEnv, testClientEnv } from './clientEnv';
import { getHasuraUrls } from './helpers';
import { prettyParseZod } from '@beaussan/shared/utils/zod';

export const serverEnvSchema = z
  .object({
    // Hasura
    HASURA_ACTION_TOKEN: z.string(),
    HASURA_EVENT_TOKEN: z.string(),
    HASURA_ADMIN_SECRET: z.string(),
    // Postmark
    POSTMARK_API_TOKEN: z.string(),
    POSTMARK_SUPPORT_EMAIL: z.string().email(),
    POSTMARK_FROM_EMAIL: z.string().email(),
    POSTMARK_MAIL_LOGIN_ALIAS: z.string(),
    // Next AUth
    NEXTAUTH_URL: z.string(),
    NEXT_AUTH_SECRET: z.string(),
    // Gitea
    GITEA_URL: z.string().url(),
    GITEA_TOKEN: z.string(),
  })
  .merge(clientEnvSchema)
  .transform((arg, ctx) => {
    return {
      ...arg,
      ...getHasuraUrls(
        arg.NEXT_PUBLIC_HASURA_URL,
        arg.NEXT_PUBLIC_HASURA_IS_HTTPS
      ),
    };
  });

export type ServerEnv = z.infer<typeof serverEnvSchema>;

const testServerEnv: ServerEnv = {
  ...testClientEnv,
  HASURA_ADMIN_SECRET: '',
  HASURA_ACTION_TOKEN: '',
  HASURA_EVENT_TOKEN: '',
  POSTMARK_API_TOKEN: '',
  POSTMARK_FROM_EMAIL: '',
  POSTMARK_SUPPORT_EMAIL: '',
  POSTMARK_MAIL_LOGIN_ALIAS: '',
  NEXTAUTH_URL: '',
  NEXT_AUTH_SECRET: '',
  GITEA_TOKEN: '',
  GITEA_URL: '',
};

export const getServerEnvs = () =>
  nodeEnv === 'test'
    ? testServerEnv
    : prettyParseZod(serverEnvSchema, process.env);
