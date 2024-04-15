import React, { createContext } from 'react';
import { useUserInfoQuery } from './requests.generated';
import { useSession } from 'next-auth/react';
// import patched types
import '@beaussan/shared/utils/next-auth/hasura-adaptor';

const useUserDataValue = () => {
  const { data: session, status } = useSession();
  const [{ data, error, fetching }] = useUserInfoQuery({
    variables: {
      id: session?.user?.id,
    },
    pause: status !== 'authenticated',
    requestPolicy: 'cache-and-network',
  });

  const user = data?.userByPk;

  return {
    error,
    fetching,
    user,
    userId: session?.user?.id,
  };
};

export type UserDataContextType = ReturnType<typeof useUserDataValue>;

const UseUserData = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useUserDataValue();

  return <UseUserData.Provider value={value}>{children}</UseUserData.Provider>;
};

export const MockUserDataContextProvider = (
  props: React.PropsWithChildren<{
    params: UserDataContextType;
  }>
) => {
  return <UseUserData.Provider value={props.params} {...props} />;
};

export const useUserData = (): UserDataContextType => {
  const context = React.useContext(UseUserData);
  if (context === undefined) {
    throw new Error('useCount must be used within a UserDataProvider');
  }
  return context;
};
