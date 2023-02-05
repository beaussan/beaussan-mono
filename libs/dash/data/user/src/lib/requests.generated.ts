import * as Types from '@beaussan/dash/data/hasura-codegen-types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EditUserSettingsMutationVariables = Types.Exact<{
  userId: Types.Scalars['uuid'];
  todoistApiToken?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type EditUserSettingsMutation = {
  __typename?: 'mutation_root';
  updateUsersByPk?: {
    __typename?: 'Users';
    id: string;
    todoistApiToken?: string | null;
    updatedAt: string;
    email?: string | null;
    createdAt: string;
  } | null;
};

export type UserInfoQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;

export type UserInfoQuery = {
  __typename?: 'query_root';
  usersByPk?: {
    __typename?: 'Users';
    updatedAt: string;
    todoistApiToken?: string | null;
    id: string;
    email?: string | null;
    createdAt: string;
    canSeeTraefikContent: boolean;
  } | null;
};

export const EditUserSettingsDocument = gql`
  mutation EditUserSettings($userId: uuid!, $todoistApiToken: String) {
    updateUsersByPk(
      pk_columns: { id: $userId }
      _set: { todoistApiToken: $todoistApiToken }
    ) {
      id
      todoistApiToken
      updatedAt
      email
      createdAt
    }
  }
`;

export function useEditUserSettingsMutation() {
  return Urql.useMutation<
    EditUserSettingsMutation,
    EditUserSettingsMutationVariables
  >(EditUserSettingsDocument);
}
export const UserInfoDocument = gql`
  query UserInfo($id: uuid = "") {
    usersByPk(id: $id) {
      updatedAt
      todoistApiToken
      id
      email
      createdAt
      canSeeTraefikContent
    }
  }
`;

export function useUserInfoQuery(
  options?: Omit<Urql.UseQueryArgs<UserInfoQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserInfoQuery, UserInfoQueryVariables>({
    query: UserInfoDocument,
    ...options,
  });
}

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockEditUserSettingsMutation((req, res, ctx) => {
 *   const { userId, todoistApiToken } = req.variables;
 *   return res(
 *     ctx.data({ updateUsersByPk })
 *   )
 * })
 */
export const mockEditUserSettingsMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<EditUserSettingsMutationVariables>,
    GraphQLContext<EditUserSettingsMutation>,
    any
  >
) =>
  graphql.mutation<EditUserSettingsMutation, EditUserSettingsMutationVariables>(
    'EditUserSettings',
    resolver
  );

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUserInfoQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ usersByPk })
 *   )
 * })
 */
export const mockUserInfoQuery = (
  resolver: ResponseResolver<
    GraphQLRequest<UserInfoQueryVariables>,
    GraphQLContext<UserInfoQuery>,
    any
  >
) => graphql.query<UserInfoQuery, UserInfoQueryVariables>('UserInfo', resolver);
