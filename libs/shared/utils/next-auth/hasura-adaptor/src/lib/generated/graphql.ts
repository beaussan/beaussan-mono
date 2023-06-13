import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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

/** aggregate fields of "account" */
export type AccountAggregateFields = {
  __typename?: 'AccountAggregateFields';
  avg?: Maybe<AccountAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<AccountMaxFields>;
  min?: Maybe<AccountMinFields>;
  stddev?: Maybe<AccountStddevFields>;
  stddevPop?: Maybe<AccountStddev_PopFields>;
  stddevSamp?: Maybe<AccountStddev_SampFields>;
  sum?: Maybe<AccountSumFields>;
  varPop?: Maybe<AccountVar_PopFields>;
  varSamp?: Maybe<AccountVar_SampFields>;
  variance?: Maybe<AccountVarianceFields>;
};

/** aggregate fields of "account" */
export type AccountAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccountSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account" */
export type AccountAggregateOrderBy = {
  avg?: InputMaybe<Account_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Account_Max_Order_By>;
  min?: InputMaybe<Account_Min_Order_By>;
  stddev?: InputMaybe<Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Account_Sum_Order_By>;
  var_pop?: InputMaybe<Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Account_Variance_Order_By>;
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
export type AccountConstraint =
  /** unique or primary key constraint on columns "id" */
  'account_pkey';

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

/** response of any mutation on the table "account" */
export type AccountMutationResponse = {
  __typename?: 'AccountMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** on_conflict condition type for table "account" */
export type AccountOnConflict = {
  constraint: AccountConstraint;
  update_columns?: Array<AccountUpdateColumn>;
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
export type AccountSelectColumn =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'id'
  /** column name */
  | 'idToken'
  /** column name */
  | 'oauthToken'
  /** column name */
  | 'oauthTokenSecret'
  /** column name */
  | 'provider'
  /** column name */
  | 'providerAccountId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'refreshTokenExpiresIn'
  /** column name */
  | 'scope'
  /** column name */
  | 'sessionState'
  /** column name */
  | 'tokenType'
  /** column name */
  | 'type'
  /** column name */
  | 'userId';

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

/** aggregate stddev_pop on columns */
export type AccountStddev_PopFields = {
  __typename?: 'AccountStddev_popFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type AccountStddev_SampFields = {
  __typename?: 'AccountStddev_sampFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type AccountSumFields = {
  __typename?: 'AccountSumFields';
  expiresAt?: Maybe<Scalars['bigint']>;
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>;
};

/** update columns of table "account" */
export type AccountUpdateColumn =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'id'
  /** column name */
  | 'idToken'
  /** column name */
  | 'oauthToken'
  /** column name */
  | 'oauthTokenSecret'
  /** column name */
  | 'provider'
  /** column name */
  | 'providerAccountId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'refreshTokenExpiresIn'
  /** column name */
  | 'scope'
  /** column name */
  | 'sessionState'
  /** column name */
  | 'tokenType'
  /** column name */
  | 'type'
  /** column name */
  | 'userId';

export type AccountUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AccountIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AccountSetInput>;
  where: AccountBoolExp;
};

/** aggregate var_pop on columns */
export type AccountVar_PopFields = {
  __typename?: 'AccountVar_popFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type AccountVar_SampFields = {
  __typename?: 'AccountVar_sampFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type AccountVarianceFields = {
  __typename?: 'AccountVarianceFields';
  expiresAt?: Maybe<Scalars['Float']>;
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "allowed_role" */
export type AllowedRole = {
  __typename?: 'AllowedRole';
  role: RolesEnum;
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
  max?: InputMaybe<Allowed_Role_Max_Order_By>;
  min?: InputMaybe<Allowed_Role_Min_Order_By>;
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
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "allowed_role" */
export type AllowedRoleConstraint =
  /** unique or primary key constraint on columns "user_id", "role" */
  'allowed_role_pkey';

/** input type for inserting data into table "allowed_role" */
export type AllowedRoleInsertInput = {
  role?: InputMaybe<RolesEnum>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AllowedRoleMaxFields = {
  __typename?: 'AllowedRoleMaxFields';
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AllowedRoleMinFields = {
  __typename?: 'AllowedRoleMinFields';
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "allowed_role" */
export type AllowedRoleMutationResponse = {
  __typename?: 'AllowedRoleMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AllowedRole>;
};

/** on_conflict condition type for table "allowed_role" */
export type AllowedRoleOnConflict = {
  constraint: AllowedRoleConstraint;
  update_columns?: Array<AllowedRoleUpdateColumn>;
  where?: InputMaybe<AllowedRoleBoolExp>;
};

/** Ordering options when selecting data from "allowed_role". */
export type AllowedRoleOrderBy = {
  role?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: allowed_role */
export type AllowedRolePkColumnsInput = {
  role: RolesEnum;
  userId: Scalars['uuid'];
};

/** select columns of table "allowed_role" */
export type AllowedRoleSelectColumn =
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

/** input type for updating data in table "allowed_role" */
export type AllowedRoleSetInput = {
  role?: InputMaybe<RolesEnum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "allowed_role" */
export type AllowedRoleUpdateColumn =
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

export type AllowedRoleUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AllowedRoleSetInput>;
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

/** ordering argument of a cursor */
export type CursorOrdering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

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
export type OrderBy =
  /** in ascending order, nulls last */
  | 'ASC'
  /** in ascending order, nulls first */
  | 'ASC_NULLS_FIRST'
  /** in ascending order, nulls last */
  | 'ASC_NULLS_LAST'
  /** in descending order, nulls first */
  | 'DESC'
  /** in descending order, nulls first */
  | 'DESC_NULLS_FIRST'
  /** in descending order, nulls last */
  | 'DESC_NULLS_LAST';

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
  allowedRoles_aggregate?: InputMaybe<Allowed_Role_Aggregate_Bool_Exp>;
  description?: InputMaybe<StringComparisonExp>;
  users?: InputMaybe<UserBoolExp>;
  users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "roles" */
export type RolesConstraint =
  /** unique or primary key constraint on columns "value" */
  'roles_pkey';

export type RolesEnum = 'USER';

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
  affected_rows: Scalars['Int'];
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
  update_columns?: Array<RolesUpdateColumn>;
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
export type RolesSelectColumn =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

/** input type for updating data in table "roles" */
export type RolesSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "roles" */
export type RolesUpdateColumn =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

export type RolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RolesSetInput>;
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
  max?: InputMaybe<Session_Max_Order_By>;
  min?: InputMaybe<Session_Min_Order_By>;
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
export type SessionConstraint =
  /** unique or primary key constraint on columns "id" */
  'session_pkey';

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

/** aggregate min on columns */
export type SessionMinFields = {
  __typename?: 'SessionMinFields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "session" */
export type SessionMutationResponse = {
  __typename?: 'SessionMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session>;
};

/** on_conflict condition type for table "session" */
export type SessionOnConflict = {
  constraint: SessionConstraint;
  update_columns?: Array<SessionUpdateColumn>;
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
export type SessionSelectColumn =
  /** column name */
  | 'expires'
  /** column name */
  | 'id'
  /** column name */
  | 'sessionToken'
  /** column name */
  | 'userId';

/** input type for updating data in table "session" */
export type SessionSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "session" */
export type SessionUpdateColumn =
  /** column name */
  | 'expires'
  /** column name */
  | 'id'
  /** column name */
  | 'sessionToken'
  /** column name */
  | 'userId';

export type SessionUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SessionSetInput>;
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
  defaultRole: RolesEnum;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  role: Roles;
  /** An array relationship */
  sessions: Array<Session>;
  /** An aggregate relationship */
  sessionsAggregate: SessionAggregate;
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
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
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
  accounts_aggregate?: InputMaybe<Account_Aggregate_Bool_Exp>;
  allowedRoles?: InputMaybe<AllowedRoleBoolExp>;
  allowedRoles_aggregate?: InputMaybe<Allowed_Role_Aggregate_Bool_Exp>;
  defaultRole?: InputMaybe<RolesEnumComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  emailVerified?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  role?: InputMaybe<RolesBoolExp>;
  sessions?: InputMaybe<SessionBoolExp>;
  sessions_aggregate?: InputMaybe<Session_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export type UserConstraint =
  /** unique or primary key constraint on columns "email" */
  | 'user_email_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_pkey';

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  accounts?: InputMaybe<AccountArrRelInsertInput>;
  allowedRoles?: InputMaybe<AllowedRoleArrRelInsertInput>;
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RolesObjRelInsertInput>;
  sessions?: InputMaybe<SessionArrRelInsertInput>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
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
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  accountsAggregate?: InputMaybe<AccountAggregateOrderBy>;
  allowedRolesAggregate?: InputMaybe<AllowedRoleAggregateOrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  role?: InputMaybe<RolesOrderBy>;
  sessionsAggregate?: InputMaybe<SessionAggregateOrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export type UserSelectColumn =
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'name';

/** input type for updating data in table "user" */
export type UserSetInput = {
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export type UserUpdateColumn =
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'name';

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
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
export type VerificationTokenConstraint =
  /** unique or primary key constraint on columns "token" */
  'verification_token_pkey';

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
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VerificationToken>;
};

/** on_conflict condition type for table "verification_token" */
export type VerificationTokenOnConflict = {
  constraint: VerificationTokenConstraint;
  update_columns?: Array<VerificationTokenUpdateColumn>;
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
export type VerificationTokenSelectColumn =
  /** column name */
  | 'expires'
  /** column name */
  | 'identifier'
  /** column name */
  | 'token';

/** input type for updating data in table "verification_token" */
export type VerificationTokenSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verification_token" */
export type VerificationTokenUpdateColumn =
  /** column name */
  | 'expires'
  /** column name */
  | 'identifier'
  /** column name */
  | 'token';

export type VerificationTokenUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VerificationTokenSetInput>;
  where: VerificationTokenBoolExp;
};

export type Account_Aggregate_Bool_Exp = {
  count?: InputMaybe<Account_Aggregate_Bool_Exp_Count>;
};

export type Account_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AccountSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AccountBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "account" */
export type Account_Avg_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "account" */
export type Account_Max_Order_By = {
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

/** order by min() on columns of table "account" */
export type Account_Min_Order_By = {
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

/** order by stddev() on columns of table "account" */
export type Account_Stddev_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "account" */
export type Account_Stddev_Pop_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "account" */
export type Account_Stddev_Samp_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "account" */
export type Account_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Account_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_StreamCursorValueInput = {
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

/** order by sum() on columns of table "account" */
export type Account_Sum_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "account" */
export type Account_Var_Pop_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "account" */
export type Account_Var_Samp_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "account" */
export type Account_Variance_Order_By = {
  expiresAt?: InputMaybe<OrderBy>;
  refreshTokenExpiresIn?: InputMaybe<OrderBy>;
};

export type Allowed_Role_Aggregate_Bool_Exp = {
  count?: InputMaybe<Allowed_Role_Aggregate_Bool_Exp_Count>;
};

export type Allowed_Role_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AllowedRoleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AllowedRoleBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "allowed_role" */
export type Allowed_Role_Max_Order_By = {
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "allowed_role" */
export type Allowed_Role_Min_Order_By = {
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "allowed_role" */
export type Allowed_Role_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Allowed_Role_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Allowed_Role_StreamCursorValueInput = {
  role?: InputMaybe<RolesEnum>;
  userId?: InputMaybe<Scalars['uuid']>;
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
  /** delete data from the table: "roles" */
  deleteRoles?: Maybe<RolesMutationResponse>;
  /** delete single row from the table: "roles" */
  deleteRolesByPk?: Maybe<Roles>;
  /** delete data from the table: "session" */
  deleteSession?: Maybe<SessionMutationResponse>;
  /** delete single row from the table: "session" */
  deleteSessionByPk?: Maybe<Session>;
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
  /** insert data into the table: "roles" */
  insertRoles?: Maybe<RolesMutationResponse>;
  /** insert a single row into the table: "roles" */
  insertRolesOne?: Maybe<Roles>;
  /** insert data into the table: "session" */
  insertSession?: Maybe<SessionMutationResponse>;
  /** insert a single row into the table: "session" */
  insertSessionOne?: Maybe<Session>;
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
  updateVerificationTokenMany?: Maybe<
    Array<Maybe<VerificationTokenMutationResponse>>
  >;
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
  pk_columns: AccountPkColumnsInput;
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
  pk_columns: AllowedRolePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateAllowedRoleManyArgs = {
  updates: Array<AllowedRoleUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateRolesArgs = {
  _set?: InputMaybe<RolesSetInput>;
  where: RolesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateRolesByPkArgs = {
  _set?: InputMaybe<RolesSetInput>;
  pk_columns: RolesPkColumnsInput;
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
  pk_columns: SessionPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateSessionManyArgs = {
  updates: Array<SessionUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
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
  pk_columns: VerificationTokenPkColumnsInput;
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

/** Streaming cursor of the table "roles" */
export type Roles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Roles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_StreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Session_Aggregate_Bool_Exp = {
  count?: InputMaybe<Session_Aggregate_Bool_Exp_Count>;
};

export type Session_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<SessionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<SessionBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "session" */
export type Session_Max_Order_By = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "session" */
export type Session_Min_Order_By = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "session" */
export type Session_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Session_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Session_StreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
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
  cursor: Array<InputMaybe<Account_StreamCursorInput>>;
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
  cursor: Array<InputMaybe<Allowed_Role_StreamCursorInput>>;
  where?: InputMaybe<AllowedRoleBoolExp>;
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
  cursor: Array<InputMaybe<Roles_StreamCursorInput>>;
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
  cursor: Array<InputMaybe<Session_StreamCursorInput>>;
  where?: InputMaybe<SessionBoolExp>;
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
  cursor: Array<InputMaybe<User_StreamCursorInput>>;
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
  cursor: Array<InputMaybe<Verification_Token_StreamCursorInput>>;
  where?: InputMaybe<VerificationTokenBoolExp>;
};

export type User_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user" */
export type User_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type User_StreamCursorValueInput = {
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "verification_token" */
export type Verification_Token_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Verification_Token_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Token_StreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type CreateAccountMutationVariables = Exact<{
  data: AccountInsertInput;
}>;

export type CreateAccountMutation = {
  __typename?: 'mutation_root';
  insertAccountOne?: {
    __typename: 'Account';
    id: string;
    type: string;
    scope?: string | null;
    userId: string;
    idToken?: string | null;
    provider: string;
    expiresAt?: any | null;
    tokenType?: string | null;
    oauthToken?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    sessionState?: string | null;
    providerAccountId: string;
    oauthTokenSecret?: string | null;
  } | null;
};

export type DeleteAccountMutationVariables = Exact<{
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;

export type DeleteAccountMutation = {
  __typename?: 'mutation_root';
  deleteAccount?: {
    __typename?: 'AccountMutationResponse';
    returning: Array<{
      __typename: 'Account';
      id: string;
      type: string;
      scope?: string | null;
      userId: string;
      idToken?: string | null;
      provider: string;
      expiresAt?: any | null;
      tokenType?: string | null;
      oauthToken?: string | null;
      accessToken?: string | null;
      refreshToken?: string | null;
      sessionState?: string | null;
      providerAccountId: string;
      oauthTokenSecret?: string | null;
    }>;
  } | null;
};

export type UserFragment = {
  __typename: 'User';
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
  emailVerified?: string | null;
  defaultRole: RolesEnum;
  allowedRoles: Array<{ __typename?: 'AllowedRole'; role: RolesEnum }>;
};

export type SessionFragment = {
  __typename: 'Session';
  id: string;
  userId: string;
  expires: string;
  sessionToken: string;
};

export type AccountFragment = {
  __typename: 'Account';
  id: string;
  type: string;
  scope?: string | null;
  userId: string;
  idToken?: string | null;
  provider: string;
  expiresAt?: any | null;
  tokenType?: string | null;
  oauthToken?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  sessionState?: string | null;
  providerAccountId: string;
  oauthTokenSecret?: string | null;
};

export type VerificationTokenFragment = {
  __typename: 'VerificationToken';
  token: string;
  expires: string;
  identifier: string;
};

export type GetSessionQueryVariables = Exact<{
  sessionToken?: InputMaybe<Scalars['String']>;
}>;

export type GetSessionQuery = {
  __typename?: 'query_root';
  session: Array<{
    __typename: 'Session';
    id: string;
    userId: string;
    expires: string;
    sessionToken: string;
    user: {
      __typename: 'User';
      id: string;
      name?: string | null;
      email: string;
      image?: string | null;
      emailVerified?: string | null;
      defaultRole: RolesEnum;
      allowedRoles: Array<{ __typename?: 'AllowedRole'; role: RolesEnum }>;
    };
  }>;
};

export type CreateSessionMutationVariables = Exact<{
  data: SessionInsertInput;
}>;

export type CreateSessionMutation = {
  __typename?: 'mutation_root';
  insertSessionOne?: {
    __typename: 'Session';
    id: string;
    userId: string;
    expires: string;
    sessionToken: string;
  } | null;
};

export type UpdateSessionMutationVariables = Exact<{
  sessionToken?: InputMaybe<Scalars['String']>;
  data: SessionSetInput;
}>;

export type UpdateSessionMutation = {
  __typename?: 'mutation_root';
  updateSession?: {
    __typename?: 'SessionMutationResponse';
    returning: Array<{
      __typename: 'Session';
      id: string;
      userId: string;
      expires: string;
      sessionToken: string;
    }>;
  } | null;
};

export type DeleteSessionMutationVariables = Exact<{
  sessionToken?: InputMaybe<Scalars['String']>;
}>;

export type DeleteSessionMutation = {
  __typename?: 'mutation_root';
  deleteSession?: {
    __typename?: 'SessionMutationResponse';
    returning: Array<{
      __typename: 'Session';
      id: string;
      userId: string;
      expires: string;
      sessionToken: string;
    }>;
  } | null;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetUserQuery = {
  __typename?: 'query_root';
  userByPk?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
    emailVerified?: string | null;
    defaultRole: RolesEnum;
    allowedRoles: Array<{ __typename?: 'AllowedRole'; role: RolesEnum }>;
  } | null;
};

export type GetUsersQueryVariables = Exact<{
  where: UserBoolExp;
}>;

export type GetUsersQuery = {
  __typename?: 'query_root';
  user: Array<{
    __typename: 'User';
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
    emailVerified?: string | null;
    defaultRole: RolesEnum;
    allowedRoles: Array<{ __typename?: 'AllowedRole'; role: RolesEnum }>;
  }>;
};

export type CreateUserMutationVariables = Exact<{
  data: UserInsertInput;
}>;

export type CreateUserMutation = {
  __typename?: 'mutation_root';
  insertUserOne?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
    emailVerified?: string | null;
    defaultRole: RolesEnum;
    allowedRoles: Array<{ __typename?: 'AllowedRole'; role: RolesEnum }>;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  data: UserSetInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'mutation_root';
  updateUserByPk?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
    emailVerified?: string | null;
    defaultRole: RolesEnum;
    allowedRoles: Array<{ __typename?: 'AllowedRole'; role: RolesEnum }>;
  } | null;
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteUserMutation = {
  __typename?: 'mutation_root';
  deleteUserByPk?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
    emailVerified?: string | null;
    defaultRole: RolesEnum;
    allowedRoles: Array<{ __typename?: 'AllowedRole'; role: RolesEnum }>;
  } | null;
};

export type CreateVerificationTokenMutationVariables = Exact<{
  data: VerificationTokenInsertInput;
}>;

export type CreateVerificationTokenMutation = {
  __typename?: 'mutation_root';
  insertVerificationTokenOne?: {
    __typename: 'VerificationToken';
    token: string;
    expires: string;
    identifier: string;
  } | null;
};

export type DeleteVerificationTokenMutationVariables = Exact<{
  identifier: Scalars['String'];
  token: Scalars['String'];
}>;

export type DeleteVerificationTokenMutation = {
  __typename?: 'mutation_root';
  deleteVerificationToken?: {
    __typename?: 'VerificationTokenMutationResponse';
    returning: Array<{
      __typename: 'VerificationToken';
      token: string;
      expires: string;
      identifier: string;
    }>;
  } | null;
};

export const UserFragmentDoc = gql`
  fragment User on User {
    __typename
    id
    name
    email
    image
    emailVerified
    allowedRoles {
      role
    }
    defaultRole
  }
`;
export const SessionFragmentDoc = gql`
  fragment Session on Session {
    __typename
    id
    userId
    expires
    sessionToken
  }
`;
export const AccountFragmentDoc = gql`
  fragment Account on Account {
    __typename
    id
    type
    scope
    userId
    idToken
    provider
    expiresAt
    tokenType
    oauthToken
    accessToken
    refreshToken
    sessionState
    providerAccountId
    oauthTokenSecret
  }
`;
export const VerificationTokenFragmentDoc = gql`
  fragment VerificationToken on VerificationToken {
    __typename
    token
    expires
    identifier
  }
`;
export const CreateAccountDocument = gql`
  mutation CreateAccount($data: AccountInsertInput!) {
    insertAccountOne(object: $data) {
      ...Account
    }
  }
  ${AccountFragmentDoc}
`;
export const DeleteAccountDocument = gql`
  mutation DeleteAccount($provider: String!, $providerAccountId: String!) {
    deleteAccount(
      where: {
        provider: { _eq: $provider }
        providerAccountId: { _eq: $providerAccountId }
      }
    ) {
      returning {
        ...Account
      }
    }
  }
  ${AccountFragmentDoc}
`;
export const GetSessionDocument = gql`
  query GetSession($sessionToken: String) {
    session(where: { sessionToken: { _eq: $sessionToken } }) {
      ...Session
      user {
        ...User
      }
    }
  }
  ${SessionFragmentDoc}
  ${UserFragmentDoc}
`;
export const CreateSessionDocument = gql`
  mutation CreateSession($data: SessionInsertInput!) {
    insertSessionOne(object: $data) {
      ...Session
    }
  }
  ${SessionFragmentDoc}
`;
export const UpdateSessionDocument = gql`
  mutation UpdateSession($sessionToken: String, $data: SessionSetInput!) {
    updateSession(
      where: { sessionToken: { _eq: $sessionToken } }
      _set: $data
    ) {
      returning {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`;
export const DeleteSessionDocument = gql`
  mutation DeleteSession($sessionToken: String) {
    deleteSession(where: { sessionToken: { _eq: $sessionToken } }) {
      returning {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`;
export const GetUserDocument = gql`
  query GetUser($id: uuid!) {
    userByPk(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const GetUsersDocument = gql`
  query GetUsers($where: UserBoolExp!) {
    user(where: $where) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const CreateUserDocument = gql`
  mutation CreateUser($data: UserInsertInput!) {
    insertUserOne(object: $data) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const UpdateUserDocument = gql`
  mutation UpdateUser($id: uuid!, $data: UserSetInput!) {
    updateUserByPk(pk_columns: { id: $id }, _set: $data) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: uuid!) {
    deleteUserByPk(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const CreateVerificationTokenDocument = gql`
  mutation CreateVerificationToken($data: VerificationTokenInsertInput!) {
    insertVerificationTokenOne(object: $data) {
      ...VerificationToken
    }
  }
  ${VerificationTokenFragmentDoc}
`;
export const DeleteVerificationTokenDocument = gql`
  mutation DeleteVerificationToken($identifier: String!, $token: String!) {
    deleteVerificationToken(
      where: { token: { _eq: $token }, identifier: { _eq: $identifier } }
    ) {
      returning {
        ...VerificationToken
      }
    }
  }
  ${VerificationTokenFragmentDoc}
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
    CreateAccount(
      variables: CreateAccountMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateAccountMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateAccountMutation>(
            CreateAccountDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateAccount',
        'mutation'
      );
    },
    DeleteAccount(
      variables: DeleteAccountMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeleteAccountMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteAccountMutation>(
            DeleteAccountDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteAccount',
        'mutation'
      );
    },
    GetSession(
      variables?: GetSessionQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetSessionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSessionQuery>(GetSessionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetSession',
        'query'
      );
    },
    CreateSession(
      variables: CreateSessionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateSessionMutation>(
            CreateSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateSession',
        'mutation'
      );
    },
    UpdateSession(
      variables: UpdateSessionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateSessionMutation>(
            UpdateSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateSession',
        'mutation'
      );
    },
    DeleteSession(
      variables?: DeleteSessionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeleteSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteSessionMutation>(
            DeleteSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteSession',
        'mutation'
      );
    },
    GetUser(
      variables: GetUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserQuery>(GetUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetUser',
        'query'
      );
    },
    GetUsers(
      variables: GetUsersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetUsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUsersQuery>(GetUsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetUsers',
        'query'
      );
    },
    CreateUser(
      variables: CreateUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUserMutation>(CreateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CreateUser',
        'mutation'
      );
    },
    UpdateUser(
      variables: UpdateUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateUserMutation>(UpdateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'UpdateUser',
        'mutation'
      );
    },
    DeleteUser(
      variables: DeleteUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeleteUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteUserMutation>(DeleteUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DeleteUser',
        'mutation'
      );
    },
    CreateVerificationToken(
      variables: CreateVerificationTokenMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateVerificationTokenMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateVerificationTokenMutation>(
            CreateVerificationTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateVerificationToken',
        'mutation'
      );
    },
    DeleteVerificationToken(
      variables: DeleteVerificationTokenMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeleteVerificationTokenMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteVerificationTokenMutation>(
            DeleteVerificationTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteVerificationToken',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
