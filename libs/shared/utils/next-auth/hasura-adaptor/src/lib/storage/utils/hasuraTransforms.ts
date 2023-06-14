import {
  AccountFragment,
  AccountInsertInput,
  SessionFragment,
  UserFragment,
  VerificationTokenFragment,
} from '../../generated/graphql';
import {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from 'next-auth/adapters';
import { parseHasuraDate } from '@beaussan/shared/utils/hasura-ts';

export function transformUserToNextAuthUser(user: UserFragment): AdapterUser {
  return {
    ...user,
    emailVerified: user.emailVerified
      ? parseHasuraDate(user.emailVerified)
      : null,
    allowedRoles: user.allowedRoles.map((role) =>
      role.role.toLocaleLowerCase()
    ),
    defaultRole: user.defaultRole.toLocaleLowerCase(),
  };
}

export function transformSessionToNextAuthSession(
  session: SessionFragment
): AdapterSession {
  return {
    expires: parseHasuraDate(session.expires),
    sessionToken: session.sessionToken,
    userId: session.userId,
  };
}

export function transformAccountToNextAuthAccount(
  account: AccountFragment
): AdapterAccount {
  return {
    ...account,
    type: account.type as AdapterAccount['type'],
    scope: account.scope ?? undefined,
  };
}

export function transformValidationTokenToNextAuth(
  validationToken: VerificationTokenFragment
): VerificationToken {
  return {
    ...validationToken,
    expires: parseHasuraDate(validationToken.expires),
  };
}

export function transformAdapterAccountToAccountInsertInput({
  providerAccountId,
  type,
  userId,
  scope,
  provider,
  expires_at,
  id_token,
  refresh_token,
  token_type,
  session_state,
  access_token,
}: AdapterAccount): AccountInsertInput {
  return {
    providerAccountId,
    type,
    userId,
    scope,
    provider,
    expiresAt: expires_at,
    idToken: id_token,
    refreshToken: refresh_token,
    tokenType: token_type,
    sessionState: session_state,
    accessToken: access_token,
  };
}
