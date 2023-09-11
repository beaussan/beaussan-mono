import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { CreateHasuraNextAuth } from '@beaussan/shared/utils/next-auth/hasura-adaptor';
import { env } from '../../../lib/env';
// Needed to kick nx dep detection to include nodemailer in the bundle
import 'nodemailer';
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = CreateHasuraNextAuth({
  providers: [
    EmailProvider({
      sendVerificationRequest: async (params) => {
        if (env.NODE_ENV === 'development') {
          console.log('----------------------------------------------');
          console.log(`Email send to ${params.identifier}`);
          console.log(`Url: ${params.url}`);
          console.log('----------------------------------------------');
        }
        // TODO add postmark mailing here
      },
    }),
    GithubProvider({
      clientId: env.GITHUB_AUTH_CLIENT_ID,
      clientSecret: env.GITHUB_AUTH_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  secret: env.NEXT_AUTH_SECRET,
  hasuraConfig: {
    endpoint: env.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL,
    adminSecret: env.HASURA_ADMIN_SECRET,
    defaultRole: 'USER',
  },
});

export default NextAuth(authOptions);
