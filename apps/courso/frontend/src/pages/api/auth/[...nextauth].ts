import NextAuth, { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { CreateHasuraNextAuth } from '@beaussan/shared/utils/next-auth/hasura-adaptor';
// Needed to kick nx dep detection to include nodemailer in the bundle
import 'nodemailer';
import { serverEnv } from '../../../../lib/env';

console.log(serverEnv);
export const authOptions: NextAuthOptions = CreateHasuraNextAuth({
  providers: [
    EmailProvider({
      sendVerificationRequest: async (params) => {
        if (serverEnv.NODE_ENV === 'development') {
          console.log('----------------------------------------------');
          console.log(`Email send to ${params.identifier}`);
          console.log(`Url: ${params.url}`);
          console.log('----------------------------------------------');
        }
        // TODO add postmark mailing here
      },
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  secret: serverEnv.NEXT_AUTH_SECRET,
  hasuraConfig: {
    endpoint: serverEnv.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL,
    adminSecret: serverEnv.HASURA_ADMIN_SECRET,
    defaultRole: 'STUDENT',
  },
});

export default NextAuth(authOptions);
