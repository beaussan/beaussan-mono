import { z } from 'zod';
import { clientEnvSchema } from './clientEnv';

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
  .merge(clientEnvSchema);

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export const getServerEnvs = () => serverEnvSchema.parse(process.env);
