import { GraphQLClient } from 'graphql-request';
import { Adapter } from 'next-auth/adapters';
import { getSdk } from '../generated/graphql';
import { formatHasuraDate } from '@beaussan/shared/utils/hasura-ts';

import {
  transformUserToNextAuthUser,
  transformSessionToNextAuthSession,
  transformValidationTokenToNextAuth,
  transformAccountToNextAuthAccount,
  transformAdapterAccountToAccountInsertInput,
} from './utils/hasuraTransforms';

type HasuraAdapterArgs = {
  endpoint: string;
  adminSecret: string;
  defaultRole: string;
};

export const HasuraAdapter = ({
  endpoint,
  adminSecret,
  defaultRole,
}: HasuraAdapterArgs): Adapter => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      'x-hasura-admin-secret': adminSecret,
    },
  });

  const sdk = getSdk(client);

  return {
    // User
    createUser: async (data) => {
      const { insertUserOne } = await sdk.CreateUser({
        data: {
          email: data.email,
          emailVerified: data.emailVerified
            ? formatHasuraDate(data.emailVerified)
            : null,
          name: data.name,
          image: data.image,
          // @ts-expect-error we cannot type default role strongly enough but allow for dynamic roles at the same time
          defaultRole: defaultRole,
          allowedRoles: {
            // @ts-expect-error same as above
            data: [{ role: defaultRole }],
          },
        },
      });

      if (!insertUserOne) {
        throw new Error('Create user failed');
      }

      return transformUserToNextAuthUser(insertUserOne);
    },
    getUser: async (id) => {
      const { userByPk } = await sdk.GetUser({ id });
      if (!userByPk) {
        return null;
      }
      return transformUserToNextAuthUser(userByPk);
    },
    getUserByEmail: async (email) => {
      const res = await sdk.GetUsers({ where: { email: { _eq: email } } });
      const user = res?.user?.[0];

      if (!user) return null;

      return transformUserToNextAuthUser(user);
    },
    getUserByAccount: async ({ providerAccountId, provider }) => {
      const res = await sdk.GetUsers({
        where: {
          accounts: {
            provider: { _eq: provider },
            providerAccountId: { _eq: providerAccountId },
          },
        },
      });
      const user = res?.user?.[0];

      if (!user) return null;

      return transformUserToNextAuthUser(user);
    },
    updateUser: async ({ id, ...data }) => {
      const res = await sdk.UpdateUser({
        id,
        data: {
          email: data.email,
          emailVerified: data.emailVerified
            ? formatHasuraDate(data.emailVerified)
            : data.emailVerified,
          image: data.image,
          name: data.name,
        },
      });
      const user = res?.updateUserByPk;

      if (!user) {
        throw new Error('Failure to update user');
      }

      return transformUserToNextAuthUser(user);
    },
    deleteUser: async (id) => {
      const res = await sdk.DeleteUser({ id });
      const user = res?.deleteUserByPk;

      if (!user) {
        return undefined;
      }

      return transformUserToNextAuthUser(user);
    },
    // Session
    createSession: async (data) => {
      const { insertSessionOne } = await sdk.CreateSession({
        data: {
          sessionToken: data.sessionToken,
          userId: data.userId,
          expires: formatHasuraDate(data.expires),
        },
      });
      if (!insertSessionOne) {
        throw new Error('Create session failed');
      }

      return transformSessionToNextAuthSession(insertSessionOne);
    },
    getSessionAndUser: async (sessionToken) => {
      const { session } = await sdk.GetSession({ sessionToken });

      const firstSession = session[0];

      if (!firstSession || !firstSession.user) {
        return null;
      }

      return {
        session: transformSessionToNextAuthSession(firstSession),
        user: transformUserToNextAuthUser(firstSession.user),
      };
    },
    updateSession: async ({ sessionToken, ...data }) => {
      const res = await sdk.UpdateSession({
        sessionToken,
        data: {
          expires: data.expires ? formatHasuraDate(data.expires) : undefined,
          userId: data.userId,
        },
      });
      const session = res?.updateSession?.returning?.[0];

      if (!session) return null;

      return transformSessionToNextAuthSession(session);
    },
    deleteSession: async (sessionToken) => {
      const res = await sdk.DeleteSession({ sessionToken });
      const session = res?.deleteSession?.returning?.[0];

      if (!session) return;

      return transformSessionToNextAuthSession(session);
    },
    // Account
    linkAccount: async (data) => {
      const res = await sdk.CreateAccount({
        data: transformAdapterAccountToAccountInsertInput(data),
      });
      const account = res?.insertAccountOne;

      if (!account) {
        throw new Error('No account found');
      }
      return transformAccountToNextAuthAccount(account);
    },
    unlinkAccount: async ({ providerAccountId, provider }) => {
      const res = await sdk.DeleteAccount({ provider, providerAccountId });
      const account = res?.deleteAccount?.returning?.[0];

      if (!account) return;

      return transformAccountToNextAuthAccount(account);
    },
    // Verification Token
    createVerificationToken: async (data) => {
      const res = await sdk.CreateVerificationToken({
        data: {
          expires: formatHasuraDate(data.expires),
          token: data.token,
          identifier: data.identifier,
        },
      });
      const verificationToken = res?.insertVerificationTokenOne;

      if (!verificationToken) {
        return null;
      }

      return transformValidationTokenToNextAuth(verificationToken);
    },
    useVerificationToken: async ({ identifier, token }) => {
      const res = await sdk.DeleteVerificationToken({ identifier, token });
      const verificationToken = res?.deleteVerificationToken?.returning?.[0];

      if (!verificationToken) return null;

      return transformValidationTokenToNextAuth(verificationToken);
    },
  };
};
