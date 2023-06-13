import {
  AccountFragment,
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
