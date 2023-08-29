import { AuthState } from '../services/TokenService';
import React, { createContext, useContext } from 'react';
import { useSession } from 'next-auth/react';

function useAuthContextValue() {
  const { status, data } = useSession();

  const authStatus: AuthState =
    status === 'loading' ? 'loading' : data ? 'in' : 'out';
  console.log(data);

  return {
    authStatus,
    user: data?.user,
    // @ts-ignore
    userId: data?.id,
    // @ts-ignore
    token: data?.token ?? null,
    // @ts-ignore
    userRole: data?.role ?? null,
    // @ts-ignore
    allowedRoles: data?.allowedRoles ?? [],
  };
}

export type AuthContext = ReturnType<typeof useAuthContextValue>;

const Context = createContext<AuthContext | undefined>(undefined);

export const AuthContextProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const value = useAuthContextValue();
  return <Context.Provider value={value} {...props} />;
};
export const MockAuthContextProvider: React.FC<
  React.PropsWithChildren<{ params: AuthContext }>
> = (props) => {
  return <Context.Provider value={props.params} {...props} />;
};

export function useAuthContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(`useAuthContext must be used within a AuthContextProvider`);
  }
  return {
    ...context,
  };
}

export const useCurrentUserRole = (): string => {
  const { userRole } = useAuthContext();
  return userRole ?? '';
};
