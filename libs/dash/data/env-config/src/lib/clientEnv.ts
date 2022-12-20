import { z } from 'zod';

const clientEnvUnsafe = {
  APP_PORT: process.env.APP_PORT,
  APP_URL: process.env.APP_URL,
  NX_APP_URL: process.env.NX_APP_URL,
  NEXT_PUBLIC_HASURA_URL: process.env.NEXT_PUBLIC_HASURA_URL,
  NEXT_PUBLIC_HASURA_IS_HTTPS: process.env.NEXT_PUBLIC_HASURA_IS_HTTPS,
  NODE_ENV: process.env.NODE_ENV,
};

const booleanSchemaEnv = z
  .enum(['yes', 'no'])
  .transform((value) => value === 'yes');

export const clientEnvSchema = z.object({
  APP_PORT: z.coerce.number().optional(),
  APP_URL: z.string().optional(),
  NX_APP_URL: z.string().optional(),
  NEXT_PUBLIC_HASURA_URL: z.string(),
  NEXT_PUBLIC_HASURA_IS_HTTPS: booleanSchemaEnv,
  NODE_ENV: z.enum(['production', 'development']),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

export const clientEnvs = clientEnvSchema.parse(clientEnvUnsafe);
