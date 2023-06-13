import NextAuth from 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string;
    user: {
      defaultRole: string;
      allowedRoles: string[];
      id: string;
    } & DefaultSession['user'];
  }

  interface User {
    defaultRole: string;
    allowedRoles: string[];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string;
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': string[];
      'x-hasura-default-role': string;
      'x-hasura-user-id': string;
    };
  }
}
