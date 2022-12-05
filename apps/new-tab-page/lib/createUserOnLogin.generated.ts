import * as Types from '@beaussan/dash/types/hasura-codegen-types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type CreateUserOnLoginMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
  id: Types.Scalars['uuid'];
}>;


export type CreateUserOnLoginMutation = { __typename?: 'mutation_root', insertUsers?: { __typename?: 'UsersMutationResponse', affected_rows: number } | null };


export const CreateUserOnLoginDocument = gql`
    mutation createUserOnLogin($email: String, $id: uuid!) {
  insertUsers(
    objects: {id: $id, email: $email}
    onConflict: {constraint: users_pkey, update_columns: createdAt}
  ) {
    affected_rows
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUserOnLogin(variables: CreateUserOnLoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserOnLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserOnLoginMutation>(CreateUserOnLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserOnLogin', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;