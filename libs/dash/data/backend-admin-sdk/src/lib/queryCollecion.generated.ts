import * as Types from '@beaussan/dash/data/hasura-codegen-types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw';
export type CreateUserOnLoginMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
  id: Types.Scalars['uuid'];
}>;

export type CreateUserOnLoginMutation = {
  __typename?: 'mutation_root';
  insertUsers?: {
    __typename?: 'UsersMutationResponse';
    affected_rows: number;
  } | null;
};

export type UpsertTraefikRoutesIntoDbMutationVariables = Types.Exact<{
  insertData:
    | Array<Types.TraefikRoutesInsertInput>
    | Types.TraefikRoutesInsertInput;
}>;

export type UpsertTraefikRoutesIntoDbMutation = {
  __typename?: 'mutation_root';
  insertTraefikRoutes?: {
    __typename?: 'TraefikRoutesMutationResponse';
    affected_rows: number;
  } | null;
};

export type SetAllDownNodesBasedOnLastUpdateMutationVariables = Types.Exact<{
  update?: Types.InputMaybe<Types.Scalars['timestamptz']>;
}>;

export type SetAllDownNodesBasedOnLastUpdateMutation = {
  __typename?: 'mutation_root';
  updateTraefikRoutes?: {
    __typename?: 'TraefikRoutesMutationResponse';
    affected_rows: number;
  } | null;
};

export const CreateUserOnLoginDocument = gql`
  mutation createUserOnLogin($email: String, $id: uuid!) {
    insertUsers(
      objects: { id: $id, email: $email }
      onConflict: { constraint: users_pkey, update_columns: createdAt }
    ) {
      affected_rows
    }
  }
`;
export const UpsertTraefikRoutesIntoDbDocument = gql`
  mutation upsertTraefikRoutesIntoDb(
    $insertData: [TraefikRoutesInsertInput!]!
  ) {
    insertTraefikRoutes(
      onConflict: {
        constraint: traefikRoutes_pkey
        update_columns: [
          isUp
          calculatedUrl
          lastSeenAlive
          name
          provider
          rule
          service
        ]
      }
      objects: $insertData
    ) {
      affected_rows
    }
  }
`;
export const SetAllDownNodesBasedOnLastUpdateDocument = gql`
  mutation setAllDownNodesBasedOnLastUpdate($update: timestamptz) {
    updateTraefikRoutes(
      _set: { isUp: false }
      where: { lastSeenAlive: { _neq: $update } }
    ) {
      affected_rows
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    createUserOnLogin(
      variables: CreateUserOnLoginMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateUserOnLoginMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUserOnLoginMutation>(
            CreateUserOnLoginDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createUserOnLogin',
        'mutation'
      );
    },
    upsertTraefikRoutesIntoDb(
      variables: UpsertTraefikRoutesIntoDbMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpsertTraefikRoutesIntoDbMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpsertTraefikRoutesIntoDbMutation>(
            UpsertTraefikRoutesIntoDbDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'upsertTraefikRoutesIntoDb',
        'mutation'
      );
    },
    setAllDownNodesBasedOnLastUpdate(
      variables?: SetAllDownNodesBasedOnLastUpdateMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<SetAllDownNodesBasedOnLastUpdateMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SetAllDownNodesBasedOnLastUpdateMutation>(
            SetAllDownNodesBasedOnLastUpdateDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'setAllDownNodesBasedOnLastUpdate',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
const hasura = graphql.link('http://localhost:8090/v1/graphql');

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateUserOnLoginMutationHasura((req, res, ctx) => {
 *   const { email, id } = req.variables;
 *   return res(
 *     ctx.data({ insertUsers })
 *   )
 * })
 */
export const mockCreateUserOnLoginMutationHasura = (
  resolver: ResponseResolver<
    GraphQLRequest<CreateUserOnLoginMutationVariables>,
    GraphQLContext<CreateUserOnLoginMutation>,
    any
  >
) =>
  hasura.mutation<
    CreateUserOnLoginMutation,
    CreateUserOnLoginMutationVariables
  >('createUserOnLogin', resolver);

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpsertTraefikRoutesIntoDbMutationHasura((req, res, ctx) => {
 *   const { insertData } = req.variables;
 *   return res(
 *     ctx.data({ insertTraefikRoutes })
 *   )
 * })
 */
export const mockUpsertTraefikRoutesIntoDbMutationHasura = (
  resolver: ResponseResolver<
    GraphQLRequest<UpsertTraefikRoutesIntoDbMutationVariables>,
    GraphQLContext<UpsertTraefikRoutesIntoDbMutation>,
    any
  >
) =>
  hasura.mutation<
    UpsertTraefikRoutesIntoDbMutation,
    UpsertTraefikRoutesIntoDbMutationVariables
  >('upsertTraefikRoutesIntoDb', resolver);

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockSetAllDownNodesBasedOnLastUpdateMutationHasura((req, res, ctx) => {
 *   const { update } = req.variables;
 *   return res(
 *     ctx.data({ updateTraefikRoutes })
 *   )
 * })
 */
export const mockSetAllDownNodesBasedOnLastUpdateMutationHasura = (
  resolver: ResponseResolver<
    GraphQLRequest<SetAllDownNodesBasedOnLastUpdateMutationVariables>,
    GraphQLContext<SetAllDownNodesBasedOnLastUpdateMutation>,
    any
  >
) =>
  hasura.mutation<
    SetAllDownNodesBasedOnLastUpdateMutation,
    SetAllDownNodesBasedOnLastUpdateMutationVariables
  >('setAllDownNodesBasedOnLastUpdate', resolver);
