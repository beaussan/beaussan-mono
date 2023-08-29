import gql from 'graphql-tag';
import { useCurrentUserQuery } from '../generated/graphql';
// import { useAuthContext } from '@/hooks/useAuthContext';
import React, { createContext } from 'react';

gql`
  query currentUser {
    user {
      createdAt
      email
      updatedAt
      id
    }
  }
`;

const knownFalseErrors = [
  '[GraphQL] field "user" not found in type: \'query_root\'',
];

const useCurrentUserValue = () => {
  const [{ data, error, fetching }] = useCurrentUserQuery({
    requestPolicy: 'network-only',
  });

  if (error) {
    if (!knownFalseErrors.includes(error.message)) {
      console.error('ERROR IN useCurrentUser');
      console.error(error.message);
    }
  }

  console.log('useCurrentUser', { data, fetching });

  const user = data?.user?.[0];
  return { error, user, fetching, loading: fetching };
};

export type UseCurrentUserContextContextType = ReturnType<
  typeof useCurrentUserValue
>;

const UseCurrentUserContext = createContext<
  UseCurrentUserContextContextType | undefined
>(undefined);

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useCurrentUserValue();

  return (
    <UseCurrentUserContext.Provider value={value}>
      {children}
    </UseCurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = React.useContext(UseCurrentUserContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CurrentUserProvider');
  }
  return context;
};
