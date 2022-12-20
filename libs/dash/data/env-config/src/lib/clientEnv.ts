import { z } from 'zod';
import { getHasuraUrls } from './helpers';

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

const transformedSchema = clientEnvSchema.transform((arg, ctx) => {
  return {
    ...arg,
    ...getHasuraUrls(
      arg.NEXT_PUBLIC_HASURA_URL,
      arg.NEXT_PUBLIC_HASURA_IS_HTTPS
    ),
  };
});

/*

  .transform((arg, ctx) => {
    const baseUrlHasura = `${arg.NEXT_PUBLIC_HASURA_URL}/v1/graphql`;

    const httpHasuraUrl = `${
      arg.NEXT_PUBLIC_HASURA_IS_HTTPS ? 'https' : 'http'
    }://${baseUrlHasura}`;
    const wsHasuraUrl = `${
      arg.NEXT_PUBLIC_HASURA_IS_HTTPS ? 'wss' : 'ws'
    }://${baseUrlHasura}`;

    return {
      ...arg,
      NEXT_PUBLIC_HASURA_HTTP_URL: httpHasuraUrl,
      NEXT_PUBLIC_HASURA_WS_URL: wsHasuraUrl,
    };
  })
 */
export type ClientEnv = z.infer<typeof transformedSchema>;

export const clientEnvs = transformedSchema.parse(clientEnvUnsafe);
