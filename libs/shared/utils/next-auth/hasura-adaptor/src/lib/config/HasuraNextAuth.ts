import { NextAuthOptions, Session } from 'next-auth';
import * as jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { HasuraAdapter } from '../storage/storageAdaptor';

const hs256TokenStrategy = (): Required<
  Pick<NonNullable<NextAuthOptions['jwt']>, 'encode' | 'decode'>
> => ({
  encode: ({ secret, token }) => {
    const encodedToken = jsonwebtoken.sign(token!, secret, {
      algorithm: 'HS256',
    });
    return encodedToken;
  },
  decode: async ({ secret, token }) => {
    const decodedToken = jsonwebtoken.verify(token!, secret, {
      algorithms: ['HS256'],
    });
    return decodedToken as JWT;
  },
});

export type HasuraNextAuth = Omit<
  NextAuthOptions,
  'session' | 'adapter' | 'jwt' | 'secret'
> & {
  // Explicit secret key
  secret: string;
  hasuraConfig: Parameters<typeof HasuraAdapter>[0];
};

export function CreateHasuraNextAuth(config: HasuraNextAuth): NextAuthOptions {
  return {
    ...config,
    // forced secret
    secret: config.secret,
    // Pre configured adapter
    adapter: HasuraAdapter(config.hasuraConfig),
    // Use JWT strategy so we can forward them to Hasura
    session: { strategy: 'jwt' },
    // Encode and decode your JWT with the HS256 algorithm
    jwt: hs256TokenStrategy(),
    callbacks: {
      // Add the required Hasura claims
      // https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt/#the-spec
      async jwt(params) {
        let newToken = {
          ...params.token,
        };

        if (params.user) {
          newToken = {
            ...params.token,
            'https://hasura.io/jwt/claims': {
              'x-hasura-allowed-roles': params.user.allowedRoles,
              'x-hasura-default-role': params.user.defaultRole,
              'x-hasura-user-id': params.user.id,
            },
          };
        }

        if (config?.callbacks?.jwt) {
          newToken = await config.callbacks.jwt({
            ...params,
            token: newToken,
          });
        }
        return newToken;
      },
      // Add user ID to the session
      session: async (params) => {
        const { session, token } = params;
        let newSession: Session = {
          ...session,
        };
        if (session?.user) {
          newSession.user.id = token.sub!;
        }

        const claims = token?.['https://hasura.io/jwt/claims'];

        if (claims) {
          newSession.user.defaultRole = claims['x-hasura-default-role'];
          newSession.user.allowedRoles = claims['x-hasura-allowed-roles'];
        }

        newSession.token = await hs256TokenStrategy().encode({
          secret: config.secret,
          token: token,
        });

        if (config?.callbacks?.session) {
          const result = await config.callbacks.session({
            ...params,
            session: newSession,
          });
          newSession = {
            ...newSession,
            ...result,
            user: {
              ...newSession.user,
              ...result.user,
            },
          };
        }
        return newSession;
      },
    },
  };
}
