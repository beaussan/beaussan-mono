import * as Types from '@beaussan/dash/types/hasura-codegen-types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type BookmarkItemFragment = { __typename?: 'Bookmarks', id: any, link: string, faviconUrl?: string | null, displayName: string, position: number };

export type GetListOfBookmarksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetListOfBookmarksQuery = { __typename?: 'query_root', bookmarks: Array<{ __typename?: 'Bookmarks', id: any, link: string, faviconUrl?: string | null, displayName: string, position: number }> };

export const BookmarkItemFragmentDoc = gql`
    fragment BookmarkItem on Bookmarks {
  id
  link
  faviconUrl
  displayName
  position
}
    `;
export const GetListOfBookmarksDocument = gql`
    query getListOfBookmarks {
  bookmarks(orderBy: {position: ASC_NULLS_LAST}) {
    ...BookmarkItem
  }
}
    ${BookmarkItemFragmentDoc}`;

export function useGetListOfBookmarksQuery(options?: Omit<Urql.UseQueryArgs<GetListOfBookmarksQueryVariables>, 'query'>) {
  return Urql.useQuery<GetListOfBookmarksQuery, GetListOfBookmarksQueryVariables>({ query: GetListOfBookmarksDocument, ...options });
};

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetListOfBookmarksQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ bookmarks })
 *   )
 * })
 */
export const mockGetListOfBookmarksQuery = (resolver: ResponseResolver<GraphQLRequest<GetListOfBookmarksQueryVariables>, GraphQLContext<GetListOfBookmarksQuery>, any>) =>
  graphql.query<GetListOfBookmarksQuery, GetListOfBookmarksQueryVariables>(
    'getListOfBookmarks',
    resolver
  )
