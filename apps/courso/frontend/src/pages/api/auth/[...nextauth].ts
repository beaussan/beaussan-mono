import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { CreateHasuraNextAuth } from '@beaussan/shared/utils/next-auth/hasura-adaptor';
// Needed to kick nx dep detection to include nodemailer in the bundle
import 'nodemailer';
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = CreateHasuraNextAuth({
  providers: [
    EmailProvider({
      sendVerificationRequest: async (params) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('----------------------------------------------');
          console.log(`Email send to ${params.identifier}`);
          console.log(`Url: ${params.url}`);
          console.log('----------------------------------------------');
        }
      },
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  secret: process.env.NEXT_AUTH_SECRET!,
  hasuraConfig: {
    endpoint: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL!,
    adminSecret: process.env.HASURA_ADMIN_SECRET!,
    defaultRole: 'STUDENT',
  },
});

export default NextAuth(authOptions);

/*
import NextAuth, { Account, Profile, Session } from 'next-auth';
import Providers from 'next-auth/providers';
import { HasuraAdaptor } from '@lib/nextAuth/hasuraAuthAdapter';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { User } from '@lib/generated/graphql';
import { gqlSdk } from '@lib/gql';
import { sendLoginEmail } from '@lib/mail';
import { createLogger } from '@lib/common/log';

const logger = createLogger({ component: 'nextAuth' });

export default NextAuth({
  / / Configure one or more authentication providers
  providers: [
    Providers.Email({
      sendVerificationRequest: async (params) => {
        if (process.env.NODE_ENV === 'development') {
          logger.info('----------------------------------------------');
          logger.info(`Email send to ${params.identifier}`);
          logger.info(`Url: ${params.url}`);
          logger.info('----------------------------------------------');
        }

        await sendLoginEmail(params.identifier, params.url);
      },
    }),

    *
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,

      / / https:/ /docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: 'read:user',
    }),

     *
    / / ...add more providers here
  ],

  debug: process.env.NEXT_AUTH_DEBUG_LOG === 'yes',

  logger: {
    debug(code: string, ...message) {
      logger.debug(code, message);
    },
    error(code: string, ...message) {
      logger.error(code, message);
    },
    warn(code: string, ...message) {
      logger.warn(code, message);
    },
  },

  session: {
    jwt: true,
  },

  pages: {
    signIn: '/login',
  },

  jwt: {
    secret: process.env.NEXT_AUTH_JWT_SECRET_PRIVATE,

    verificationOptions: {
      algorithms: ['RS512'],
    },
    encode: async (params) => {
      if (!params || !params.token || !params.token.sub) {
        return 'undefined';
      }
      / / logger.info('ENCODE : ', params);
      const { token, secret } = params;
      const jwtClaims: JWT = {
        ...token,
        sub: token?.sub?.toString(),
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'RS512' });
      return encodedToken;
    },

    decode: async (params) => {
      if (!params || !params.token) {
        throw new Error('No params in decode');
      }
      const { token, secret } = params;
      const decodedToken = jwt.verify(token, secret, { algorithms: ['RS512'] });
      return decodedToken as JWT;
    },
  },

  adapter: HasuraAdaptor({}),

  callbacks: {
    async session(session: Session, userOrToken: JWT) {
      / / logger.info('SESSION : ', { session, userOrToken });
      const encodedToken = jwt.sign(
        userOrToken,
        process.env.NEXT_AUTH_JWT_SECRET_PRIVATE as string,
        { algorithm: 'RS512' },
      );

      const claims = userOrToken?.['https:/ /hasura.io/jwt/claims'];

      if (claims) {
        session.role = claims['x-hasura-default-role'];
        session.allowedRoles = claims['x-hasura-allowed-roles'];
      }

      session.id = userOrToken.id;
      session.token = encodedToken;

      return session;
    },

    async jwt(
      token: JWT,
      user?: User,
      account?: Account,
      profile?: Profile,
      isNewUser?: boolean,
    ) {
      logger.info('JWT : ', { token, user, account, profile, isNewUser });

      if (!user) {
        return token;
      }

      token = {
        ...token,
        'id': user?.id,
        'https:/ /hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': user.allowed_roles.map((role) => role.role),
          'x-hasura-default-role': user.default_role,
          'x-hasura-user-id': user?.id,
        },
      };
      logger.info('JWT AFTER : ', token);

      return token;
    },

    async signIn({ user, account, profile, email, credentials }) {
      if (process.env.NEXT_AUTH_IS_SELF_LOGIN_ALLOWED === 'yes') {
        return true;
      }
      logger.info('SIGN IN', { user, account, profile, email, credentials });
      if (email) {
        logger.info('Email found, find user by email');
        const { maybeUser } = await gqlSdk.findUserByEmail({ email });
        logger.info('SIGN IN', {
          user,
          account,
          profile,
          email,
          credentials,
          maybeUser,
        });

        if (maybeUser.length > 0) {
          logger.info('user found');
          return true;
        } else {
          logger.info('user not found');
          / / Return false to display a default error message
          return false;
          / / Or you can return a URL to redirect to:
          / / return '/unauthorized'
        }
      }
      logger.info('Nothing found');
      return false;
    },
  },
});

*/
