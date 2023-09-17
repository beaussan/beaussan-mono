import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { CreateHasuraNextAuth } from '@beaussan/shared/utils/next-auth/hasura-adaptor';
import * as process from 'process';

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
    GithubProvider({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID!,
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET!,
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  secret: process.env.NEXTAUTH_SECRET!,
  hasuraConfig: {
    endpoint: process.env.NEXT_PUBLIC_HASURA_URL!,
    adminSecret: process.env.HASURA_ADMIN_SECRET!,
    defaultRole: 'USER',
  },
  disableSelfSignOn: false,
});

export default NextAuth(authOptions);
