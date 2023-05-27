import { z } from 'zod';
import { clientEnvSchema, nodeEnv, testClientEnv } from './clientEnv';
import { getHasuraUrls } from './helpers';
import { prettyParseZod } from '@beaussan/shared/utils/zod';

export const serverEnvSchema = z
  .object({
    HASURA_AUTH_TOKEN_CRON: z.string(),
    HASURA_ADMIN_SECRET: z.string(),
    POSTMARK_API_TOKEN: z.string(),
    SUPERTOKEN_CONNEXION_URI: z.string(),
    SUPERTOKEN_API_KEY: z.string().optional(),
    SUPERTOKEN_DASHBOARD_API_KEY: z.string().optional(),
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
  HASURA_AUTH_TOKEN_CRON: '',
  POSTMARK_API_TOKEN: '',
  SUPERTOKEN_API_KEY: '',
  SUPERTOKEN_CONNEXION_URI: '',
};

export const getServerEnvs = () =>
  nodeEnv === 'test'
    ? testServerEnv
    : prettyParseZod(serverEnvSchema, process.env);
