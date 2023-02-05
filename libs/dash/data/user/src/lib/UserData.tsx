import React, { createContext } from 'react';
import { useUserId } from '@beaussan/shared/utils/supertokens/react';
import { useUserInfoQuery } from './requests.generated';

const useUserDataValue = () => {
  const { loading, userId } = useUserId();
  const [{ data, error, fetching }] = useUserInfoQuery({
    variables: {
      id: userId,
    },
    pause: loading,
    requestPolicy: 'cache-and-network',
  });

  const user = data?.usersByPk;

  return {
    error,
    fetching,
    user,
    userId,
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

export const useUserData = () => {
  const context = React.useContext(UseUserData);
  if (context === undefined) {
    throw new Error('useCount must be used within a UserDataProvider');
  }
  return context;
};
