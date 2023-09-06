import { DecoratorFn } from '@storybook/react';
import { graphql } from 'msw';
import React from 'react';
import {
  CurrentUserQuery,
  CurrentUserQueryVariables,
} from '../generated/graphql';
import { AuthContext, MockAuthContextProvider } from '../hooks/useAuthContext';
import { CurrentUserProvider } from '../hooks/useCurrentUser';

export const fullScreenBody: DecoratorFn = (fn) => (
  <div className="bg-gray-100">
    <div className=" max-w-7xl mx-auto p-4 sm:px-6 md:px-8">{fn()}</div>
  </div>
);

type AuthDecoratorProps = {
  gql: Handler;
  delay?: number;
};

const signInStudent: AuthContext = {
  authStatus: 'in',
  token: 'aaaaa',
  userRole: 'student',
  user: {
    email: 'b@ab.fr',
    image: '',
    name: 'name',
    id: '',
    allowedRoles: ['student'],
    defaultRole: 'student',
  },
  allowedRoles: ['student'],
  userId: '38798adf-bfbc-4eb2-86fa-770fce5a3c66',
};

const signInTeacher: AuthContext = {
  authStatus: 'in',
  token: 'aaaaa',
  userRole: 'teacher',
  allowedRoles: ['teacher'],
  user: {
    email: 'a@a.fr',
    image: '',
    name: 'name',
    id: '',
    allowedRoles: ['teacher'],
    defaultRole: 'teacher',
  },
  userId: '0a07cb28-e60e-4883-9eb3-8d970b114c99',
};

const signOut: AuthContext = {
  authStatus: 'out',
  token: null,
  userRole: null,
  userId: undefined,
  allowedRoles: [],
  user: undefined,
};

type Handler = ReturnType<typeof graphql.link>;
type HalderReturn = ReturnType<typeof graphql.query>;
type AuthDecoratorFn = (options: AuthDecoratorProps) => HalderReturn;

/*
const buildAuthDecorator = (
  body: CurrentUserQuery,
  authState: AuthContext,
): AuthDecoratorFn => {
  return ({ gql, delay = 0 }) => {
    const handler = gql.query<CurrentUserQuery, CurrentUserQueryVariables>(
      'currentUser',
      (req, res, context) => {
        return res(
          context.delay(delay),
          context.data(body),
          context.status(200),
        );
      },
    );
    return (fn, c) => {
      c.parameters.msw = [...(c?.parameters?.msw ?? []), handler];
      console.log(c);

      return (
        <MockAuthContextProvider params={authState}>
          <CurrentUserProvider>{fn()}</CurrentUserProvider>
        </MockAuthContextProvider>
      );
    };
  };
};*/

const buildCurrentUserMock = (body: CurrentUserQuery): AuthDecoratorFn => {
  return ({ gql, delay = 0 }) => {
    return gql.query<CurrentUserQuery, CurrentUserQueryVariables>(
      'currentUser',
      (req, res, context) => {
        return res(
          context.delay(delay),
          context.data(body),
          context.status(200)
        );
      }
    );
  };
};

const buildAuthStateDecorator = (context: AuthContext): DecoratorFn => {
  // eslint-disable-next-line react/display-name
  return (fn) => (
    <MockAuthContextProvider params={context}>
      <CurrentUserProvider>{fn()}</CurrentUserProvider>
    </MockAuthContextProvider>
  );
};

export const signInStudentState = buildAuthStateDecorator(signInStudent);
export const signInTeacherState = buildAuthStateDecorator(signInTeacher);
export const signOutState = buildAuthStateDecorator(signOut);

const mockUser: CurrentUserQuery = {
  user: [
    {
      id: '072628c4-df11-4594-a1c0-549c6be15754',
      createdAt: '',
      updatedAt: '',
      email: 'mock@provider.mock',
    },
  ],
};

export const signInUserGql = buildCurrentUserMock(mockUser);
export const signOutUserGql = buildCurrentUserMock({
  user: [],
});
