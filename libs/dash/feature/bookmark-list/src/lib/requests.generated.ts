import * as Types from '@beaussan/dash/data/hasura-codegen-types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type BookmarkItemFragment = {
  __typename?: 'Bookmarks';
  id: any;
  link: string;
  faviconUrl?: string | null;
  displayName: string;
  position?: number | null;
};

export type TraefikRoutesFragment = {
  __typename?: 'TraefikRoutes';
  faviconUrl?: string | null;
  lastSeenAlive: any;
  isUp: boolean;
  name: string;
  friendlyName?: string | null;
  link: string;
};

export type GetListOfBookmarksQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetListOfBookmarksQuery = {
  __typename?: 'query_root';
  bookmarks: Array<{
    __typename?: 'Bookmarks';
    id: any;
    link: string;
    faviconUrl?: string | null;
    displayName: string;
    position?: number | null;
  }>;
  traefikRoutes: Array<{
    __typename?: 'TraefikRoutes';
    faviconUrl?: string | null;
    lastSeenAlive: any;
    isUp: boolean;
    name: string;
    friendlyName?: string | null;
    link: string;
  }>;
};

export const BookmarkItemFragmentDoc = gql`
  fragment BookmarkItem on Bookmarks {
    id
    link
    faviconUrl
    displayName
    position
  }
`;
export const TraefikRoutesFragmentDoc = gql`
  fragment TraefikRoutes on TraefikRoutes {
    faviconUrl
    lastSeenAlive
    isUp
    name
    friendlyName
    faviconUrl
    link: calculatedUrl
  }
`;
export const GetListOfBookmarksDocument = gql`
  query getListOfBookmarks {
    bookmarks(orderBy: { position: ASC_NULLS_LAST }) {
      ...BookmarkItem
    }
    traefikRoutes(
      orderBy: { createdAt: DESC }
      where: { isSown: { _eq: true } }
    ) {
      ...TraefikRoutes
    }
  }
  ${BookmarkItemFragmentDoc}
  ${TraefikRoutesFragmentDoc}
`;

export function useGetListOfBookmarksQuery(
  options?: Omit<Urql.UseQueryArgs<GetListOfBookmarksQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetListOfBookmarksQuery,
    GetListOfBookmarksQueryVariables
  >({ query: GetListOfBookmarksDocument, ...options });
}

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetListOfBookmarksQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ bookmarks, traefikRoutes })
 *   )
 * })
 */
export const mockGetListOfBookmarksQuery = (
  resolver: ResponseResolver<
    GraphQLRequest<GetListOfBookmarksQueryVariables>,
    GraphQLContext<GetListOfBookmarksQuery>,
    any
  >
) =>
  graphql.query<GetListOfBookmarksQuery, GetListOfBookmarksQueryVariables>(
    'getListOfBookmarks',
    resolver
  );
