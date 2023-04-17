export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** columns and relationships of "bookmarks" */
export type Bookmarks = {
  __typename?: 'Bookmarks';
  displayName: Scalars['String'];
  faviconUrl?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  link: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "bookmarks" */
export type BookmarksAggregate = {
  __typename?: 'BookmarksAggregate';
  aggregate?: Maybe<BookmarksAggregateFields>;
  nodes: Array<Bookmarks>;
};

export type BookmarksAggregateBoolExp = {
  count?: InputMaybe<BookmarksAggregateBoolExpCount>;
};

/** aggregate fields of "bookmarks" */
export type BookmarksAggregateFields = {
  __typename?: 'BookmarksAggregateFields';
  avg?: Maybe<BookmarksAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BookmarksMaxFields>;
  min?: Maybe<BookmarksMinFields>;
  stddev?: Maybe<BookmarksStddevFields>;
  stddevPop?: Maybe<BookmarksStddevPopFields>;
  stddevSamp?: Maybe<BookmarksStddevSampFields>;
  sum?: Maybe<BookmarksSumFields>;
  varPop?: Maybe<BookmarksVarPopFields>;
  varSamp?: Maybe<BookmarksVarSampFields>;
  variance?: Maybe<BookmarksVarianceFields>;
};

/** aggregate fields of "bookmarks" */
export type BookmarksAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BookmarksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bookmarks" */
export type BookmarksAggregateOrderBy = {
  avg?: InputMaybe<BookmarksAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<BookmarksMaxOrderBy>;
  min?: InputMaybe<BookmarksMinOrderBy>;
  stddev?: InputMaybe<BookmarksStddevOrderBy>;
  stddevPop?: InputMaybe<BookmarksStddevPopOrderBy>;
  stddevSamp?: InputMaybe<BookmarksStddevSampOrderBy>;
  sum?: InputMaybe<BookmarksSumOrderBy>;
  varPop?: InputMaybe<BookmarksVarPopOrderBy>;
  varSamp?: InputMaybe<BookmarksVarSampOrderBy>;
  variance?: InputMaybe<BookmarksVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "bookmarks" */
export type BookmarksArrRelInsertInput = {
  data: Array<BookmarksInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<BookmarksOnConflict>;
};

/** aggregate avg on columns */
export type BookmarksAvgFields = {
  __typename?: 'BookmarksAvgFields';
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bookmarks" */
export type BookmarksAvgOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "bookmarks". All fields are combined with a logical 'AND'. */
export type BookmarksBoolExp = {
  _and?: InputMaybe<Array<BookmarksBoolExp>>;
  _not?: InputMaybe<BookmarksBoolExp>;
  _or?: InputMaybe<Array<BookmarksBoolExp>>;
  displayName?: InputMaybe<StringComparisonExp>;
  faviconUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  link?: InputMaybe<StringComparisonExp>;
  position?: InputMaybe<IntComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "bookmarks" */
export enum BookmarksConstraint {
  /** unique or primary key constraint on columns "id" */
  BookmarksPkey = 'bookmarks_pkey',
  /** unique or primary key constraint on columns "userId", "position" */
  BookmarksUserIdPositionKey = 'bookmarks_userId_position_key',
}

/** input type for incrementing numeric columns in table "bookmarks" */
export type BookmarksIncInput = {
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bookmarks" */
export type BookmarksInsertInput = {
  displayName?: InputMaybe<Scalars['String']>;
  faviconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  link?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type BookmarksMaxFields = {
  __typename?: 'BookmarksMaxFields';
  displayName?: Maybe<Scalars['String']>;
  faviconUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "bookmarks" */
export type BookmarksMaxOrderBy = {
  displayName?: InputMaybe<OrderBy>;
  faviconUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  link?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type BookmarksMinFields = {
  __typename?: 'BookmarksMinFields';
  displayName?: Maybe<Scalars['String']>;
  faviconUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "bookmarks" */
export type BookmarksMinOrderBy = {
  displayName?: InputMaybe<OrderBy>;
  faviconUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  link?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "bookmarks" */
export type BookmarksMutationResponse = {
  __typename?: 'BookmarksMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bookmarks>;
};

/** on_conflict condition type for table "bookmarks" */
export type BookmarksOnConflict = {
  constraint: BookmarksConstraint;
  updateColumns?: Array<BookmarksUpdateColumn>;
  where?: InputMaybe<BookmarksBoolExp>;
};

/** Ordering options when selecting data from "bookmarks". */
export type BookmarksOrderBy = {
  displayName?: InputMaybe<OrderBy>;
  faviconUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  link?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: bookmarks */
export type BookmarksPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "bookmarks" */
export enum BookmarksSelectColumn {
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  FaviconUrl = 'faviconUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  Position = 'position',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "bookmarks" */
export type BookmarksSetInput = {
  displayName?: InputMaybe<Scalars['String']>;
  faviconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  link?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type BookmarksStddevFields = {
  __typename?: 'BookmarksStddevFields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bookmarks" */
export type BookmarksStddevOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type BookmarksStddevPopFields = {
  __typename?: 'BookmarksStddevPopFields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "bookmarks" */
export type BookmarksStddevPopOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type BookmarksStddevSampFields = {
  __typename?: 'BookmarksStddevSampFields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "bookmarks" */
export type BookmarksStddevSampOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "bookmarks" */
export type BookmarksStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: BookmarksStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BookmarksStreamCursorValueInput = {
  displayName?: InputMaybe<Scalars['String']>;
  faviconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  link?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type BookmarksSumFields = {
  __typename?: 'BookmarksSumFields';
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bookmarks" */
export type BookmarksSumOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** update columns of table "bookmarks" */
export enum BookmarksUpdateColumn {
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  FaviconUrl = 'faviconUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  Position = 'position',
  /** column name */
  UserId = 'userId',
}

export type BookmarksUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BookmarksIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BookmarksSetInput>;
  /** filter the rows which have to be updated */
  where: BookmarksBoolExp;
};

/** aggregate varPop on columns */
export type BookmarksVarPopFields = {
  __typename?: 'BookmarksVarPopFields';
  position?: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "bookmarks" */
export type BookmarksVarPopOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type BookmarksVarSampFields = {
  __typename?: 'BookmarksVarSampFields';
  position?: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "bookmarks" */
export type BookmarksVarSampOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type BookmarksVarianceFields = {
  __typename?: 'BookmarksVarianceFields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bookmarks" */
export type BookmarksVarianceOrderBy = {
  position?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST',
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "traefikRoutes" */
export type TraefikRoutes = {
  __typename?: 'TraefikRoutes';
  calculatedUrl: Scalars['String'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  faviconUrl?: Maybe<Scalars['String']>;
  friendlyName?: Maybe<Scalars['String']>;
  isSown: Scalars['Boolean'];
  isUp: Scalars['Boolean'];
  lastSeenAlive: Scalars['timestamptz'];
  name: Scalars['String'];
  provider: Scalars['String'];
  rule: Scalars['String'];
  service: Scalars['String'];
};

/** aggregated selection of "traefikRoutes" */
export type TraefikRoutesAggregate = {
  __typename?: 'TraefikRoutesAggregate';
  aggregate?: Maybe<TraefikRoutesAggregateFields>;
  nodes: Array<TraefikRoutes>;
};

/** aggregate fields of "traefikRoutes" */
export type TraefikRoutesAggregateFields = {
  __typename?: 'TraefikRoutesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TraefikRoutesMaxFields>;
  min?: Maybe<TraefikRoutesMinFields>;
};

/** aggregate fields of "traefikRoutes" */
export type TraefikRoutesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TraefikRoutesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "traefikRoutes". All fields are combined with a logical 'AND'. */
export type TraefikRoutesBoolExp = {
  _and?: InputMaybe<Array<TraefikRoutesBoolExp>>;
  _not?: InputMaybe<TraefikRoutesBoolExp>;
  _or?: InputMaybe<Array<TraefikRoutesBoolExp>>;
  calculatedUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  faviconUrl?: InputMaybe<StringComparisonExp>;
  friendlyName?: InputMaybe<StringComparisonExp>;
  isSown?: InputMaybe<BooleanComparisonExp>;
  isUp?: InputMaybe<BooleanComparisonExp>;
  lastSeenAlive?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  provider?: InputMaybe<StringComparisonExp>;
  rule?: InputMaybe<StringComparisonExp>;
  service?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "traefikRoutes" */
export enum TraefikRoutesConstraint {
  /** unique or primary key constraint on columns "name" */
  TraefikRoutesPkey = 'traefikRoutes_pkey',
}

/** input type for inserting data into table "traefikRoutes" */
export type TraefikRoutesInsertInput = {
  calculatedUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  faviconUrl?: InputMaybe<Scalars['String']>;
  friendlyName?: InputMaybe<Scalars['String']>;
  isSown?: InputMaybe<Scalars['Boolean']>;
  isUp?: InputMaybe<Scalars['Boolean']>;
  lastSeenAlive?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  rule?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TraefikRoutesMaxFields = {
  __typename?: 'TraefikRoutesMaxFields';
  calculatedUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  faviconUrl?: Maybe<Scalars['String']>;
  friendlyName?: Maybe<Scalars['String']>;
  lastSeenAlive?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TraefikRoutesMinFields = {
  __typename?: 'TraefikRoutesMinFields';
  calculatedUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  faviconUrl?: Maybe<Scalars['String']>;
  friendlyName?: Maybe<Scalars['String']>;
  lastSeenAlive?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "traefikRoutes" */
export type TraefikRoutesMutationResponse = {
  __typename?: 'TraefikRoutesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TraefikRoutes>;
};

/** on_conflict condition type for table "traefikRoutes" */
export type TraefikRoutesOnConflict = {
  constraint: TraefikRoutesConstraint;
  updateColumns?: Array<TraefikRoutesUpdateColumn>;
  where?: InputMaybe<TraefikRoutesBoolExp>;
};

/** Ordering options when selecting data from "traefikRoutes". */
export type TraefikRoutesOrderBy = {
  calculatedUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  faviconUrl?: InputMaybe<OrderBy>;
  friendlyName?: InputMaybe<OrderBy>;
  isSown?: InputMaybe<OrderBy>;
  isUp?: InputMaybe<OrderBy>;
  lastSeenAlive?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  rule?: InputMaybe<OrderBy>;
  service?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: traefikRoutes */
export type TraefikRoutesPkColumnsInput = {
  name: Scalars['String'];
};

/** select columns of table "traefikRoutes" */
export enum TraefikRoutesSelectColumn {
  /** column name */
  CalculatedUrl = 'calculatedUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FaviconUrl = 'faviconUrl',
  /** column name */
  FriendlyName = 'friendlyName',
  /** column name */
  IsSown = 'isSown',
  /** column name */
  IsUp = 'isUp',
  /** column name */
  LastSeenAlive = 'lastSeenAlive',
  /** column name */
  Name = 'name',
  /** column name */
  Provider = 'provider',
  /** column name */
  Rule = 'rule',
  /** column name */
  Service = 'service',
}

/** input type for updating data in table "traefikRoutes" */
export type TraefikRoutesSetInput = {
  calculatedUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  faviconUrl?: InputMaybe<Scalars['String']>;
  friendlyName?: InputMaybe<Scalars['String']>;
  isSown?: InputMaybe<Scalars['Boolean']>;
  isUp?: InputMaybe<Scalars['Boolean']>;
  lastSeenAlive?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  rule?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "traefikRoutes" */
export type TraefikRoutesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TraefikRoutesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TraefikRoutesStreamCursorValueInput = {
  calculatedUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  faviconUrl?: InputMaybe<Scalars['String']>;
  friendlyName?: InputMaybe<Scalars['String']>;
  isSown?: InputMaybe<Scalars['Boolean']>;
  isUp?: InputMaybe<Scalars['Boolean']>;
  lastSeenAlive?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  rule?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
};

/** update columns of table "traefikRoutes" */
export enum TraefikRoutesUpdateColumn {
  /** column name */
  CalculatedUrl = 'calculatedUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FaviconUrl = 'faviconUrl',
  /** column name */
  FriendlyName = 'friendlyName',
  /** column name */
  IsSown = 'isSown',
  /** column name */
  IsUp = 'isUp',
  /** column name */
  LastSeenAlive = 'lastSeenAlive',
  /** column name */
  Name = 'name',
  /** column name */
  Provider = 'provider',
  /** column name */
  Rule = 'rule',
  /** column name */
  Service = 'service',
}

export type TraefikRoutesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TraefikRoutesSetInput>;
  /** filter the rows which have to be updated */
  where: TraefikRoutesBoolExp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregate relationship */
  bookmarksAggregate: BookmarksAggregate;
  canSeeTraefikContent: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  todoistApiToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "users" */
export type UsersBookmarksArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};

/** columns and relationships of "users" */
export type UsersBookmarksAggregateArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  bookmarks?: InputMaybe<BookmarksBoolExp>;
  bookmarksAggregate?: InputMaybe<BookmarksAggregateBoolExp>;
  canSeeTraefikContent?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  todoistApiToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  bookmarks?: InputMaybe<BookmarksArrRelInsertInput>;
  canSeeTraefikContent?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  todoistApiToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  todoistApiToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  todoistApiToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  updateColumns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  bookmarksAggregate?: InputMaybe<BookmarksAggregateOrderBy>;
  canSeeTraefikContent?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  todoistApiToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CanSeeTraefikContent = 'canSeeTraefikContent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  TodoistApiToken = 'todoistApiToken',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  canSeeTraefikContent?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  todoistApiToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  canSeeTraefikContent?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  todoistApiToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CanSeeTraefikContent = 'canSeeTraefikContent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  TodoistApiToken = 'todoistApiToken',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type BookmarksAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<BookmarksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookmarksBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bookmarks" */
  deleteBookmarks?: Maybe<BookmarksMutationResponse>;
  /** delete single row from the table: "bookmarks" */
  deleteBookmarksByPk?: Maybe<Bookmarks>;
  /** delete data from the table: "traefikRoutes" */
  deleteTraefikRoutes?: Maybe<TraefikRoutesMutationResponse>;
  /** delete single row from the table: "traefikRoutes" */
  deleteTraefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** insert data into the table: "bookmarks" */
  insertBookmarks?: Maybe<BookmarksMutationResponse>;
  /** insert a single row into the table: "bookmarks" */
  insertBookmarksOne?: Maybe<Bookmarks>;
  /** insert data into the table: "traefikRoutes" */
  insertTraefikRoutes?: Maybe<TraefikRoutesMutationResponse>;
  /** insert a single row into the table: "traefikRoutes" */
  insertTraefikRoutesOne?: Maybe<TraefikRoutes>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** update data of the table: "bookmarks" */
  updateBookmarks?: Maybe<BookmarksMutationResponse>;
  /** update single row of the table: "bookmarks" */
  updateBookmarksByPk?: Maybe<Bookmarks>;
  /** update multiples rows of table: "bookmarks" */
  updateBookmarksMany?: Maybe<Array<Maybe<BookmarksMutationResponse>>>;
  /** update data of the table: "traefikRoutes" */
  updateTraefikRoutes?: Maybe<TraefikRoutesMutationResponse>;
  /** update single row of the table: "traefikRoutes" */
  updateTraefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** update multiples rows of table: "traefikRoutes" */
  updateTraefikRoutesMany?: Maybe<Array<Maybe<TraefikRoutesMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};

/** mutation root */
export type Mutation_RootDeleteBookmarksArgs = {
  where: BookmarksBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteBookmarksByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeleteTraefikRoutesArgs = {
  where: TraefikRoutesBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteTraefikRoutesByPkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUsersByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsertBookmarksArgs = {
  objects: Array<BookmarksInsertInput>;
  onConflict?: InputMaybe<BookmarksOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertBookmarksOneArgs = {
  object: BookmarksInsertInput;
  onConflict?: InputMaybe<BookmarksOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTraefikRoutesArgs = {
  objects: Array<TraefikRoutesInsertInput>;
  onConflict?: InputMaybe<TraefikRoutesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTraefikRoutesOneArgs = {
  object: TraefikRoutesInsertInput;
  onConflict?: InputMaybe<TraefikRoutesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdateBookmarksArgs = {
  _inc?: InputMaybe<BookmarksIncInput>;
  _set?: InputMaybe<BookmarksSetInput>;
  where: BookmarksBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateBookmarksByPkArgs = {
  _inc?: InputMaybe<BookmarksIncInput>;
  _set?: InputMaybe<BookmarksSetInput>;
  pkColumns: BookmarksPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateBookmarksManyArgs = {
  updates: Array<BookmarksUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateTraefikRoutesArgs = {
  _set?: InputMaybe<TraefikRoutesSetInput>;
  where: TraefikRoutesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateTraefikRoutesByPkArgs = {
  _set?: InputMaybe<TraefikRoutesSetInput>;
  pkColumns: TraefikRoutesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateTraefikRoutesManyArgs = {
  updates: Array<TraefikRoutesUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pkColumns: UsersPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregate relationship */
  bookmarksAggregate: BookmarksAggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarksByPk?: Maybe<Bookmarks>;
  /** fetch data from the table: "traefikRoutes" */
  traefikRoutes: Array<TraefikRoutes>;
  /** fetch aggregated fields from the table: "traefikRoutes" */
  traefikRoutesAggregate: TraefikRoutesAggregate;
  /** fetch data from the table: "traefikRoutes" using primary key columns */
  traefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
};

export type Query_RootBookmarksArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};

export type Query_RootBookmarksAggregateArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};

export type Query_RootBookmarksByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootTraefikRoutesArgs = {
  distinctOn?: InputMaybe<Array<TraefikRoutesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TraefikRoutesOrderBy>>;
  where?: InputMaybe<TraefikRoutesBoolExp>;
};

export type Query_RootTraefikRoutesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TraefikRoutesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TraefikRoutesOrderBy>>;
  where?: InputMaybe<TraefikRoutesBoolExp>;
};

export type Query_RootTraefikRoutesByPkArgs = {
  name: Scalars['String'];
};

export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Query_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregate relationship */
  bookmarksAggregate: BookmarksAggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarksByPk?: Maybe<Bookmarks>;
  /** fetch data from the table in a streaming manner: "bookmarks" */
  bookmarksStream: Array<Bookmarks>;
  /** fetch data from the table: "traefikRoutes" */
  traefikRoutes: Array<TraefikRoutes>;
  /** fetch aggregated fields from the table: "traefikRoutes" */
  traefikRoutesAggregate: TraefikRoutesAggregate;
  /** fetch data from the table: "traefikRoutes" using primary key columns */
  traefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** fetch data from the table in a streaming manner: "traefikRoutes" */
  traefikRoutesStream: Array<TraefikRoutes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
};

export type Subscription_RootBookmarksArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};

export type Subscription_RootBookmarksAggregateArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};

export type Subscription_RootBookmarksByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootBookmarksStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<BookmarksStreamCursorInput>>;
  where?: InputMaybe<BookmarksBoolExp>;
};

export type Subscription_RootTraefikRoutesArgs = {
  distinctOn?: InputMaybe<Array<TraefikRoutesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TraefikRoutesOrderBy>>;
  where?: InputMaybe<TraefikRoutesBoolExp>;
};

export type Subscription_RootTraefikRoutesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TraefikRoutesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TraefikRoutesOrderBy>>;
  where?: InputMaybe<TraefikRoutesBoolExp>;
};

export type Subscription_RootTraefikRoutesByPkArgs = {
  name: Scalars['String'];
};

export type Subscription_RootTraefikRoutesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<TraefikRoutesStreamCursorInput>>;
  where?: InputMaybe<TraefikRoutesBoolExp>;
};

export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Subscription_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};
