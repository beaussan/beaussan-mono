import * as Types from '@beaussan/dash/data/hasura-codegen-types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type BookmarkItemFragment = {
  __typename?: 'Bookmarks';
  id: string;
  link: string;
  faviconUrl?: string | null;
  displayName: string;
  position?: number | null;
};

export type TraefikRoutesFragment = {
  __typename?: 'TraefikRoutes';
  faviconUrl?: string | null;
  lastSeenAlive: string;
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
    id: string;
    link: string;
    faviconUrl?: string | null;
    displayName: string;
    position?: number | null;
  }>;
  traefikRoutes: Array<{
    __typename?: 'TraefikRoutes';
    faviconUrl?: string | null;
    lastSeenAlive: string;
    isUp: boolean;
    name: string;
    friendlyName?: string | null;
    link: string;
  }>;
};

export type InsertBookmarkMutationVariables = Types.Exact<{
  object: Types.BookmarksInsertInput;
}>;

export type InsertBookmarkMutation = {
  __typename?: 'mutation_root';
  insertBookmarksOne?: {
    __typename?: 'Bookmarks';
    position?: number | null;
    link: string;
    id: string;
    faviconUrl?: string | null;
    displayName: string;
    userId: string;
  } | null;
};

export type DeleteBookmarkByIdMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;

export type DeleteBookmarkByIdMutation = {
  __typename?: 'mutation_root';
  deleteBookmarksByPk?: { __typename?: 'Bookmarks'; id: string } | null;
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
export const InsertBookmarkDocument = gql`
  mutation InsertBookmark($object: BookmarksInsertInput!) {
    insertBookmarksOne(
      object: $object
      onConflict: { constraint: bookmarks_pkey, updateColumns: displayName }
    ) {
      position
      link
      id
      faviconUrl
      displayName
      userId
    }
  }
`;

export function useInsertBookmarkMutation() {
  return Urql.useMutation<
    InsertBookmarkMutation,
    InsertBookmarkMutationVariables
  >(InsertBookmarkDocument);
}
export const DeleteBookmarkByIdDocument = gql`
  mutation DeleteBookmarkById($id: uuid!) {
    deleteBookmarksByPk(id: $id) {
      id
    }
  }
`;

export function useDeleteBookmarkByIdMutation() {
  return Urql.useMutation<
    DeleteBookmarkByIdMutation,
    DeleteBookmarkByIdMutationVariables
  >(DeleteBookmarkByIdDocument);
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

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertBookmarkMutation((req, res, ctx) => {
 *   const { object } = req.variables;
 *   return res(
 *     ctx.data({ insertBookmarksOne })
 *   )
 * })
 */
export const mockInsertBookmarkMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<InsertBookmarkMutationVariables>,
    GraphQLContext<InsertBookmarkMutation>,
    any
  >
) =>
  graphql.mutation<InsertBookmarkMutation, InsertBookmarkMutationVariables>(
    'InsertBookmark',
    resolver
  );

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteBookmarkByIdMutation((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ deleteBookmarksByPk })
 *   )
 * })
 */
export const mockDeleteBookmarkByIdMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<DeleteBookmarkByIdMutationVariables>,
    GraphQLContext<DeleteBookmarkByIdMutation>,
    any
  >
) =>
  graphql.mutation<
    DeleteBookmarkByIdMutation,
    DeleteBookmarkByIdMutationVariables
  >('DeleteBookmarkById', resolver);
