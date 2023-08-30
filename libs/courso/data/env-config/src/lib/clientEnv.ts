import { z } from 'zod';
import { getHasuraUrls } from './helpers';
import { prettyParseZod } from '@beaussan/shared/utils/zod';

const booleanSchemaEnv = z
  .enum(['yes', 'no'])
  .transform((value) => value === 'yes');

const nodeEnvSchema = z.enum(['production', 'development', 'test']);

export const nodeEnv = nodeEnvSchema.parse(process.env.NODE_ENV);

export const clientEnvSchema = z.object({
  APP_PORT: z.coerce.number().optional(),
  APP_URL: z.string().optional(),
  NX_APP_URL: z.string().optional(),
  NEXT_PUBLIC_HASURA_URL: z.string(),
  NEXT_PUBLIC_HASURA_IS_HTTPS: booleanSchemaEnv,
  NODE_ENV: nodeEnvSchema,
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

export type ClientEnv = z.infer<typeof transformedSchema>;

function generateTestEnv<T extends z.Schema>(schema: T): z.infer<T> {
  console.log(schema._def);
  return null;
}

export const testClientEnv: ClientEnv = {
  NODE_ENV: 'test',
  NEXT_PUBLIC_HASURA_URL: '',
  NEXT_PUBLIC_HASURA_IS_HTTPS: false,
  NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL: '',
  NEXT_PUBLIC_HASURA_GRAPHQL_WS_URL: '',
};

const clientEnvUnsafe = {
  APP_PORT: process.env.APP_PORT,
  APP_URL: process.env.APP_URL,
  NX_APP_URL: process.env.NX_APP_URL,
  NEXT_PUBLIC_HASURA_URL: process.env.NEXT_PUBLIC_HASURA_URL,
  NEXT_PUBLIC_HASURA_IS_HTTPS: process.env.NEXT_PUBLIC_HASURA_IS_HTTPS,
  NODE_ENV: process.env.NODE_ENV,
};
export const clientEnvs: ClientEnv =
  nodeEnv === 'test'
    ? testClientEnv
    : prettyParseZod(transformedSchema, clientEnvUnsafe);
