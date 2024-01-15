export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: string;
  uuid: string;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'Account';
  accessToken?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['bigint']>;
  id: Scalars['uuid'];
  idToken?: Maybe<Scalars['String']>;
  oauthToken?: Maybe<Scalars['String']>;
  oauthTokenSecret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>;
  scope?: Maybe<Scalars['String']>;
  sessionState?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "account" */
export type AccountAggregate = {
  __typename?: 'AccountAggregate';
  aggregate?: Maybe<AccountAggregateFields>;
  nodes: Array<Account>;
};

export type AccountAggregateBoolExp = {
  count?: InputMaybe<AccountAggregateBoolExpCount>;
};

/** aggregate fields of "account" */
export type AccountAggregateFields = {
  __typename?: 'AccountAggregateFields';
  avg?: Maybe<AccountAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<AccountMaxFields>;
  min?: Maybe<AccountMinFields>;
  stddev?: Maybe<AccountStddevFields>;
  stddevPop?: Maybe<AccountStddevPopFields>;
  stddevSamp?: Maybe<AccountStddevSampFields>;
  sum?: Maybe<AccountSumFields>;
  varPop?: Maybe<AccountVarPopFields>;
  varSamp?: Maybe<AccountVarSampFields>;
  variance?: Maybe<AccountVarianceFields>;
};


/** aggregate fields of "account" */
export type AccountAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccountSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account" */
export type AccountAggregateOrderBy = {
  avg?: InputMaybe<AccountAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AccountMaxOrderBy>;
  min?: InputMaybe<AccountMinOrderBy>;
  stddev?: InputMaybe<AccountStddevOrderBy>;
  stddevPop?: InputMaybe<AccountStddevPopOrderBy>;
  stddevSamp?: InputMaybe<AccountStddevSampOrderBy>;
  sum?: InputMaybe<AccountSumOrderBy>;
  varPop?: InputMaybe<AccountVarPopOrderBy>;
  varSamp?: InputMaybe<AccountVarSampOrderBy>;
  variance?: InputMaybe<AccountVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "account" */
export type AccountArrRelInsertInput = {
  data: Array<AccountInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AccountOnConflict>;
};

/** aggregate avg on columns */
export type AccountAvgFields = {
  __typename?: 'AccountAvgFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "account" */
export type AccountAvgOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type AccountBoolExp = {
  _and?: InputMaybe<Array<AccountBoolExp>>;
  _not?: InputMaybe<AccountBoolExp>;
  _or?: InputMaybe<Array<AccountBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  expiresAt?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  idToken?: InputMaybe<StringComparisonExp>;
  oauthToken?: InputMaybe<StringComparisonExp>;
  oauthTokenSecret?: InputMaybe<StringComparisonExp>;
  provider?: InputMaybe<StringComparisonExp>;
  providerAccountId?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  refreshTokenExpiresIn?: InputMaybe<BigintComparisonExp>;
  scope?: InputMaybe<StringComparisonExp>;
  sessionState?: InputMaybe<StringComparisonExp>;
  tokenType?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "account" */
export enum AccountConstraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'account_pkey'
}

/** input type for incrementing numeric columns in table "account" */
export type AccountIncInput = {
  expiresAt?: InputMaybe<Scalars['bigint']>;
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "account" */
export type AccountInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idToken?: InputMaybe<Scalars['String']>;
  oauthToken?: InputMaybe<Scalars['String']>;
  oauthTokenSecret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>;
  scope?: InputMaybe<Scalars['String']>;
  sessionState?: InputMaybe<Scalars['String']>;
  tokenType?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AccountMaxFields = {
  __typename?: 'AccountMaxFields';
  accessToken?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  idToken?: Maybe<Scalars['String']>;
  oauthToken?: Maybe<Scalars['String']>;
  oauthTokenSecret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>;
  scope?: Maybe<Scalars['String']>;
  sessionState?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "account" */
export type AccountMaxOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  idToken?: InputMaybe<OrderBy>;
  oauthToken?: InputMaybe<OrderBy>;
  oauthTokenSecret?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
  scope?: InputMaybe<OrderBy>;
  sessionState?: InputMaybe<OrderBy>;
  tokenType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AccountMinFields = {
  __typename?: 'AccountMinFields';
  accessToken?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  idToken?: Maybe<Scalars['String']>;
  oauthToken?: Maybe<Scalars['String']>;
  oauthTokenSecret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>;
  scope?: Maybe<Scalars['String']>;
  sessionState?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "account" */
export type AccountMinOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  idToken?: InputMaybe<OrderBy>;
  oauthToken?: InputMaybe<OrderBy>;
  oauthTokenSecret?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
  scope?: InputMaybe<OrderBy>;
  sessionState?: InputMaybe<OrderBy>;
  tokenType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "account" */
export type AccountMutationResponse = {
  __typename?: 'AccountMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** on_conflict condition type for table "account" */
export type AccountOnConflict = {
  constraint: AccountConstraint;
  updateColumns?: Array<AccountUpdateColumn>;
  where?: InputMaybe<AccountBoolExp>;
};

/** Ordering options when selecting data from "account". */
export type AccountOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  idToken?: InputMaybe<OrderBy>;
  oauthToken?: InputMaybe<OrderBy>;
  oauthTokenSecret?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
  scope?: InputMaybe<OrderBy>;
  sessionState?: InputMaybe<OrderBy>;
  tokenType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: account */
export type AccountPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "account" */
export enum AccountSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  OauthToken = 'oauthToken',
  /** column name */
  OauthTokenSecret = 'oauthTokenSecret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenExpiresIn = 'refreshTokenExpiresIn',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'sessionState',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "account" */
export type AccountSetInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idToken?: InputMaybe<Scalars['String']>;
  oauthToken?: InputMaybe<Scalars['String']>;
  oauthTokenSecret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>;
  scope?: InputMaybe<Scalars['String']>;
  sessionState?: InputMaybe<Scalars['String']>;
  tokenType?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AccountStddevFields = {
  __typename?: 'AccountStddevFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "account" */
export type AccountStddevOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type AccountStddevPopFields = {
  __typename?: 'AccountStddevPopFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "account" */
export type AccountStddevPopOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type AccountStddevSampFields = {
  __typename?: 'AccountStddevSampFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "account" */
export type AccountStddevSampOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "account" */
export type AccountStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AccountStreamCursorValueInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  idToken?: InputMaybe<Scalars['String']>;
  oauthToken?: InputMaybe<Scalars['String']>;
  oauthTokenSecret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>;
  scope?: InputMaybe<Scalars['String']>;
  sessionState?: InputMaybe<Scalars['String']>;
  tokenType?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AccountSumFields = {
  __typename?: 'AccountSumFields';
  expiresAt?: Maybe<Scalars['bigint']>;
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "account" */
export type AccountSumOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** update columns of table "account" */
export enum AccountUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  OauthToken = 'oauthToken',
  /** column name */
  OauthTokenSecret = 'oauthTokenSecret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenExpiresIn = 'refreshTokenExpiresIn',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'sessionState',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AccountUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AccountIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AccountSetInput>;
  /** filter the rows which have to be updated */
  where: AccountBoolExp;
};

/** aggregate varPop on columns */
export type AccountVarPopFields = {
  __typename?: 'AccountVarPopFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "account" */
export type AccountVarPopOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type AccountVarSampFields = {
  __typename?: 'AccountVarSampFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "account" */
export type AccountVarSampOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AccountVarianceFields = {
  __typename?: 'AccountVarianceFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "account" */
export type AccountVarianceOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** columns and relationships of "allowed_role" */
export type AllowedRole = {
  __typename?: 'AllowedRole';
  role: RolesEnum;
  /** An object relationship */
  roleByRole: Roles;
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "allowed_role" */
export type AllowedRoleAggregate = {
  __typename?: 'AllowedRoleAggregate';
  aggregate?: Maybe<AllowedRoleAggregateFields>;
  nodes: Array<AllowedRole>;
};

export type AllowedRoleAggregateBoolExp = {
  count?: InputMaybe<AllowedRoleAggregateBoolExpCount>;
};

/** aggregate fields of "allowed_role" */
export type AllowedRoleAggregateFields = {
  __typename?: 'AllowedRoleAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AllowedRoleMaxFields>;
  min?: Maybe<AllowedRoleMinFields>;
};


/** aggregate fields of "allowed_role" */
export type AllowedRoleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "allowed_role" */
export type AllowedRoleAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AllowedRoleMaxOrderBy>;
  min?: InputMaybe<AllowedRoleMinOrderBy>;
};

/** input type for inserting array relation for remote table "allowed_role" */
export type AllowedRoleArrRelInsertInput = {
  data: Array<AllowedRoleInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AllowedRoleOnConflict>;
};

/** Boolean expression to filter rows from the table "allowed_role". All fields are combined with a logical 'AND'. */
export type AllowedRoleBoolExp = {
  _and?: InputMaybe<Array<AllowedRoleBoolExp>>;
  _not?: InputMaybe<AllowedRoleBoolExp>;
  _or?: InputMaybe<Array<AllowedRoleBoolExp>>;
  role?: InputMaybe<RolesEnumComparisonExp>;
  roleByRole?: InputMaybe<RolesBoolExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "allowed_role" */
export enum AllowedRoleConstraint {
  /** unique or primary key constraint on columns "user_id", "role" */
  AllowedRolePkey = 'allowed_role_pkey'
}

/** input type for inserting data into table "allowed_role" */
export type AllowedRoleInsertInput = {
  role?: InputMaybe<RolesEnum>;
  roleByRole?: InputMaybe<RolesObjRelInsertInput>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AllowedRoleMaxFields = {
  __typename?: 'AllowedRoleMaxFields';
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "allowed_role" */
export type AllowedRoleMaxOrderBy = {
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AllowedRoleMinFields = {
  __typename?: 'AllowedRoleMinFields';
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "allowed_role" */
export type AllowedRoleMinOrderBy = {
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "allowed_role" */
export type AllowedRoleMutationResponse = {
  __typename?: 'AllowedRoleMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AllowedRole>;
};

/** on_conflict condition type for table "allowed_role" */
export type AllowedRoleOnConflict = {
  constraint: AllowedRoleConstraint;
  updateColumns?: Array<AllowedRoleUpdateColumn>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};

/** Ordering options when selecting data from "allowed_role". */
export type AllowedRoleOrderBy = {
  role?: InputMaybe<OrderBy>;
  roleByRole?: InputMaybe<RolesOrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: allowed_role */
export type AllowedRolePkColumnsInput = {
  role: RolesEnum;
  userId: Scalars['uuid'];
};

/** select columns of table "allowed_role" */
export enum AllowedRoleSelectColumn {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "allowed_role" */
export type AllowedRoleSetInput = {
  role?: InputMaybe<RolesEnum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "allowed_role" */
export type AllowedRoleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AllowedRoleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AllowedRoleStreamCursorValueInput = {
  role?: InputMaybe<RolesEnum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "allowed_role" */
export enum AllowedRoleUpdateColumn {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AllowedRoleUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AllowedRoleSetInput>;
  /** filter the rows which have to be updated */
  where: AllowedRoleBoolExp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
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
  user: User;
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
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "bookmarks" */
export enum BookmarksConstraint {
  /** unique or primary key constraint on columns "id" */
  BookmarksPkey = 'bookmarks_pkey',
  /** unique or primary key constraint on columns "userId", "position" */
  BookmarksUserIdPositionKey = 'bookmarks_userId_position_key'
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
  user?: InputMaybe<UserObjRelInsertInput>;
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
  user?: InputMaybe<UserOrderBy>;
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
  UserId = 'userId'
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
  UserId = 'userId'
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
  Desc = 'DESC'
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
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'Roles';
  /** An array relationship */
  allowedRoles: Array<AllowedRole>;
  /** An aggregate relationship */
  allowedRolesAggregate: AllowedRoleAggregate;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  usersAggregate: UserAggregate;
  value: Scalars['String'];
};


/** columns and relationships of "roles" */
export type RolesAllowedRolesArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


/** columns and relationships of "roles" */
export type RolesAllowedRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


/** columns and relationships of "roles" */
export type RolesUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

/** aggregated selection of "roles" */
export type RolesAggregate = {
  __typename?: 'RolesAggregate';
  aggregate?: Maybe<RolesAggregateFields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type RolesAggregateFields = {
  __typename?: 'RolesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RolesMaxFields>;
  min?: Maybe<RolesMinFields>;
};


/** aggregate fields of "roles" */
export type RolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type RolesBoolExp = {
  _and?: InputMaybe<Array<RolesBoolExp>>;
  _not?: InputMaybe<RolesBoolExp>;
  _or?: InputMaybe<Array<RolesBoolExp>>;
  allowedRoles?: InputMaybe<AllowedRoleBoolExp>;
  allowedRolesAggregate?: InputMaybe<AllowedRoleAggregateBoolExp>;
  description?: InputMaybe<StringComparisonExp>;
  users?: InputMaybe<UserBoolExp>;
  usersAggregate?: InputMaybe<UserAggregateBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "roles" */
export enum RolesConstraint {
  /** unique or primary key constraint on columns "value" */
  RolesPkey = 'roles_pkey'
}

export enum RolesEnum {
  User = 'USER'
}

/** Boolean expression to compare columns of type "RolesEnum". All fields are combined with logical 'AND'. */
export type RolesEnumComparisonExp = {
  _eq?: InputMaybe<RolesEnum>;
  _in?: InputMaybe<Array<RolesEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<RolesEnum>;
  _nin?: InputMaybe<Array<RolesEnum>>;
};

/** input type for inserting data into table "roles" */
export type RolesInsertInput = {
  allowedRoles?: InputMaybe<AllowedRoleArrRelInsertInput>;
  description?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RolesMaxFields = {
  __typename?: 'RolesMaxFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RolesMinFields = {
  __typename?: 'RolesMinFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "roles" */
export type RolesMutationResponse = {
  __typename?: 'RolesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type RolesObjRelInsertInput = {
  data: RolesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RolesOnConflict>;
};

/** on_conflict condition type for table "roles" */
export type RolesOnConflict = {
  constraint: RolesConstraint;
  updateColumns?: Array<RolesUpdateColumn>;
  where?: InputMaybe<RolesBoolExp>;
};

/** Ordering options when selecting data from "roles". */
export type RolesOrderBy = {
  allowedRolesAggregate?: InputMaybe<AllowedRoleAggregateOrderBy>;
  description?: InputMaybe<OrderBy>;
  usersAggregate?: InputMaybe<UserAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: roles */
export type RolesPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "roles" */
export enum RolesSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "roles" */
export type RolesSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "roles" */
export type RolesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RolesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RolesStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum RolesUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type RolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RolesSetInput>;
  /** filter the rows which have to be updated */
  where: RolesBoolExp;
};

/** columns and relationships of "session" */
export type Session = {
  __typename?: 'Session';
  expires: Scalars['timestamptz'];
  id: Scalars['uuid'];
  sessionToken: Scalars['String'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "session" */
export type SessionAggregate = {
  __typename?: 'SessionAggregate';
  aggregate?: Maybe<SessionAggregateFields>;
  nodes: Array<Session>;
};

export type SessionAggregateBoolExp = {
  count?: InputMaybe<SessionAggregateBoolExpCount>;
};

/** aggregate fields of "session" */
export type SessionAggregateFields = {
  __typename?: 'SessionAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<SessionMaxFields>;
  min?: Maybe<SessionMinFields>;
};


/** aggregate fields of "session" */
export type SessionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SessionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "session" */
export type SessionAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SessionMaxOrderBy>;
  min?: InputMaybe<SessionMinOrderBy>;
};

/** input type for inserting array relation for remote table "session" */
export type SessionArrRelInsertInput = {
  data: Array<SessionInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SessionOnConflict>;
};

/** Boolean expression to filter rows from the table "session". All fields are combined with a logical 'AND'. */
export type SessionBoolExp = {
  _and?: InputMaybe<Array<SessionBoolExp>>;
  _not?: InputMaybe<SessionBoolExp>;
  _or?: InputMaybe<Array<SessionBoolExp>>;
  expires?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sessionToken?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "session" */
export enum SessionConstraint {
  /** unique or primary key constraint on columns "id" */
  SessionPkey = 'session_pkey'
}

/** input type for inserting data into table "session" */
export type SessionInsertInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type SessionMaxFields = {
  __typename?: 'SessionMaxFields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "session" */
export type SessionMaxOrderBy = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SessionMinFields = {
  __typename?: 'SessionMinFields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "session" */
export type SessionMinOrderBy = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "session" */
export type SessionMutationResponse = {
  __typename?: 'SessionMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session>;
};

/** on_conflict condition type for table "session" */
export type SessionOnConflict = {
  constraint: SessionConstraint;
  updateColumns?: Array<SessionUpdateColumn>;
  where?: InputMaybe<SessionBoolExp>;
};

/** Ordering options when selecting data from "session". */
export type SessionOrderBy = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: session */
export type SessionPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "session" */
export enum SessionSelectColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "session" */
export type SessionSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "session" */
export type SessionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SessionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SessionStreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "session" */
export enum SessionUpdateColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type SessionUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SessionSetInput>;
  /** filter the rows which have to be updated */
  where: SessionBoolExp;
};

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
  TraefikRoutesPkey = 'traefikRoutes_pkey'
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
  Service = 'service'
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
  Service = 'service'
}

export type TraefikRoutesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TraefikRoutesSetInput>;
  /** filter the rows which have to be updated */
  where: TraefikRoutesBoolExp;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  accounts: Array<Account>;
  /** An aggregate relationship */
  accountsAggregate: AccountAggregate;
  /** An array relationship */
  allowedRoles: Array<AllowedRole>;
  /** An aggregate relationship */
  allowedRolesAggregate: AllowedRoleAggregate;
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregate relationship */
  bookmarksAggregate: BookmarksAggregate;
  canSeeTraefikContent: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  defaultRole?: Maybe<RolesEnum>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  role?: Maybe<Roles>;
  /** An array relationship */
  sessions: Array<Session>;
  /** An aggregate relationship */
  sessionsAggregate: SessionAggregate;
  todoistApiToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "user" */
export type UserAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};


/** columns and relationships of "user" */
export type UserAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};


/** columns and relationships of "user" */
export type UserAllowedRolesArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


/** columns and relationships of "user" */
export type UserAllowedRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


/** columns and relationships of "user" */
export type UserBookmarksArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};


/** columns and relationships of "user" */
export type UserBookmarksAggregateArgs = {
  distinctOn?: InputMaybe<Array<BookmarksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BookmarksOrderBy>>;
  where?: InputMaybe<BookmarksBoolExp>;
};


/** columns and relationships of "user" */
export type UserSessionsArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};


/** columns and relationships of "user" */
export type UserSessionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

export type UserAggregateBoolExp = {
  bool_and?: InputMaybe<UserAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<UserAggregateBoolExpBool_Or>;
  count?: InputMaybe<UserAggregateBoolExpCount>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'UserAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type UserAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserMaxOrderBy>;
  min?: InputMaybe<UserMinOrderBy>;
};

/** input type for inserting array relation for remote table "user" */
export type UserArrRelInsertInput = {
  data: Array<UserInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  accounts?: InputMaybe<AccountBoolExp>;
  accountsAggregate?: InputMaybe<AccountAggregateBoolExp>;
  allowedRoles?: InputMaybe<AllowedRoleBoolExp>;
  allowedRolesAggregate?: InputMaybe<AllowedRoleAggregateBoolExp>;
  bookmarks?: InputMaybe<BookmarksBoolExp>;
  bookmarksAggregate?: InputMaybe<BookmarksAggregateBoolExp>;
  canSeeTraefikContent?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  defaultRole?: InputMaybe<RolesEnumComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  emailVerified?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  role?: InputMaybe<RolesBoolExp>;
  sessions?: InputMaybe<SessionBoolExp>;
  sessionsAggregate?: InputMaybe<SessionAggregateBoolExp>;
  todoistApiToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  accounts?: InputMaybe<AccountArrRelInsertInput>;
  allowedRoles?: InputMaybe<AllowedRoleArrRelInsertInput>;
  bookmarks?: InputMaybe<BookmarksArrRelInsertInput>;
  canSeeTraefikContent?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RolesObjRelInsertInput>;
  sessions?: InputMaybe<SessionArrRelInsertInput>;
  todoistApiToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  todoistApiToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type UserMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  todoistApiToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  todoistApiToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type UserMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  todoistApiToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  updateColumns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  accountsAggregate?: InputMaybe<AccountAggregateOrderBy>;
  allowedRolesAggregate?: InputMaybe<AllowedRoleAggregateOrderBy>;
  bookmarksAggregate?: InputMaybe<BookmarksAggregateOrderBy>;
  canSeeTraefikContent?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  role?: InputMaybe<RolesOrderBy>;
  sessionsAggregate?: InputMaybe<SessionAggregateOrderBy>;
  todoistApiToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CanSeeTraefikContent = 'canSeeTraefikContent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  TodoistApiToken = 'todoistApiToken',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "userAggregateBoolExpBool_andArgumentsColumns" columns of table "user" */
export enum UserSelectColumnUserAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  CanSeeTraefikContent = 'canSeeTraefikContent'
}

/** select "userAggregateBoolExpBool_orArgumentsColumns" columns of table "user" */
export enum UserSelectColumnUserAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  CanSeeTraefikContent = 'canSeeTraefikContent'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  canSeeTraefikContent?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  todoistApiToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  canSeeTraefikContent?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  todoistApiToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CanSeeTraefikContent = 'canSeeTraefikContent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  TodoistApiToken = 'todoistApiToken',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  /** filter the rows which have to be updated */
  where: UserBoolExp;
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

/** columns and relationships of "verification_token" */
export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['timestamptz'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

/** aggregated selection of "verification_token" */
export type VerificationTokenAggregate = {
  __typename?: 'VerificationTokenAggregate';
  aggregate?: Maybe<VerificationTokenAggregateFields>;
  nodes: Array<VerificationToken>;
};

/** aggregate fields of "verification_token" */
export type VerificationTokenAggregateFields = {
  __typename?: 'VerificationTokenAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<VerificationTokenMaxFields>;
  min?: Maybe<VerificationTokenMinFields>;
};


/** aggregate fields of "verification_token" */
export type VerificationTokenAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VerificationTokenSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_token". All fields are combined with a logical 'AND'. */
export type VerificationTokenBoolExp = {
  _and?: InputMaybe<Array<VerificationTokenBoolExp>>;
  _not?: InputMaybe<VerificationTokenBoolExp>;
  _or?: InputMaybe<Array<VerificationTokenBoolExp>>;
  expires?: InputMaybe<TimestamptzComparisonExp>;
  identifier?: InputMaybe<StringComparisonExp>;
  token?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "verification_token" */
export enum VerificationTokenConstraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokenPkey = 'verification_token_pkey'
}

/** input type for inserting data into table "verification_token" */
export type VerificationTokenInsertInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type VerificationTokenMaxFields = {
  __typename?: 'VerificationTokenMaxFields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type VerificationTokenMinFields = {
  __typename?: 'VerificationTokenMinFields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verification_token" */
export type VerificationTokenMutationResponse = {
  __typename?: 'VerificationTokenMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VerificationToken>;
};

/** on_conflict condition type for table "verification_token" */
export type VerificationTokenOnConflict = {
  constraint: VerificationTokenConstraint;
  updateColumns?: Array<VerificationTokenUpdateColumn>;
  where?: InputMaybe<VerificationTokenBoolExp>;
};

/** Ordering options when selecting data from "verification_token". */
export type VerificationTokenOrderBy = {
  expires?: InputMaybe<OrderBy>;
  identifier?: InputMaybe<OrderBy>;
  token?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: verification_token */
export type VerificationTokenPkColumnsInput = {
  token: Scalars['String'];
};

/** select columns of table "verification_token" */
export enum VerificationTokenSelectColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_token" */
export type VerificationTokenSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "verification_token" */
export type VerificationTokenStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: VerificationTokenStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VerificationTokenStreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verification_token" */
export enum VerificationTokenUpdateColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type VerificationTokenUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VerificationTokenSetInput>;
  /** filter the rows which have to be updated */
  where: VerificationTokenBoolExp;
};

export type AccountAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AccountSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AccountBoolExp>;
  predicate: IntComparisonExp;
};

export type AllowedRoleAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AllowedRoleBoolExp>;
  predicate: IntComparisonExp;
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
  /** delete data from the table: "account" */
  deleteAccount?: Maybe<AccountMutationResponse>;
  /** delete single row from the table: "account" */
  deleteAccountByPk?: Maybe<Account>;
  /** delete data from the table: "allowed_role" */
  deleteAllowedRole?: Maybe<AllowedRoleMutationResponse>;
  /** delete single row from the table: "allowed_role" */
  deleteAllowedRoleByPk?: Maybe<AllowedRole>;
  /** delete data from the table: "bookmarks" */
  deleteBookmarks?: Maybe<BookmarksMutationResponse>;
  /** delete single row from the table: "bookmarks" */
  deleteBookmarksByPk?: Maybe<Bookmarks>;
  /** delete data from the table: "roles" */
  deleteRoles?: Maybe<RolesMutationResponse>;
  /** delete single row from the table: "roles" */
  deleteRolesByPk?: Maybe<Roles>;
  /** delete data from the table: "session" */
  deleteSession?: Maybe<SessionMutationResponse>;
  /** delete single row from the table: "session" */
  deleteSessionByPk?: Maybe<Session>;
  /** delete data from the table: "traefikRoutes" */
  deleteTraefikRoutes?: Maybe<TraefikRoutesMutationResponse>;
  /** delete single row from the table: "traefikRoutes" */
  deleteTraefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "verification_token" */
  deleteVerificationToken?: Maybe<VerificationTokenMutationResponse>;
  /** delete single row from the table: "verification_token" */
  deleteVerificationTokenByPk?: Maybe<VerificationToken>;
  /** insert data into the table: "account" */
  insertAccount?: Maybe<AccountMutationResponse>;
  /** insert a single row into the table: "account" */
  insertAccountOne?: Maybe<Account>;
  /** insert data into the table: "allowed_role" */
  insertAllowedRole?: Maybe<AllowedRoleMutationResponse>;
  /** insert a single row into the table: "allowed_role" */
  insertAllowedRoleOne?: Maybe<AllowedRole>;
  /** insert data into the table: "bookmarks" */
  insertBookmarks?: Maybe<BookmarksMutationResponse>;
  /** insert a single row into the table: "bookmarks" */
  insertBookmarksOne?: Maybe<Bookmarks>;
  /** insert data into the table: "roles" */
  insertRoles?: Maybe<RolesMutationResponse>;
  /** insert a single row into the table: "roles" */
  insertRolesOne?: Maybe<Roles>;
  /** insert data into the table: "session" */
  insertSession?: Maybe<SessionMutationResponse>;
  /** insert a single row into the table: "session" */
  insertSessionOne?: Maybe<Session>;
  /** insert data into the table: "traefikRoutes" */
  insertTraefikRoutes?: Maybe<TraefikRoutesMutationResponse>;
  /** insert a single row into the table: "traefikRoutes" */
  insertTraefikRoutesOne?: Maybe<TraefikRoutes>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "verification_token" */
  insertVerificationToken?: Maybe<VerificationTokenMutationResponse>;
  /** insert a single row into the table: "verification_token" */
  insertVerificationTokenOne?: Maybe<VerificationToken>;
  /** update data of the table: "account" */
  updateAccount?: Maybe<AccountMutationResponse>;
  /** update single row of the table: "account" */
  updateAccountByPk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  updateAccountMany?: Maybe<Array<Maybe<AccountMutationResponse>>>;
  /** update data of the table: "allowed_role" */
  updateAllowedRole?: Maybe<AllowedRoleMutationResponse>;
  /** update single row of the table: "allowed_role" */
  updateAllowedRoleByPk?: Maybe<AllowedRole>;
  /** update multiples rows of table: "allowed_role" */
  updateAllowedRoleMany?: Maybe<Array<Maybe<AllowedRoleMutationResponse>>>;
  /** update data of the table: "bookmarks" */
  updateBookmarks?: Maybe<BookmarksMutationResponse>;
  /** update single row of the table: "bookmarks" */
  updateBookmarksByPk?: Maybe<Bookmarks>;
  /** update multiples rows of table: "bookmarks" */
  updateBookmarksMany?: Maybe<Array<Maybe<BookmarksMutationResponse>>>;
  /** update data of the table: "roles" */
  updateRoles?: Maybe<RolesMutationResponse>;
  /** update single row of the table: "roles" */
  updateRolesByPk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  updateRolesMany?: Maybe<Array<Maybe<RolesMutationResponse>>>;
  /** update data of the table: "session" */
  updateSession?: Maybe<SessionMutationResponse>;
  /** update single row of the table: "session" */
  updateSessionByPk?: Maybe<Session>;
  /** update multiples rows of table: "session" */
  updateSessionMany?: Maybe<Array<Maybe<SessionMutationResponse>>>;
  /** update data of the table: "traefikRoutes" */
  updateTraefikRoutes?: Maybe<TraefikRoutesMutationResponse>;
  /** update single row of the table: "traefikRoutes" */
  updateTraefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** update multiples rows of table: "traefikRoutes" */
  updateTraefikRoutesMany?: Maybe<Array<Maybe<TraefikRoutesMutationResponse>>>;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
  /** update data of the table: "verification_token" */
  updateVerificationToken?: Maybe<VerificationTokenMutationResponse>;
  /** update single row of the table: "verification_token" */
  updateVerificationTokenByPk?: Maybe<VerificationToken>;
  /** update multiples rows of table: "verification_token" */
  updateVerificationTokenMany?: Maybe<Array<Maybe<VerificationTokenMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteAccountArgs = {
  where: AccountBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAccountByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAllowedRoleArgs = {
  where: AllowedRoleBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAllowedRoleByPkArgs = {
  role: RolesEnum;
  userId: Scalars['uuid'];
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
export type Mutation_RootDeleteRolesArgs = {
  where: RolesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRolesByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteSessionArgs = {
  where: SessionBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteSessionByPkArgs = {
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
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteVerificationTokenArgs = {
  where: VerificationTokenBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteVerificationTokenByPkArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertAccountArgs = {
  objects: Array<AccountInsertInput>;
  onConflict?: InputMaybe<AccountOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAccountOneArgs = {
  object: AccountInsertInput;
  onConflict?: InputMaybe<AccountOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAllowedRoleArgs = {
  objects: Array<AllowedRoleInsertInput>;
  onConflict?: InputMaybe<AllowedRoleOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAllowedRoleOneArgs = {
  object: AllowedRoleInsertInput;
  onConflict?: InputMaybe<AllowedRoleOnConflict>;
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
export type Mutation_RootInsertRolesArgs = {
  objects: Array<RolesInsertInput>;
  onConflict?: InputMaybe<RolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRolesOneArgs = {
  object: RolesInsertInput;
  onConflict?: InputMaybe<RolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSessionArgs = {
  objects: Array<SessionInsertInput>;
  onConflict?: InputMaybe<SessionOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSessionOneArgs = {
  object: SessionInsertInput;
  onConflict?: InputMaybe<SessionOnConflict>;
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
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertVerificationTokenArgs = {
  objects: Array<VerificationTokenInsertInput>;
  onConflict?: InputMaybe<VerificationTokenOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertVerificationTokenOneArgs = {
  object: VerificationTokenInsertInput;
  onConflict?: InputMaybe<VerificationTokenOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateAccountArgs = {
  _inc?: InputMaybe<AccountIncInput>;
  _set?: InputMaybe<AccountSetInput>;
  where: AccountBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAccountByPkArgs = {
  _inc?: InputMaybe<AccountIncInput>;
  _set?: InputMaybe<AccountSetInput>;
  pkColumns: AccountPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAccountManyArgs = {
  updates: Array<AccountUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAllowedRoleArgs = {
  _set?: InputMaybe<AllowedRoleSetInput>;
  where: AllowedRoleBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAllowedRoleByPkArgs = {
  _set?: InputMaybe<AllowedRoleSetInput>;
  pkColumns: AllowedRolePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAllowedRoleManyArgs = {
  updates: Array<AllowedRoleUpdates>;
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
export type Mutation_RootUpdateRolesArgs = {
  _set?: InputMaybe<RolesSetInput>;
  where: RolesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRolesByPkArgs = {
  _set?: InputMaybe<RolesSetInput>;
  pkColumns: RolesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRolesManyArgs = {
  updates: Array<RolesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateSessionArgs = {
  _set?: InputMaybe<SessionSetInput>;
  where: SessionBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateSessionByPkArgs = {
  _set?: InputMaybe<SessionSetInput>;
  pkColumns: SessionPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateSessionManyArgs = {
  updates: Array<SessionUpdates>;
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
export type Mutation_RootUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pkColumns: UserPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateVerificationTokenArgs = {
  _set?: InputMaybe<VerificationTokenSetInput>;
  where: VerificationTokenBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateVerificationTokenByPkArgs = {
  _set?: InputMaybe<VerificationTokenSetInput>;
  pkColumns: VerificationTokenPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateVerificationTokenManyArgs = {
  updates: Array<VerificationTokenUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  accountAggregate: AccountAggregate;
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>;
  /** fetch data from the table: "allowed_role" */
  allowedRole: Array<AllowedRole>;
  /** fetch aggregated fields from the table: "allowed_role" */
  allowedRoleAggregate: AllowedRoleAggregate;
  /** fetch data from the table: "allowed_role" using primary key columns */
  allowedRoleByPk?: Maybe<AllowedRole>;
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregate relationship */
  bookmarksAggregate: BookmarksAggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarksByPk?: Maybe<Bookmarks>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  rolesAggregate: RolesAggregate;
  /** fetch data from the table: "roles" using primary key columns */
  rolesByPk?: Maybe<Roles>;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  sessionAggregate: SessionAggregate;
  /** fetch data from the table: "session" using primary key columns */
  sessionByPk?: Maybe<Session>;
  /** fetch data from the table: "traefikRoutes" */
  traefikRoutes: Array<TraefikRoutes>;
  /** fetch aggregated fields from the table: "traefikRoutes" */
  traefikRoutesAggregate: TraefikRoutesAggregate;
  /** fetch data from the table: "traefikRoutes" using primary key columns */
  traefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "verification_token" */
  verificationToken: Array<VerificationToken>;
  /** fetch aggregated fields from the table: "verification_token" */
  verificationTokenAggregate: VerificationTokenAggregate;
  /** fetch data from the table: "verification_token" using primary key columns */
  verificationTokenByPk?: Maybe<VerificationToken>;
};


export type Query_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};


export type Query_RootAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};


export type Query_RootAccountByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAllowedRoleArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


export type Query_RootAllowedRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


export type Query_RootAllowedRoleByPkArgs = {
  role: RolesEnum;
  userId: Scalars['uuid'];
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


export type Query_RootRolesArgs = {
  distinctOn?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type Query_RootRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type Query_RootRolesByPkArgs = {
  value: Scalars['String'];
};


export type Query_RootSessionArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};


export type Query_RootSessionAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};


export type Query_RootSessionByPkArgs = {
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


export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVerificationTokenArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>;
  where?: InputMaybe<VerificationTokenBoolExp>;
};


export type Query_RootVerificationTokenAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>;
  where?: InputMaybe<VerificationTokenBoolExp>;
};


export type Query_RootVerificationTokenByPkArgs = {
  token: Scalars['String'];
};

export type SessionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SessionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<SessionBoolExp>;
  predicate: IntComparisonExp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  accountAggregate: AccountAggregate;
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  accountStream: Array<Account>;
  /** fetch data from the table: "allowed_role" */
  allowedRole: Array<AllowedRole>;
  /** fetch aggregated fields from the table: "allowed_role" */
  allowedRoleAggregate: AllowedRoleAggregate;
  /** fetch data from the table: "allowed_role" using primary key columns */
  allowedRoleByPk?: Maybe<AllowedRole>;
  /** fetch data from the table in a streaming manner: "allowed_role" */
  allowedRoleStream: Array<AllowedRole>;
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregate relationship */
  bookmarksAggregate: BookmarksAggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarksByPk?: Maybe<Bookmarks>;
  /** fetch data from the table in a streaming manner: "bookmarks" */
  bookmarksStream: Array<Bookmarks>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  rolesAggregate: RolesAggregate;
  /** fetch data from the table: "roles" using primary key columns */
  rolesByPk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  rolesStream: Array<Roles>;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  sessionAggregate: SessionAggregate;
  /** fetch data from the table: "session" using primary key columns */
  sessionByPk?: Maybe<Session>;
  /** fetch data from the table in a streaming manner: "session" */
  sessionStream: Array<Session>;
  /** fetch data from the table: "traefikRoutes" */
  traefikRoutes: Array<TraefikRoutes>;
  /** fetch aggregated fields from the table: "traefikRoutes" */
  traefikRoutesAggregate: TraefikRoutesAggregate;
  /** fetch data from the table: "traefikRoutes" using primary key columns */
  traefikRoutesByPk?: Maybe<TraefikRoutes>;
  /** fetch data from the table in a streaming manner: "traefikRoutes" */
  traefikRoutesStream: Array<TraefikRoutes>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
  /** fetch data from the table: "verification_token" */
  verificationToken: Array<VerificationToken>;
  /** fetch aggregated fields from the table: "verification_token" */
  verificationTokenAggregate: VerificationTokenAggregate;
  /** fetch data from the table: "verification_token" using primary key columns */
  verificationTokenByPk?: Maybe<VerificationToken>;
  /** fetch data from the table in a streaming manner: "verification_token" */
  verificationTokenStream: Array<VerificationToken>;
};


export type Subscription_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};


export type Subscription_RootAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};


export type Subscription_RootAccountByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAccountStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AccountStreamCursorInput>>;
  where?: InputMaybe<AccountBoolExp>;
};


export type Subscription_RootAllowedRoleArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


export type Subscription_RootAllowedRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRoleOrderBy>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};


export type Subscription_RootAllowedRoleByPkArgs = {
  role: RolesEnum;
  userId: Scalars['uuid'];
};


export type Subscription_RootAllowedRoleStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AllowedRoleStreamCursorInput>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
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


export type Subscription_RootRolesArgs = {
  distinctOn?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type Subscription_RootRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type Subscription_RootRolesByPkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootRolesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<RolesStreamCursorInput>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type Subscription_RootSessionArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};


export type Subscription_RootSessionAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};


export type Subscription_RootSessionByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSessionStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<SessionStreamCursorInput>>;
  where?: InputMaybe<SessionBoolExp>;
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


export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootVerificationTokenArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>;
  where?: InputMaybe<VerificationTokenBoolExp>;
};


export type Subscription_RootVerificationTokenAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>;
  where?: InputMaybe<VerificationTokenBoolExp>;
};


export type Subscription_RootVerificationTokenByPkArgs = {
  token: Scalars['String'];
};


export type Subscription_RootVerificationTokenStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<VerificationTokenStreamCursorInput>>;
  where?: InputMaybe<VerificationTokenBoolExp>;
};

export type UserAggregateBoolExpBool_And = {
  arguments: UserSelectColumnUserAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserAggregateBoolExpBool_Or = {
  arguments: UserSelectColumnUserAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: IntComparisonExp;
};
