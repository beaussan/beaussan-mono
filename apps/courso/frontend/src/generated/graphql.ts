import gql from 'graphql-tag';
import * as Urql from 'urql';
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'Accounts';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['timestamptz']>;
  compoundId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type AccountsAggregate = {
  __typename?: 'AccountsAggregate';
  aggregate?: Maybe<AccountsAggregateFields>;
  nodes: Array<Accounts>;
};

export type AccountsAggregateBoolExp = {
  count?: InputMaybe<AccountsAggregateBoolExpCount>;
};

/** aggregate fields of "accounts" */
export type AccountsAggregateFields = {
  __typename?: 'AccountsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AccountsMaxFields>;
  min?: Maybe<AccountsMinFields>;
};

/** aggregate fields of "accounts" */
export type AccountsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccountsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type AccountsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AccountsMaxOrderBy>;
  min?: InputMaybe<AccountsMinOrderBy>;
};

/** input type for inserting array relation for remote table "accounts" */
export type AccountsArrRelInsertInput = {
  data: Array<AccountsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AccountsOnConflict>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type AccountsBoolExp = {
  _and?: InputMaybe<Array<AccountsBoolExp>>;
  _not?: InputMaybe<AccountsBoolExp>;
  _or?: InputMaybe<Array<AccountsBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  accessTokenExpires?: InputMaybe<TimestamptzComparisonExp>;
  compoundId?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  providerAccountId?: InputMaybe<StringComparisonExp>;
  providerId?: InputMaybe<StringComparisonExp>;
  providerType?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "accounts" */
export enum AccountsConstraint {
  /** unique or primary key constraint on columns "compound_id" */
  AccountsCompoundIdKey = 'accounts_compound_id_key',
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey',
}

/** input type for inserting data into table "accounts" */
export type AccountsInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  accessTokenExpires?: InputMaybe<Scalars['timestamptz']>;
  compoundId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerType?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AccountsMaxFields = {
  __typename?: 'AccountsMaxFields';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['timestamptz']>;
  compoundId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type AccountsMaxOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  accessTokenExpires?: InputMaybe<OrderBy>;
  compoundId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerType?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AccountsMinFields = {
  __typename?: 'AccountsMinFields';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['timestamptz']>;
  compoundId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type AccountsMinOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  accessTokenExpires?: InputMaybe<OrderBy>;
  compoundId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerType?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "accounts" */
export type AccountsMutationResponse = {
  __typename?: 'AccountsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type AccountsOnConflict = {
  constraint: AccountsConstraint;
  updateColumns?: Array<AccountsUpdateColumn>;
  where?: InputMaybe<AccountsBoolExp>;
};

/** Ordering options when selecting data from "accounts". */
export type AccountsOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  accessTokenExpires?: InputMaybe<OrderBy>;
  compoundId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerType?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: accounts */
export type AccountsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum AccountsSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  AccessTokenExpires = 'accessTokenExpires',
  /** column name */
  CompoundId = 'compoundId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderType = 'providerType',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "accounts" */
export type AccountsSetInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  accessTokenExpires?: InputMaybe<Scalars['timestamptz']>;
  compoundId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerType?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "accounts" */
export type AccountsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AccountsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AccountsStreamCursorValueInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  accessTokenExpires?: InputMaybe<Scalars['timestamptz']>;
  compoundId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerType?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum AccountsUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  AccessTokenExpires = 'accessTokenExpires',
  /** column name */
  CompoundId = 'compoundId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderType = 'providerType',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

export type AccountsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AccountsSetInput>;
  /** filter the rows which have to be updated */
  where: AccountsBoolExp;
};

/** columns and relationships of "allowed_roles" */
export type AllowedRoles = {
  __typename?: 'AllowedRoles';
  role: RolesEnum;
  /** An object relationship */
  roleByRole: Roles;
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "allowed_roles" */
export type AllowedRolesAggregate = {
  __typename?: 'AllowedRolesAggregate';
  aggregate?: Maybe<AllowedRolesAggregateFields>;
  nodes: Array<AllowedRoles>;
};

export type AllowedRolesAggregateBoolExp = {
  count?: InputMaybe<AllowedRolesAggregateBoolExpCount>;
};

/** aggregate fields of "allowed_roles" */
export type AllowedRolesAggregateFields = {
  __typename?: 'AllowedRolesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AllowedRolesMaxFields>;
  min?: Maybe<AllowedRolesMinFields>;
};

/** aggregate fields of "allowed_roles" */
export type AllowedRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "allowed_roles" */
export type AllowedRolesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AllowedRolesMaxOrderBy>;
  min?: InputMaybe<AllowedRolesMinOrderBy>;
};

/** input type for inserting array relation for remote table "allowed_roles" */
export type AllowedRolesArrRelInsertInput = {
  data: Array<AllowedRolesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AllowedRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "allowed_roles". All fields are combined with a logical 'AND'. */
export type AllowedRolesBoolExp = {
  _and?: InputMaybe<Array<AllowedRolesBoolExp>>;
  _not?: InputMaybe<AllowedRolesBoolExp>;
  _or?: InputMaybe<Array<AllowedRolesBoolExp>>;
  role?: InputMaybe<RolesEnumComparisonExp>;
  roleByRole?: InputMaybe<RolesBoolExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "allowed_roles" */
export enum AllowedRolesConstraint {
  /** unique or primary key constraint on columns "user_id", "role" */
  AllowedRolesPkey = 'allowed_roles_pkey',
}

/** input type for inserting data into table "allowed_roles" */
export type AllowedRolesInsertInput = {
  role?: InputMaybe<RolesEnum>;
  roleByRole?: InputMaybe<RolesObjRelInsertInput>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AllowedRolesMaxFields = {
  __typename?: 'AllowedRolesMaxFields';
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "allowed_roles" */
export type AllowedRolesMaxOrderBy = {
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AllowedRolesMinFields = {
  __typename?: 'AllowedRolesMinFields';
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "allowed_roles" */
export type AllowedRolesMinOrderBy = {
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "allowed_roles" */
export type AllowedRolesMutationResponse = {
  __typename?: 'AllowedRolesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AllowedRoles>;
};

/** on_conflict condition type for table "allowed_roles" */
export type AllowedRolesOnConflict = {
  constraint: AllowedRolesConstraint;
  updateColumns?: Array<AllowedRolesUpdateColumn>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

/** Ordering options when selecting data from "allowed_roles". */
export type AllowedRolesOrderBy = {
  role?: InputMaybe<OrderBy>;
  roleByRole?: InputMaybe<RolesOrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: allowed_roles */
export type AllowedRolesPkColumnsInput = {
  role: RolesEnum;
  userId: Scalars['uuid'];
};

/** select columns of table "allowed_roles" */
export enum AllowedRolesSelectColumn {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "allowed_roles" */
export type AllowedRolesSetInput = {
  role?: InputMaybe<RolesEnum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "allowed_roles" */
export type AllowedRolesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AllowedRolesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AllowedRolesStreamCursorValueInput = {
  role?: InputMaybe<RolesEnum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "allowed_roles" */
export enum AllowedRolesUpdateColumn {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

export type AllowedRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AllowedRolesSetInput>;
  /** filter the rows which have to be updated */
  where: AllowedRolesBoolExp;
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

export type CommitItem = {
  __typename?: 'CommitItem';
  author_profile_picture?: Maybe<Scalars['String']>;
  commit_author_date?: Maybe<Scalars['String']>;
  commit_author_email?: Maybe<Scalars['String']>;
  commit_author_name?: Maybe<Scalars['String']>;
  commit_committer_date?: Maybe<Scalars['String']>;
  commit_committer_email?: Maybe<Scalars['String']>;
  commit_committer_name?: Maybe<Scalars['String']>;
  commit_message?: Maybe<Scalars['String']>;
  commit_tree_created?: Maybe<Scalars['String']>;
  commit_tree_sha?: Maybe<Scalars['String']>;
  commit_tree_url?: Maybe<Scalars['String']>;
  commit_url?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  html_url?: Maybe<Scalars['String']>;
  parents?: Maybe<Scalars['jsonb']>;
  sha?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** columns and relationships of "course" */
export type Course = {
  __typename?: 'Course';
  canStudentSeeFeedback: Scalars['Boolean'];
  canStudentSeeGrade: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  practiceToCourses: Array<PracticeToCourse>;
  /** An aggregate relationship */
  practiceToCoursesAggregate: PracticeToCourseAggregate;
  /** An array relationship */
  studentToCourses: Array<StudentToCourse>;
  /** An aggregate relationship */
  studentToCoursesAggregate: StudentToCourseAggregate;
  updatedAt: Scalars['timestamptz'];
  years: Scalars['String'];
};

/** columns and relationships of "course" */
export type CoursePracticeToCoursesArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

/** columns and relationships of "course" */
export type CoursePracticeToCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

/** columns and relationships of "course" */
export type CourseStudentToCoursesArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

/** columns and relationships of "course" */
export type CourseStudentToCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

/** aggregated selection of "course" */
export type CourseAggregate = {
  __typename?: 'CourseAggregate';
  aggregate?: Maybe<CourseAggregateFields>;
  nodes: Array<Course>;
};

/** aggregate fields of "course" */
export type CourseAggregateFields = {
  __typename?: 'CourseAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<CourseMaxFields>;
  min?: Maybe<CourseMinFields>;
};

/** aggregate fields of "course" */
export type CourseAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CourseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type CourseBoolExp = {
  _and?: InputMaybe<Array<CourseBoolExp>>;
  _not?: InputMaybe<CourseBoolExp>;
  _or?: InputMaybe<Array<CourseBoolExp>>;
  canStudentSeeFeedback?: InputMaybe<BooleanComparisonExp>;
  canStudentSeeGrade?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  practiceToCourses?: InputMaybe<PracticeToCourseBoolExp>;
  practiceToCoursesAggregate?: InputMaybe<PracticeToCourseAggregateBoolExp>;
  studentToCourses?: InputMaybe<StudentToCourseBoolExp>;
  studentToCoursesAggregate?: InputMaybe<StudentToCourseAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  years?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "course" */
export enum CourseConstraint {
  /** unique or primary key constraint on columns "years", "name" */
  PromotionNameYearsKey = 'promotion_name_years_key',
  /** unique or primary key constraint on columns "id" */
  PromotionPkey = 'promotion_pkey',
}

/** input type for inserting data into table "course" */
export type CourseInsertInput = {
  canStudentSeeFeedback?: InputMaybe<Scalars['Boolean']>;
  canStudentSeeGrade?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  practiceToCourses?: InputMaybe<PracticeToCourseArrRelInsertInput>;
  studentToCourses?: InputMaybe<StudentToCourseArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  years?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CourseMaxFields = {
  __typename?: 'CourseMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CourseMinFields = {
  __typename?: 'CourseMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "course" */
export type CourseMutationResponse = {
  __typename?: 'CourseMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "course" */
export type CourseObjRelInsertInput = {
  data: CourseInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CourseOnConflict>;
};

/** on_conflict condition type for table "course" */
export type CourseOnConflict = {
  constraint: CourseConstraint;
  updateColumns?: Array<CourseUpdateColumn>;
  where?: InputMaybe<CourseBoolExp>;
};

/** Ordering options when selecting data from "course". */
export type CourseOrderBy = {
  canStudentSeeFeedback?: InputMaybe<OrderBy>;
  canStudentSeeGrade?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  practiceToCoursesAggregate?: InputMaybe<PracticeToCourseAggregateOrderBy>;
  studentToCoursesAggregate?: InputMaybe<StudentToCourseAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  years?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: course */
export type CoursePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "course" */
export enum CourseSelectColumn {
  /** column name */
  CanStudentSeeFeedback = 'canStudentSeeFeedback',
  /** column name */
  CanStudentSeeGrade = 'canStudentSeeGrade',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Years = 'years',
}

/** input type for updating data in table "course" */
export type CourseSetInput = {
  canStudentSeeFeedback?: InputMaybe<Scalars['Boolean']>;
  canStudentSeeGrade?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  years?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "course" */
export type CourseStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CourseStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CourseStreamCursorValueInput = {
  canStudentSeeFeedback?: InputMaybe<Scalars['Boolean']>;
  canStudentSeeGrade?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  years?: InputMaybe<Scalars['String']>;
};

/** update columns of table "course" */
export enum CourseUpdateColumn {
  /** column name */
  CanStudentSeeFeedback = 'canStudentSeeFeedback',
  /** column name */
  CanStudentSeeGrade = 'canStudentSeeGrade',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Years = 'years',
}

export type CourseUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CourseSetInput>;
  /** filter the rows which have to be updated */
  where: CourseBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

export type FillEmptyYieldsOutput = {
  __typename?: 'FillEmptyYieldsOutput';
  affected_rows: Scalars['Int'];
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8ComparisonExp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

export type GetGitFileDataOutput = {
  __typename?: 'GetGitFileDataOutput';
  content?: Maybe<Scalars['String']>;
  download_url?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  git_url?: Maybe<Scalars['String']>;
  html_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
  sha?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  submodule_git_url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

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

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
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

/** columns and relationships of "practice" */
export type Practice = {
  __typename?: 'Practice';
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  practiceToCourses: Array<PracticeToCourse>;
  /** An aggregate relationship */
  practiceToCoursesAggregate: PracticeToCourseAggregate;
  /** An array relationship */
  practiceYields: Array<PracticeYield>;
  /** An aggregate relationship */
  practiceYieldsAggregate: PracticeYieldAggregate;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "practice" */
export type PracticePracticeToCoursesArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

/** columns and relationships of "practice" */
export type PracticePracticeToCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

/** columns and relationships of "practice" */
export type PracticePracticeYieldsArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

/** columns and relationships of "practice" */
export type PracticePracticeYieldsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

/** aggregated selection of "practice" */
export type PracticeAggregate = {
  __typename?: 'PracticeAggregate';
  aggregate?: Maybe<PracticeAggregateFields>;
  nodes: Array<Practice>;
};

/** aggregate fields of "practice" */
export type PracticeAggregateFields = {
  __typename?: 'PracticeAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeMaxFields>;
  min?: Maybe<PracticeMinFields>;
};

/** aggregate fields of "practice" */
export type PracticeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "practice". All fields are combined with a logical 'AND'. */
export type PracticeBoolExp = {
  _and?: InputMaybe<Array<PracticeBoolExp>>;
  _not?: InputMaybe<PracticeBoolExp>;
  _or?: InputMaybe<Array<PracticeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  practiceToCourses?: InputMaybe<PracticeToCourseBoolExp>;
  practiceToCoursesAggregate?: InputMaybe<PracticeToCourseAggregateBoolExp>;
  practiceYields?: InputMaybe<PracticeYieldBoolExp>;
  practiceYieldsAggregate?: InputMaybe<PracticeYieldAggregateBoolExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "practice" */
export enum PracticeConstraint {
  /** unique or primary key constraint on columns "id" */
  PracticePkey = 'practice_pkey',
  /** unique or primary key constraint on columns "title" */
  PracticeTitleKey = 'practice_title_key',
}

/** input type for inserting data into table "practice" */
export type PracticeInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  practiceToCourses?: InputMaybe<PracticeToCourseArrRelInsertInput>;
  practiceYields?: InputMaybe<PracticeYieldArrRelInsertInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PracticeMaxFields = {
  __typename?: 'PracticeMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type PracticeMinFields = {
  __typename?: 'PracticeMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "practice" */
export type PracticeMutationResponse = {
  __typename?: 'PracticeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Practice>;
};

/** input type for inserting object relation for remote table "practice" */
export type PracticeObjRelInsertInput = {
  data: PracticeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeOnConflict>;
};

/** on_conflict condition type for table "practice" */
export type PracticeOnConflict = {
  constraint: PracticeConstraint;
  updateColumns?: Array<PracticeUpdateColumn>;
  where?: InputMaybe<PracticeBoolExp>;
};

/** Ordering options when selecting data from "practice". */
export type PracticeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  practiceToCoursesAggregate?: InputMaybe<PracticeToCourseAggregateOrderBy>;
  practiceYieldsAggregate?: InputMaybe<PracticeYieldAggregateOrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice */
export type PracticePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "practice" */
export enum PracticeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "practice" */
export type PracticeSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "practice" */
export type PracticeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_to_course" */
export type PracticeToCourse = {
  __typename?: 'PracticeToCourse';
  closeDate?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  course: Course;
  courseId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  giteaOrgName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_open?: Maybe<Scalars['Boolean']>;
  openDate?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  practice: Practice;
  practiceId: Scalars['uuid'];
  /** An array relationship */
  practiceToStudents: Array<PracticeToStudent>;
  /** An aggregate relationship */
  practiceToStudentsAggregate: PracticeToStudentAggregate;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_course" */
export type PracticeToCoursePracticeToStudentsArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

/** columns and relationships of "practice_to_course" */
export type PracticeToCoursePracticeToStudentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

/** aggregated selection of "practice_to_course" */
export type PracticeToCourseAggregate = {
  __typename?: 'PracticeToCourseAggregate';
  aggregate?: Maybe<PracticeToCourseAggregateFields>;
  nodes: Array<PracticeToCourse>;
};

export type PracticeToCourseAggregateBoolExp = {
  count?: InputMaybe<PracticeToCourseAggregateBoolExpCount>;
};

/** aggregate fields of "practice_to_course" */
export type PracticeToCourseAggregateFields = {
  __typename?: 'PracticeToCourseAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeToCourseMaxFields>;
  min?: Maybe<PracticeToCourseMinFields>;
};

/** aggregate fields of "practice_to_course" */
export type PracticeToCourseAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_course" */
export type PracticeToCourseAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PracticeToCourseMaxOrderBy>;
  min?: InputMaybe<PracticeToCourseMinOrderBy>;
};

/** input type for inserting array relation for remote table "practice_to_course" */
export type PracticeToCourseArrRelInsertInput = {
  data: Array<PracticeToCourseInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeToCourseOnConflict>;
};

/** Boolean expression to filter rows from the table "practice_to_course". All fields are combined with a logical 'AND'. */
export type PracticeToCourseBoolExp = {
  _and?: InputMaybe<Array<PracticeToCourseBoolExp>>;
  _not?: InputMaybe<PracticeToCourseBoolExp>;
  _or?: InputMaybe<Array<PracticeToCourseBoolExp>>;
  closeDate?: InputMaybe<TimestamptzComparisonExp>;
  course?: InputMaybe<CourseBoolExp>;
  courseId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  giteaOrgName?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  is_open?: InputMaybe<BooleanComparisonExp>;
  openDate?: InputMaybe<TimestamptzComparisonExp>;
  practice?: InputMaybe<PracticeBoolExp>;
  practiceId?: InputMaybe<UuidComparisonExp>;
  practiceToStudents?: InputMaybe<PracticeToStudentBoolExp>;
  practiceToStudentsAggregate?: InputMaybe<PracticeToStudentAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "practice_to_course" */
export enum PracticeToCourseConstraint {
  /** unique or primary key constraint on columns "id" */
  PracticeToPromotionPkey = 'practice_to_promotion_pkey',
  /** unique or primary key constraint on columns "course_id", "practice_id" */
  PracticeToPromotionPromotionIdPracticeIdKey = 'practice_to_promotion_promotion_id_practice_id_key',
}

/** input type for inserting data into table "practice_to_course" */
export type PracticeToCourseInsertInput = {
  closeDate?: InputMaybe<Scalars['timestamptz']>;
  course?: InputMaybe<CourseObjRelInsertInput>;
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  giteaOrgName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  openDate?: InputMaybe<Scalars['timestamptz']>;
  practice?: InputMaybe<PracticeObjRelInsertInput>;
  practiceId?: InputMaybe<Scalars['uuid']>;
  practiceToStudents?: InputMaybe<PracticeToStudentArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PracticeToCourseMaxFields = {
  __typename?: 'PracticeToCourseMaxFields';
  closeDate?: Maybe<Scalars['timestamptz']>;
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  giteaOrgName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  openDate?: Maybe<Scalars['timestamptz']>;
  practiceId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_course" */
export type PracticeToCourseMaxOrderBy = {
  closeDate?: InputMaybe<OrderBy>;
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  giteaOrgName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  openDate?: InputMaybe<OrderBy>;
  practiceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeToCourseMinFields = {
  __typename?: 'PracticeToCourseMinFields';
  closeDate?: Maybe<Scalars['timestamptz']>;
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  giteaOrgName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  openDate?: Maybe<Scalars['timestamptz']>;
  practiceId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_course" */
export type PracticeToCourseMinOrderBy = {
  closeDate?: InputMaybe<OrderBy>;
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  giteaOrgName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  openDate?: InputMaybe<OrderBy>;
  practiceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "practice_to_course" */
export type PracticeToCourseMutationResponse = {
  __typename?: 'PracticeToCourseMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeToCourse>;
};

/** input type for inserting object relation for remote table "practice_to_course" */
export type PracticeToCourseObjRelInsertInput = {
  data: PracticeToCourseInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeToCourseOnConflict>;
};

/** on_conflict condition type for table "practice_to_course" */
export type PracticeToCourseOnConflict = {
  constraint: PracticeToCourseConstraint;
  updateColumns?: Array<PracticeToCourseUpdateColumn>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

/** Ordering options when selecting data from "practice_to_course". */
export type PracticeToCourseOrderBy = {
  closeDate?: InputMaybe<OrderBy>;
  course?: InputMaybe<CourseOrderBy>;
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  giteaOrgName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_open?: InputMaybe<OrderBy>;
  openDate?: InputMaybe<OrderBy>;
  practice?: InputMaybe<PracticeOrderBy>;
  practiceId?: InputMaybe<OrderBy>;
  practiceToStudentsAggregate?: InputMaybe<PracticeToStudentAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice_to_course */
export type PracticeToCoursePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_course" */
export enum PracticeToCourseSelectColumn {
  /** column name */
  CloseDate = 'closeDate',
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GiteaOrgName = 'giteaOrgName',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'openDate',
  /** column name */
  PracticeId = 'practiceId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "practice_to_course" */
export type PracticeToCourseSetInput = {
  closeDate?: InputMaybe<Scalars['timestamptz']>;
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  giteaOrgName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  openDate?: InputMaybe<Scalars['timestamptz']>;
  practiceId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "practice_to_course" */
export type PracticeToCourseStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeToCourseStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeToCourseStreamCursorValueInput = {
  closeDate?: InputMaybe<Scalars['timestamptz']>;
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  giteaOrgName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  openDate?: InputMaybe<Scalars['timestamptz']>;
  practiceId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "practice_to_course" */
export enum PracticeToCourseUpdateColumn {
  /** column name */
  CloseDate = 'closeDate',
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GiteaOrgName = 'giteaOrgName',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'openDate',
  /** column name */
  PracticeId = 'practiceId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type PracticeToCourseUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeToCourseSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeToCourseBoolExp;
};

/** columns and relationships of "practice_to_student" */
export type PracticeToStudent = {
  __typename?: 'PracticeToStudent';
  coursePracticeId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  gradeDetail?: Maybe<Scalars['jsonb']>;
  graded: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  practiceToCourse: PracticeToCourse;
  /** An array relationship */
  practiceToStudentYields: Array<PracticeToStudentYield>;
  /** An aggregate relationship */
  practiceToStudentYieldsAggregate: PracticeToStudentYieldAggregate;
  /** An object relationship */
  student: Student;
  /** An object relationship */
  studentFeedback?: Maybe<PracticeToStudentFeedback>;
  /** An object relationship */
  studentGrade?: Maybe<PracticeToStudentGrade>;
  studentId: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student" */
export type PracticeToStudentFeedbackArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type PracticeToStudentGradeDetailArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type PracticeToStudentPracticeToStudentYieldsArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

/** columns and relationships of "practice_to_student" */
export type PracticeToStudentPracticeToStudentYieldsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

/** aggregated selection of "practice_to_student" */
export type PracticeToStudentAggregate = {
  __typename?: 'PracticeToStudentAggregate';
  aggregate?: Maybe<PracticeToStudentAggregateFields>;
  nodes: Array<PracticeToStudent>;
};

export type PracticeToStudentAggregateBoolExp = {
  avg?: InputMaybe<PracticeToStudentAggregateBoolExpAvg>;
  bool_and?: InputMaybe<PracticeToStudentAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<PracticeToStudentAggregateBoolExpBool_Or>;
  corr?: InputMaybe<PracticeToStudentAggregateBoolExpCorr>;
  count?: InputMaybe<PracticeToStudentAggregateBoolExpCount>;
  covar_samp?: InputMaybe<PracticeToStudentAggregateBoolExpCovar_Samp>;
  max?: InputMaybe<PracticeToStudentAggregateBoolExpMax>;
  min?: InputMaybe<PracticeToStudentAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<PracticeToStudentAggregateBoolExpStddev_Samp>;
  sum?: InputMaybe<PracticeToStudentAggregateBoolExpSum>;
  var_samp?: InputMaybe<PracticeToStudentAggregateBoolExpVar_Samp>;
};

/** aggregate fields of "practice_to_student" */
export type PracticeToStudentAggregateFields = {
  __typename?: 'PracticeToStudentAggregateFields';
  avg?: Maybe<PracticeToStudentAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<PracticeToStudentMaxFields>;
  min?: Maybe<PracticeToStudentMinFields>;
  stddev?: Maybe<PracticeToStudentStddevFields>;
  stddevPop?: Maybe<PracticeToStudentStddevPopFields>;
  stddevSamp?: Maybe<PracticeToStudentStddevSampFields>;
  sum?: Maybe<PracticeToStudentSumFields>;
  varPop?: Maybe<PracticeToStudentVarPopFields>;
  varSamp?: Maybe<PracticeToStudentVarSampFields>;
  variance?: Maybe<PracticeToStudentVarianceFields>;
};

/** aggregate fields of "practice_to_student" */
export type PracticeToStudentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student" */
export type PracticeToStudentAggregateOrderBy = {
  avg?: InputMaybe<PracticeToStudentAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PracticeToStudentMaxOrderBy>;
  min?: InputMaybe<PracticeToStudentMinOrderBy>;
  stddev?: InputMaybe<PracticeToStudentStddevOrderBy>;
  stddevPop?: InputMaybe<PracticeToStudentStddevPopOrderBy>;
  stddevSamp?: InputMaybe<PracticeToStudentStddevSampOrderBy>;
  sum?: InputMaybe<PracticeToStudentSumOrderBy>;
  varPop?: InputMaybe<PracticeToStudentVarPopOrderBy>;
  varSamp?: InputMaybe<PracticeToStudentVarSampOrderBy>;
  variance?: InputMaybe<PracticeToStudentVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentAppendInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student" */
export type PracticeToStudentArrRelInsertInput = {
  data: Array<PracticeToStudentInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeToStudentOnConflict>;
};

/** aggregate avg on columns */
export type PracticeToStudentAvgFields = {
  __typename?: 'PracticeToStudentAvgFields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student" */
export type PracticeToStudentAvgOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "practice_to_student". All fields are combined with a logical 'AND'. */
export type PracticeToStudentBoolExp = {
  _and?: InputMaybe<Array<PracticeToStudentBoolExp>>;
  _not?: InputMaybe<PracticeToStudentBoolExp>;
  _or?: InputMaybe<Array<PracticeToStudentBoolExp>>;
  coursePracticeId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  feedback?: InputMaybe<JsonbComparisonExp>;
  grade?: InputMaybe<Float8ComparisonExp>;
  gradeDetail?: InputMaybe<JsonbComparisonExp>;
  graded?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  practiceToCourse?: InputMaybe<PracticeToCourseBoolExp>;
  practiceToStudentYields?: InputMaybe<PracticeToStudentYieldBoolExp>;
  practiceToStudentYieldsAggregate?: InputMaybe<PracticeToStudentYieldAggregateBoolExp>;
  student?: InputMaybe<StudentBoolExp>;
  studentFeedback?: InputMaybe<PracticeToStudentFeedbackBoolExp>;
  studentGrade?: InputMaybe<PracticeToStudentGradeBoolExp>;
  studentId?: InputMaybe<UuidComparisonExp>;
  submited?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "practice_to_student" */
export enum PracticeToStudentConstraint {
  /** unique or primary key constraint on columns "id" */
  PracticeToStudentPkey = 'practice_to_student_pkey',
  /** unique or primary key constraint on columns "student_id", "course_practice_id" */
  PracticeToStudentStudentIdPromotionPracticeIdKey = 'practice_to_student_student_id_promotion_practice_id_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PracticeToStudentDeleteAtPathInput = {
  feedback?: InputMaybe<Array<Scalars['String']>>;
  gradeDetail?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PracticeToStudentDeleteElemInput = {
  feedback?: InputMaybe<Scalars['Int']>;
  gradeDetail?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PracticeToStudentDeleteKeyInput = {
  feedback?: InputMaybe<Scalars['String']>;
  gradeDetail?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student_feedback" */
export type PracticeToStudentFeedback = {
  __typename?: 'PracticeToStudentFeedback';
  feedback?: Maybe<Scalars['jsonb']>;
  practiceToStudentId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  practice_to_student?: Maybe<PracticeToStudent>;
};

/** columns and relationships of "practice_to_student_feedback" */
export type PracticeToStudentFeedbackFeedbackArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_feedback" */
export type PracticeToStudentFeedbackAggregate = {
  __typename?: 'PracticeToStudentFeedbackAggregate';
  aggregate?: Maybe<PracticeToStudentFeedbackAggregateFields>;
  nodes: Array<PracticeToStudentFeedback>;
};

/** aggregate fields of "practice_to_student_feedback" */
export type PracticeToStudentFeedbackAggregateFields = {
  __typename?: 'PracticeToStudentFeedbackAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeToStudentFeedbackMaxFields>;
  min?: Maybe<PracticeToStudentFeedbackMinFields>;
};

/** aggregate fields of "practice_to_student_feedback" */
export type PracticeToStudentFeedbackAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeToStudentFeedbackSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentFeedbackAppendInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "practice_to_student_feedback". All fields are combined with a logical 'AND'. */
export type PracticeToStudentFeedbackBoolExp = {
  _and?: InputMaybe<Array<PracticeToStudentFeedbackBoolExp>>;
  _not?: InputMaybe<PracticeToStudentFeedbackBoolExp>;
  _or?: InputMaybe<Array<PracticeToStudentFeedbackBoolExp>>;
  feedback?: InputMaybe<JsonbComparisonExp>;
  practiceToStudentId?: InputMaybe<UuidComparisonExp>;
  practice_to_student?: InputMaybe<PracticeToStudentBoolExp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PracticeToStudentFeedbackDeleteAtPathInput = {
  feedback?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PracticeToStudentFeedbackDeleteElemInput = {
  feedback?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PracticeToStudentFeedbackDeleteKeyInput = {
  feedback?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "practice_to_student_feedback" */
export type PracticeToStudentFeedbackInsertInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
  practice_to_student?: InputMaybe<PracticeToStudentObjRelInsertInput>;
};

/** aggregate max on columns */
export type PracticeToStudentFeedbackMaxFields = {
  __typename?: 'PracticeToStudentFeedbackMaxFields';
  practiceToStudentId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type PracticeToStudentFeedbackMinFields = {
  __typename?: 'PracticeToStudentFeedbackMinFields';
  practiceToStudentId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "practice_to_student_feedback" */
export type PracticeToStudentFeedbackMutationResponse = {
  __typename?: 'PracticeToStudentFeedbackMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeToStudentFeedback>;
};

/** input type for inserting object relation for remote table "practice_to_student_feedback" */
export type PracticeToStudentFeedbackObjRelInsertInput = {
  data: PracticeToStudentFeedbackInsertInput;
};

/** Ordering options when selecting data from "practice_to_student_feedback". */
export type PracticeToStudentFeedbackOrderBy = {
  feedback?: InputMaybe<OrderBy>;
  practiceToStudentId?: InputMaybe<OrderBy>;
  practice_to_student?: InputMaybe<PracticeToStudentOrderBy>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentFeedbackPrependInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_feedback" */
export enum PracticeToStudentFeedbackSelectColumn {
  /** column name */
  Feedback = 'feedback',
  /** column name */
  PracticeToStudentId = 'practiceToStudentId',
}

/** input type for updating data in table "practice_to_student_feedback" */
export type PracticeToStudentFeedbackSetInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "practice_to_student_feedback" */
export type PracticeToStudentFeedbackStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeToStudentFeedbackStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeToStudentFeedbackStreamCursorValueInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
};

export type PracticeToStudentFeedbackUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PracticeToStudentFeedbackAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<PracticeToStudentFeedbackDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<PracticeToStudentFeedbackDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<PracticeToStudentFeedbackDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PracticeToStudentFeedbackPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeToStudentFeedbackSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeToStudentFeedbackBoolExp;
};

/** columns and relationships of "practice_to_student_grade" */
export type PracticeToStudentGrade = {
  __typename?: 'PracticeToStudentGrade';
  grade?: Maybe<Scalars['float8']>;
  gradeDetail?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  practiceToStudent?: Maybe<PracticeToStudent>;
  practiceToStudentId?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_grade" */
export type PracticeToStudentGradeGradeDetailArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_grade" */
export type PracticeToStudentGradeAggregate = {
  __typename?: 'PracticeToStudentGradeAggregate';
  aggregate?: Maybe<PracticeToStudentGradeAggregateFields>;
  nodes: Array<PracticeToStudentGrade>;
};

/** aggregate fields of "practice_to_student_grade" */
export type PracticeToStudentGradeAggregateFields = {
  __typename?: 'PracticeToStudentGradeAggregateFields';
  avg?: Maybe<PracticeToStudentGradeAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<PracticeToStudentGradeMaxFields>;
  min?: Maybe<PracticeToStudentGradeMinFields>;
  stddev?: Maybe<PracticeToStudentGradeStddevFields>;
  stddevPop?: Maybe<PracticeToStudentGradeStddevPopFields>;
  stddevSamp?: Maybe<PracticeToStudentGradeStddevSampFields>;
  sum?: Maybe<PracticeToStudentGradeSumFields>;
  varPop?: Maybe<PracticeToStudentGradeVarPopFields>;
  varSamp?: Maybe<PracticeToStudentGradeVarSampFields>;
  variance?: Maybe<PracticeToStudentGradeVarianceFields>;
};

/** aggregate fields of "practice_to_student_grade" */
export type PracticeToStudentGradeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeToStudentGradeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentGradeAppendInput = {
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type PracticeToStudentGradeAvgFields = {
  __typename?: 'PracticeToStudentGradeAvgFields';
  grade?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "practice_to_student_grade". All fields are combined with a logical 'AND'. */
export type PracticeToStudentGradeBoolExp = {
  _and?: InputMaybe<Array<PracticeToStudentGradeBoolExp>>;
  _not?: InputMaybe<PracticeToStudentGradeBoolExp>;
  _or?: InputMaybe<Array<PracticeToStudentGradeBoolExp>>;
  grade?: InputMaybe<Float8ComparisonExp>;
  gradeDetail?: InputMaybe<JsonbComparisonExp>;
  practiceToStudent?: InputMaybe<PracticeToStudentBoolExp>;
  practiceToStudentId?: InputMaybe<UuidComparisonExp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PracticeToStudentGradeDeleteAtPathInput = {
  gradeDetail?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PracticeToStudentGradeDeleteElemInput = {
  gradeDetail?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PracticeToStudentGradeDeleteKeyInput = {
  gradeDetail?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "practice_to_student_grade" */
export type PracticeToStudentGradeIncInput = {
  grade?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "practice_to_student_grade" */
export type PracticeToStudentGradeInsertInput = {
  grade?: InputMaybe<Scalars['float8']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
  practiceToStudent?: InputMaybe<PracticeToStudentObjRelInsertInput>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PracticeToStudentGradeMaxFields = {
  __typename?: 'PracticeToStudentGradeMaxFields';
  grade?: Maybe<Scalars['float8']>;
  practiceToStudentId?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetric = {
  __typename?: 'PracticeToStudentGradeMetric';
  createdAt: Scalars['timestamptz'];
  feedback: Scalars['jsonb'];
  id: Scalars['uuid'];
  percentGrade: Scalars['numeric'];
  /** An object relationship */
  practiceToStudentYield: PracticeToStudentYield;
  practiceToStudentYieldId: Scalars['uuid'];
  /** An object relationship */
  practiceYieldGradeMetric: PracticeYieldGradeMetric;
  practiceYieldGradeMetricId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricFeedbackArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricAggregate = {
  __typename?: 'PracticeToStudentGradeMetricAggregate';
  aggregate?: Maybe<PracticeToStudentGradeMetricAggregateFields>;
  nodes: Array<PracticeToStudentGradeMetric>;
};

export type PracticeToStudentGradeMetricAggregateBoolExp = {
  count?: InputMaybe<PracticeToStudentGradeMetricAggregateBoolExpCount>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricAggregateFields = {
  __typename?: 'PracticeToStudentGradeMetricAggregateFields';
  avg?: Maybe<PracticeToStudentGradeMetricAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<PracticeToStudentGradeMetricMaxFields>;
  min?: Maybe<PracticeToStudentGradeMetricMinFields>;
  stddev?: Maybe<PracticeToStudentGradeMetricStddevFields>;
  stddevPop?: Maybe<PracticeToStudentGradeMetricStddevPopFields>;
  stddevSamp?: Maybe<PracticeToStudentGradeMetricStddevSampFields>;
  sum?: Maybe<PracticeToStudentGradeMetricSumFields>;
  varPop?: Maybe<PracticeToStudentGradeMetricVarPopFields>;
  varSamp?: Maybe<PracticeToStudentGradeMetricVarSampFields>;
  variance?: Maybe<PracticeToStudentGradeMetricVarianceFields>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricAggregateOrderBy = {
  avg?: InputMaybe<PracticeToStudentGradeMetricAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PracticeToStudentGradeMetricMaxOrderBy>;
  min?: InputMaybe<PracticeToStudentGradeMetricMinOrderBy>;
  stddev?: InputMaybe<PracticeToStudentGradeMetricStddevOrderBy>;
  stddevPop?: InputMaybe<PracticeToStudentGradeMetricStddevPopOrderBy>;
  stddevSamp?: InputMaybe<PracticeToStudentGradeMetricStddevSampOrderBy>;
  sum?: InputMaybe<PracticeToStudentGradeMetricSumOrderBy>;
  varPop?: InputMaybe<PracticeToStudentGradeMetricVarPopOrderBy>;
  varSamp?: InputMaybe<PracticeToStudentGradeMetricVarSampOrderBy>;
  variance?: InputMaybe<PracticeToStudentGradeMetricVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentGradeMetricAppendInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricArrRelInsertInput = {
  data: Array<PracticeToStudentGradeMetricInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeToStudentGradeMetricOnConflict>;
};

/** aggregate avg on columns */
export type PracticeToStudentGradeMetricAvgFields = {
  __typename?: 'PracticeToStudentGradeMetricAvgFields';
  percentGrade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricAvgOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "practice_to_student_grade_metric". All fields are combined with a logical 'AND'. */
export type PracticeToStudentGradeMetricBoolExp = {
  _and?: InputMaybe<Array<PracticeToStudentGradeMetricBoolExp>>;
  _not?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
  _or?: InputMaybe<Array<PracticeToStudentGradeMetricBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  feedback?: InputMaybe<JsonbComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  percentGrade?: InputMaybe<NumericComparisonExp>;
  practiceToStudentYield?: InputMaybe<PracticeToStudentYieldBoolExp>;
  practiceToStudentYieldId?: InputMaybe<UuidComparisonExp>;
  practiceYieldGradeMetric?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
  practiceYieldGradeMetricId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "practice_to_student_grade_metric" */
export enum PracticeToStudentGradeMetricConstraint {
  /** unique or primary key constraint on columns "id" */
  PracticeToStudentGradeMetricPkey = 'practice_to_student_grade_metric_pkey',
  /** unique or primary key constraint on columns "practice_to_student_yield_id", "practice_yield_grade_metric_id" */
  PracticeToStudentGradeMetricPracticeYieldGradeMetricId = 'practice_to_student_grade_metric_practice_yield_grade_metric_id',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PracticeToStudentGradeMetricDeleteAtPathInput = {
  feedback?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PracticeToStudentGradeMetricDeleteElemInput = {
  feedback?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PracticeToStudentGradeMetricDeleteKeyInput = {
  feedback?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricIncInput = {
  percentGrade?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  percentGrade?: InputMaybe<Scalars['numeric']>;
  practiceToStudentYield?: InputMaybe<PracticeToStudentYieldObjRelInsertInput>;
  practiceToStudentYieldId?: InputMaybe<Scalars['uuid']>;
  practiceYieldGradeMetric?: InputMaybe<PracticeYieldGradeMetricObjRelInsertInput>;
  practiceYieldGradeMetricId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PracticeToStudentGradeMetricMaxFields = {
  __typename?: 'PracticeToStudentGradeMetricMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percentGrade?: Maybe<Scalars['numeric']>;
  practiceToStudentYieldId?: Maybe<Scalars['uuid']>;
  practiceYieldGradeMetricId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  percentGrade?: InputMaybe<OrderBy>;
  practiceToStudentYieldId?: InputMaybe<OrderBy>;
  practiceYieldGradeMetricId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeToStudentGradeMetricMinFields = {
  __typename?: 'PracticeToStudentGradeMetricMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percentGrade?: Maybe<Scalars['numeric']>;
  practiceToStudentYieldId?: Maybe<Scalars['uuid']>;
  practiceYieldGradeMetricId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  percentGrade?: InputMaybe<OrderBy>;
  practiceToStudentYieldId?: InputMaybe<OrderBy>;
  practiceYieldGradeMetricId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricMutationResponse = {
  __typename?: 'PracticeToStudentGradeMetricMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeToStudentGradeMetric>;
};

/** on_conflict condition type for table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricOnConflict = {
  constraint: PracticeToStudentGradeMetricConstraint;
  updateColumns?: Array<PracticeToStudentGradeMetricUpdateColumn>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

/** Ordering options when selecting data from "practice_to_student_grade_metric". */
export type PracticeToStudentGradeMetricOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  feedback?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  percentGrade?: InputMaybe<OrderBy>;
  practiceToStudentYield?: InputMaybe<PracticeToStudentYieldOrderBy>;
  practiceToStudentYieldId?: InputMaybe<OrderBy>;
  practiceYieldGradeMetric?: InputMaybe<PracticeYieldGradeMetricOrderBy>;
  practiceYieldGradeMetricId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice_to_student_grade_metric */
export type PracticeToStudentGradeMetricPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentGradeMetricPrependInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_grade_metric" */
export enum PracticeToStudentGradeMetricSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percentGrade',
  /** column name */
  PracticeToStudentYieldId = 'practiceToStudentYieldId',
  /** column name */
  PracticeYieldGradeMetricId = 'practiceYieldGradeMetricId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  percentGrade?: InputMaybe<Scalars['numeric']>;
  practiceToStudentYieldId?: InputMaybe<Scalars['uuid']>;
  practiceYieldGradeMetricId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type PracticeToStudentGradeMetricStddevFields = {
  __typename?: 'PracticeToStudentGradeMetricStddevFields';
  percentGrade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricStddevOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PracticeToStudentGradeMetricStddevPopFields = {
  __typename?: 'PracticeToStudentGradeMetricStddevPopFields';
  percentGrade?: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricStddevPopOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PracticeToStudentGradeMetricStddevSampFields = {
  __typename?: 'PracticeToStudentGradeMetricStddevSampFields';
  percentGrade?: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricStddevSampOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeToStudentGradeMetricStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeToStudentGradeMetricStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  percentGrade?: InputMaybe<Scalars['numeric']>;
  practiceToStudentYieldId?: InputMaybe<Scalars['uuid']>;
  practiceYieldGradeMetricId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type PracticeToStudentGradeMetricSumFields = {
  __typename?: 'PracticeToStudentGradeMetricSumFields';
  percentGrade?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricSumOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** update columns of table "practice_to_student_grade_metric" */
export enum PracticeToStudentGradeMetricUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percentGrade',
  /** column name */
  PracticeToStudentYieldId = 'practiceToStudentYieldId',
  /** column name */
  PracticeYieldGradeMetricId = 'practiceYieldGradeMetricId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type PracticeToStudentGradeMetricUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PracticeToStudentGradeMetricAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<PracticeToStudentGradeMetricDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<PracticeToStudentGradeMetricDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<PracticeToStudentGradeMetricDeleteKeyInput>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PracticeToStudentGradeMetricIncInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PracticeToStudentGradeMetricPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeToStudentGradeMetricSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeToStudentGradeMetricBoolExp;
};

/** aggregate varPop on columns */
export type PracticeToStudentGradeMetricVarPopFields = {
  __typename?: 'PracticeToStudentGradeMetricVarPopFields';
  percentGrade?: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricVarPopOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PracticeToStudentGradeMetricVarSampFields = {
  __typename?: 'PracticeToStudentGradeMetricVarSampFields';
  percentGrade?: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricVarSampOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PracticeToStudentGradeMetricVarianceFields = {
  __typename?: 'PracticeToStudentGradeMetricVarianceFields';
  percentGrade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student_grade_metric" */
export type PracticeToStudentGradeMetricVarianceOrderBy = {
  percentGrade?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeToStudentGradeMinFields = {
  __typename?: 'PracticeToStudentGradeMinFields';
  grade?: Maybe<Scalars['float8']>;
  practiceToStudentId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "practice_to_student_grade" */
export type PracticeToStudentGradeMutationResponse = {
  __typename?: 'PracticeToStudentGradeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeToStudentGrade>;
};

/** input type for inserting object relation for remote table "practice_to_student_grade" */
export type PracticeToStudentGradeObjRelInsertInput = {
  data: PracticeToStudentGradeInsertInput;
};

/** Ordering options when selecting data from "practice_to_student_grade". */
export type PracticeToStudentGradeOrderBy = {
  grade?: InputMaybe<OrderBy>;
  gradeDetail?: InputMaybe<OrderBy>;
  practiceToStudent?: InputMaybe<PracticeToStudentOrderBy>;
  practiceToStudentId?: InputMaybe<OrderBy>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentGradePrependInput = {
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_grade" */
export enum PracticeToStudentGradeSelectColumn {
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'gradeDetail',
  /** column name */
  PracticeToStudentId = 'practiceToStudentId',
}

/** input type for updating data in table "practice_to_student_grade" */
export type PracticeToStudentGradeSetInput = {
  grade?: InputMaybe<Scalars['float8']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type PracticeToStudentGradeStddevFields = {
  __typename?: 'PracticeToStudentGradeStddevFields';
  grade?: Maybe<Scalars['Float']>;
};

/** aggregate stddevPop on columns */
export type PracticeToStudentGradeStddevPopFields = {
  __typename?: 'PracticeToStudentGradeStddevPopFields';
  grade?: Maybe<Scalars['Float']>;
};

/** aggregate stddevSamp on columns */
export type PracticeToStudentGradeStddevSampFields = {
  __typename?: 'PracticeToStudentGradeStddevSampFields';
  grade?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "practice_to_student_grade" */
export type PracticeToStudentGradeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeToStudentGradeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeToStudentGradeStreamCursorValueInput = {
  grade?: InputMaybe<Scalars['float8']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type PracticeToStudentGradeSumFields = {
  __typename?: 'PracticeToStudentGradeSumFields';
  grade?: Maybe<Scalars['float8']>;
};

export type PracticeToStudentGradeUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PracticeToStudentGradeAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<PracticeToStudentGradeDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<PracticeToStudentGradeDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<PracticeToStudentGradeDeleteKeyInput>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PracticeToStudentGradeIncInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PracticeToStudentGradePrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeToStudentGradeSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeToStudentGradeBoolExp;
};

/** aggregate varPop on columns */
export type PracticeToStudentGradeVarPopFields = {
  __typename?: 'PracticeToStudentGradeVarPopFields';
  grade?: Maybe<Scalars['Float']>;
};

/** aggregate varSamp on columns */
export type PracticeToStudentGradeVarSampFields = {
  __typename?: 'PracticeToStudentGradeVarSampFields';
  grade?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type PracticeToStudentGradeVarianceFields = {
  __typename?: 'PracticeToStudentGradeVarianceFields';
  grade?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "practice_to_student" */
export type PracticeToStudentIncInput = {
  grade?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "practice_to_student" */
export type PracticeToStudentInsertInput = {
  coursePracticeId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  grade?: InputMaybe<Scalars['float8']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
  graded?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  practiceToCourse?: InputMaybe<PracticeToCourseObjRelInsertInput>;
  practiceToStudentYields?: InputMaybe<PracticeToStudentYieldArrRelInsertInput>;
  student?: InputMaybe<StudentObjRelInsertInput>;
  studentFeedback?: InputMaybe<PracticeToStudentFeedbackObjRelInsertInput>;
  studentGrade?: InputMaybe<PracticeToStudentGradeObjRelInsertInput>;
  studentId?: InputMaybe<Scalars['uuid']>;
  submited?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PracticeToStudentMaxFields = {
  __typename?: 'PracticeToStudentMaxFields';
  coursePracticeId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  studentId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student" */
export type PracticeToStudentMaxOrderBy = {
  coursePracticeId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeToStudentMinFields = {
  __typename?: 'PracticeToStudentMinFields';
  coursePracticeId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  studentId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student" */
export type PracticeToStudentMinOrderBy = {
  coursePracticeId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "practice_to_student" */
export type PracticeToStudentMutationResponse = {
  __typename?: 'PracticeToStudentMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeToStudent>;
};

/** input type for inserting object relation for remote table "practice_to_student" */
export type PracticeToStudentObjRelInsertInput = {
  data: PracticeToStudentInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeToStudentOnConflict>;
};

/** on_conflict condition type for table "practice_to_student" */
export type PracticeToStudentOnConflict = {
  constraint: PracticeToStudentConstraint;
  updateColumns?: Array<PracticeToStudentUpdateColumn>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

/** Ordering options when selecting data from "practice_to_student". */
export type PracticeToStudentOrderBy = {
  coursePracticeId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  feedback?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  gradeDetail?: InputMaybe<OrderBy>;
  graded?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  practiceToCourse?: InputMaybe<PracticeToCourseOrderBy>;
  practiceToStudentYieldsAggregate?: InputMaybe<PracticeToStudentYieldAggregateOrderBy>;
  student?: InputMaybe<StudentOrderBy>;
  studentFeedback?: InputMaybe<PracticeToStudentFeedbackOrderBy>;
  studentGrade?: InputMaybe<PracticeToStudentGradeOrderBy>;
  studentId?: InputMaybe<OrderBy>;
  submited?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice_to_student */
export type PracticeToStudentPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PracticeToStudentPrependInput = {
  feedback?: InputMaybe<Scalars['jsonb']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumn {
  /** column name */
  CoursePracticeId = 'coursePracticeId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'gradeDetail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** select "practiceToStudentAggregateBoolExpAvgArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** select "practiceToStudentAggregateBoolExpBool_andArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Graded = 'graded',
  /** column name */
  Submited = 'submited',
}

/** select "practiceToStudentAggregateBoolExpBool_orArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Graded = 'graded',
  /** column name */
  Submited = 'submited',
}

/** select "practiceToStudentAggregateBoolExpCorrArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** select "practiceToStudentAggregateBoolExpCovar_sampArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpCovar_SampArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** select "practiceToStudentAggregateBoolExpMaxArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** select "practiceToStudentAggregateBoolExpMinArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** select "practiceToStudentAggregateBoolExpStddev_sampArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpStddev_SampArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** select "practiceToStudentAggregateBoolExpSumArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** select "practiceToStudentAggregateBoolExpVar_sampArgumentsColumns" columns of table "practice_to_student" */
export enum PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpVar_SampArgumentsColumns {
  /** column name */
  Grade = 'grade',
}

/** input type for updating data in table "practice_to_student" */
export type PracticeToStudentSetInput = {
  coursePracticeId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  grade?: InputMaybe<Scalars['float8']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
  graded?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  studentId?: InputMaybe<Scalars['uuid']>;
  submited?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type PracticeToStudentStddevFields = {
  __typename?: 'PracticeToStudentStddevFields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student" */
export type PracticeToStudentStddevOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PracticeToStudentStddevPopFields = {
  __typename?: 'PracticeToStudentStddevPopFields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "practice_to_student" */
export type PracticeToStudentStddevPopOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PracticeToStudentStddevSampFields = {
  __typename?: 'PracticeToStudentStddevSampFields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "practice_to_student" */
export type PracticeToStudentStddevSampOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "practice_to_student" */
export type PracticeToStudentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeToStudentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeToStudentStreamCursorValueInput = {
  coursePracticeId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  grade?: InputMaybe<Scalars['float8']>;
  gradeDetail?: InputMaybe<Scalars['jsonb']>;
  graded?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  studentId?: InputMaybe<Scalars['uuid']>;
  submited?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type PracticeToStudentSumFields = {
  __typename?: 'PracticeToStudentSumFields';
  grade?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "practice_to_student" */
export type PracticeToStudentSumOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** update columns of table "practice_to_student" */
export enum PracticeToStudentUpdateColumn {
  /** column name */
  CoursePracticeId = 'coursePracticeId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'gradeDetail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type PracticeToStudentUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PracticeToStudentAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<PracticeToStudentDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<PracticeToStudentDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<PracticeToStudentDeleteKeyInput>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PracticeToStudentIncInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PracticeToStudentPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeToStudentSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeToStudentBoolExp;
};

/** aggregate varPop on columns */
export type PracticeToStudentVarPopFields = {
  __typename?: 'PracticeToStudentVarPopFields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "practice_to_student" */
export type PracticeToStudentVarPopOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PracticeToStudentVarSampFields = {
  __typename?: 'PracticeToStudentVarSampFields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "practice_to_student" */
export type PracticeToStudentVarSampOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PracticeToStudentVarianceFields = {
  __typename?: 'PracticeToStudentVarianceFields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student" */
export type PracticeToStudentVarianceOrderBy = {
  grade?: InputMaybe<OrderBy>;
};

/** columns and relationships of "practice_to_student_yield" */
export type PracticeToStudentYield = {
  __typename?: 'PracticeToStudentYield';
  createdAt: Scalars['timestamptz'];
  giteaOrgAndRepo?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  practiceToStudent: PracticeToStudent;
  /** An array relationship */
  practiceToStudentGradeMetrics: Array<PracticeToStudentGradeMetric>;
  /** An aggregate relationship */
  practiceToStudentGradeMetricsAggregate: PracticeToStudentGradeMetricAggregate;
  practiceToStudentId: Scalars['uuid'];
  /** An object relationship */
  practiceYield: PracticeYield;
  practiceYieldId: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** columns and relationships of "practice_to_student_yield" */
export type PracticeToStudentYieldPracticeToStudentGradeMetricsArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

/** columns and relationships of "practice_to_student_yield" */
export type PracticeToStudentYieldPracticeToStudentGradeMetricsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

/** aggregated selection of "practice_to_student_yield" */
export type PracticeToStudentYieldAggregate = {
  __typename?: 'PracticeToStudentYieldAggregate';
  aggregate?: Maybe<PracticeToStudentYieldAggregateFields>;
  nodes: Array<PracticeToStudentYield>;
};

export type PracticeToStudentYieldAggregateBoolExp = {
  bool_and?: InputMaybe<PracticeToStudentYieldAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<PracticeToStudentYieldAggregateBoolExpBool_Or>;
  count?: InputMaybe<PracticeToStudentYieldAggregateBoolExpCount>;
};

/** aggregate fields of "practice_to_student_yield" */
export type PracticeToStudentYieldAggregateFields = {
  __typename?: 'PracticeToStudentYieldAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeToStudentYieldMaxFields>;
  min?: Maybe<PracticeToStudentYieldMinFields>;
};

/** aggregate fields of "practice_to_student_yield" */
export type PracticeToStudentYieldAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_yield" */
export type PracticeToStudentYieldAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PracticeToStudentYieldMaxOrderBy>;
  min?: InputMaybe<PracticeToStudentYieldMinOrderBy>;
};

/** input type for inserting array relation for remote table "practice_to_student_yield" */
export type PracticeToStudentYieldArrRelInsertInput = {
  data: Array<PracticeToStudentYieldInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeToStudentYieldOnConflict>;
};

/** Boolean expression to filter rows from the table "practice_to_student_yield". All fields are combined with a logical 'AND'. */
export type PracticeToStudentYieldBoolExp = {
  _and?: InputMaybe<Array<PracticeToStudentYieldBoolExp>>;
  _not?: InputMaybe<PracticeToStudentYieldBoolExp>;
  _or?: InputMaybe<Array<PracticeToStudentYieldBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  giteaOrgAndRepo?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  practiceToStudent?: InputMaybe<PracticeToStudentBoolExp>;
  practiceToStudentGradeMetrics?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
  practiceToStudentGradeMetricsAggregate?: InputMaybe<PracticeToStudentGradeMetricAggregateBoolExp>;
  practiceToStudentId?: InputMaybe<UuidComparisonExp>;
  practiceYield?: InputMaybe<PracticeYieldBoolExp>;
  practiceYieldId?: InputMaybe<UuidComparisonExp>;
  submited?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "practice_to_student_yield" */
export enum PracticeToStudentYieldConstraint {
  /** unique or primary key constraint on columns "id" */
  StudentPracticeYieldPkey = 'student_practice_yield_pkey',
  /** unique or primary key constraint on columns "practice_yield_id", "practice_to_student_id" */
  StudentPracticeYieldPracticeYieldIdPracticeToStudenKey = 'student_practice_yield_practice_yield_id_practice_to_studen_key',
}

/** input type for inserting data into table "practice_to_student_yield" */
export type PracticeToStudentYieldInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  giteaOrgAndRepo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  practiceToStudent?: InputMaybe<PracticeToStudentObjRelInsertInput>;
  practiceToStudentGradeMetrics?: InputMaybe<PracticeToStudentGradeMetricArrRelInsertInput>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
  practiceYield?: InputMaybe<PracticeYieldObjRelInsertInput>;
  practiceYieldId?: InputMaybe<Scalars['uuid']>;
  submited?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PracticeToStudentYieldMaxFields = {
  __typename?: 'PracticeToStudentYieldMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  giteaOrgAndRepo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practiceToStudentId?: Maybe<Scalars['uuid']>;
  practiceYieldId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_to_student_yield" */
export type PracticeToStudentYieldMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  giteaOrgAndRepo?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  practiceToStudentId?: InputMaybe<OrderBy>;
  practiceYieldId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeToStudentYieldMinFields = {
  __typename?: 'PracticeToStudentYieldMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  giteaOrgAndRepo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practiceToStudentId?: Maybe<Scalars['uuid']>;
  practiceYieldId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_to_student_yield" */
export type PracticeToStudentYieldMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  giteaOrgAndRepo?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  practiceToStudentId?: InputMaybe<OrderBy>;
  practiceYieldId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "practice_to_student_yield" */
export type PracticeToStudentYieldMutationResponse = {
  __typename?: 'PracticeToStudentYieldMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeToStudentYield>;
};

/** input type for inserting object relation for remote table "practice_to_student_yield" */
export type PracticeToStudentYieldObjRelInsertInput = {
  data: PracticeToStudentYieldInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeToStudentYieldOnConflict>;
};

/** on_conflict condition type for table "practice_to_student_yield" */
export type PracticeToStudentYieldOnConflict = {
  constraint: PracticeToStudentYieldConstraint;
  updateColumns?: Array<PracticeToStudentYieldUpdateColumn>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

/** Ordering options when selecting data from "practice_to_student_yield". */
export type PracticeToStudentYieldOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  giteaOrgAndRepo?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  practiceToStudent?: InputMaybe<PracticeToStudentOrderBy>;
  practiceToStudentGradeMetricsAggregate?: InputMaybe<PracticeToStudentGradeMetricAggregateOrderBy>;
  practiceToStudentId?: InputMaybe<OrderBy>;
  practiceYield?: InputMaybe<PracticeYieldOrderBy>;
  practiceYieldId?: InputMaybe<OrderBy>;
  submited?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice_to_student_yield */
export type PracticeToStudentYieldPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_student_yield" */
export enum PracticeToStudentYieldSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GiteaOrgAndRepo = 'giteaOrgAndRepo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practiceToStudentId',
  /** column name */
  PracticeYieldId = 'practiceYieldId',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value',
}

/** select "practiceToStudentYieldAggregateBoolExpBool_andArgumentsColumns" columns of table "practice_to_student_yield" */
export enum PracticeToStudentYieldSelectColumnPracticeToStudentYieldAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Submited = 'submited',
}

/** select "practiceToStudentYieldAggregateBoolExpBool_orArgumentsColumns" columns of table "practice_to_student_yield" */
export enum PracticeToStudentYieldSelectColumnPracticeToStudentYieldAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Submited = 'submited',
}

/** input type for updating data in table "practice_to_student_yield" */
export type PracticeToStudentYieldSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  giteaOrgAndRepo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
  practiceYieldId?: InputMaybe<Scalars['uuid']>;
  submited?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "practice_to_student_yield" */
export type PracticeToStudentYieldStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeToStudentYieldStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeToStudentYieldStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  giteaOrgAndRepo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  practiceToStudentId?: InputMaybe<Scalars['uuid']>;
  practiceYieldId?: InputMaybe<Scalars['uuid']>;
  submited?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "practice_to_student_yield" */
export enum PracticeToStudentYieldUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GiteaOrgAndRepo = 'giteaOrgAndRepo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practiceToStudentId',
  /** column name */
  PracticeYieldId = 'practiceYieldId',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value',
}

export type PracticeToStudentYieldUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeToStudentYieldSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeToStudentYieldBoolExp;
};

/** update columns of table "practice" */
export enum PracticeUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type PracticeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeBoolExp;
};

/** columns and relationships of "practice_yield" */
export type PracticeYield = {
  __typename?: 'PracticeYield';
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  method: PracticeYieldTypeEnum;
  name: Scalars['String'];
  /** An object relationship */
  practice: Practice;
  practiceId: Scalars['uuid'];
  /** An array relationship */
  practiceToStudentYields: Array<PracticeToStudentYield>;
  /** An aggregate relationship */
  practiceToStudentYieldsAggregate: PracticeToStudentYieldAggregate;
  /** An array relationship */
  practiceYieldExpectedOutputs: Array<PracticeYieldExpectedOutput>;
  /** An aggregate relationship */
  practiceYieldExpectedOutputsAggregate: PracticeYieldExpectedOutputAggregate;
  /** An object relationship */
  practiceYieldType: PracticeYieldType;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield" */
export type PracticeYieldMetaArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield" */
export type PracticeYieldPracticeToStudentYieldsArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

/** columns and relationships of "practice_yield" */
export type PracticeYieldPracticeToStudentYieldsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

/** columns and relationships of "practice_yield" */
export type PracticeYieldPracticeYieldExpectedOutputsArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

/** columns and relationships of "practice_yield" */
export type PracticeYieldPracticeYieldExpectedOutputsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

/** aggregated selection of "practice_yield" */
export type PracticeYieldAggregate = {
  __typename?: 'PracticeYieldAggregate';
  aggregate?: Maybe<PracticeYieldAggregateFields>;
  nodes: Array<PracticeYield>;
};

export type PracticeYieldAggregateBoolExp = {
  count?: InputMaybe<PracticeYieldAggregateBoolExpCount>;
};

/** aggregate fields of "practice_yield" */
export type PracticeYieldAggregateFields = {
  __typename?: 'PracticeYieldAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeYieldMaxFields>;
  min?: Maybe<PracticeYieldMinFields>;
};

/** aggregate fields of "practice_yield" */
export type PracticeYieldAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield" */
export type PracticeYieldAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PracticeYieldMaxOrderBy>;
  min?: InputMaybe<PracticeYieldMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PracticeYieldAppendInput = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield" */
export type PracticeYieldArrRelInsertInput = {
  data: Array<PracticeYieldInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldOnConflict>;
};

/** Boolean expression to filter rows from the table "practice_yield". All fields are combined with a logical 'AND'. */
export type PracticeYieldBoolExp = {
  _and?: InputMaybe<Array<PracticeYieldBoolExp>>;
  _not?: InputMaybe<PracticeYieldBoolExp>;
  _or?: InputMaybe<Array<PracticeYieldBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  meta?: InputMaybe<JsonbComparisonExp>;
  method?: InputMaybe<PracticeYieldTypeEnumComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  practice?: InputMaybe<PracticeBoolExp>;
  practiceId?: InputMaybe<UuidComparisonExp>;
  practiceToStudentYields?: InputMaybe<PracticeToStudentYieldBoolExp>;
  practiceToStudentYieldsAggregate?: InputMaybe<PracticeToStudentYieldAggregateBoolExp>;
  practiceYieldExpectedOutputs?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
  practiceYieldExpectedOutputsAggregate?: InputMaybe<PracticeYieldExpectedOutputAggregateBoolExp>;
  practiceYieldType?: InputMaybe<PracticeYieldTypeBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "practice_yield" */
export enum PracticeYieldConstraint {
  /** unique or primary key constraint on columns "id" */
  PracticeYieldPkey = 'practice_yield_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PracticeYieldDeleteAtPathInput = {
  meta?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PracticeYieldDeleteElemInput = {
  meta?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PracticeYieldDeleteKeyInput = {
  meta?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield_expected_output" */
export type PracticeYieldExpectedOutput = {
  __typename?: 'PracticeYieldExpectedOutput';
  codeLang?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  expected?: Maybe<Scalars['String']>;
  gitPath?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  method: PracticeYieldExpectedOutputTypesEnum;
  /** An object relationship */
  practiceYield: PracticeYield;
  /** An object relationship */
  practiceYieldExpectedOutputType: PracticeYieldExpectedOutputTypes;
  /** An array relationship */
  practiceYieldGradeMetrics: Array<PracticeYieldGradeMetric>;
  /** An aggregate relationship */
  practiceYieldGradeMetricsAggregate: PracticeYieldGradeMetricAggregate;
  practiceYieldId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputPracticeYieldGradeMetricsArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
};

/** columns and relationships of "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputPracticeYieldGradeMetricsAggregateArgs =
  {
    distinctOn?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<PracticeYieldGradeMetricOrderBy>>;
    where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
  };

/** aggregated selection of "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputAggregate = {
  __typename?: 'PracticeYieldExpectedOutputAggregate';
  aggregate?: Maybe<PracticeYieldExpectedOutputAggregateFields>;
  nodes: Array<PracticeYieldExpectedOutput>;
};

export type PracticeYieldExpectedOutputAggregateBoolExp = {
  count?: InputMaybe<PracticeYieldExpectedOutputAggregateBoolExpCount>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputAggregateFields = {
  __typename?: 'PracticeYieldExpectedOutputAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeYieldExpectedOutputMaxFields>;
  min?: Maybe<PracticeYieldExpectedOutputMinFields>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PracticeYieldExpectedOutputMaxOrderBy>;
  min?: InputMaybe<PracticeYieldExpectedOutputMinOrderBy>;
};

/** input type for inserting array relation for remote table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputArrRelInsertInput = {
  data: Array<PracticeYieldExpectedOutputInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldExpectedOutputOnConflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output". All fields are combined with a logical 'AND'. */
export type PracticeYieldExpectedOutputBoolExp = {
  _and?: InputMaybe<Array<PracticeYieldExpectedOutputBoolExp>>;
  _not?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
  _or?: InputMaybe<Array<PracticeYieldExpectedOutputBoolExp>>;
  codeLang?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expected?: InputMaybe<StringComparisonExp>;
  gitPath?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  method?: InputMaybe<PracticeYieldExpectedOutputTypesEnumComparisonExp>;
  practiceYield?: InputMaybe<PracticeYieldBoolExp>;
  practiceYieldExpectedOutputType?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
  practiceYieldGradeMetrics?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
  practiceYieldGradeMetricsAggregate?: InputMaybe<PracticeYieldGradeMetricAggregateBoolExp>;
  practiceYieldId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output" */
export enum PracticeYieldExpectedOutputConstraint {
  /** unique or primary key constraint on columns "id" */
  PracticeYieldExpectedOutputPkey = 'practice_yield_expected_output_pkey',
  /** unique or primary key constraint on columns "practice_yield_id", "git_path", "method" */
  PracticeYieldExpectedOutputPracticeYieldIdGitPathMetho = 'practice_yield_expected_output_practice_yield_id_git_path_metho',
}

/** input type for inserting data into table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputInsertInput = {
  codeLang?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expected?: InputMaybe<Scalars['String']>;
  gitPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  method?: InputMaybe<PracticeYieldExpectedOutputTypesEnum>;
  practiceYield?: InputMaybe<PracticeYieldObjRelInsertInput>;
  practiceYieldExpectedOutputType?: InputMaybe<PracticeYieldExpectedOutputTypesObjRelInsertInput>;
  practiceYieldGradeMetrics?: InputMaybe<PracticeYieldGradeMetricArrRelInsertInput>;
  practiceYieldId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PracticeYieldExpectedOutputMaxFields = {
  __typename?: 'PracticeYieldExpectedOutputMaxFields';
  codeLang?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  gitPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practiceYieldId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputMaxOrderBy = {
  codeLang?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  expected?: InputMaybe<OrderBy>;
  gitPath?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  practiceYieldId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeYieldExpectedOutputMinFields = {
  __typename?: 'PracticeYieldExpectedOutputMinFields';
  codeLang?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  gitPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practiceYieldId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputMinOrderBy = {
  codeLang?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  expected?: InputMaybe<OrderBy>;
  gitPath?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  practiceYieldId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputMutationResponse = {
  __typename?: 'PracticeYieldExpectedOutputMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeYieldExpectedOutput>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputObjRelInsertInput = {
  data: PracticeYieldExpectedOutputInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldExpectedOutputOnConflict>;
};

/** on_conflict condition type for table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputOnConflict = {
  constraint: PracticeYieldExpectedOutputConstraint;
  updateColumns?: Array<PracticeYieldExpectedOutputUpdateColumn>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

/** Ordering options when selecting data from "practice_yield_expected_output". */
export type PracticeYieldExpectedOutputOrderBy = {
  codeLang?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  expected?: InputMaybe<OrderBy>;
  gitPath?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  method?: InputMaybe<OrderBy>;
  practiceYield?: InputMaybe<PracticeYieldOrderBy>;
  practiceYieldExpectedOutputType?: InputMaybe<PracticeYieldExpectedOutputTypesOrderBy>;
  practiceYieldGradeMetricsAggregate?: InputMaybe<PracticeYieldGradeMetricAggregateOrderBy>;
  practiceYieldId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice_yield_expected_output */
export type PracticeYieldExpectedOutputPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_yield_expected_output" */
export enum PracticeYieldExpectedOutputSelectColumn {
  /** column name */
  CodeLang = 'codeLang',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'gitPath',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practiceYieldId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputSetInput = {
  codeLang?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expected?: InputMaybe<Scalars['String']>;
  gitPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  method?: InputMaybe<PracticeYieldExpectedOutputTypesEnum>;
  practiceYieldId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "practice_yield_expected_output" */
export type PracticeYieldExpectedOutputStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeYieldExpectedOutputStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeYieldExpectedOutputStreamCursorValueInput = {
  codeLang?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expected?: InputMaybe<Scalars['String']>;
  gitPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  method?: InputMaybe<PracticeYieldExpectedOutputTypesEnum>;
  practiceYieldId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypes = {
  __typename?: 'PracticeYieldExpectedOutputTypes';
  name: Scalars['String'];
  /** An array relationship */
  practiceYieldExpectedOutputs: Array<PracticeYieldExpectedOutput>;
  /** An aggregate relationship */
  practiceYieldExpectedOutputsAggregate: PracticeYieldExpectedOutputAggregate;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesPracticeYieldExpectedOutputsArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesPracticeYieldExpectedOutputsAggregateArgs =
  {
    distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
    where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
  };

/** aggregated selection of "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesAggregate = {
  __typename?: 'PracticeYieldExpectedOutputTypesAggregate';
  aggregate?: Maybe<PracticeYieldExpectedOutputTypesAggregateFields>;
  nodes: Array<PracticeYieldExpectedOutputTypes>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesAggregateFields = {
  __typename?: 'PracticeYieldExpectedOutputTypesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeYieldExpectedOutputTypesMaxFields>;
  min?: Maybe<PracticeYieldExpectedOutputTypesMinFields>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeYieldExpectedOutputTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output_types". All fields are combined with a logical 'AND'. */
export type PracticeYieldExpectedOutputTypesBoolExp = {
  _and?: InputMaybe<Array<PracticeYieldExpectedOutputTypesBoolExp>>;
  _not?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
  _or?: InputMaybe<Array<PracticeYieldExpectedOutputTypesBoolExp>>;
  name?: InputMaybe<StringComparisonExp>;
  practiceYieldExpectedOutputs?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
  practiceYieldExpectedOutputsAggregate?: InputMaybe<PracticeYieldExpectedOutputAggregateBoolExp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output_types" */
export enum PracticeYieldExpectedOutputTypesConstraint {
  /** unique or primary key constraint on columns "name" */
  PracticeGradeMetricTypePkey = 'practice_grade_metric_type_pkey',
}

export enum PracticeYieldExpectedOutputTypesEnum {
  CompareCodeFile = 'COMPARE_CODE_FILE',
  CompareGitFile = 'COMPARE_GIT_FILE',
  LinkOpen = 'LINK_OPEN',
  Manual = 'MANUAL',
  ManualGitFileReview = 'MANUAL_GIT_FILE_REVIEW',
  ShowGitFile = 'SHOW_GIT_FILE',
  ShowGitLog = 'SHOW_GIT_LOG',
}

/** Boolean expression to compare columns of type "PracticeYieldExpectedOutputTypesEnum". All fields are combined with logical 'AND'. */
export type PracticeYieldExpectedOutputTypesEnumComparisonExp = {
  _eq?: InputMaybe<PracticeYieldExpectedOutputTypesEnum>;
  _in?: InputMaybe<Array<PracticeYieldExpectedOutputTypesEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<PracticeYieldExpectedOutputTypesEnum>;
  _nin?: InputMaybe<Array<PracticeYieldExpectedOutputTypesEnum>>;
};

/** input type for inserting data into table "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesInsertInput = {
  name?: InputMaybe<Scalars['String']>;
  practiceYieldExpectedOutputs?: InputMaybe<PracticeYieldExpectedOutputArrRelInsertInput>;
};

/** aggregate max on columns */
export type PracticeYieldExpectedOutputTypesMaxFields = {
  __typename?: 'PracticeYieldExpectedOutputTypesMaxFields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PracticeYieldExpectedOutputTypesMinFields = {
  __typename?: 'PracticeYieldExpectedOutputTypesMinFields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesMutationResponse = {
  __typename?: 'PracticeYieldExpectedOutputTypesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeYieldExpectedOutputTypes>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesObjRelInsertInput = {
  data: PracticeYieldExpectedOutputTypesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldExpectedOutputTypesOnConflict>;
};

/** on_conflict condition type for table "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesOnConflict = {
  constraint: PracticeYieldExpectedOutputTypesConstraint;
  updateColumns?: Array<PracticeYieldExpectedOutputTypesUpdateColumn>;
  where?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
};

/** Ordering options when selecting data from "practice_yield_expected_output_types". */
export type PracticeYieldExpectedOutputTypesOrderBy = {
  name?: InputMaybe<OrderBy>;
  practiceYieldExpectedOutputsAggregate?: InputMaybe<PracticeYieldExpectedOutputAggregateOrderBy>;
};

/** primary key columns input for table: practice_yield_expected_output_types */
export type PracticeYieldExpectedOutputTypesPkColumnsInput = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_expected_output_types" */
export enum PracticeYieldExpectedOutputTypesSelectColumn {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesSetInput = {
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "practice_yield_expected_output_types" */
export type PracticeYieldExpectedOutputTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeYieldExpectedOutputTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeYieldExpectedOutputTypesStreamCursorValueInput = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "practice_yield_expected_output_types" */
export enum PracticeYieldExpectedOutputTypesUpdateColumn {
  /** column name */
  Name = 'name',
}

export type PracticeYieldExpectedOutputTypesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeYieldExpectedOutputTypesSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeYieldExpectedOutputTypesBoolExp;
};

/** update columns of table "practice_yield_expected_output" */
export enum PracticeYieldExpectedOutputUpdateColumn {
  /** column name */
  CodeLang = 'codeLang',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'gitPath',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practiceYieldId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type PracticeYieldExpectedOutputUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeYieldExpectedOutputSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeYieldExpectedOutputBoolExp;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type PracticeYieldGradeMetric = {
  __typename?: 'PracticeYieldGradeMetric';
  createdAt: Scalars['timestamptz'];
  expectedYieldId: Scalars['uuid'];
  feedbacks: Scalars['jsonb'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  points: Scalars['Int'];
  /** An array relationship */
  practiceToStudentGradeMetrics: Array<PracticeToStudentGradeMetric>;
  /** An aggregate relationship */
  practiceToStudentGradeMetricsAggregate: PracticeToStudentGradeMetricAggregate;
  /** An object relationship */
  practiceYieldExpectedOutput: PracticeYieldExpectedOutput;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricFeedbacksArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricPracticeToStudentGradeMetricsArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricPracticeToStudentGradeMetricsAggregateArgs =
  {
    distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
    where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
  };

/** aggregated selection of "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricAggregate = {
  __typename?: 'PracticeYieldGradeMetricAggregate';
  aggregate?: Maybe<PracticeYieldGradeMetricAggregateFields>;
  nodes: Array<PracticeYieldGradeMetric>;
};

export type PracticeYieldGradeMetricAggregateBoolExp = {
  count?: InputMaybe<PracticeYieldGradeMetricAggregateBoolExpCount>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricAggregateFields = {
  __typename?: 'PracticeYieldGradeMetricAggregateFields';
  avg?: Maybe<PracticeYieldGradeMetricAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<PracticeYieldGradeMetricMaxFields>;
  min?: Maybe<PracticeYieldGradeMetricMinFields>;
  stddev?: Maybe<PracticeYieldGradeMetricStddevFields>;
  stddevPop?: Maybe<PracticeYieldGradeMetricStddevPopFields>;
  stddevSamp?: Maybe<PracticeYieldGradeMetricStddevSampFields>;
  sum?: Maybe<PracticeYieldGradeMetricSumFields>;
  varPop?: Maybe<PracticeYieldGradeMetricVarPopFields>;
  varSamp?: Maybe<PracticeYieldGradeMetricVarSampFields>;
  variance?: Maybe<PracticeYieldGradeMetricVarianceFields>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricAggregateOrderBy = {
  avg?: InputMaybe<PracticeYieldGradeMetricAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PracticeYieldGradeMetricMaxOrderBy>;
  min?: InputMaybe<PracticeYieldGradeMetricMinOrderBy>;
  stddev?: InputMaybe<PracticeYieldGradeMetricStddevOrderBy>;
  stddevPop?: InputMaybe<PracticeYieldGradeMetricStddevPopOrderBy>;
  stddevSamp?: InputMaybe<PracticeYieldGradeMetricStddevSampOrderBy>;
  sum?: InputMaybe<PracticeYieldGradeMetricSumOrderBy>;
  varPop?: InputMaybe<PracticeYieldGradeMetricVarPopOrderBy>;
  varSamp?: InputMaybe<PracticeYieldGradeMetricVarSampOrderBy>;
  variance?: InputMaybe<PracticeYieldGradeMetricVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PracticeYieldGradeMetricAppendInput = {
  feedbacks?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricArrRelInsertInput = {
  data: Array<PracticeYieldGradeMetricInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldGradeMetricOnConflict>;
};

/** aggregate avg on columns */
export type PracticeYieldGradeMetricAvgFields = {
  __typename?: 'PracticeYieldGradeMetricAvgFields';
  points?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricAvgOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "practice_yield_grade_metric". All fields are combined with a logical 'AND'. */
export type PracticeYieldGradeMetricBoolExp = {
  _and?: InputMaybe<Array<PracticeYieldGradeMetricBoolExp>>;
  _not?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
  _or?: InputMaybe<Array<PracticeYieldGradeMetricBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expectedYieldId?: InputMaybe<UuidComparisonExp>;
  feedbacks?: InputMaybe<JsonbComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  points?: InputMaybe<IntComparisonExp>;
  practiceToStudentGradeMetrics?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
  practiceToStudentGradeMetricsAggregate?: InputMaybe<PracticeToStudentGradeMetricAggregateBoolExp>;
  practiceYieldExpectedOutput?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "practice_yield_grade_metric" */
export enum PracticeYieldGradeMetricConstraint {
  /** unique or primary key constraint on columns "id" */
  PracticeGradeMetricPkey = 'practice_grade_metric_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PracticeYieldGradeMetricDeleteAtPathInput = {
  feedbacks?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PracticeYieldGradeMetricDeleteElemInput = {
  feedbacks?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PracticeYieldGradeMetricDeleteKeyInput = {
  feedbacks?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricIncInput = {
  points?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expectedYieldId?: InputMaybe<Scalars['uuid']>;
  feedbacks?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  practiceToStudentGradeMetrics?: InputMaybe<PracticeToStudentGradeMetricArrRelInsertInput>;
  practiceYieldExpectedOutput?: InputMaybe<PracticeYieldExpectedOutputObjRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PracticeYieldGradeMetricMaxFields = {
  __typename?: 'PracticeYieldGradeMetricMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expectedYieldId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expectedYieldId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  points?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeYieldGradeMetricMinFields = {
  __typename?: 'PracticeYieldGradeMetricMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expectedYieldId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expectedYieldId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  points?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricMutationResponse = {
  __typename?: 'PracticeYieldGradeMetricMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeYieldGradeMetric>;
};

/** input type for inserting object relation for remote table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricObjRelInsertInput = {
  data: PracticeYieldGradeMetricInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldGradeMetricOnConflict>;
};

/** on_conflict condition type for table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricOnConflict = {
  constraint: PracticeYieldGradeMetricConstraint;
  updateColumns?: Array<PracticeYieldGradeMetricUpdateColumn>;
  where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
};

/** Ordering options when selecting data from "practice_yield_grade_metric". */
export type PracticeYieldGradeMetricOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expectedYieldId?: InputMaybe<OrderBy>;
  feedbacks?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  points?: InputMaybe<OrderBy>;
  practiceToStudentGradeMetricsAggregate?: InputMaybe<PracticeToStudentGradeMetricAggregateOrderBy>;
  practiceYieldExpectedOutput?: InputMaybe<PracticeYieldExpectedOutputOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice_yield_grade_metric */
export type PracticeYieldGradeMetricPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PracticeYieldGradeMetricPrependInput = {
  feedbacks?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield_grade_metric" */
export enum PracticeYieldGradeMetricSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpectedYieldId = 'expectedYieldId',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expectedYieldId?: InputMaybe<Scalars['uuid']>;
  feedbacks?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type PracticeYieldGradeMetricStddevFields = {
  __typename?: 'PracticeYieldGradeMetricStddevFields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricStddevOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PracticeYieldGradeMetricStddevPopFields = {
  __typename?: 'PracticeYieldGradeMetricStddevPopFields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricStddevPopOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PracticeYieldGradeMetricStddevSampFields = {
  __typename?: 'PracticeYieldGradeMetricStddevSampFields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricStddevSampOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeYieldGradeMetricStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeYieldGradeMetricStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expectedYieldId?: InputMaybe<Scalars['uuid']>;
  feedbacks?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type PracticeYieldGradeMetricSumFields = {
  __typename?: 'PracticeYieldGradeMetricSumFields';
  points?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricSumOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** update columns of table "practice_yield_grade_metric" */
export enum PracticeYieldGradeMetricUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpectedYieldId = 'expectedYieldId',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type PracticeYieldGradeMetricUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PracticeYieldGradeMetricAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<PracticeYieldGradeMetricDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<PracticeYieldGradeMetricDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<PracticeYieldGradeMetricDeleteKeyInput>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PracticeYieldGradeMetricIncInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PracticeYieldGradeMetricPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeYieldGradeMetricSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeYieldGradeMetricBoolExp;
};

/** aggregate varPop on columns */
export type PracticeYieldGradeMetricVarPopFields = {
  __typename?: 'PracticeYieldGradeMetricVarPopFields';
  points?: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricVarPopOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PracticeYieldGradeMetricVarSampFields = {
  __typename?: 'PracticeYieldGradeMetricVarSampFields';
  points?: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricVarSampOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PracticeYieldGradeMetricVarianceFields = {
  __typename?: 'PracticeYieldGradeMetricVarianceFields';
  points?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_yield_grade_metric" */
export type PracticeYieldGradeMetricVarianceOrderBy = {
  points?: InputMaybe<OrderBy>;
};

/** input type for inserting data into table "practice_yield" */
export type PracticeYieldInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  method?: InputMaybe<PracticeYieldTypeEnum>;
  name?: InputMaybe<Scalars['String']>;
  practice?: InputMaybe<PracticeObjRelInsertInput>;
  practiceId?: InputMaybe<Scalars['uuid']>;
  practiceToStudentYields?: InputMaybe<PracticeToStudentYieldArrRelInsertInput>;
  practiceYieldExpectedOutputs?: InputMaybe<PracticeYieldExpectedOutputArrRelInsertInput>;
  practiceYieldType?: InputMaybe<PracticeYieldTypeObjRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PracticeYieldMaxFields = {
  __typename?: 'PracticeYieldMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practiceId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield" */
export type PracticeYieldMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  practiceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PracticeYieldMinFields = {
  __typename?: 'PracticeYieldMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practiceId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield" */
export type PracticeYieldMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  practiceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "practice_yield" */
export type PracticeYieldMutationResponse = {
  __typename?: 'PracticeYieldMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeYield>;
};

/** input type for inserting object relation for remote table "practice_yield" */
export type PracticeYieldObjRelInsertInput = {
  data: PracticeYieldInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldOnConflict>;
};

/** on_conflict condition type for table "practice_yield" */
export type PracticeYieldOnConflict = {
  constraint: PracticeYieldConstraint;
  updateColumns?: Array<PracticeYieldUpdateColumn>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

/** Ordering options when selecting data from "practice_yield". */
export type PracticeYieldOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  meta?: InputMaybe<OrderBy>;
  method?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  practice?: InputMaybe<PracticeOrderBy>;
  practiceId?: InputMaybe<OrderBy>;
  practiceToStudentYieldsAggregate?: InputMaybe<PracticeToStudentYieldAggregateOrderBy>;
  practiceYieldExpectedOutputsAggregate?: InputMaybe<PracticeYieldExpectedOutputAggregateOrderBy>;
  practiceYieldType?: InputMaybe<PracticeYieldTypeOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: practice_yield */
export type PracticeYieldPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PracticeYieldPrependInput = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield" */
export enum PracticeYieldSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Method = 'method',
  /** column name */
  Name = 'name',
  /** column name */
  PracticeId = 'practiceId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "practice_yield" */
export type PracticeYieldSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  method?: InputMaybe<PracticeYieldTypeEnum>;
  name?: InputMaybe<Scalars['String']>;
  practiceId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "practice_yield" */
export type PracticeYieldStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeYieldStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeYieldStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  method?: InputMaybe<PracticeYieldTypeEnum>;
  name?: InputMaybe<Scalars['String']>;
  practiceId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_type" */
export type PracticeYieldType = {
  __typename?: 'PracticeYieldType';
  name: Scalars['String'];
  /** An array relationship */
  practiceYields: Array<PracticeYield>;
  /** An aggregate relationship */
  practiceYieldsAggregate: PracticeYieldAggregate;
};

/** columns and relationships of "practice_yield_type" */
export type PracticeYieldTypePracticeYieldsArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

/** columns and relationships of "practice_yield_type" */
export type PracticeYieldTypePracticeYieldsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

/** aggregated selection of "practice_yield_type" */
export type PracticeYieldTypeAggregate = {
  __typename?: 'PracticeYieldTypeAggregate';
  aggregate?: Maybe<PracticeYieldTypeAggregateFields>;
  nodes: Array<PracticeYieldType>;
};

/** aggregate fields of "practice_yield_type" */
export type PracticeYieldTypeAggregateFields = {
  __typename?: 'PracticeYieldTypeAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PracticeYieldTypeMaxFields>;
  min?: Maybe<PracticeYieldTypeMinFields>;
};

/** aggregate fields of "practice_yield_type" */
export type PracticeYieldTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PracticeYieldTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "practice_yield_type". All fields are combined with a logical 'AND'. */
export type PracticeYieldTypeBoolExp = {
  _and?: InputMaybe<Array<PracticeYieldTypeBoolExp>>;
  _not?: InputMaybe<PracticeYieldTypeBoolExp>;
  _or?: InputMaybe<Array<PracticeYieldTypeBoolExp>>;
  name?: InputMaybe<StringComparisonExp>;
  practiceYields?: InputMaybe<PracticeYieldBoolExp>;
  practiceYieldsAggregate?: InputMaybe<PracticeYieldAggregateBoolExp>;
};

/** unique or primary key constraints on table "practice_yield_type" */
export enum PracticeYieldTypeConstraint {
  /** unique or primary key constraint on columns "name" */
  PracticeYieldTypePkey = 'practice_yield_type_pkey',
}

export enum PracticeYieldTypeEnum {
  Blob = 'BLOB',
  Code = 'CODE',
  GitRepo = 'GIT_REPO',
  Url = 'URL',
}

/** Boolean expression to compare columns of type "PracticeYieldTypeEnum". All fields are combined with logical 'AND'. */
export type PracticeYieldTypeEnumComparisonExp = {
  _eq?: InputMaybe<PracticeYieldTypeEnum>;
  _in?: InputMaybe<Array<PracticeYieldTypeEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<PracticeYieldTypeEnum>;
  _nin?: InputMaybe<Array<PracticeYieldTypeEnum>>;
};

/** input type for inserting data into table "practice_yield_type" */
export type PracticeYieldTypeInsertInput = {
  name?: InputMaybe<Scalars['String']>;
  practiceYields?: InputMaybe<PracticeYieldArrRelInsertInput>;
};

/** aggregate max on columns */
export type PracticeYieldTypeMaxFields = {
  __typename?: 'PracticeYieldTypeMaxFields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PracticeYieldTypeMinFields = {
  __typename?: 'PracticeYieldTypeMinFields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "practice_yield_type" */
export type PracticeYieldTypeMutationResponse = {
  __typename?: 'PracticeYieldTypeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PracticeYieldType>;
};

/** input type for inserting object relation for remote table "practice_yield_type" */
export type PracticeYieldTypeObjRelInsertInput = {
  data: PracticeYieldTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PracticeYieldTypeOnConflict>;
};

/** on_conflict condition type for table "practice_yield_type" */
export type PracticeYieldTypeOnConflict = {
  constraint: PracticeYieldTypeConstraint;
  updateColumns?: Array<PracticeYieldTypeUpdateColumn>;
  where?: InputMaybe<PracticeYieldTypeBoolExp>;
};

/** Ordering options when selecting data from "practice_yield_type". */
export type PracticeYieldTypeOrderBy = {
  name?: InputMaybe<OrderBy>;
  practiceYieldsAggregate?: InputMaybe<PracticeYieldAggregateOrderBy>;
};

/** primary key columns input for table: practice_yield_type */
export type PracticeYieldTypePkColumnsInput = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_type" */
export enum PracticeYieldTypeSelectColumn {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_type" */
export type PracticeYieldTypeSetInput = {
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "practice_yield_type" */
export type PracticeYieldTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PracticeYieldTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PracticeYieldTypeStreamCursorValueInput = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "practice_yield_type" */
export enum PracticeYieldTypeUpdateColumn {
  /** column name */
  Name = 'name',
}

export type PracticeYieldTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeYieldTypeSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeYieldTypeBoolExp;
};

/** update columns of table "practice_yield" */
export enum PracticeYieldUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Method = 'method',
  /** column name */
  Name = 'name',
  /** column name */
  PracticeId = 'practiceId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type PracticeYieldUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PracticeYieldAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<PracticeYieldDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<PracticeYieldDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<PracticeYieldDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PracticeYieldPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PracticeYieldSetInput>;
  /** filter the rows which have to be updated */
  where: PracticeYieldBoolExp;
};

export type RefreshGradesOutput = {
  __typename?: 'RefreshGradesOutput';
  affected_rows: Scalars['Int'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'Roles';
  /** An array relationship */
  allowedRoles: Array<AllowedRoles>;
  /** An aggregate relationship */
  allowedRolesAggregate: AllowedRolesAggregate;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  usersAggregate: UserAggregate;
  value: Scalars['String'];
};

/** columns and relationships of "roles" */
export type RolesAllowedRolesArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

/** columns and relationships of "roles" */
export type RolesAllowedRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
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
  allowedRoles?: InputMaybe<AllowedRolesBoolExp>;
  allowedRolesAggregate?: InputMaybe<AllowedRolesAggregateBoolExp>;
  description?: InputMaybe<StringComparisonExp>;
  users?: InputMaybe<UserBoolExp>;
  usersAggregate?: InputMaybe<UserAggregateBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "roles" */
export enum RolesConstraint {
  /** unique or primary key constraint on columns "value" */
  RolesPkey = 'roles_pkey',
}

export enum RolesEnum {
  Student = 'STUDENT',
  Teacher = 'TEACHER',
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
  allowedRoles?: InputMaybe<AllowedRolesArrRelInsertInput>;
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
  allowedRolesAggregate?: InputMaybe<AllowedRolesAggregateOrderBy>;
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
  Value = 'value',
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
  Value = 'value',
}

export type RolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RolesSetInput>;
  /** filter the rows which have to be updated */
  where: RolesBoolExp;
};

export type SendStudentClaimMailOutput = {
  __typename?: 'SendStudentClaimMailOutput';
  nmbMailSent: Scalars['Int'];
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

/** columns and relationships of "student" */
export type Student = {
  __typename?: 'Student';
  claimToken?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  lastName?: Maybe<Scalars['String']>;
  /** An array relationship */
  practiceToStudents: Array<PracticeToStudent>;
  /** An aggregate relationship */
  practiceToStudentsAggregate: PracticeToStudentAggregate;
  /** An array relationship */
  studentToCourses: Array<StudentToCourse>;
  /** An aggregate relationship */
  studentToCoursesAggregate: StudentToCourseAggregate;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "student" */
export type StudentPracticeToStudentsArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

/** columns and relationships of "student" */
export type StudentPracticeToStudentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

/** columns and relationships of "student" */
export type StudentStudentToCoursesArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

/** columns and relationships of "student" */
export type StudentStudentToCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

/** aggregated selection of "student" */
export type StudentAggregate = {
  __typename?: 'StudentAggregate';
  aggregate?: Maybe<StudentAggregateFields>;
  nodes: Array<Student>;
};

/** aggregate fields of "student" */
export type StudentAggregateFields = {
  __typename?: 'StudentAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<StudentMaxFields>;
  min?: Maybe<StudentMinFields>;
};

/** aggregate fields of "student" */
export type StudentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StudentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'. */
export type StudentBoolExp = {
  _and?: InputMaybe<Array<StudentBoolExp>>;
  _not?: InputMaybe<StudentBoolExp>;
  _or?: InputMaybe<Array<StudentBoolExp>>;
  claimToken?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  firstName?: InputMaybe<StringComparisonExp>;
  full_name?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  lastName?: InputMaybe<StringComparisonExp>;
  practiceToStudents?: InputMaybe<PracticeToStudentBoolExp>;
  practiceToStudentsAggregate?: InputMaybe<PracticeToStudentAggregateBoolExp>;
  studentToCourses?: InputMaybe<StudentToCourseBoolExp>;
  studentToCoursesAggregate?: InputMaybe<StudentToCourseAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "student" */
export enum StudentConstraint {
  /** unique or primary key constraint on columns "claim_token" */
  StudentClaimTokenKey = 'student_claim_token_key',
  /** unique or primary key constraint on columns "email" */
  StudentEmailKey = 'student_email_key',
  /** unique or primary key constraint on columns "id" */
  StudentPkey = 'student_pkey',
  /** unique or primary key constraint on columns "user_id" */
  StudentUserIdKey = 'student_user_id_key',
}

/** input type for inserting data into table "student" */
export type StudentInsertInput = {
  claimToken?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  practiceToStudents?: InputMaybe<PracticeToStudentArrRelInsertInput>;
  studentToCourses?: InputMaybe<StudentToCourseArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type StudentMaxFields = {
  __typename?: 'StudentMaxFields';
  claimToken?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type StudentMinFields = {
  __typename?: 'StudentMinFields';
  claimToken?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "student" */
export type StudentMutationResponse = {
  __typename?: 'StudentMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Student>;
};

/** input type for inserting object relation for remote table "student" */
export type StudentObjRelInsertInput = {
  data: StudentInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<StudentOnConflict>;
};

/** on_conflict condition type for table "student" */
export type StudentOnConflict = {
  constraint: StudentConstraint;
  updateColumns?: Array<StudentUpdateColumn>;
  where?: InputMaybe<StudentBoolExp>;
};

/** Ordering options when selecting data from "student". */
export type StudentOrderBy = {
  claimToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  firstName?: InputMaybe<OrderBy>;
  full_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  practiceToStudentsAggregate?: InputMaybe<PracticeToStudentAggregateOrderBy>;
  studentToCoursesAggregate?: InputMaybe<StudentToCourseAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: student */
export type StudentPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "student" */
export enum StudentSelectColumn {
  /** column name */
  ClaimToken = 'claimToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "student" */
export type StudentSetInput = {
  claimToken?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "student" */
export type StudentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: StudentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type StudentStreamCursorValueInput = {
  claimToken?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** columns and relationships of "student_to_course" */
export type StudentToCourse = {
  __typename?: 'StudentToCourse';
  /** An object relationship */
  course: Course;
  courseId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  student: Student;
  studentId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "student_to_course" */
export type StudentToCourseAggregate = {
  __typename?: 'StudentToCourseAggregate';
  aggregate?: Maybe<StudentToCourseAggregateFields>;
  nodes: Array<StudentToCourse>;
};

export type StudentToCourseAggregateBoolExp = {
  count?: InputMaybe<StudentToCourseAggregateBoolExpCount>;
};

/** aggregate fields of "student_to_course" */
export type StudentToCourseAggregateFields = {
  __typename?: 'StudentToCourseAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<StudentToCourseMaxFields>;
  min?: Maybe<StudentToCourseMinFields>;
};

/** aggregate fields of "student_to_course" */
export type StudentToCourseAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student_to_course" */
export type StudentToCourseAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<StudentToCourseMaxOrderBy>;
  min?: InputMaybe<StudentToCourseMinOrderBy>;
};

/** input type for inserting array relation for remote table "student_to_course" */
export type StudentToCourseArrRelInsertInput = {
  data: Array<StudentToCourseInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<StudentToCourseOnConflict>;
};

/** Boolean expression to filter rows from the table "student_to_course". All fields are combined with a logical 'AND'. */
export type StudentToCourseBoolExp = {
  _and?: InputMaybe<Array<StudentToCourseBoolExp>>;
  _not?: InputMaybe<StudentToCourseBoolExp>;
  _or?: InputMaybe<Array<StudentToCourseBoolExp>>;
  course?: InputMaybe<CourseBoolExp>;
  courseId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  student?: InputMaybe<StudentBoolExp>;
  studentId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "student_to_course" */
export enum StudentToCourseConstraint {
  /** unique or primary key constraint on columns "course_id", "student_id" */
  StudentToPromotionPkey = 'student_to_promotion_pkey',
  /** unique or primary key constraint on columns "course_id", "student_id" */
  StudentToPromotionPromotionIdStudentIdKey = 'student_to_promotion_promotion_id_student_id_key',
}

/** input type for inserting data into table "student_to_course" */
export type StudentToCourseInsertInput = {
  course?: InputMaybe<CourseObjRelInsertInput>;
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  student?: InputMaybe<StudentObjRelInsertInput>;
  studentId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type StudentToCourseMaxFields = {
  __typename?: 'StudentToCourseMaxFields';
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  studentId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "student_to_course" */
export type StudentToCourseMaxOrderBy = {
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type StudentToCourseMinFields = {
  __typename?: 'StudentToCourseMinFields';
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  studentId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "student_to_course" */
export type StudentToCourseMinOrderBy = {
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "student_to_course" */
export type StudentToCourseMutationResponse = {
  __typename?: 'StudentToCourseMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StudentToCourse>;
};

/** on_conflict condition type for table "student_to_course" */
export type StudentToCourseOnConflict = {
  constraint: StudentToCourseConstraint;
  updateColumns?: Array<StudentToCourseUpdateColumn>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

/** Ordering options when selecting data from "student_to_course". */
export type StudentToCourseOrderBy = {
  course?: InputMaybe<CourseOrderBy>;
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  student?: InputMaybe<StudentOrderBy>;
  studentId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: student_to_course */
export type StudentToCoursePkColumnsInput = {
  courseId: Scalars['uuid'];
  studentId: Scalars['uuid'];
};

/** select columns of table "student_to_course" */
export enum StudentToCourseSelectColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "student_to_course" */
export type StudentToCourseSetInput = {
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  studentId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "student_to_course" */
export type StudentToCourseStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: StudentToCourseStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type StudentToCourseStreamCursorValueInput = {
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  studentId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "student_to_course" */
export enum StudentToCourseUpdateColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type StudentToCourseUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StudentToCourseSetInput>;
  /** filter the rows which have to be updated */
  where: StudentToCourseBoolExp;
};

/** update columns of table "student" */
export enum StudentUpdateColumn {
  /** column name */
  ClaimToken = 'claimToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

export type StudentUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StudentSetInput>;
  /** filter the rows which have to be updated */
  where: StudentBoolExp;
};

export type SubmitHandoffOutput = {
  __typename?: 'SubmitHandoffOutput';
  status: Scalars['String'];
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
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accountsAggregate: AccountsAggregate;
  /** An array relationship */
  allowedRoles: Array<AllowedRoles>;
  /** An aggregate relationship */
  allowedRolesAggregate: AllowedRolesAggregate;
  createdAt: Scalars['timestamptz'];
  defaultRole: RolesEnum;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  role: Roles;
  /** An object relationship */
  student?: Maybe<Student>;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "user" */
export type UserAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};

/** columns and relationships of "user" */
export type UserAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};

/** columns and relationships of "user" */
export type UserAllowedRolesArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

/** columns and relationships of "user" */
export type UserAllowedRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

export type UserAggregateBoolExp = {
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
  accounts?: InputMaybe<AccountsBoolExp>;
  accountsAggregate?: InputMaybe<AccountsAggregateBoolExp>;
  allowedRoles?: InputMaybe<AllowedRolesBoolExp>;
  allowedRolesAggregate?: InputMaybe<AllowedRolesAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  defaultRole?: InputMaybe<RolesEnumComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  emailVerified?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  role?: InputMaybe<RolesBoolExp>;
  student?: InputMaybe<StudentBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  accounts?: InputMaybe<AccountsArrRelInsertInput>;
  allowedRoles?: InputMaybe<AllowedRolesArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RolesObjRelInsertInput>;
  student?: InputMaybe<StudentObjRelInsertInput>;
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
  accountsAggregate?: InputMaybe<AccountsAggregateOrderBy>;
  allowedRolesAggregate?: InputMaybe<AllowedRolesAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  role?: InputMaybe<RolesOrderBy>;
  student?: InputMaybe<StudentOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
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
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<RolesEnum>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
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
  UpdatedAt = 'updatedAt',
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

/** columns and relationships of "verification_requests" */
export type VerificationRequests = {
  __typename?: 'VerificationRequests';
  createdAt: Scalars['timestamptz'];
  expires?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "verification_requests" */
export type VerificationRequestsAggregate = {
  __typename?: 'VerificationRequestsAggregate';
  aggregate?: Maybe<VerificationRequestsAggregateFields>;
  nodes: Array<VerificationRequests>;
};

/** aggregate fields of "verification_requests" */
export type VerificationRequestsAggregateFields = {
  __typename?: 'VerificationRequestsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<VerificationRequestsMaxFields>;
  min?: Maybe<VerificationRequestsMinFields>;
};

/** aggregate fields of "verification_requests" */
export type VerificationRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VerificationRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type VerificationRequestsBoolExp = {
  _and?: InputMaybe<Array<VerificationRequestsBoolExp>>;
  _not?: InputMaybe<VerificationRequestsBoolExp>;
  _or?: InputMaybe<Array<VerificationRequestsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expires?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  identifier?: InputMaybe<StringComparisonExp>;
  token?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum VerificationRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  VerificationRequestsPkey = 'verification_requests_pkey',
  /** unique or primary key constraint on columns "token" */
  VerificationRequestsTokenKey = 'verification_requests_token_key',
}

/** input type for inserting data into table "verification_requests" */
export type VerificationRequestsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type VerificationRequestsMaxFields = {
  __typename?: 'VerificationRequestsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type VerificationRequestsMinFields = {
  __typename?: 'VerificationRequestsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verification_requests" */
export type VerificationRequestsMutationResponse = {
  __typename?: 'VerificationRequestsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VerificationRequests>;
};

/** on_conflict condition type for table "verification_requests" */
export type VerificationRequestsOnConflict = {
  constraint: VerificationRequestsConstraint;
  updateColumns?: Array<VerificationRequestsUpdateColumn>;
  where?: InputMaybe<VerificationRequestsBoolExp>;
};

/** Ordering options when selecting data from "verification_requests". */
export type VerificationRequestsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  identifier?: InputMaybe<OrderBy>;
  token?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: verification_requests */
export type VerificationRequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "verification_requests" */
export enum VerificationRequestsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "verification_requests" */
export type VerificationRequestsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "verification_requests" */
export type VerificationRequestsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: VerificationRequestsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VerificationRequestsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verification_requests" */
export enum VerificationRequestsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
}

export type VerificationRequestsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VerificationRequestsSetInput>;
  /** filter the rows which have to be updated */
  where: VerificationRequestsBoolExp;
};

export type YieldForHandoff = {
  value: Scalars['String'];
  yieldId: Scalars['uuid'];
};

export type AccountsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AccountsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AccountsBoolExp>;
  predicate: IntComparisonExp;
};

export type AllowedRolesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AllowedRolesBoolExp>;
  predicate: IntComparisonExp;
};

export type LinkStudentToUserOutput = {
  __typename?: 'linkStudentToUserOutput';
  ok: Scalars['Boolean'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  deleteAccounts?: Maybe<AccountsMutationResponse>;
  /** delete single row from the table: "accounts" */
  deleteAccountsByPk?: Maybe<Accounts>;
  /** delete data from the table: "allowed_roles" */
  deleteAllowedRoles?: Maybe<AllowedRolesMutationResponse>;
  /** delete single row from the table: "allowed_roles" */
  deleteAllowedRolesByPk?: Maybe<AllowedRoles>;
  /** delete data from the table: "course" */
  deleteCourse?: Maybe<CourseMutationResponse>;
  /** delete single row from the table: "course" */
  deleteCourseByPk?: Maybe<Course>;
  /** delete data from the table: "practice" */
  deletePractice?: Maybe<PracticeMutationResponse>;
  /** delete single row from the table: "practice" */
  deletePracticeByPk?: Maybe<Practice>;
  /** delete data from the table: "practice_to_course" */
  deletePracticeToCourse?: Maybe<PracticeToCourseMutationResponse>;
  /** delete single row from the table: "practice_to_course" */
  deletePracticeToCourseByPk?: Maybe<PracticeToCourse>;
  /** delete data from the table: "practice_to_student" */
  deletePracticeToStudent?: Maybe<PracticeToStudentMutationResponse>;
  /** delete single row from the table: "practice_to_student" */
  deletePracticeToStudentByPk?: Maybe<PracticeToStudent>;
  /** delete data from the table: "practice_to_student_feedback" */
  deletePracticeToStudentFeedback?: Maybe<PracticeToStudentFeedbackMutationResponse>;
  /** delete data from the table: "practice_to_student_grade" */
  deletePracticeToStudentGrade?: Maybe<PracticeToStudentGradeMutationResponse>;
  /** delete data from the table: "practice_to_student_grade_metric" */
  deletePracticeToStudentGradeMetric?: Maybe<PracticeToStudentGradeMetricMutationResponse>;
  /** delete single row from the table: "practice_to_student_grade_metric" */
  deletePracticeToStudentGradeMetricByPk?: Maybe<PracticeToStudentGradeMetric>;
  /** delete data from the table: "practice_to_student_yield" */
  deletePracticeToStudentYield?: Maybe<PracticeToStudentYieldMutationResponse>;
  /** delete single row from the table: "practice_to_student_yield" */
  deletePracticeToStudentYieldByPk?: Maybe<PracticeToStudentYield>;
  /** delete data from the table: "practice_yield" */
  deletePracticeYield?: Maybe<PracticeYieldMutationResponse>;
  /** delete single row from the table: "practice_yield" */
  deletePracticeYieldByPk?: Maybe<PracticeYield>;
  /** delete data from the table: "practice_yield_expected_output" */
  deletePracticeYieldExpectedOutput?: Maybe<PracticeYieldExpectedOutputMutationResponse>;
  /** delete single row from the table: "practice_yield_expected_output" */
  deletePracticeYieldExpectedOutputByPk?: Maybe<PracticeYieldExpectedOutput>;
  /** delete data from the table: "practice_yield_expected_output_types" */
  deletePracticeYieldExpectedOutputTypes?: Maybe<PracticeYieldExpectedOutputTypesMutationResponse>;
  /** delete single row from the table: "practice_yield_expected_output_types" */
  deletePracticeYieldExpectedOutputTypesByPk?: Maybe<PracticeYieldExpectedOutputTypes>;
  /** delete data from the table: "practice_yield_grade_metric" */
  deletePracticeYieldGradeMetric?: Maybe<PracticeYieldGradeMetricMutationResponse>;
  /** delete single row from the table: "practice_yield_grade_metric" */
  deletePracticeYieldGradeMetricByPk?: Maybe<PracticeYieldGradeMetric>;
  /** delete data from the table: "practice_yield_type" */
  deletePracticeYieldType?: Maybe<PracticeYieldTypeMutationResponse>;
  /** delete single row from the table: "practice_yield_type" */
  deletePracticeYieldTypeByPk?: Maybe<PracticeYieldType>;
  /** delete data from the table: "roles" */
  deleteRoles?: Maybe<RolesMutationResponse>;
  /** delete single row from the table: "roles" */
  deleteRolesByPk?: Maybe<Roles>;
  /** delete data from the table: "student" */
  deleteStudent?: Maybe<StudentMutationResponse>;
  /** delete single row from the table: "student" */
  deleteStudentByPk?: Maybe<Student>;
  /** delete data from the table: "student_to_course" */
  deleteStudentToCourse?: Maybe<StudentToCourseMutationResponse>;
  /** delete single row from the table: "student_to_course" */
  deleteStudentToCourseByPk?: Maybe<StudentToCourse>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "verification_requests" */
  deleteVerificationRequests?: Maybe<VerificationRequestsMutationResponse>;
  /** delete single row from the table: "verification_requests" */
  deleteVerificationRequestsByPk?: Maybe<VerificationRequests>;
  fillEmptyYields?: Maybe<FillEmptyYieldsOutput>;
  /** insert data into the table: "accounts" */
  insertAccounts?: Maybe<AccountsMutationResponse>;
  /** insert a single row into the table: "accounts" */
  insertAccountsOne?: Maybe<Accounts>;
  /** insert data into the table: "allowed_roles" */
  insertAllowedRoles?: Maybe<AllowedRolesMutationResponse>;
  /** insert a single row into the table: "allowed_roles" */
  insertAllowedRolesOne?: Maybe<AllowedRoles>;
  /** insert data into the table: "course" */
  insertCourse?: Maybe<CourseMutationResponse>;
  /** insert a single row into the table: "course" */
  insertCourseOne?: Maybe<Course>;
  /** insert data into the table: "practice" */
  insertPractice?: Maybe<PracticeMutationResponse>;
  /** insert a single row into the table: "practice" */
  insertPracticeOne?: Maybe<Practice>;
  /** insert data into the table: "practice_to_course" */
  insertPracticeToCourse?: Maybe<PracticeToCourseMutationResponse>;
  /** insert a single row into the table: "practice_to_course" */
  insertPracticeToCourseOne?: Maybe<PracticeToCourse>;
  /** insert data into the table: "practice_to_student" */
  insertPracticeToStudent?: Maybe<PracticeToStudentMutationResponse>;
  /** insert data into the table: "practice_to_student_feedback" */
  insertPracticeToStudentFeedback?: Maybe<PracticeToStudentFeedbackMutationResponse>;
  /** insert a single row into the table: "practice_to_student_feedback" */
  insertPracticeToStudentFeedbackOne?: Maybe<PracticeToStudentFeedback>;
  /** insert data into the table: "practice_to_student_grade" */
  insertPracticeToStudentGrade?: Maybe<PracticeToStudentGradeMutationResponse>;
  /** insert data into the table: "practice_to_student_grade_metric" */
  insertPracticeToStudentGradeMetric?: Maybe<PracticeToStudentGradeMetricMutationResponse>;
  /** insert a single row into the table: "practice_to_student_grade_metric" */
  insertPracticeToStudentGradeMetricOne?: Maybe<PracticeToStudentGradeMetric>;
  /** insert a single row into the table: "practice_to_student_grade" */
  insertPracticeToStudentGradeOne?: Maybe<PracticeToStudentGrade>;
  /** insert a single row into the table: "practice_to_student" */
  insertPracticeToStudentOne?: Maybe<PracticeToStudent>;
  /** insert data into the table: "practice_to_student_yield" */
  insertPracticeToStudentYield?: Maybe<PracticeToStudentYieldMutationResponse>;
  /** insert a single row into the table: "practice_to_student_yield" */
  insertPracticeToStudentYieldOne?: Maybe<PracticeToStudentYield>;
  /** insert data into the table: "practice_yield" */
  insertPracticeYield?: Maybe<PracticeYieldMutationResponse>;
  /** insert data into the table: "practice_yield_expected_output" */
  insertPracticeYieldExpectedOutput?: Maybe<PracticeYieldExpectedOutputMutationResponse>;
  /** insert a single row into the table: "practice_yield_expected_output" */
  insertPracticeYieldExpectedOutputOne?: Maybe<PracticeYieldExpectedOutput>;
  /** insert data into the table: "practice_yield_expected_output_types" */
  insertPracticeYieldExpectedOutputTypes?: Maybe<PracticeYieldExpectedOutputTypesMutationResponse>;
  /** insert a single row into the table: "practice_yield_expected_output_types" */
  insertPracticeYieldExpectedOutputTypesOne?: Maybe<PracticeYieldExpectedOutputTypes>;
  /** insert data into the table: "practice_yield_grade_metric" */
  insertPracticeYieldGradeMetric?: Maybe<PracticeYieldGradeMetricMutationResponse>;
  /** insert a single row into the table: "practice_yield_grade_metric" */
  insertPracticeYieldGradeMetricOne?: Maybe<PracticeYieldGradeMetric>;
  /** insert a single row into the table: "practice_yield" */
  insertPracticeYieldOne?: Maybe<PracticeYield>;
  /** insert data into the table: "practice_yield_type" */
  insertPracticeYieldType?: Maybe<PracticeYieldTypeMutationResponse>;
  /** insert a single row into the table: "practice_yield_type" */
  insertPracticeYieldTypeOne?: Maybe<PracticeYieldType>;
  /** insert data into the table: "roles" */
  insertRoles?: Maybe<RolesMutationResponse>;
  /** insert a single row into the table: "roles" */
  insertRolesOne?: Maybe<Roles>;
  /** insert data into the table: "student" */
  insertStudent?: Maybe<StudentMutationResponse>;
  /** insert a single row into the table: "student" */
  insertStudentOne?: Maybe<Student>;
  /** insert data into the table: "student_to_course" */
  insertStudentToCourse?: Maybe<StudentToCourseMutationResponse>;
  /** insert a single row into the table: "student_to_course" */
  insertStudentToCourseOne?: Maybe<StudentToCourse>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "verification_requests" */
  insertVerificationRequests?: Maybe<VerificationRequestsMutationResponse>;
  /** insert a single row into the table: "verification_requests" */
  insertVerificationRequestsOne?: Maybe<VerificationRequests>;
  linkStudentToUser?: Maybe<LinkStudentToUserOutput>;
  refreshGrades?: Maybe<RefreshGradesOutput>;
  sendStudentClaimMail?: Maybe<SendStudentClaimMailOutput>;
  submitHandoff?: Maybe<SubmitHandoffOutput>;
  /** update data of the table: "accounts" */
  updateAccounts?: Maybe<AccountsMutationResponse>;
  /** update single row of the table: "accounts" */
  updateAccountsByPk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  updateAccountsMany?: Maybe<Array<Maybe<AccountsMutationResponse>>>;
  /** update data of the table: "allowed_roles" */
  updateAllowedRoles?: Maybe<AllowedRolesMutationResponse>;
  /** update single row of the table: "allowed_roles" */
  updateAllowedRolesByPk?: Maybe<AllowedRoles>;
  /** update multiples rows of table: "allowed_roles" */
  updateAllowedRolesMany?: Maybe<Array<Maybe<AllowedRolesMutationResponse>>>;
  /** update data of the table: "course" */
  updateCourse?: Maybe<CourseMutationResponse>;
  /** update single row of the table: "course" */
  updateCourseByPk?: Maybe<Course>;
  /** update multiples rows of table: "course" */
  updateCourseMany?: Maybe<Array<Maybe<CourseMutationResponse>>>;
  /** update data of the table: "practice" */
  updatePractice?: Maybe<PracticeMutationResponse>;
  /** update single row of the table: "practice" */
  updatePracticeByPk?: Maybe<Practice>;
  /** update multiples rows of table: "practice" */
  updatePracticeMany?: Maybe<Array<Maybe<PracticeMutationResponse>>>;
  /** update data of the table: "practice_to_course" */
  updatePracticeToCourse?: Maybe<PracticeToCourseMutationResponse>;
  /** update single row of the table: "practice_to_course" */
  updatePracticeToCourseByPk?: Maybe<PracticeToCourse>;
  /** update multiples rows of table: "practice_to_course" */
  updatePracticeToCourseMany?: Maybe<
    Array<Maybe<PracticeToCourseMutationResponse>>
  >;
  /** update data of the table: "practice_to_student" */
  updatePracticeToStudent?: Maybe<PracticeToStudentMutationResponse>;
  /** update single row of the table: "practice_to_student" */
  updatePracticeToStudentByPk?: Maybe<PracticeToStudent>;
  /** update data of the table: "practice_to_student_feedback" */
  updatePracticeToStudentFeedback?: Maybe<PracticeToStudentFeedbackMutationResponse>;
  /** update multiples rows of table: "practice_to_student_feedback" */
  updatePracticeToStudentFeedbackMany?: Maybe<
    Array<Maybe<PracticeToStudentFeedbackMutationResponse>>
  >;
  /** update data of the table: "practice_to_student_grade" */
  updatePracticeToStudentGrade?: Maybe<PracticeToStudentGradeMutationResponse>;
  /** update multiples rows of table: "practice_to_student_grade" */
  updatePracticeToStudentGradeMany?: Maybe<
    Array<Maybe<PracticeToStudentGradeMutationResponse>>
  >;
  /** update data of the table: "practice_to_student_grade_metric" */
  updatePracticeToStudentGradeMetric?: Maybe<PracticeToStudentGradeMetricMutationResponse>;
  /** update single row of the table: "practice_to_student_grade_metric" */
  updatePracticeToStudentGradeMetricByPk?: Maybe<PracticeToStudentGradeMetric>;
  /** update multiples rows of table: "practice_to_student_grade_metric" */
  updatePracticeToStudentGradeMetricMany?: Maybe<
    Array<Maybe<PracticeToStudentGradeMetricMutationResponse>>
  >;
  /** update multiples rows of table: "practice_to_student" */
  updatePracticeToStudentMany?: Maybe<
    Array<Maybe<PracticeToStudentMutationResponse>>
  >;
  /** update data of the table: "practice_to_student_yield" */
  updatePracticeToStudentYield?: Maybe<PracticeToStudentYieldMutationResponse>;
  /** update single row of the table: "practice_to_student_yield" */
  updatePracticeToStudentYieldByPk?: Maybe<PracticeToStudentYield>;
  /** update multiples rows of table: "practice_to_student_yield" */
  updatePracticeToStudentYieldMany?: Maybe<
    Array<Maybe<PracticeToStudentYieldMutationResponse>>
  >;
  /** update data of the table: "practice_yield" */
  updatePracticeYield?: Maybe<PracticeYieldMutationResponse>;
  /** update single row of the table: "practice_yield" */
  updatePracticeYieldByPk?: Maybe<PracticeYield>;
  /** update data of the table: "practice_yield_expected_output" */
  updatePracticeYieldExpectedOutput?: Maybe<PracticeYieldExpectedOutputMutationResponse>;
  /** update single row of the table: "practice_yield_expected_output" */
  updatePracticeYieldExpectedOutputByPk?: Maybe<PracticeYieldExpectedOutput>;
  /** update multiples rows of table: "practice_yield_expected_output" */
  updatePracticeYieldExpectedOutputMany?: Maybe<
    Array<Maybe<PracticeYieldExpectedOutputMutationResponse>>
  >;
  /** update data of the table: "practice_yield_expected_output_types" */
  updatePracticeYieldExpectedOutputTypes?: Maybe<PracticeYieldExpectedOutputTypesMutationResponse>;
  /** update single row of the table: "practice_yield_expected_output_types" */
  updatePracticeYieldExpectedOutputTypesByPk?: Maybe<PracticeYieldExpectedOutputTypes>;
  /** update multiples rows of table: "practice_yield_expected_output_types" */
  updatePracticeYieldExpectedOutputTypesMany?: Maybe<
    Array<Maybe<PracticeYieldExpectedOutputTypesMutationResponse>>
  >;
  /** update data of the table: "practice_yield_grade_metric" */
  updatePracticeYieldGradeMetric?: Maybe<PracticeYieldGradeMetricMutationResponse>;
  /** update single row of the table: "practice_yield_grade_metric" */
  updatePracticeYieldGradeMetricByPk?: Maybe<PracticeYieldGradeMetric>;
  /** update multiples rows of table: "practice_yield_grade_metric" */
  updatePracticeYieldGradeMetricMany?: Maybe<
    Array<Maybe<PracticeYieldGradeMetricMutationResponse>>
  >;
  /** update multiples rows of table: "practice_yield" */
  updatePracticeYieldMany?: Maybe<Array<Maybe<PracticeYieldMutationResponse>>>;
  /** update data of the table: "practice_yield_type" */
  updatePracticeYieldType?: Maybe<PracticeYieldTypeMutationResponse>;
  /** update single row of the table: "practice_yield_type" */
  updatePracticeYieldTypeByPk?: Maybe<PracticeYieldType>;
  /** update multiples rows of table: "practice_yield_type" */
  updatePracticeYieldTypeMany?: Maybe<
    Array<Maybe<PracticeYieldTypeMutationResponse>>
  >;
  /** update data of the table: "roles" */
  updateRoles?: Maybe<RolesMutationResponse>;
  /** update single row of the table: "roles" */
  updateRolesByPk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  updateRolesMany?: Maybe<Array<Maybe<RolesMutationResponse>>>;
  /** update data of the table: "student" */
  updateStudent?: Maybe<StudentMutationResponse>;
  /** update single row of the table: "student" */
  updateStudentByPk?: Maybe<Student>;
  /** update multiples rows of table: "student" */
  updateStudentMany?: Maybe<Array<Maybe<StudentMutationResponse>>>;
  /** update data of the table: "student_to_course" */
  updateStudentToCourse?: Maybe<StudentToCourseMutationResponse>;
  /** update single row of the table: "student_to_course" */
  updateStudentToCourseByPk?: Maybe<StudentToCourse>;
  /** update multiples rows of table: "student_to_course" */
  updateStudentToCourseMany?: Maybe<
    Array<Maybe<StudentToCourseMutationResponse>>
  >;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
  /** update data of the table: "verification_requests" */
  updateVerificationRequests?: Maybe<VerificationRequestsMutationResponse>;
  /** update single row of the table: "verification_requests" */
  updateVerificationRequestsByPk?: Maybe<VerificationRequests>;
  /** update multiples rows of table: "verification_requests" */
  updateVerificationRequestsMany?: Maybe<
    Array<Maybe<VerificationRequestsMutationResponse>>
  >;
};

/** mutation root */
export type Mutation_RootDeleteAccountsArgs = {
  where: AccountsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteAccountsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeleteAllowedRolesArgs = {
  where: AllowedRolesBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteAllowedRolesByPkArgs = {
  role: RolesEnum;
  userId: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeleteCourseArgs = {
  where: CourseBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteCourseByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeArgs = {
  where: PracticeBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeToCourseArgs = {
  where: PracticeToCourseBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeToCourseByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentArgs = {
  where: PracticeToStudentBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentFeedbackArgs = {
  where: PracticeToStudentFeedbackBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentGradeArgs = {
  where: PracticeToStudentGradeBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentGradeMetricArgs = {
  where: PracticeToStudentGradeMetricBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentGradeMetricByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentYieldArgs = {
  where: PracticeToStudentYieldBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeToStudentYieldByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldArgs = {
  where: PracticeYieldBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldExpectedOutputArgs = {
  where: PracticeYieldExpectedOutputBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldExpectedOutputByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldExpectedOutputTypesArgs = {
  where: PracticeYieldExpectedOutputTypesBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldExpectedOutputTypesByPkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldGradeMetricArgs = {
  where: PracticeYieldGradeMetricBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldGradeMetricByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldTypeArgs = {
  where: PracticeYieldTypeBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePracticeYieldTypeByPkArgs = {
  name: Scalars['String'];
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
export type Mutation_RootDeleteStudentArgs = {
  where: StudentBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteStudentByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDeleteStudentToCourseArgs = {
  where: StudentToCourseBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteStudentToCourseByPkArgs = {
  courseId: Scalars['uuid'];
  studentId: Scalars['uuid'];
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
export type Mutation_RootDeleteVerificationRequestsArgs = {
  where: VerificationRequestsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteVerificationRequestsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootFillEmptyYieldsArgs = {
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsertAccountsArgs = {
  objects: Array<AccountsInsertInput>;
  onConflict?: InputMaybe<AccountsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAccountsOneArgs = {
  object: AccountsInsertInput;
  onConflict?: InputMaybe<AccountsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAllowedRolesArgs = {
  objects: Array<AllowedRolesInsertInput>;
  onConflict?: InputMaybe<AllowedRolesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAllowedRolesOneArgs = {
  object: AllowedRolesInsertInput;
  onConflict?: InputMaybe<AllowedRolesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCourseArgs = {
  objects: Array<CourseInsertInput>;
  onConflict?: InputMaybe<CourseOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCourseOneArgs = {
  object: CourseInsertInput;
  onConflict?: InputMaybe<CourseOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeArgs = {
  objects: Array<PracticeInsertInput>;
  onConflict?: InputMaybe<PracticeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeOneArgs = {
  object: PracticeInsertInput;
  onConflict?: InputMaybe<PracticeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToCourseArgs = {
  objects: Array<PracticeToCourseInsertInput>;
  onConflict?: InputMaybe<PracticeToCourseOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToCourseOneArgs = {
  object: PracticeToCourseInsertInput;
  onConflict?: InputMaybe<PracticeToCourseOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentArgs = {
  objects: Array<PracticeToStudentInsertInput>;
  onConflict?: InputMaybe<PracticeToStudentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentFeedbackArgs = {
  objects: Array<PracticeToStudentFeedbackInsertInput>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentFeedbackOneArgs = {
  object: PracticeToStudentFeedbackInsertInput;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentGradeArgs = {
  objects: Array<PracticeToStudentGradeInsertInput>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentGradeMetricArgs = {
  objects: Array<PracticeToStudentGradeMetricInsertInput>;
  onConflict?: InputMaybe<PracticeToStudentGradeMetricOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentGradeMetricOneArgs = {
  object: PracticeToStudentGradeMetricInsertInput;
  onConflict?: InputMaybe<PracticeToStudentGradeMetricOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentGradeOneArgs = {
  object: PracticeToStudentGradeInsertInput;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentOneArgs = {
  object: PracticeToStudentInsertInput;
  onConflict?: InputMaybe<PracticeToStudentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentYieldArgs = {
  objects: Array<PracticeToStudentYieldInsertInput>;
  onConflict?: InputMaybe<PracticeToStudentYieldOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeToStudentYieldOneArgs = {
  object: PracticeToStudentYieldInsertInput;
  onConflict?: InputMaybe<PracticeToStudentYieldOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldArgs = {
  objects: Array<PracticeYieldInsertInput>;
  onConflict?: InputMaybe<PracticeYieldOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldExpectedOutputArgs = {
  objects: Array<PracticeYieldExpectedOutputInsertInput>;
  onConflict?: InputMaybe<PracticeYieldExpectedOutputOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldExpectedOutputOneArgs = {
  object: PracticeYieldExpectedOutputInsertInput;
  onConflict?: InputMaybe<PracticeYieldExpectedOutputOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldExpectedOutputTypesArgs = {
  objects: Array<PracticeYieldExpectedOutputTypesInsertInput>;
  onConflict?: InputMaybe<PracticeYieldExpectedOutputTypesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldExpectedOutputTypesOneArgs = {
  object: PracticeYieldExpectedOutputTypesInsertInput;
  onConflict?: InputMaybe<PracticeYieldExpectedOutputTypesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldGradeMetricArgs = {
  objects: Array<PracticeYieldGradeMetricInsertInput>;
  onConflict?: InputMaybe<PracticeYieldGradeMetricOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldGradeMetricOneArgs = {
  object: PracticeYieldGradeMetricInsertInput;
  onConflict?: InputMaybe<PracticeYieldGradeMetricOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldOneArgs = {
  object: PracticeYieldInsertInput;
  onConflict?: InputMaybe<PracticeYieldOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldTypeArgs = {
  objects: Array<PracticeYieldTypeInsertInput>;
  onConflict?: InputMaybe<PracticeYieldTypeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPracticeYieldTypeOneArgs = {
  object: PracticeYieldTypeInsertInput;
  onConflict?: InputMaybe<PracticeYieldTypeOnConflict>;
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
export type Mutation_RootInsertStudentArgs = {
  objects: Array<StudentInsertInput>;
  onConflict?: InputMaybe<StudentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertStudentOneArgs = {
  object: StudentInsertInput;
  onConflict?: InputMaybe<StudentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertStudentToCourseArgs = {
  objects: Array<StudentToCourseInsertInput>;
  onConflict?: InputMaybe<StudentToCourseOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertStudentToCourseOneArgs = {
  object: StudentToCourseInsertInput;
  onConflict?: InputMaybe<StudentToCourseOnConflict>;
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
export type Mutation_RootInsertVerificationRequestsArgs = {
  objects: Array<VerificationRequestsInsertInput>;
  onConflict?: InputMaybe<VerificationRequestsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertVerificationRequestsOneArgs = {
  object: VerificationRequestsInsertInput;
  onConflict?: InputMaybe<VerificationRequestsOnConflict>;
};

/** mutation root */
export type Mutation_RootLinkStudentToUserArgs = {
  linkId: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootRefreshGradesArgs = {
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootSendStudentClaimMailArgs = {
  studentsIds: Array<InputMaybe<Scalars['uuid']>>;
};

/** mutation root */
export type Mutation_RootSubmitHandoffArgs = {
  practiceToPromotionId: Scalars['uuid'];
  yields: Array<YieldForHandoff>;
};

/** mutation root */
export type Mutation_RootUpdateAccountsArgs = {
  _set?: InputMaybe<AccountsSetInput>;
  where: AccountsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateAccountsByPkArgs = {
  _set?: InputMaybe<AccountsSetInput>;
  pkColumns: AccountsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateAccountsManyArgs = {
  updates: Array<AccountsUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateAllowedRolesArgs = {
  _set?: InputMaybe<AllowedRolesSetInput>;
  where: AllowedRolesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateAllowedRolesByPkArgs = {
  _set?: InputMaybe<AllowedRolesSetInput>;
  pkColumns: AllowedRolesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateAllowedRolesManyArgs = {
  updates: Array<AllowedRolesUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateCourseArgs = {
  _set?: InputMaybe<CourseSetInput>;
  where: CourseBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCourseByPkArgs = {
  _set?: InputMaybe<CourseSetInput>;
  pkColumns: CoursePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCourseManyArgs = {
  updates: Array<CourseUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeArgs = {
  _set?: InputMaybe<PracticeSetInput>;
  where: PracticeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeByPkArgs = {
  _set?: InputMaybe<PracticeSetInput>;
  pkColumns: PracticePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeManyArgs = {
  updates: Array<PracticeUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToCourseArgs = {
  _set?: InputMaybe<PracticeToCourseSetInput>;
  where: PracticeToCourseBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToCourseByPkArgs = {
  _set?: InputMaybe<PracticeToCourseSetInput>;
  pkColumns: PracticeToCoursePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToCourseManyArgs = {
  updates: Array<PracticeToCourseUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentArgs = {
  _append?: InputMaybe<PracticeToStudentAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeToStudentDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeToStudentDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeToStudentDeleteKeyInput>;
  _inc?: InputMaybe<PracticeToStudentIncInput>;
  _prepend?: InputMaybe<PracticeToStudentPrependInput>;
  _set?: InputMaybe<PracticeToStudentSetInput>;
  where: PracticeToStudentBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentByPkArgs = {
  _append?: InputMaybe<PracticeToStudentAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeToStudentDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeToStudentDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeToStudentDeleteKeyInput>;
  _inc?: InputMaybe<PracticeToStudentIncInput>;
  _prepend?: InputMaybe<PracticeToStudentPrependInput>;
  _set?: InputMaybe<PracticeToStudentSetInput>;
  pkColumns: PracticeToStudentPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentFeedbackArgs = {
  _append?: InputMaybe<PracticeToStudentFeedbackAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeToStudentFeedbackDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeToStudentFeedbackDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeToStudentFeedbackDeleteKeyInput>;
  _prepend?: InputMaybe<PracticeToStudentFeedbackPrependInput>;
  _set?: InputMaybe<PracticeToStudentFeedbackSetInput>;
  where: PracticeToStudentFeedbackBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentFeedbackManyArgs = {
  updates: Array<PracticeToStudentFeedbackUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentGradeArgs = {
  _append?: InputMaybe<PracticeToStudentGradeAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeToStudentGradeDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeToStudentGradeDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeToStudentGradeDeleteKeyInput>;
  _inc?: InputMaybe<PracticeToStudentGradeIncInput>;
  _prepend?: InputMaybe<PracticeToStudentGradePrependInput>;
  _set?: InputMaybe<PracticeToStudentGradeSetInput>;
  where: PracticeToStudentGradeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentGradeManyArgs = {
  updates: Array<PracticeToStudentGradeUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentGradeMetricArgs = {
  _append?: InputMaybe<PracticeToStudentGradeMetricAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeToStudentGradeMetricDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeToStudentGradeMetricDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeToStudentGradeMetricDeleteKeyInput>;
  _inc?: InputMaybe<PracticeToStudentGradeMetricIncInput>;
  _prepend?: InputMaybe<PracticeToStudentGradeMetricPrependInput>;
  _set?: InputMaybe<PracticeToStudentGradeMetricSetInput>;
  where: PracticeToStudentGradeMetricBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentGradeMetricByPkArgs = {
  _append?: InputMaybe<PracticeToStudentGradeMetricAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeToStudentGradeMetricDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeToStudentGradeMetricDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeToStudentGradeMetricDeleteKeyInput>;
  _inc?: InputMaybe<PracticeToStudentGradeMetricIncInput>;
  _prepend?: InputMaybe<PracticeToStudentGradeMetricPrependInput>;
  _set?: InputMaybe<PracticeToStudentGradeMetricSetInput>;
  pkColumns: PracticeToStudentGradeMetricPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentGradeMetricManyArgs = {
  updates: Array<PracticeToStudentGradeMetricUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentManyArgs = {
  updates: Array<PracticeToStudentUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentYieldArgs = {
  _set?: InputMaybe<PracticeToStudentYieldSetInput>;
  where: PracticeToStudentYieldBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentYieldByPkArgs = {
  _set?: InputMaybe<PracticeToStudentYieldSetInput>;
  pkColumns: PracticeToStudentYieldPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeToStudentYieldManyArgs = {
  updates: Array<PracticeToStudentYieldUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldArgs = {
  _append?: InputMaybe<PracticeYieldAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeYieldDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeYieldDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeYieldDeleteKeyInput>;
  _prepend?: InputMaybe<PracticeYieldPrependInput>;
  _set?: InputMaybe<PracticeYieldSetInput>;
  where: PracticeYieldBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldByPkArgs = {
  _append?: InputMaybe<PracticeYieldAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeYieldDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeYieldDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeYieldDeleteKeyInput>;
  _prepend?: InputMaybe<PracticeYieldPrependInput>;
  _set?: InputMaybe<PracticeYieldSetInput>;
  pkColumns: PracticeYieldPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldExpectedOutputArgs = {
  _set?: InputMaybe<PracticeYieldExpectedOutputSetInput>;
  where: PracticeYieldExpectedOutputBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldExpectedOutputByPkArgs = {
  _set?: InputMaybe<PracticeYieldExpectedOutputSetInput>;
  pkColumns: PracticeYieldExpectedOutputPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldExpectedOutputManyArgs = {
  updates: Array<PracticeYieldExpectedOutputUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldExpectedOutputTypesArgs = {
  _set?: InputMaybe<PracticeYieldExpectedOutputTypesSetInput>;
  where: PracticeYieldExpectedOutputTypesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldExpectedOutputTypesByPkArgs = {
  _set?: InputMaybe<PracticeYieldExpectedOutputTypesSetInput>;
  pkColumns: PracticeYieldExpectedOutputTypesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldExpectedOutputTypesManyArgs = {
  updates: Array<PracticeYieldExpectedOutputTypesUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldGradeMetricArgs = {
  _append?: InputMaybe<PracticeYieldGradeMetricAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeYieldGradeMetricDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeYieldGradeMetricDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeYieldGradeMetricDeleteKeyInput>;
  _inc?: InputMaybe<PracticeYieldGradeMetricIncInput>;
  _prepend?: InputMaybe<PracticeYieldGradeMetricPrependInput>;
  _set?: InputMaybe<PracticeYieldGradeMetricSetInput>;
  where: PracticeYieldGradeMetricBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldGradeMetricByPkArgs = {
  _append?: InputMaybe<PracticeYieldGradeMetricAppendInput>;
  _deleteAtPath?: InputMaybe<PracticeYieldGradeMetricDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PracticeYieldGradeMetricDeleteElemInput>;
  _deleteKey?: InputMaybe<PracticeYieldGradeMetricDeleteKeyInput>;
  _inc?: InputMaybe<PracticeYieldGradeMetricIncInput>;
  _prepend?: InputMaybe<PracticeYieldGradeMetricPrependInput>;
  _set?: InputMaybe<PracticeYieldGradeMetricSetInput>;
  pkColumns: PracticeYieldGradeMetricPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldGradeMetricManyArgs = {
  updates: Array<PracticeYieldGradeMetricUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldManyArgs = {
  updates: Array<PracticeYieldUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldTypeArgs = {
  _set?: InputMaybe<PracticeYieldTypeSetInput>;
  where: PracticeYieldTypeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldTypeByPkArgs = {
  _set?: InputMaybe<PracticeYieldTypeSetInput>;
  pkColumns: PracticeYieldTypePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePracticeYieldTypeManyArgs = {
  updates: Array<PracticeYieldTypeUpdates>;
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
export type Mutation_RootUpdateStudentArgs = {
  _set?: InputMaybe<StudentSetInput>;
  where: StudentBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateStudentByPkArgs = {
  _set?: InputMaybe<StudentSetInput>;
  pkColumns: StudentPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateStudentManyArgs = {
  updates: Array<StudentUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateStudentToCourseArgs = {
  _set?: InputMaybe<StudentToCourseSetInput>;
  where: StudentToCourseBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateStudentToCourseByPkArgs = {
  _set?: InputMaybe<StudentToCourseSetInput>;
  pkColumns: StudentToCoursePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateStudentToCourseManyArgs = {
  updates: Array<StudentToCourseUpdates>;
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
export type Mutation_RootUpdateVerificationRequestsArgs = {
  _set?: InputMaybe<VerificationRequestsSetInput>;
  where: VerificationRequestsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateVerificationRequestsByPkArgs = {
  _set?: InputMaybe<VerificationRequestsSetInput>;
  pkColumns: VerificationRequestsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateVerificationRequestsManyArgs = {
  updates: Array<VerificationRequestsUpdates>;
};

export type PracticeToCourseAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToCourseBoolExp>;
  predicate: IntComparisonExp;
};

export type PracticeToStudentAggregateBoolExpAvg = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentAggregateBoolExpBool_And = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PracticeToStudentAggregateBoolExpBool_Or = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PracticeToStudentAggregateBoolExpCorr = {
  arguments: PracticeToStudentAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentAggregateBoolExpCorrArguments = {
  X: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpCorrArgumentsColumns;
  Y: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpCorrArgumentsColumns;
};

export type PracticeToStudentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: IntComparisonExp;
};

export type PracticeToStudentAggregateBoolExpCovar_Samp = {
  arguments: PracticeToStudentAggregateBoolExpCovar_SampArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentAggregateBoolExpCovar_SampArguments = {
  X: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpCovar_SampArgumentsColumns;
  Y: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpCovar_SampArgumentsColumns;
};

export type PracticeToStudentAggregateBoolExpMax = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentAggregateBoolExpMin = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentAggregateBoolExpStddev_Samp = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpStddev_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentAggregateBoolExpSum = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentAggregateBoolExpVar_Samp = {
  arguments: PracticeToStudentSelectColumnPracticeToStudentAggregateBoolExpVar_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PracticeToStudentGradeMetricAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
  predicate: IntComparisonExp;
};

export type PracticeToStudentYieldAggregateBoolExpBool_And = {
  arguments: PracticeToStudentYieldSelectColumnPracticeToStudentYieldAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentYieldBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PracticeToStudentYieldAggregateBoolExpBool_Or = {
  arguments: PracticeToStudentYieldSelectColumnPracticeToStudentYieldAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentYieldBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PracticeToStudentYieldAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeToStudentYieldBoolExp>;
  predicate: IntComparisonExp;
};

export type PracticeYieldAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeYieldBoolExp>;
  predicate: IntComparisonExp;
};

export type PracticeYieldExpectedOutputAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
  predicate: IntComparisonExp;
};

export type PracticeYieldGradeMetricAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accountsAggregate: AccountsAggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accountsByPk?: Maybe<Accounts>;
  /** An array relationship */
  allowedRoles: Array<AllowedRoles>;
  /** An aggregate relationship */
  allowedRolesAggregate: AllowedRolesAggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowedRolesByPk?: Maybe<AllowedRoles>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  courseAggregate: CourseAggregate;
  /** fetch data from the table: "course" using primary key columns */
  courseByPk?: Maybe<Course>;
  getGitFileData?: Maybe<GetGitFileDataOutput>;
  getGitLogData: Array<CommitItem>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practiceAggregate: PracticeAggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practiceByPk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practiceToCourse: Array<PracticeToCourse>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practiceToCourseAggregate: PracticeToCourseAggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practiceToCourseByPk?: Maybe<PracticeToCourse>;
  /** fetch data from the table: "practice_to_student" */
  practiceToStudent: Array<PracticeToStudent>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practiceToStudentAggregate: PracticeToStudentAggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practiceToStudentByPk?: Maybe<PracticeToStudent>;
  /** fetch data from the table: "practice_to_student_feedback" */
  practiceToStudentFeedback: Array<PracticeToStudentFeedback>;
  /** fetch aggregated fields from the table: "practice_to_student_feedback" */
  practiceToStudentFeedbackAggregate: PracticeToStudentFeedbackAggregate;
  /** fetch data from the table: "practice_to_student_grade" */
  practiceToStudentGrade: Array<PracticeToStudentGrade>;
  /** fetch aggregated fields from the table: "practice_to_student_grade" */
  practiceToStudentGradeAggregate: PracticeToStudentGradeAggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practiceToStudentGradeMetric: Array<PracticeToStudentGradeMetric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practiceToStudentGradeMetricAggregate: PracticeToStudentGradeMetricAggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practiceToStudentGradeMetricByPk?: Maybe<PracticeToStudentGradeMetric>;
  /** fetch data from the table: "practice_to_student_yield" */
  practiceToStudentYield: Array<PracticeToStudentYield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practiceToStudentYieldAggregate: PracticeToStudentYieldAggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practiceToStudentYieldByPk?: Maybe<PracticeToStudentYield>;
  /** fetch data from the table: "practice_yield" */
  practiceYield: Array<PracticeYield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practiceYieldAggregate: PracticeYieldAggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practiceYieldByPk?: Maybe<PracticeYield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practiceYieldExpectedOutput: Array<PracticeYieldExpectedOutput>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practiceYieldExpectedOutputAggregate: PracticeYieldExpectedOutputAggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practiceYieldExpectedOutputByPk?: Maybe<PracticeYieldExpectedOutput>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practiceYieldExpectedOutputTypes: Array<PracticeYieldExpectedOutputTypes>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practiceYieldExpectedOutputTypesAggregate: PracticeYieldExpectedOutputTypesAggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practiceYieldExpectedOutputTypesByPk?: Maybe<PracticeYieldExpectedOutputTypes>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practiceYieldGradeMetric: Array<PracticeYieldGradeMetric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practiceYieldGradeMetricAggregate: PracticeYieldGradeMetricAggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practiceYieldGradeMetricByPk?: Maybe<PracticeYieldGradeMetric>;
  /** fetch data from the table: "practice_yield_type" */
  practiceYieldType: Array<PracticeYieldType>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practiceYieldTypeAggregate: PracticeYieldTypeAggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practiceYieldTypeByPk?: Maybe<PracticeYieldType>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  rolesAggregate: RolesAggregate;
  /** fetch data from the table: "roles" using primary key columns */
  rolesByPk?: Maybe<Roles>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  studentAggregate: StudentAggregate;
  /** fetch data from the table: "student" using primary key columns */
  studentByPk?: Maybe<Student>;
  /** fetch data from the table: "student_to_course" */
  studentToCourse: Array<StudentToCourse>;
  /** fetch aggregated fields from the table: "student_to_course" */
  studentToCourseAggregate: StudentToCourseAggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  studentToCourseByPk?: Maybe<StudentToCourse>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "verification_requests" */
  verificationRequests: Array<VerificationRequests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verificationRequestsAggregate: VerificationRequestsAggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verificationRequestsByPk?: Maybe<VerificationRequests>;
};

export type Query_RootAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};

export type Query_RootAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};

export type Query_RootAccountsByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootAllowedRolesArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

export type Query_RootAllowedRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

export type Query_RootAllowedRolesByPkArgs = {
  role: RolesEnum;
  userId: Scalars['uuid'];
};

export type Query_RootCourseArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type Query_RootCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type Query_RootCourseByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootGetGitFileDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

export type Query_RootGetGitLogDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

export type Query_RootPracticeArgs = {
  distinctOn?: InputMaybe<Array<PracticeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeOrderBy>>;
  where?: InputMaybe<PracticeBoolExp>;
};

export type Query_RootPracticeAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeOrderBy>>;
  where?: InputMaybe<PracticeBoolExp>;
};

export type Query_RootPracticeByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeToCourseArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

export type Query_RootPracticeToCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

export type Query_RootPracticeToCourseByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeToStudentArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

export type Query_RootPracticeToStudentAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

export type Query_RootPracticeToStudentByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeToStudentFeedbackArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentFeedbackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentFeedbackOrderBy>>;
  where?: InputMaybe<PracticeToStudentFeedbackBoolExp>;
};

export type Query_RootPracticeToStudentFeedbackAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentFeedbackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentFeedbackOrderBy>>;
  where?: InputMaybe<PracticeToStudentFeedbackBoolExp>;
};

export type Query_RootPracticeToStudentGradeArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeBoolExp>;
};

export type Query_RootPracticeToStudentGradeAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeBoolExp>;
};

export type Query_RootPracticeToStudentGradeMetricArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

export type Query_RootPracticeToStudentGradeMetricAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

export type Query_RootPracticeToStudentGradeMetricByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeToStudentYieldArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

export type Query_RootPracticeToStudentYieldAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

export type Query_RootPracticeToStudentYieldByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeYieldArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

export type Query_RootPracticeYieldAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

export type Query_RootPracticeYieldByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeYieldExpectedOutputArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

export type Query_RootPracticeYieldExpectedOutputAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

export type Query_RootPracticeYieldExpectedOutputByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeYieldExpectedOutputTypesArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputTypesOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
};

export type Query_RootPracticeYieldExpectedOutputTypesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputTypesOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
};

export type Query_RootPracticeYieldExpectedOutputTypesByPkArgs = {
  name: Scalars['String'];
};

export type Query_RootPracticeYieldGradeMetricArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
};

export type Query_RootPracticeYieldGradeMetricAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
};

export type Query_RootPracticeYieldGradeMetricByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootPracticeYieldTypeArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldTypeOrderBy>>;
  where?: InputMaybe<PracticeYieldTypeBoolExp>;
};

export type Query_RootPracticeYieldTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldTypeOrderBy>>;
  where?: InputMaybe<PracticeYieldTypeBoolExp>;
};

export type Query_RootPracticeYieldTypeByPkArgs = {
  name: Scalars['String'];
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

export type Query_RootStudentArgs = {
  distinctOn?: InputMaybe<Array<StudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentOrderBy>>;
  where?: InputMaybe<StudentBoolExp>;
};

export type Query_RootStudentAggregateArgs = {
  distinctOn?: InputMaybe<Array<StudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentOrderBy>>;
  where?: InputMaybe<StudentBoolExp>;
};

export type Query_RootStudentByPkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootStudentToCourseArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

export type Query_RootStudentToCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

export type Query_RootStudentToCourseByPkArgs = {
  courseId: Scalars['uuid'];
  studentId: Scalars['uuid'];
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

export type Query_RootVerificationRequestsArgs = {
  distinctOn?: InputMaybe<Array<VerificationRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationRequestsOrderBy>>;
  where?: InputMaybe<VerificationRequestsBoolExp>;
};

export type Query_RootVerificationRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationRequestsOrderBy>>;
  where?: InputMaybe<VerificationRequestsBoolExp>;
};

export type Query_RootVerificationRequestsByPkArgs = {
  id: Scalars['uuid'];
};

export type StudentToCourseAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<StudentToCourseBoolExp>;
  predicate: IntComparisonExp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accountsAggregate: AccountsAggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accountsByPk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accountsStream: Array<Accounts>;
  /** An array relationship */
  allowedRoles: Array<AllowedRoles>;
  /** An aggregate relationship */
  allowedRolesAggregate: AllowedRolesAggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowedRolesByPk?: Maybe<AllowedRoles>;
  /** fetch data from the table in a streaming manner: "allowed_roles" */
  allowedRolesStream: Array<AllowedRoles>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  courseAggregate: CourseAggregate;
  /** fetch data from the table: "course" using primary key columns */
  courseByPk?: Maybe<Course>;
  /** fetch data from the table in a streaming manner: "course" */
  courseStream: Array<Course>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practiceAggregate: PracticeAggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practiceByPk?: Maybe<Practice>;
  /** fetch data from the table in a streaming manner: "practice" */
  practiceStream: Array<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practiceToCourse: Array<PracticeToCourse>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practiceToCourseAggregate: PracticeToCourseAggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practiceToCourseByPk?: Maybe<PracticeToCourse>;
  /** fetch data from the table in a streaming manner: "practice_to_course" */
  practiceToCourseStream: Array<PracticeToCourse>;
  /** fetch data from the table: "practice_to_student" */
  practiceToStudent: Array<PracticeToStudent>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practiceToStudentAggregate: PracticeToStudentAggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practiceToStudentByPk?: Maybe<PracticeToStudent>;
  /** fetch data from the table: "practice_to_student_feedback" */
  practiceToStudentFeedback: Array<PracticeToStudentFeedback>;
  /** fetch aggregated fields from the table: "practice_to_student_feedback" */
  practiceToStudentFeedbackAggregate: PracticeToStudentFeedbackAggregate;
  /** fetch data from the table in a streaming manner: "practice_to_student_feedback" */
  practiceToStudentFeedbackStream: Array<PracticeToStudentFeedback>;
  /** fetch data from the table: "practice_to_student_grade" */
  practiceToStudentGrade: Array<PracticeToStudentGrade>;
  /** fetch aggregated fields from the table: "practice_to_student_grade" */
  practiceToStudentGradeAggregate: PracticeToStudentGradeAggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practiceToStudentGradeMetric: Array<PracticeToStudentGradeMetric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practiceToStudentGradeMetricAggregate: PracticeToStudentGradeMetricAggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practiceToStudentGradeMetricByPk?: Maybe<PracticeToStudentGradeMetric>;
  /** fetch data from the table in a streaming manner: "practice_to_student_grade_metric" */
  practiceToStudentGradeMetricStream: Array<PracticeToStudentGradeMetric>;
  /** fetch data from the table in a streaming manner: "practice_to_student_grade" */
  practiceToStudentGradeStream: Array<PracticeToStudentGrade>;
  /** fetch data from the table in a streaming manner: "practice_to_student" */
  practiceToStudentStream: Array<PracticeToStudent>;
  /** fetch data from the table: "practice_to_student_yield" */
  practiceToStudentYield: Array<PracticeToStudentYield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practiceToStudentYieldAggregate: PracticeToStudentYieldAggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practiceToStudentYieldByPk?: Maybe<PracticeToStudentYield>;
  /** fetch data from the table in a streaming manner: "practice_to_student_yield" */
  practiceToStudentYieldStream: Array<PracticeToStudentYield>;
  /** fetch data from the table: "practice_yield" */
  practiceYield: Array<PracticeYield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practiceYieldAggregate: PracticeYieldAggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practiceYieldByPk?: Maybe<PracticeYield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practiceYieldExpectedOutput: Array<PracticeYieldExpectedOutput>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practiceYieldExpectedOutputAggregate: PracticeYieldExpectedOutputAggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practiceYieldExpectedOutputByPk?: Maybe<PracticeYieldExpectedOutput>;
  /** fetch data from the table in a streaming manner: "practice_yield_expected_output" */
  practiceYieldExpectedOutputStream: Array<PracticeYieldExpectedOutput>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practiceYieldExpectedOutputTypes: Array<PracticeYieldExpectedOutputTypes>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practiceYieldExpectedOutputTypesAggregate: PracticeYieldExpectedOutputTypesAggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practiceYieldExpectedOutputTypesByPk?: Maybe<PracticeYieldExpectedOutputTypes>;
  /** fetch data from the table in a streaming manner: "practice_yield_expected_output_types" */
  practiceYieldExpectedOutputTypesStream: Array<PracticeYieldExpectedOutputTypes>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practiceYieldGradeMetric: Array<PracticeYieldGradeMetric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practiceYieldGradeMetricAggregate: PracticeYieldGradeMetricAggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practiceYieldGradeMetricByPk?: Maybe<PracticeYieldGradeMetric>;
  /** fetch data from the table in a streaming manner: "practice_yield_grade_metric" */
  practiceYieldGradeMetricStream: Array<PracticeYieldGradeMetric>;
  /** fetch data from the table in a streaming manner: "practice_yield" */
  practiceYieldStream: Array<PracticeYield>;
  /** fetch data from the table: "practice_yield_type" */
  practiceYieldType: Array<PracticeYieldType>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practiceYieldTypeAggregate: PracticeYieldTypeAggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practiceYieldTypeByPk?: Maybe<PracticeYieldType>;
  /** fetch data from the table in a streaming manner: "practice_yield_type" */
  practiceYieldTypeStream: Array<PracticeYieldType>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  rolesAggregate: RolesAggregate;
  /** fetch data from the table: "roles" using primary key columns */
  rolesByPk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  rolesStream: Array<Roles>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  studentAggregate: StudentAggregate;
  /** fetch data from the table: "student" using primary key columns */
  studentByPk?: Maybe<Student>;
  /** fetch data from the table in a streaming manner: "student" */
  studentStream: Array<Student>;
  /** fetch data from the table: "student_to_course" */
  studentToCourse: Array<StudentToCourse>;
  /** fetch aggregated fields from the table: "student_to_course" */
  studentToCourseAggregate: StudentToCourseAggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  studentToCourseByPk?: Maybe<StudentToCourse>;
  /** fetch data from the table in a streaming manner: "student_to_course" */
  studentToCourseStream: Array<StudentToCourse>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
  /** fetch data from the table: "verification_requests" */
  verificationRequests: Array<VerificationRequests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verificationRequestsAggregate: VerificationRequestsAggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verificationRequestsByPk?: Maybe<VerificationRequests>;
  /** fetch data from the table in a streaming manner: "verification_requests" */
  verificationRequestsStream: Array<VerificationRequests>;
};

export type Subscription_RootAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};

export type Subscription_RootAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};

export type Subscription_RootAccountsByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootAccountsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AccountsStreamCursorInput>>;
  where?: InputMaybe<AccountsBoolExp>;
};

export type Subscription_RootAllowedRolesArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

export type Subscription_RootAllowedRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AllowedRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AllowedRolesOrderBy>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

export type Subscription_RootAllowedRolesByPkArgs = {
  role: RolesEnum;
  userId: Scalars['uuid'];
};

export type Subscription_RootAllowedRolesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AllowedRolesStreamCursorInput>>;
  where?: InputMaybe<AllowedRolesBoolExp>;
};

export type Subscription_RootCourseArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type Subscription_RootCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type Subscription_RootCourseByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootCourseStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<CourseStreamCursorInput>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type Subscription_RootPracticeArgs = {
  distinctOn?: InputMaybe<Array<PracticeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeOrderBy>>;
  where?: InputMaybe<PracticeBoolExp>;
};

export type Subscription_RootPracticeAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeOrderBy>>;
  where?: InputMaybe<PracticeBoolExp>;
};

export type Subscription_RootPracticeByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeStreamCursorInput>>;
  where?: InputMaybe<PracticeBoolExp>;
};

export type Subscription_RootPracticeToCourseArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

export type Subscription_RootPracticeToCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToCourseOrderBy>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

export type Subscription_RootPracticeToCourseByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeToCourseStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeToCourseStreamCursorInput>>;
  where?: InputMaybe<PracticeToCourseBoolExp>;
};

export type Subscription_RootPracticeToStudentArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

export type Subscription_RootPracticeToStudentAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentOrderBy>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

export type Subscription_RootPracticeToStudentByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeToStudentFeedbackArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentFeedbackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentFeedbackOrderBy>>;
  where?: InputMaybe<PracticeToStudentFeedbackBoolExp>;
};

export type Subscription_RootPracticeToStudentFeedbackAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentFeedbackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentFeedbackOrderBy>>;
  where?: InputMaybe<PracticeToStudentFeedbackBoolExp>;
};

export type Subscription_RootPracticeToStudentFeedbackStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeToStudentFeedbackStreamCursorInput>>;
  where?: InputMaybe<PracticeToStudentFeedbackBoolExp>;
};

export type Subscription_RootPracticeToStudentGradeArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeBoolExp>;
};

export type Subscription_RootPracticeToStudentGradeAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeBoolExp>;
};

export type Subscription_RootPracticeToStudentGradeMetricArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

export type Subscription_RootPracticeToStudentGradeMetricAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

export type Subscription_RootPracticeToStudentGradeMetricByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeToStudentGradeMetricStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeToStudentGradeMetricStreamCursorInput>>;
  where?: InputMaybe<PracticeToStudentGradeMetricBoolExp>;
};

export type Subscription_RootPracticeToStudentGradeStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeToStudentGradeStreamCursorInput>>;
  where?: InputMaybe<PracticeToStudentGradeBoolExp>;
};

export type Subscription_RootPracticeToStudentStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeToStudentStreamCursorInput>>;
  where?: InputMaybe<PracticeToStudentBoolExp>;
};

export type Subscription_RootPracticeToStudentYieldArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

export type Subscription_RootPracticeToStudentYieldAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeToStudentYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeToStudentYieldOrderBy>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

export type Subscription_RootPracticeToStudentYieldByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeToStudentYieldStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeToStudentYieldStreamCursorInput>>;
  where?: InputMaybe<PracticeToStudentYieldBoolExp>;
};

export type Subscription_RootPracticeYieldArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

export type Subscription_RootPracticeYieldAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldOrderBy>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

export type Subscription_RootPracticeYieldByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeYieldExpectedOutputArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

export type Subscription_RootPracticeYieldExpectedOutputAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

export type Subscription_RootPracticeYieldExpectedOutputByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeYieldExpectedOutputStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeYieldExpectedOutputStreamCursorInput>>;
  where?: InputMaybe<PracticeYieldExpectedOutputBoolExp>;
};

export type Subscription_RootPracticeYieldExpectedOutputTypesArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputTypesOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
};

export type Subscription_RootPracticeYieldExpectedOutputTypesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldExpectedOutputTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldExpectedOutputTypesOrderBy>>;
  where?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
};

export type Subscription_RootPracticeYieldExpectedOutputTypesByPkArgs = {
  name: Scalars['String'];
};

export type Subscription_RootPracticeYieldExpectedOutputTypesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeYieldExpectedOutputTypesStreamCursorInput>>;
  where?: InputMaybe<PracticeYieldExpectedOutputTypesBoolExp>;
};

export type Subscription_RootPracticeYieldGradeMetricArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
};

export type Subscription_RootPracticeYieldGradeMetricAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldGradeMetricSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldGradeMetricOrderBy>>;
  where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
};

export type Subscription_RootPracticeYieldGradeMetricByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPracticeYieldGradeMetricStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeYieldGradeMetricStreamCursorInput>>;
  where?: InputMaybe<PracticeYieldGradeMetricBoolExp>;
};

export type Subscription_RootPracticeYieldStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeYieldStreamCursorInput>>;
  where?: InputMaybe<PracticeYieldBoolExp>;
};

export type Subscription_RootPracticeYieldTypeArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldTypeOrderBy>>;
  where?: InputMaybe<PracticeYieldTypeBoolExp>;
};

export type Subscription_RootPracticeYieldTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<PracticeYieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PracticeYieldTypeOrderBy>>;
  where?: InputMaybe<PracticeYieldTypeBoolExp>;
};

export type Subscription_RootPracticeYieldTypeByPkArgs = {
  name: Scalars['String'];
};

export type Subscription_RootPracticeYieldTypeStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PracticeYieldTypeStreamCursorInput>>;
  where?: InputMaybe<PracticeYieldTypeBoolExp>;
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

export type Subscription_RootStudentArgs = {
  distinctOn?: InputMaybe<Array<StudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentOrderBy>>;
  where?: InputMaybe<StudentBoolExp>;
};

export type Subscription_RootStudentAggregateArgs = {
  distinctOn?: InputMaybe<Array<StudentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentOrderBy>>;
  where?: InputMaybe<StudentBoolExp>;
};

export type Subscription_RootStudentByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootStudentStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<StudentStreamCursorInput>>;
  where?: InputMaybe<StudentBoolExp>;
};

export type Subscription_RootStudentToCourseArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

export type Subscription_RootStudentToCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<StudentToCourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StudentToCourseOrderBy>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
};

export type Subscription_RootStudentToCourseByPkArgs = {
  courseId: Scalars['uuid'];
  studentId: Scalars['uuid'];
};

export type Subscription_RootStudentToCourseStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<StudentToCourseStreamCursorInput>>;
  where?: InputMaybe<StudentToCourseBoolExp>;
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

export type Subscription_RootVerificationRequestsArgs = {
  distinctOn?: InputMaybe<Array<VerificationRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationRequestsOrderBy>>;
  where?: InputMaybe<VerificationRequestsBoolExp>;
};

export type Subscription_RootVerificationRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VerificationRequestsOrderBy>>;
  where?: InputMaybe<VerificationRequestsBoolExp>;
};

export type Subscription_RootVerificationRequestsByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootVerificationRequestsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<VerificationRequestsStreamCursorInput>>;
  where?: InputMaybe<VerificationRequestsBoolExp>;
};

export type UserAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: IntComparisonExp;
};

export type GradeMetricInputYieldFragment = {
  __typename?: 'PracticeYield';
  id: any;
  meta?: any | null;
  method: PracticeYieldTypeEnum;
  name: string;
  description?: string | null;
};

export type GetYieldsForNewGradeTpQueryVariables = Exact<{
  tpId: Scalars['uuid'];
}>;

export type GetYieldsForNewGradeTpQuery = {
  __typename?: 'query_root';
  practiceByPk?: {
    __typename?: 'Practice';
    id: any;
    title: string;
    practiceYields: Array<{
      __typename?: 'PracticeYield';
      id: any;
      meta?: any | null;
      method: PracticeYieldTypeEnum;
      name: string;
      description?: string | null;
    }>;
  } | null;
};

export type InsertYieldGradeMetricNewDataMutationVariables = Exact<{
  data:
    | Array<PracticeYieldExpectedOutputInsertInput>
    | PracticeYieldExpectedOutputInsertInput;
}>;

export type InsertYieldGradeMetricNewDataMutation = {
  __typename?: 'mutation_root';
  insertPracticeYieldExpectedOutput?: {
    __typename?: 'PracticeYieldExpectedOutputMutationResponse';
    affectedRows: number;
    returning: Array<{ __typename?: 'PracticeYieldExpectedOutput'; id: any }>;
  } | null;
};

export type InsertNewPracticeToCourseMutationVariables = Exact<{
  close_date: Scalars['timestamptz'];
  open_date: Scalars['timestamptz'];
  practice_id: Scalars['uuid'];
  courseId: Scalars['uuid'];
}>;

export type InsertNewPracticeToCourseMutation = {
  __typename?: 'mutation_root';
  insertPracticeToCourse?: {
    __typename?: 'PracticeToCourseMutationResponse';
    returning: Array<{ __typename?: 'PracticeToCourse'; id: any }>;
  } | null;
};

export type InsertFeedbackForGradeMetricMutationVariables = Exact<{
  id: Scalars['uuid'];
  feedback: Scalars['jsonb'];
}>;

export type InsertFeedbackForGradeMetricMutation = {
  __typename?: 'mutation_root';
  updatePracticeYieldGradeMetricByPk?: {
    __typename?: 'PracticeYieldGradeMetric';
    feedbacks: any;
    id: any;
    name: string;
    points: number;
  } | null;
};

export type InsertPracticeToStudentGradeMetricMutationVariables = Exact<{
  objects:
    | Array<PracticeToStudentGradeMetricInsertInput>
    | PracticeToStudentGradeMetricInsertInput;
}>;

export type InsertPracticeToStudentGradeMetricMutation = {
  __typename?: 'mutation_root';
  insertPracticeToStudentGradeMetric?: {
    __typename?: 'PracticeToStudentGradeMetricMutationResponse';
    affectedRows: number;
    returning: Array<{
      __typename?: 'PracticeToStudentGradeMetric';
      createdAt: any;
      feedback: any;
      percentGrade: any;
      id: any;
      practiceToStudentYieldId: any;
      practiceYieldGradeMetricId: any;
    }>;
  } | null;
};

export type GetFileDataFromServerQueryVariables = Exact<{
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
}>;

export type GetFileDataFromServerQuery = {
  __typename?: 'query_root';
  getGitFileData?: {
    __typename?: 'GetGitFileDataOutput';
    content?: string | null;
    encoding?: string | null;
  } | null;
};

export type GetLogDataFromServerQueryVariables = Exact<{
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
}>;

export type GetLogDataFromServerQuery = {
  __typename?: 'query_root';
  getGitLogData: Array<{
    __typename?: 'CommitItem';
    author_profile_picture?: string | null;
    commit_message?: string | null;
    commit_author_date?: string | null;
    commit_author_email?: string | null;
    commit_author_name?: string | null;
    commit_committer_date?: string | null;
    commit_committer_email?: string | null;
    commit_committer_name?: string | null;
    commit_tree_created?: string | null;
    commit_tree_sha?: string | null;
    commit_tree_url?: string | null;
    commit_url?: string | null;
    created?: string | null;
    html_url?: string | null;
    sha?: string | null;
    url?: string | null;
    parents?: any | null;
  }>;
};

export type YieldPracticeInputFragment = {
  __typename?: 'PracticeYield';
  id: any;
  meta?: any | null;
  method: PracticeYieldTypeEnum;
  name: string;
  description?: string | null;
};

export type HandOffByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type HandOffByIdQuery = {
  __typename?: 'query_root';
  practiceToCourseByPk?: {
    __typename?: 'PracticeToCourse';
    is_open?: boolean | null;
    openDate?: any | null;
    closeDate?: any | null;
    id: any;
    practice: {
      __typename?: 'Practice';
      title: string;
      description?: string | null;
      id: any;
      practiceYields: Array<{
        __typename?: 'PracticeYield';
        id: any;
        meta?: any | null;
        method: PracticeYieldTypeEnum;
        name: string;
        description?: string | null;
      }>;
    };
    practiceToStudents: Array<{
      __typename?: 'PracticeToStudent';
      id: any;
      studentId: any;
    }>;
  } | null;
};

export type SubmitHandoffMutationVariables = Exact<{
  practiceToPromotionId: Scalars['uuid'];
  yields: Array<YieldForHandoff> | YieldForHandoff;
}>;

export type SubmitHandoffMutation = {
  __typename?: 'mutation_root';
  submitHandoff?: { __typename?: 'SubmitHandoffOutput'; status: string } | null;
};

export type HandoffListQueryVariables = Exact<{ [key: string]: never }>;

export type HandoffListQuery = {
  __typename?: 'query_root';
  course: Array<{
    __typename?: 'Course';
    name: string;
    years: string;
    id: any;
    practiceToCourses: Array<{
      __typename?: 'PracticeToCourse';
      is_open?: boolean | null;
      openDate?: any | null;
      closeDate?: any | null;
      id: any;
      practice: { __typename?: 'Practice'; title: string; id: any };
      practiceToStudents: Array<{
        __typename?: 'PracticeToStudent';
        id: any;
        studentId: any;
      }>;
    }>;
  }>;
};

export type HandoffCourseFragment = {
  __typename?: 'Course';
  name: string;
  years: string;
  id: any;
  practiceToCourses: Array<{
    __typename?: 'PracticeToCourse';
    is_open?: boolean | null;
    openDate?: any | null;
    closeDate?: any | null;
    id: any;
    practice: { __typename?: 'Practice'; title: string; id: any };
    practiceToStudents: Array<{
      __typename?: 'PracticeToStudent';
      id: any;
      studentId: any;
    }>;
  }>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: 'query_root';
  user: Array<{
    __typename?: 'User';
    createdAt: any;
    email: string;
    updatedAt: any;
    id: any;
  }>;
};

export type ListTpYieldTypesQueryVariables = Exact<{ [key: string]: never }>;

export type ListTpYieldTypesQuery = {
  __typename?: 'query_root';
  practiceYieldType: Array<{ __typename?: 'PracticeYieldType'; name: string }>;
};

export type CourseDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type CourseDetailsQuery = {
  __typename?: 'query_root';
  courseByPk?: {
    __typename?: 'Course';
    name: string;
    years: string;
    studentToCoursesAggregate: {
      __typename?: 'StudentToCourseAggregate';
      nodes: Array<{
        __typename?: 'StudentToCourse';
        student: {
          __typename?: 'Student';
          id: any;
          email?: string | null;
          full_name?: string | null;
          userId?: any | null;
        };
      }>;
      aggregate?: {
        __typename?: 'StudentToCourseAggregateFields';
        count: number;
      } | null;
    };
  } | null;
};

export type SendStudentClaimMailMutationVariables = Exact<{
  studentsIds: Array<InputMaybe<Scalars['uuid']>> | InputMaybe<Scalars['uuid']>;
}>;

export type SendStudentClaimMailMutation = {
  __typename?: 'mutation_root';
  sendStudentClaimMail?: {
    __typename?: 'SendStudentClaimMailOutput';
    nmbMailSent: number;
  } | null;
};

export type CourseCardFragment = {
  __typename?: 'Course';
  id: any;
  name: string;
  years: string;
  studentToCoursesAggregate: {
    __typename?: 'StudentToCourseAggregate';
    aggregate?: {
      __typename?: 'StudentToCourseAggregateFields';
      count: number;
    } | null;
  };
};

export type ListCoursesQueryVariables = Exact<{ [key: string]: never }>;

export type ListCoursesQuery = {
  __typename?: 'query_root';
  course: Array<{
    __typename?: 'Course';
    id: any;
    name: string;
    years: string;
    studentToCoursesAggregate: {
      __typename?: 'StudentToCourseAggregate';
      aggregate?: {
        __typename?: 'StudentToCourseAggregateFields';
        count: number;
      } | null;
    };
  }>;
};

export type CreateCourseMutationVariables = Exact<{
  name: Scalars['String'];
  years: Scalars['String'];
  students: Array<StudentToCourseInsertInput> | StudentToCourseInsertInput;
}>;

export type CreateCourseMutation = {
  __typename?: 'mutation_root';
  insertCourseOne?: { __typename?: 'Course'; createdAt: any; id: any } | null;
};

export type FetchDataForStudentDashboardQueryVariables = Exact<{
  [key: string]: never;
}>;

export type FetchDataForStudentDashboardQuery = {
  __typename?: 'query_root';
  practiceToStudent: Array<{
    __typename?: 'PracticeToStudent';
    submited: boolean;
    studentGrade?: {
      __typename?: 'PracticeToStudentGrade';
      grade?: any | null;
      gradeDetail?: any | null;
    } | null;
    studentFeedback?: {
      __typename?: 'PracticeToStudentFeedback';
      feedback?: any | null;
    } | null;
    practiceToCourse: {
      __typename?: 'PracticeToCourse';
      is_open?: boolean | null;
      course: { __typename?: 'Course'; name: string };
      practice: { __typename?: 'Practice'; title: string };
    };
  }>;
};

export type GetPracticeToStudentForGradingQueryVariables = Exact<{
  courseId: Scalars['uuid'];
  practiceId: Scalars['uuid'];
}>;

export type GetPracticeToStudentForGradingQuery = {
  __typename?: 'query_root';
  practiceToCourse: Array<{
    __typename?: 'PracticeToCourse';
    practiceToStudents: Array<{
      __typename?: 'PracticeToStudent';
      grade?: any | null;
      student: { __typename?: 'Student'; full_name?: string | null };
    }>;
    course: {
      __typename?: 'Course';
      studentToCoursesAggregate: {
        __typename?: 'StudentToCourseAggregate';
        aggregate?: {
          __typename?: 'StudentToCourseAggregateFields';
          count: number;
        } | null;
      };
    };
  }>;
  practiceYield: Array<{
    __typename?: 'PracticeYield';
    id: any;
    name: string;
    practiceToStudentYields: Array<{
      __typename?: 'PracticeToStudentYield';
      giteaOrgAndRepo?: string | null;
      value: string;
      practiceYieldId: any;
      practiceToStudentYieldId: any;
      practiceToStudentGradeMetrics: Array<{
        __typename?: 'PracticeToStudentGradeMetric';
        id: any;
        feedback: any;
        createdAt: any;
        percentGrade: any;
        practiceYieldGradeMetricId: any;
        updatedAt: any;
      }>;
    }>;
    practiceYieldExpectedOutputs: Array<{
      __typename?: 'PracticeYieldExpectedOutput';
      id: any;
      codeLang?: string | null;
      expected?: string | null;
      gitPath?: string | null;
      method: PracticeYieldExpectedOutputTypesEnum;
      practiceYieldId: any;
      practiceYieldGradeMetrics: Array<{
        __typename?: 'PracticeYieldGradeMetric';
        id: any;
        name: string;
        points: number;
        feedbacks: any;
        createdAt: any;
        practiceToStudentGradeMetricsAggregate: {
          __typename?: 'PracticeToStudentGradeMetricAggregate';
          aggregate?: {
            __typename?: 'PracticeToStudentGradeMetricAggregateFields';
            count: number;
          } | null;
          nodes: Array<{
            __typename?: 'PracticeToStudentGradeMetric';
            practiceYieldGradeMetricId: any;
            practiceToStudentYieldId: any;
          }>;
        };
      }>;
    }>;
  }>;
};

export type PracticeToStudentYieldForGradingFragment = {
  __typename?: 'PracticeToStudentYield';
  giteaOrgAndRepo?: string | null;
  value: string;
  practiceYieldId: any;
  practiceToStudentYieldId: any;
  practiceToStudentGradeMetrics: Array<{
    __typename?: 'PracticeToStudentGradeMetric';
    id: any;
    feedback: any;
    createdAt: any;
    percentGrade: any;
    practiceYieldGradeMetricId: any;
    updatedAt: any;
  }>;
};

export type PracticeToStudentGradeMetricForGradingFragment = {
  __typename?: 'PracticeToStudentGradeMetric';
  id: any;
  feedback: any;
  createdAt: any;
  percentGrade: any;
  practiceYieldGradeMetricId: any;
  updatedAt: any;
};

export type TriggerRefreshGradesMutationVariables = Exact<{
  practice_id: Scalars['uuid'];
  course_id: Scalars['uuid'];
}>;

export type TriggerRefreshGradesMutation = {
  __typename?: 'mutation_root';
  refreshGrades?: {
    __typename?: 'RefreshGradesOutput';
    affected_rows: number;
  } | null;
};

export type PracticeToPromoDetailsFragment = {
  __typename?: 'PracticeToCourse';
  closeDate?: any | null;
  createdAt: any;
  giteaOrgName?: string | null;
  is_open?: boolean | null;
  id: any;
  openDate?: any | null;
  updatedAt: any;
  course: {
    __typename?: 'Course';
    name: string;
    years: string;
    id: any;
    studentToCourses: Array<{
      __typename?: 'StudentToCourse';
      courseId: any;
      studentId: any;
      student: {
        __typename?: 'Student';
        id: any;
        full_name?: string | null;
        email?: string | null;
        practiceToStudents: Array<{
          __typename?: 'PracticeToStudent';
          createdAt: any;
          grade?: any | null;
          submited: boolean;
        }>;
      };
    }>;
  };
};

export type GetPracticeDetailQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPracticeDetailQuery = {
  __typename?: 'query_root';
  practiceByPk?: {
    __typename?: 'Practice';
    id: any;
    title: string;
    practiceYieldsAggregate: {
      __typename?: 'PracticeYieldAggregate';
      aggregate?: {
        __typename?: 'PracticeYieldAggregateFields';
        count: number;
      } | null;
      nodes: Array<{
        __typename?: 'PracticeYield';
        id: any;
        name: string;
        method: PracticeYieldTypeEnum;
        meta?: any | null;
        practiceYieldExpectedOutputsAggregate: {
          __typename?: 'PracticeYieldExpectedOutputAggregate';
          aggregate?: {
            __typename?: 'PracticeYieldExpectedOutputAggregateFields';
            count: number;
          } | null;
          nodes: Array<{
            __typename?: 'PracticeYieldExpectedOutput';
            id: any;
            practiceYieldGradeMetricsAggregate: {
              __typename?: 'PracticeYieldGradeMetricAggregate';
              aggregate?: {
                __typename?: 'PracticeYieldGradeMetricAggregateFields';
                count: number;
                sum?: {
                  __typename?: 'PracticeYieldGradeMetricSumFields';
                  points?: number | null;
                } | null;
              } | null;
            };
          }>;
        };
      }>;
    };
    practiceToCoursesAggregate: {
      __typename?: 'PracticeToCourseAggregate';
      aggregate?: {
        __typename?: 'PracticeToCourseAggregateFields';
        count: number;
      } | null;
      nodes: Array<{
        __typename?: 'PracticeToCourse';
        closeDate?: any | null;
        createdAt: any;
        giteaOrgName?: string | null;
        is_open?: boolean | null;
        id: any;
        openDate?: any | null;
        updatedAt: any;
        course: {
          __typename?: 'Course';
          name: string;
          years: string;
          id: any;
          studentToCourses: Array<{
            __typename?: 'StudentToCourse';
            courseId: any;
            studentId: any;
            student: {
              __typename?: 'Student';
              id: any;
              full_name?: string | null;
              email?: string | null;
              practiceToStudents: Array<{
                __typename?: 'PracticeToStudent';
                createdAt: any;
                grade?: any | null;
                submited: boolean;
              }>;
            };
          }>;
        };
      }>;
    };
  } | null;
};

export type GetPromotionForTpAddQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetPromotionForTpAddQuery = {
  __typename?: 'query_root';
  course: Array<{
    __typename?: 'Course';
    id: any;
    name: string;
    years: string;
  }>;
};

export type GetPracticeForGradeMetricQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPracticeForGradeMetricQuery = {
  __typename?: 'query_root';
  practiceByPk?: { __typename?: 'Practice'; id: any; title: string } | null;
};

export type PracticeListItemFragment = {
  __typename?: 'Practice';
  id: any;
  title: string;
  practiceToCourses: Array<{
    __typename?: 'PracticeToCourse';
    id: any;
    closeDate?: any | null;
    openDate?: any | null;
    course: { __typename?: 'Course'; name: string; years: string };
  }>;
};

export type ListPracticeQueryVariables = Exact<{ [key: string]: never }>;

export type ListPracticeQuery = {
  __typename?: 'query_root';
  practice: Array<{
    __typename?: 'Practice';
    id: any;
    title: string;
    practiceToCourses: Array<{
      __typename?: 'PracticeToCourse';
      id: any;
      closeDate?: any | null;
      openDate?: any | null;
      course: { __typename?: 'Course'; name: string; years: string };
    }>;
  }>;
};

export type CreateNewPracticeMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  data: Array<PracticeYieldInsertInput> | PracticeYieldInsertInput;
}>;

export type CreateNewPracticeMutation = {
  __typename?: 'mutation_root';
  insertPracticeOne?: {
    __typename?: 'Practice';
    createdAt: any;
    id: any;
    title: string;
    updatedAt: any;
  } | null;
};

export const GradeMetricInputYieldFragmentDoc = gql`
  fragment GradeMetricInputYield on PracticeYield {
    id
    meta
    method
    name
    description
  }
`;
export const YieldPracticeInputFragmentDoc = gql`
  fragment YieldPracticeInput on PracticeYield {
    id
    meta
    method
    name
    description
  }
`;
export const HandoffCourseFragmentDoc = gql`
  fragment HandoffCourse on Course {
    name
    years
    id
    practiceToCourses(orderBy: { closeDate: DESC }) {
      practice {
        title
        id
      }
      practiceToStudents {
        id
        studentId
      }
      is_open
      openDate
      closeDate
      id
    }
  }
`;
export const CourseCardFragmentDoc = gql`
  fragment CourseCard on Course {
    id
    name
    years
    studentToCoursesAggregate {
      aggregate {
        count
      }
    }
  }
`;
export const PracticeToStudentGradeMetricForGradingFragmentDoc = gql`
  fragment PracticeToStudentGradeMetricForGrading on PracticeToStudentGradeMetric {
    id
    feedback
    createdAt
    percentGrade
    practiceYieldGradeMetricId
    updatedAt
  }
`;
export const PracticeToStudentYieldForGradingFragmentDoc = gql`
  fragment PracticeToStudentYieldForGrading on PracticeToStudentYield {
    practiceToStudentYieldId: id
    giteaOrgAndRepo
    value
    practiceYieldId
    practiceToStudentGradeMetrics {
      ...PracticeToStudentGradeMetricForGrading
    }
  }
  ${PracticeToStudentGradeMetricForGradingFragmentDoc}
`;
export const PracticeToPromoDetailsFragmentDoc = gql`
  fragment PracticeToPromoDetails on PracticeToCourse {
    course {
      name
      years
      id
      studentToCourses {
        courseId
        studentId
        student {
          id
          full_name
          email
          practiceToStudents(
            where: { practiceToCourse: { practiceId: { _eq: $id } } }
          ) {
            createdAt
            grade
            submited
          }
        }
      }
    }
    closeDate
    createdAt
    giteaOrgName
    is_open
    id
    openDate
    updatedAt
  }
`;
export const PracticeListItemFragmentDoc = gql`
  fragment PracticeListItem on Practice {
    id
    title
    practiceToCourses {
      id
      closeDate
      openDate
      course {
        name
        years
      }
    }
  }
`;
export const GetYieldsForNewGradeTpDocument = gql`
  query getYieldsForNewGradeTp($tpId: uuid!) {
    practiceByPk(id: $tpId) {
      id
      title
      practiceYields(orderBy: { method: ASC }) {
        ...GradeMetricInputYield
      }
    }
  }
  ${GradeMetricInputYieldFragmentDoc}
`;

export function useGetYieldsForNewGradeTpQuery(
  options: Omit<
    Urql.UseQueryArgs<GetYieldsForNewGradeTpQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    GetYieldsForNewGradeTpQuery,
    GetYieldsForNewGradeTpQueryVariables
  >({ query: GetYieldsForNewGradeTpDocument, ...options });
}
export const InsertYieldGradeMetricNewDataDocument = gql`
  mutation insertYieldGradeMetricNewData(
    $data: [PracticeYieldExpectedOutputInsertInput!]!
  ) {
    insertPracticeYieldExpectedOutput(objects: $data) {
      affectedRows
      returning {
        id
      }
    }
  }
`;

export function useInsertYieldGradeMetricNewDataMutation() {
  return Urql.useMutation<
    InsertYieldGradeMetricNewDataMutation,
    InsertYieldGradeMetricNewDataMutationVariables
  >(InsertYieldGradeMetricNewDataDocument);
}
export const InsertNewPracticeToCourseDocument = gql`
  mutation insertNewPracticeToCourse(
    $close_date: timestamptz!
    $open_date: timestamptz!
    $practice_id: uuid!
    $courseId: uuid!
  ) {
    insertPracticeToCourse(
      objects: {
        closeDate: $close_date
        openDate: $open_date
        practiceId: $practice_id
        courseId: courseId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useInsertNewPracticeToCourseMutation() {
  return Urql.useMutation<
    InsertNewPracticeToCourseMutation,
    InsertNewPracticeToCourseMutationVariables
  >(InsertNewPracticeToCourseDocument);
}
export const InsertFeedbackForGradeMetricDocument = gql`
  mutation insertFeedbackForGradeMetric($id: uuid!, $feedback: jsonb!) {
    updatePracticeYieldGradeMetricByPk(
      pkColumns: { id: $id }
      _append: { feedbacks: $feedback }
    ) {
      feedbacks
      id
      name
      points
    }
  }
`;

export function useInsertFeedbackForGradeMetricMutation() {
  return Urql.useMutation<
    InsertFeedbackForGradeMetricMutation,
    InsertFeedbackForGradeMetricMutationVariables
  >(InsertFeedbackForGradeMetricDocument);
}
export const InsertPracticeToStudentGradeMetricDocument = gql`
  mutation insertPracticeToStudentGradeMetric(
    $objects: [PracticeToStudentGradeMetricInsertInput!]!
  ) {
    insertPracticeToStudentGradeMetric(
      objects: $objects
      onConflict: {
        constraint: practice_to_student_grade_metric_practice_yield_grade_metric_id
        updateColumns: [percentGrade, feedback]
      }
    ) {
      affectedRows
      returning {
        createdAt
        feedback
        percentGrade
        id
        practiceToStudentYieldId
        practiceYieldGradeMetricId
      }
    }
  }
`;

export function useInsertPracticeToStudentGradeMetricMutation() {
  return Urql.useMutation<
    InsertPracticeToStudentGradeMetricMutation,
    InsertPracticeToStudentGradeMetricMutationVariables
  >(InsertPracticeToStudentGradeMetricDocument);
}
export const GetFileDataFromServerDocument = gql`
  query getFileDataFromServer(
    $practice_to_student_yield_id: uuid!
    $practice_yield_expected_output_id: uuid!
  ) {
    getGitFileData(
      practice_to_student_yield_id: $practice_to_student_yield_id
      practice_yield_expected_output_id: $practice_yield_expected_output_id
    ) {
      content
      encoding
    }
  }
`;

export function useGetFileDataFromServerQuery(
  options: Omit<Urql.UseQueryArgs<GetFileDataFromServerQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetFileDataFromServerQuery,
    GetFileDataFromServerQueryVariables
  >({ query: GetFileDataFromServerDocument, ...options });
}
export const GetLogDataFromServerDocument = gql`
  query getLogDataFromServer(
    $practice_to_student_yield_id: uuid!
    $practice_yield_expected_output_id: uuid!
  ) {
    getGitLogData(
      practice_to_student_yield_id: $practice_to_student_yield_id
      practice_yield_expected_output_id: $practice_yield_expected_output_id
    ) {
      author_profile_picture
      commit_message
      commit_author_date
      commit_author_email
      commit_author_name
      commit_committer_date
      commit_committer_email
      commit_committer_name
      commit_tree_created
      commit_tree_sha
      commit_tree_url
      commit_url
      created
      html_url
      sha
      url
      parents
    }
  }
`;

export function useGetLogDataFromServerQuery(
  options: Omit<Urql.UseQueryArgs<GetLogDataFromServerQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetLogDataFromServerQuery,
    GetLogDataFromServerQueryVariables
  >({ query: GetLogDataFromServerDocument, ...options });
}
export const HandOffByIdDocument = gql`
  query HandOffById($id: uuid!) {
    practiceToCourseByPk(id: $id) {
      practice {
        title
        description
        id
        practiceYields {
          ...YieldPracticeInput
        }
      }
      practiceToStudents {
        id
        studentId
      }
      is_open
      openDate
      closeDate
      id
    }
  }
  ${YieldPracticeInputFragmentDoc}
`;

export function useHandOffByIdQuery(
  options: Omit<Urql.UseQueryArgs<HandOffByIdQueryVariables>, 'query'>
) {
  return Urql.useQuery<HandOffByIdQuery, HandOffByIdQueryVariables>({
    query: HandOffByIdDocument,
    ...options,
  });
}
export const SubmitHandoffDocument = gql`
  mutation submitHandoff(
    $practiceToPromotionId: uuid!
    $yields: [YieldForHandoff!]!
  ) {
    submitHandoff(
      practiceToPromotionId: $practiceToPromotionId
      yields: $yields
    ) {
      status
    }
  }
`;

export function useSubmitHandoffMutation() {
  return Urql.useMutation<
    SubmitHandoffMutation,
    SubmitHandoffMutationVariables
  >(SubmitHandoffDocument);
}
export const HandoffListDocument = gql`
  query handoffList {
    course(orderBy: { createdAt: DESC }) {
      ...HandoffCourse
    }
  }
  ${HandoffCourseFragmentDoc}
`;

export function useHandoffListQuery(
  options?: Omit<Urql.UseQueryArgs<HandoffListQueryVariables>, 'query'>
) {
  return Urql.useQuery<HandoffListQuery, HandoffListQueryVariables>({
    query: HandoffListDocument,
    ...options,
  });
}
export const CurrentUserDocument = gql`
  query currentUser {
    user {
      createdAt
      email
      updatedAt
      id
    }
  }
`;

export function useCurrentUserQuery(
  options?: Omit<Urql.UseQueryArgs<CurrentUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<CurrentUserQuery, CurrentUserQueryVariables>({
    query: CurrentUserDocument,
    ...options,
  });
}
export const ListTpYieldTypesDocument = gql`
  query listTpYieldTypes {
    practiceYieldType {
      name
    }
  }
`;

export function useListTpYieldTypesQuery(
  options?: Omit<Urql.UseQueryArgs<ListTpYieldTypesQueryVariables>, 'query'>
) {
  return Urql.useQuery<ListTpYieldTypesQuery, ListTpYieldTypesQueryVariables>({
    query: ListTpYieldTypesDocument,
    ...options,
  });
}
export const CourseDetailsDocument = gql`
  query courseDetails($id: uuid!) {
    courseByPk(id: $id) {
      name
      years
      studentToCoursesAggregate {
        nodes {
          student {
            id
            email
            full_name
            userId
          }
        }
        aggregate {
          count
        }
      }
    }
  }
`;

export function useCourseDetailsQuery(
  options: Omit<Urql.UseQueryArgs<CourseDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<CourseDetailsQuery, CourseDetailsQueryVariables>({
    query: CourseDetailsDocument,
    ...options,
  });
}
export const SendStudentClaimMailDocument = gql`
  mutation sendStudentClaimMail($studentsIds: [uuid]!) {
    sendStudentClaimMail(studentsIds: $studentsIds) {
      nmbMailSent
    }
  }
`;

export function useSendStudentClaimMailMutation() {
  return Urql.useMutation<
    SendStudentClaimMailMutation,
    SendStudentClaimMailMutationVariables
  >(SendStudentClaimMailDocument);
}
export const ListCoursesDocument = gql`
  query ListCourses {
    course {
      ...CourseCard
    }
  }
  ${CourseCardFragmentDoc}
`;

export function useListCoursesQuery(
  options?: Omit<Urql.UseQueryArgs<ListCoursesQueryVariables>, 'query'>
) {
  return Urql.useQuery<ListCoursesQuery, ListCoursesQueryVariables>({
    query: ListCoursesDocument,
    ...options,
  });
}
export const CreateCourseDocument = gql`
  mutation CreateCourse(
    $name: String!
    $years: String!
    $students: [StudentToCourseInsertInput!]!
  ) {
    insertCourseOne(
      object: {
        name: $name
        years: $years
        studentToCourses: { data: $students }
      }
    ) {
      createdAt
      id
    }
  }
`;

export function useCreateCourseMutation() {
  return Urql.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(
    CreateCourseDocument
  );
}
export const FetchDataForStudentDashboardDocument = gql`
  query fetchDataForStudentDashboard {
    practiceToStudent {
      submited
      studentGrade {
        grade
        gradeDetail
      }
      studentFeedback {
        feedback
      }
      practiceToCourse {
        is_open
        course {
          name
        }
        practice {
          title
        }
      }
    }
  }
`;

export function useFetchDataForStudentDashboardQuery(
  options?: Omit<
    Urql.UseQueryArgs<FetchDataForStudentDashboardQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    FetchDataForStudentDashboardQuery,
    FetchDataForStudentDashboardQueryVariables
  >({ query: FetchDataForStudentDashboardDocument, ...options });
}
export const GetPracticeToStudentForGradingDocument = gql`
  query getPracticeToStudentForGrading($courseId: uuid!, $practiceId: uuid!) {
    practiceToCourse(
      where: {
        courseId: { _eq: $courseId }
        _and: { practiceId: { _eq: $practiceId } }
      }
    ) {
      practiceToStudents {
        grade
        student {
          full_name
        }
      }
      course {
        studentToCoursesAggregate {
          aggregate {
            count
          }
        }
      }
    }
    practiceYield(
      where: {
        practice: {
          practiceToCourses: {
            courseId: { _eq: $courseId }
            _and: { practiceId: { _eq: $practiceId } }
          }
        }
      }
    ) {
      id
      name
      practiceToStudentYields(
        where: {
          submited: { _eq: true }
          _and: {
            practiceToStudent: {
              practiceToCourse: {
                courseId: { _eq: $courseId }
                _and: { practiceId: { _eq: $practiceId } }
              }
            }
          }
        }
      ) {
        ...PracticeToStudentYieldForGrading
      }
      practiceYieldExpectedOutputs {
        id
        codeLang
        expected
        gitPath
        method
        practiceYieldId
        practiceYieldGradeMetrics(orderBy: { createdAt: DESC }) {
          id
          name
          points
          feedbacks
          createdAt
          practiceToStudentGradeMetricsAggregate(
            where: {
              practiceToStudentYield: {
                practiceToStudent: {
                  practiceToCourse: {
                    courseId: { _eq: $courseId }
                    _and: { practiceId: { _eq: $practiceId } }
                  }
                }
              }
            }
          ) {
            aggregate {
              count
            }
            nodes {
              practiceYieldGradeMetricId
              practiceToStudentYieldId
            }
          }
        }
      }
    }
  }
  ${PracticeToStudentYieldForGradingFragmentDoc}
`;

export function useGetPracticeToStudentForGradingQuery(
  options: Omit<
    Urql.UseQueryArgs<GetPracticeToStudentForGradingQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    GetPracticeToStudentForGradingQuery,
    GetPracticeToStudentForGradingQueryVariables
  >({ query: GetPracticeToStudentForGradingDocument, ...options });
}
export const TriggerRefreshGradesDocument = gql`
  mutation triggerRefreshGrades($practice_id: uuid!, $course_id: uuid!) {
    refreshGrades(course_id: $course_id, practice_id: $practice_id) {
      affected_rows
    }
  }
`;

export function useTriggerRefreshGradesMutation() {
  return Urql.useMutation<
    TriggerRefreshGradesMutation,
    TriggerRefreshGradesMutationVariables
  >(TriggerRefreshGradesDocument);
}
export const GetPracticeDetailDocument = gql`
  query getPracticeDetail($id: uuid!) {
    practiceByPk(id: $id) {
      id
      title
      practiceYieldsAggregate(orderBy: { createdAt: ASC }) {
        aggregate {
          count
        }
        nodes {
          id
          name
          method
          meta
          practiceYieldExpectedOutputsAggregate {
            aggregate {
              count
            }
            nodes {
              id
              practiceYieldGradeMetricsAggregate {
                aggregate {
                  count
                  sum {
                    points
                  }
                }
              }
            }
          }
        }
      }
      practiceToCoursesAggregate {
        aggregate {
          count
        }
        nodes {
          ...PracticeToPromoDetails
        }
      }
    }
  }
  ${PracticeToPromoDetailsFragmentDoc}
`;

export function useGetPracticeDetailQuery(
  options: Omit<Urql.UseQueryArgs<GetPracticeDetailQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetPracticeDetailQuery, GetPracticeDetailQueryVariables>(
    { query: GetPracticeDetailDocument, ...options }
  );
}
export const GetPromotionForTpAddDocument = gql`
  query getPromotionForTpAdd {
    course(orderBy: { updatedAt: ASC }) {
      id
      name
      years
    }
  }
`;

export function useGetPromotionForTpAddQuery(
  options?: Omit<Urql.UseQueryArgs<GetPromotionForTpAddQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetPromotionForTpAddQuery,
    GetPromotionForTpAddQueryVariables
  >({ query: GetPromotionForTpAddDocument, ...options });
}
export const GetPracticeForGradeMetricDocument = gql`
  query getPracticeForGradeMetric($id: uuid!) {
    practiceByPk(id: $id) {
      id
      title
    }
  }
`;

export function useGetPracticeForGradeMetricQuery(
  options: Omit<
    Urql.UseQueryArgs<GetPracticeForGradeMetricQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    GetPracticeForGradeMetricQuery,
    GetPracticeForGradeMetricQueryVariables
  >({ query: GetPracticeForGradeMetricDocument, ...options });
}
export const ListPracticeDocument = gql`
  query ListPractice {
    practice(orderBy: { createdAt: DESC }) {
      ...PracticeListItem
    }
  }
  ${PracticeListItemFragmentDoc}
`;

export function useListPracticeQuery(
  options?: Omit<Urql.UseQueryArgs<ListPracticeQueryVariables>, 'query'>
) {
  return Urql.useQuery<ListPracticeQuery, ListPracticeQueryVariables>({
    query: ListPracticeDocument,
    ...options,
  });
}
export const CreateNewPracticeDocument = gql`
  mutation createNewPractice(
    $title: String!
    $description: String!
    $data: [PracticeYieldInsertInput!]!
  ) {
    insertPracticeOne(
      object: {
        title: $title
        description: $description
        practiceYields: { data: $data }
      }
    ) {
      createdAt
      id
      title
      updatedAt
    }
  }
`;

export function useCreateNewPracticeMutation() {
  return Urql.useMutation<
    CreateNewPracticeMutation,
    CreateNewPracticeMutationVariables
  >(CreateNewPracticeDocument);
}
