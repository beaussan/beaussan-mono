import * as Types from '../../../libs/dash/types/hasura-codegen-types/src/lib/gql/msw.graphql.ts/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type CreateUserOnLoginMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
  id: Types.Scalars['uuid'];
}>;


export type CreateUserOnLoginMutation = { __typename?: 'mutation_root', insertUsers?: { __typename?: 'UsersMutationResponse', affected_rows: number } | null };

const hasura = graphql.link('http://localhost:8090/v1/graphql')

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
export const mockCreateUserOnLoginMutationHasura = (resolver: ResponseResolver<GraphQLRequest<CreateUserOnLoginMutationVariables>, GraphQLContext<CreateUserOnLoginMutation>, any>) =>
  hasura.mutation<CreateUserOnLoginMutation, CreateUserOnLoginMutationVariables>(
    'createUserOnLogin',
    resolver
  )
