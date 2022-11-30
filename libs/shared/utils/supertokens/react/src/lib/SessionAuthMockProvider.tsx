import { SessionContext } from 'supertokens-auth-react/recipe/session';
import React from 'react';
import { LoadedSessionContext } from 'supertokens-auth-react/lib/build/recipe/session/types';

export interface SessionAuthMockProviderProps {
  userId?: string;
  roles?: string[];
  defaultRole?: string;
}

export const SessionAuthMockProvider = ({
  mockValues,
  children,
}: React.PropsWithChildren<{ mockValues?: SessionAuthMockProviderProps }>) => {
  return (
    <SessionContext.Provider
      value={{
        loading: false,
        invalidClaims: [],
        userId: mockValues?.userId ?? 'fb8c58ec-b77a-42ae-bf83-f6e8652de4f8',
        doesSessionExist: true,
        accessTokenPayload: {
          'st-role': {
            v: mockValues?.roles ?? ['user'],
            t: 1669584523263,
          },
          'st-perm': {
            v: [],
            t: 1669584523265,
          },
          'https://hasura.io/jwt/claims': {
            'x-hasura-user-id': '157151a3-5114-4545-9c99-868d8b14e0bf',
            'x-hasura-default-role': mockValues?.defaultRole ?? 'user',
            'x-hasura-allowed-roles': mockValues?.roles ?? ['user'],
          },
          jwt: '',
          _jwtPName: 'jwt',
        },
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
