import { z } from 'zod';
import { clientEnvSchema, nodeEnv, testClientEnv } from './clientEnv';
import { getHasuraUrls } from './helpers';

export const serverEnvSchema = z
  .object({
    HASURA_AUTH_TOKEN_CRON: z.string(),
    HASURA_ADMIN_SECRET: z.string(),
    TRAEFIK_BASE_URL: z.string(),
    POSTMARK_API_TOKEN: z.string(),
    SUPERTOKEN_CONNEXION_URI: z.string(),
    SUPERTOKEN_API_KEY: z.string().optional(),
    SUPERTOKEN_DASHBOARD_API_KEY: z.string().optional(),
    GITHUB_AUTH_CLIENT_ID: z.string(),
    GITHUB_AUTH_CLIENT_SECRET: z.string(),
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
  TRAEFIK_BASE_URL: '',
  POSTMARK_API_TOKEN: '',
  SUPERTOKEN_API_KEY: '',
  SUPERTOKEN_CONNEXION_URI: '',
  GITHUB_AUTH_CLIENT_SECRET: '',
  GITHUB_AUTH_CLIENT_ID: '',
}

export const getServerEnvs = () => nodeEnv === 'test' ? testServerEnv : serverEnvSchema.parse(process.env);
