import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
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
  json: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
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

export type FillEmptyYieldsOutput = {
  __typename?: 'FillEmptyYieldsOutput';
  affected_rows: Scalars['Int'];
};

export type GetGitFileDataOutput = {
  __typename?: 'GetGitFileDataOutput';
  content: Scalars['String'];
  download_url?: Maybe<Scalars['String']>;
  encoding: Scalars['String'];
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

export type GitFileInput = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

export type InsertStudentAnswerOutput = {
  __typename?: 'InsertStudentAnswerOutput';
  id: Scalars['uuid'];
  student_output?: Maybe<Scalars['jsonb']>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type RefreshGradesOutput = {
  __typename?: 'RefreshGradesOutput';
  affected_rows: Scalars['Int'];
};

export type SendStudentClaimMailOutput = {
  __typename?: 'SendStudentClaimMailOutput';
  nmbMailSent: Scalars['Int'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type SubmitHandoffOutput = {
  __typename?: 'SubmitHandoffOutput';
  status: Scalars['String'];
};

export type YieldForHandoff = {
  value: Scalars['String'];
  yieldId: Scalars['uuid'];
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  provider_account_id: Scalars['String'];
  provider_id: Scalars['String'];
  provider_type: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Accounts_Max_Order_By>;
  min?: Maybe<Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  onConflict?: Maybe<Accounts_onConflict>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsCompoundIdKey = 'accounts_compound_id_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  onConflict?: Maybe<Accounts_onConflict>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_onConflict = {
  constraint: Accounts_Constraint;
  updateColumns: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** ordering options when selecting data from "accounts" */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "allowed_roles" */
export type Allowed_Roles = {
  __typename?: 'allowed_roles';
  role: Roles_Enum;
  /** An object relationship */
  roleByRole: Roles;
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "allowed_roles" */
export type Allowed_Roles_Aggregate = {
  __typename?: 'allowed_roles_aggregate';
  aggregate?: Maybe<Allowed_Roles_Aggregate_Fields>;
  nodes: Array<Allowed_Roles>;
};

/** aggregate fields of "allowed_roles" */
export type Allowed_Roles_Aggregate_Fields = {
  __typename?: 'allowed_roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Allowed_Roles_Max_Fields>;
  min?: Maybe<Allowed_Roles_Min_Fields>;
};

/** aggregate fields of "allowed_roles" */
export type Allowed_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allowed_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "allowed_roles" */
export type Allowed_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Allowed_Roles_Max_Order_By>;
  min?: Maybe<Allowed_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "allowed_roles" */
export type Allowed_Roles_Arr_Rel_Insert_Input = {
  data: Array<Allowed_Roles_Insert_Input>;
  onConflict?: Maybe<Allowed_Roles_onConflict>;
};

/** Boolean expression to filter rows from the table "allowed_roles". All fields are combined with a logical 'AND'. */
export type Allowed_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Allowed_Roles_Bool_Exp>>>;
  _not?: Maybe<Allowed_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Allowed_Roles_Bool_Exp>>>;
  role?: Maybe<Roles_Enum_Comparison_Exp>;
  roleByRole?: Maybe<Roles_Bool_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "allowed_roles" */
export enum Allowed_Roles_Constraint {
  /** unique or primary key constraint */
  AllowedRolesPkey = 'allowed_roles_pkey',
}

/** input type for inserting data into table "allowed_roles" */
export type Allowed_Roles_Insert_Input = {
  role?: Maybe<Roles_Enum>;
  roleByRole?: Maybe<Roles_Obj_Rel_Insert_Input>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Allowed_Roles_Max_Fields = {
  __typename?: 'allowed_roles_max_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "allowed_roles" */
export type Allowed_Roles_Max_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Allowed_Roles_Min_Fields = {
  __typename?: 'allowed_roles_min_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "allowed_roles" */
export type Allowed_Roles_Min_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "allowed_roles" */
export type Allowed_Roles_Mutation_Response = {
  __typename?: 'allowed_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Allowed_Roles>;
};

/** input type for inserting object relation for remote table "allowed_roles" */
export type Allowed_Roles_Obj_Rel_Insert_Input = {
  data: Allowed_Roles_Insert_Input;
  onConflict?: Maybe<Allowed_Roles_onConflict>;
};

/** on conflict condition type for table "allowed_roles" */
export type Allowed_Roles_onConflict = {
  constraint: Allowed_Roles_Constraint;
  updateColumns: Array<Allowed_Roles_Update_Column>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "allowed_roles" */
export type Allowed_Roles_Order_By = {
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Roles_Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "allowed_roles" */
export type Allowed_Roles_Pk_Columns_Input = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** select columns of table "allowed_roles" */
export enum Allowed_Roles_Select_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "allowed_roles" */
export type Allowed_Roles_Set_Input = {
  role?: Maybe<Roles_Enum>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "allowed_roles" */
export enum Allowed_Roles_Update_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "course" */
export type Course = {
  __typename?: 'course';
  can_student_see_feedback: Scalars['Boolean'];
  can_student_see_grade: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  practice_to_courses: Array<Practice_To_Course>;
  /** An aggregated array relationship */
  practice_to_courses_aggregate: Practice_To_Course_Aggregate;
  /** An array relationship */
  student_to_courses: Array<Student_To_Course>;
  /** An aggregated array relationship */
  student_to_courses_aggregate: Student_To_Course_Aggregate;
  updated_at: Scalars['timestamptz'];
  years: Scalars['String'];
};

/** columns and relationships of "course" */
export type CoursePractice_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CoursePractice_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CourseStudent_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CourseStudent_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** aggregated selection of "course" */
export type Course_Aggregate = {
  __typename?: 'course_aggregate';
  aggregate?: Maybe<Course_Aggregate_Fields>;
  nodes: Array<Course>;
};

/** aggregate fields of "course" */
export type Course_Aggregate_Fields = {
  __typename?: 'course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Course_Max_Fields>;
  min?: Maybe<Course_Min_Fields>;
};

/** aggregate fields of "course" */
export type Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course" */
export type Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Max_Order_By>;
  min?: Maybe<Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "course" */
export type Course_Arr_Rel_Insert_Input = {
  data: Array<Course_Insert_Input>;
  onConflict?: Maybe<Course_onConflict>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Course_Bool_Exp>>>;
  _not?: Maybe<Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Course_Bool_Exp>>>;
  can_student_see_feedback?: Maybe<Boolean_Comparison_Exp>;
  can_student_see_grade?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  practice_to_courses?: Maybe<Practice_To_Course_Bool_Exp>;
  student_to_courses?: Maybe<Student_To_Course_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  years?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "course" */
export enum Course_Constraint {
  /** unique or primary key constraint */
  PromotionNameYearsKey = 'promotion_name_years_key',
  /** unique or primary key constraint */
  PromotionPkey = 'promotion_pkey',
}

/** input type for inserting data into table "course" */
export type Course_Insert_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_to_courses?: Maybe<Practice_To_Course_Arr_Rel_Insert_Input>;
  student_to_courses?: Maybe<Student_To_Course_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Course_Max_Fields = {
  __typename?: 'course_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "course" */
export type Course_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Min_Fields = {
  __typename?: 'course_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "course" */
export type Course_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** response of any mutation on the table "course" */
export type Course_Mutation_Response = {
  __typename?: 'course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "course" */
export type Course_Obj_Rel_Insert_Input = {
  data: Course_Insert_Input;
  onConflict?: Maybe<Course_onConflict>;
};

/** on conflict condition type for table "course" */
export type Course_onConflict = {
  constraint: Course_Constraint;
  updateColumns: Array<Course_Update_Column>;
  where?: Maybe<Course_Bool_Exp>;
};

/** ordering options when selecting data from "course" */
export type Course_Order_By = {
  can_student_see_feedback?: Maybe<Order_By>;
  can_student_see_grade?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_to_courses_aggregate?: Maybe<Practice_To_Course_Aggregate_Order_By>;
  student_to_courses_aggregate?: Maybe<Student_To_Course_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** primary key columns input for table: "course" */
export type Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "course" */
export enum Course_Select_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Years = 'years',
}

/** input type for updating data in table "course" */
export type Course_Set_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** update columns of table "course" */
export enum Course_Update_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Years = 'years',
}

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

export type LinkStudentToUserOutput = {
  __typename?: 'linkStudentToUserOutput';
  ok: Scalars['Boolean'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user" */
  deleteUser?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "allowed_roles" */
  delete_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** delete single row from the table: "allowed_roles" */
  delete_allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** delete data from the table: "course" */
  delete_course?: Maybe<Course_Mutation_Response>;
  /** delete single row from the table: "course" */
  delete_course_by_pk?: Maybe<Course>;
  /** delete data from the table: "practice" */
  delete_practice?: Maybe<Practice_Mutation_Response>;
  /** delete single row from the table: "practice" */
  delete_practice_by_pk?: Maybe<Practice>;
  /** delete data from the table: "practice_to_course" */
  delete_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** delete single row from the table: "practice_to_course" */
  delete_practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** delete data from the table: "practice_to_student" */
  delete_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** delete single row from the table: "practice_to_student" */
  delete_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** delete data from the table: "practice_to_student_feedback" */
  delete_practice_to_student_feedback?: Maybe<Practice_To_Student_Feedback_Mutation_Response>;
  /** delete data from the table: "practice_to_student_grade" */
  delete_practice_to_student_grade?: Maybe<Practice_To_Student_Grade_Mutation_Response>;
  /** delete data from the table: "practice_to_student_grade_metric" */
  delete_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** delete single row from the table: "practice_to_student_grade_metric" */
  delete_practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** delete data from the table: "practice_to_student_yield" */
  delete_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** delete single row from the table: "practice_to_student_yield" */
  delete_practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** delete data from the table: "practice_yield" */
  delete_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** delete single row from the table: "practice_yield" */
  delete_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** delete data from the table: "practice_yield_expected_output" */
  delete_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** delete single row from the table: "practice_yield_expected_output" */
  delete_practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** delete data from the table: "practice_yield_expected_output_types" */
  delete_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** delete single row from the table: "practice_yield_expected_output_types" */
  delete_practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** delete data from the table: "practice_yield_grade_metric" */
  delete_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** delete single row from the table: "practice_yield_grade_metric" */
  delete_practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** delete data from the table: "practice_yield_type" */
  delete_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** delete single row from the table: "practice_yield_type" */
  delete_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "student" */
  delete_student?: Maybe<Student_Mutation_Response>;
  /** delete single row from the table: "student" */
  delete_student_by_pk?: Maybe<Student>;
  /** delete data from the table: "student_to_course" */
  delete_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** delete single row from the table: "student_to_course" */
  delete_student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** perform the action: "fillEmptyYields" */
  fillEmptyYields?: Maybe<FillEmptyYieldsOutput>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "allowed_roles" */
  insert_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** insert a single row into the table: "allowed_roles" */
  insert_allowed_roles_one?: Maybe<Allowed_Roles>;
  /** insert data into the table: "course" */
  insert_course?: Maybe<Course_Mutation_Response>;
  /** insert a single row into the table: "course" */
  insert_course_one?: Maybe<Course>;
  /** insert data into the table: "practice" */
  insert_practice?: Maybe<Practice_Mutation_Response>;
  /** insert a single row into the table: "practice" */
  insert_practice_one?: Maybe<Practice>;
  /** insert data into the table: "practice_to_course" */
  insert_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** insert a single row into the table: "practice_to_course" */
  insert_practice_to_course_one?: Maybe<Practice_To_Course>;
  /** insert data into the table: "practice_to_student" */
  insert_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** insert data into the table: "practice_to_student_feedback" */
  insert_practice_to_student_feedback?: Maybe<Practice_To_Student_Feedback_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_feedback" */
  insert_practice_to_student_feedback_one?: Maybe<Practice_To_Student_Feedback>;
  /** insert data into the table: "practice_to_student_grade" */
  insert_practice_to_student_grade?: Maybe<Practice_To_Student_Grade_Mutation_Response>;
  /** insert data into the table: "practice_to_student_grade_metric" */
  insert_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_grade_metric" */
  insert_practice_to_student_grade_metric_one?: Maybe<Practice_To_Student_Grade_Metric>;
  /** insert a single row into the table: "practice_to_student_grade" */
  insert_practice_to_student_grade_one?: Maybe<Practice_To_Student_Grade>;
  /** insert a single row into the table: "practice_to_student" */
  insert_practice_to_student_one?: Maybe<Practice_To_Student>;
  /** insert data into the table: "practice_to_student_yield" */
  insert_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_yield" */
  insert_practice_to_student_yield_one?: Maybe<Practice_To_Student_Yield>;
  /** insert data into the table: "practice_yield" */
  insert_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** insert data into the table: "practice_yield_expected_output" */
  insert_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_expected_output" */
  insert_practice_yield_expected_output_one?: Maybe<Practice_Yield_Expected_Output>;
  /** insert data into the table: "practice_yield_expected_output_types" */
  insert_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_expected_output_types" */
  insert_practice_yield_expected_output_types_one?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** insert data into the table: "practice_yield_grade_metric" */
  insert_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_grade_metric" */
  insert_practice_yield_grade_metric_one?: Maybe<Practice_Yield_Grade_Metric>;
  /** insert a single row into the table: "practice_yield" */
  insert_practice_yield_one?: Maybe<Practice_Yield>;
  /** insert data into the table: "practice_yield_type" */
  insert_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_type" */
  insert_practice_yield_type_one?: Maybe<Practice_Yield_Type>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "student" */
  insert_student?: Maybe<Student_Mutation_Response>;
  /** insert a single row into the table: "student" */
  insert_student_one?: Maybe<Student>;
  /** insert data into the table: "student_to_course" */
  insert_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** insert a single row into the table: "student_to_course" */
  insert_student_to_course_one?: Maybe<Student_To_Course>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** perform the action: "linkStudentToUser" */
  linkStudentToUser?: Maybe<LinkStudentToUserOutput>;
  /** perform the action: "refreshGrades" */
  refreshGrades?: Maybe<RefreshGradesOutput>;
  /** perform the action: "sendStudentClaimMail" */
  sendStudentClaimMail?: Maybe<SendStudentClaimMailOutput>;
  /** perform the action: "submitHandoff" */
  submitHandoff?: Maybe<SubmitHandoffOutput>;
  /** update data of the table: "user" */
  updateUser?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "allowed_roles" */
  update_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** update single row of the table: "allowed_roles" */
  update_allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** update data of the table: "course" */
  update_course?: Maybe<Course_Mutation_Response>;
  /** update single row of the table: "course" */
  update_course_by_pk?: Maybe<Course>;
  /** update data of the table: "practice" */
  update_practice?: Maybe<Practice_Mutation_Response>;
  /** update single row of the table: "practice" */
  update_practice_by_pk?: Maybe<Practice>;
  /** update data of the table: "practice_to_course" */
  update_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** update single row of the table: "practice_to_course" */
  update_practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** update data of the table: "practice_to_student" */
  update_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** update single row of the table: "practice_to_student" */
  update_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** update data of the table: "practice_to_student_feedback" */
  update_practice_to_student_feedback?: Maybe<Practice_To_Student_Feedback_Mutation_Response>;
  /** update data of the table: "practice_to_student_grade" */
  update_practice_to_student_grade?: Maybe<Practice_To_Student_Grade_Mutation_Response>;
  /** update data of the table: "practice_to_student_grade_metric" */
  update_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** update single row of the table: "practice_to_student_grade_metric" */
  update_practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** update data of the table: "practice_to_student_yield" */
  update_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** update single row of the table: "practice_to_student_yield" */
  update_practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** update data of the table: "practice_yield" */
  update_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** update single row of the table: "practice_yield" */
  update_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** update data of the table: "practice_yield_expected_output" */
  update_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** update single row of the table: "practice_yield_expected_output" */
  update_practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** update data of the table: "practice_yield_expected_output_types" */
  update_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** update single row of the table: "practice_yield_expected_output_types" */
  update_practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** update data of the table: "practice_yield_grade_metric" */
  update_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** update single row of the table: "practice_yield_grade_metric" */
  update_practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** update data of the table: "practice_yield_type" */
  update_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** update single row of the table: "practice_yield_type" */
  update_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "student" */
  update_student?: Maybe<Student_Mutation_Response>;
  /** update single row of the table: "student" */
  update_student_by_pk?: Maybe<Student>;
  /** update data of the table: "student_to_course" */
  update_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** update single row of the table: "student_to_course" */
  update_student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Allowed_RolesArgs = {
  where: Allowed_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Allowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CourseArgs = {
  where: Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_PracticeArgs = {
  where: Practice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_CourseArgs = {
  where: Practice_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_StudentArgs = {
  where: Practice_To_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_FeedbackArgs = {
  where: Practice_To_Student_Feedback_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_GradeArgs = {
  where: Practice_To_Student_Grade_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Grade_MetricArgs = {
  where: Practice_To_Student_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_YieldArgs = {
  where: Practice_To_Student_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_YieldArgs = {
  where: Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_OutputArgs = {
  where: Practice_Yield_Expected_Output_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_TypesArgs = {
  where: Practice_Yield_Expected_Output_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_Types_By_PkArgs =
  {
    name: Scalars['String'];
  };

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Grade_MetricArgs = {
  where: Practice_Yield_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_TypeArgs = {
  where: Practice_Yield_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_StudentArgs = {
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Student_To_CourseArgs = {
  where: Student_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootFillEmptyYieldsArgs = {
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<User_Insert_Input>;
  onConflict?: Maybe<User_onConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: User_Insert_Input;
  onConflict?: Maybe<User_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  onConflict?: Maybe<Accounts_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  onConflict?: Maybe<Accounts_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Allowed_RolesArgs = {
  objects: Array<Allowed_Roles_Insert_Input>;
  onConflict?: Maybe<Allowed_Roles_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Allowed_Roles_OneArgs = {
  object: Allowed_Roles_Insert_Input;
  onConflict?: Maybe<Allowed_Roles_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_CourseArgs = {
  objects: Array<Course_Insert_Input>;
  onConflict?: Maybe<Course_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Course_OneArgs = {
  object: Course_Insert_Input;
  onConflict?: Maybe<Course_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_PracticeArgs = {
  objects: Array<Practice_Insert_Input>;
  onConflict?: Maybe<Practice_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_OneArgs = {
  object: Practice_Insert_Input;
  onConflict?: Maybe<Practice_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_CourseArgs = {
  objects: Array<Practice_To_Course_Insert_Input>;
  onConflict?: Maybe<Practice_To_Course_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Course_OneArgs = {
  object: Practice_To_Course_Insert_Input;
  onConflict?: Maybe<Practice_To_Course_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_StudentArgs = {
  objects: Array<Practice_To_Student_Insert_Input>;
  onConflict?: Maybe<Practice_To_Student_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_FeedbackArgs = {
  objects: Array<Practice_To_Student_Feedback_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Feedback_OneArgs = {
  object: Practice_To_Student_Feedback_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_GradeArgs = {
  objects: Array<Practice_To_Student_Grade_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_MetricArgs = {
  objects: Array<Practice_To_Student_Grade_Metric_Insert_Input>;
  onConflict?: Maybe<Practice_To_Student_Grade_Metric_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_Metric_OneArgs = {
  object: Practice_To_Student_Grade_Metric_Insert_Input;
  onConflict?: Maybe<Practice_To_Student_Grade_Metric_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_OneArgs = {
  object: Practice_To_Student_Grade_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_OneArgs = {
  object: Practice_To_Student_Insert_Input;
  onConflict?: Maybe<Practice_To_Student_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_YieldArgs = {
  objects: Array<Practice_To_Student_Yield_Insert_Input>;
  onConflict?: Maybe<Practice_To_Student_Yield_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Yield_OneArgs = {
  object: Practice_To_Student_Yield_Insert_Input;
  onConflict?: Maybe<Practice_To_Student_Yield_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_YieldArgs = {
  objects: Array<Practice_Yield_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_OutputArgs = {
  objects: Array<Practice_Yield_Expected_Output_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Expected_Output_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_OneArgs = {
  object: Practice_Yield_Expected_Output_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Expected_Output_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_TypesArgs = {
  objects: Array<Practice_Yield_Expected_Output_Types_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Expected_Output_Types_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_Types_OneArgs = {
  object: Practice_Yield_Expected_Output_Types_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Expected_Output_Types_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Grade_MetricArgs = {
  objects: Array<Practice_Yield_Grade_Metric_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Grade_Metric_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Grade_Metric_OneArgs = {
  object: Practice_Yield_Grade_Metric_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Grade_Metric_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_OneArgs = {
  object: Practice_Yield_Insert_Input;
  onConflict?: Maybe<Practice_Yield_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_TypeArgs = {
  objects: Array<Practice_Yield_Type_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Type_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Type_OneArgs = {
  object: Practice_Yield_Type_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Type_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  onConflict?: Maybe<Roles_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  onConflict?: Maybe<Roles_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_StudentArgs = {
  objects: Array<Student_Insert_Input>;
  onConflict?: Maybe<Student_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_OneArgs = {
  object: Student_Insert_Input;
  onConflict?: Maybe<Student_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_To_CourseArgs = {
  objects: Array<Student_To_Course_Insert_Input>;
  onConflict?: Maybe<Student_To_Course_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_To_Course_OneArgs = {
  object: Student_To_Course_Insert_Input;
  onConflict?: Maybe<Student_To_Course_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  onConflict?: Maybe<Verification_Requests_onConflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  onConflict?: Maybe<Verification_Requests_onConflict>;
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
  studentsIds: Array<Maybe<Scalars['uuid']>>;
};

/** mutation root */
export type Mutation_RootSubmitHandoffArgs = {
  practiceToPromotionId: Scalars['uuid'];
  yields: Array<YieldForHandoff>;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Allowed_RolesArgs = {
  _set?: Maybe<Allowed_Roles_Set_Input>;
  where: Allowed_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Allowed_Roles_By_PkArgs = {
  _set?: Maybe<Allowed_Roles_Set_Input>;
  pk_columns: Allowed_Roles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CourseArgs = {
  _set?: Maybe<Course_Set_Input>;
  where: Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Course_By_PkArgs = {
  _set?: Maybe<Course_Set_Input>;
  pk_columns: Course_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PracticeArgs = {
  _set?: Maybe<Practice_Set_Input>;
  where: Practice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_By_PkArgs = {
  _set?: Maybe<Practice_Set_Input>;
  pk_columns: Practice_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_CourseArgs = {
  _set?: Maybe<Practice_To_Course_Set_Input>;
  where: Practice_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Course_By_PkArgs = {
  _set?: Maybe<Practice_To_Course_Set_Input>;
  pk_columns: Practice_To_Course_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_StudentArgs = {
  _append?: Maybe<Practice_To_Student_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  where: Practice_To_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_By_PkArgs = {
  _append?: Maybe<Practice_To_Student_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  pk_columns: Practice_To_Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_FeedbackArgs = {
  _append?: Maybe<Practice_To_Student_Feedback_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Feedback_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Feedback_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Feedback_Delete_Key_Input>;
  _prepend?: Maybe<Practice_To_Student_Feedback_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Feedback_Set_Input>;
  where: Practice_To_Student_Feedback_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_GradeArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Set_Input>;
  where: Practice_To_Student_Grade_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Grade_MetricArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Metric_Set_Input>;
  where: Practice_To_Student_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Grade_Metric_By_PkArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Metric_Set_Input>;
  pk_columns: Practice_To_Student_Grade_Metric_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_YieldArgs = {
  _set?: Maybe<Practice_To_Student_Yield_Set_Input>;
  where: Practice_To_Student_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Yield_By_PkArgs = {
  _set?: Maybe<Practice_To_Student_Yield_Set_Input>;
  pk_columns: Practice_To_Student_Yield_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_YieldArgs = {
  _append?: Maybe<Practice_Yield_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Delete_Key_Input>;
  _prepend?: Maybe<Practice_Yield_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Set_Input>;
  where: Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_By_PkArgs = {
  _append?: Maybe<Practice_Yield_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Delete_Key_Input>;
  _prepend?: Maybe<Practice_Yield_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Set_Input>;
  pk_columns: Practice_Yield_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_OutputArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Set_Input>;
  where: Practice_Yield_Expected_Output_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Set_Input>;
  pk_columns: Practice_Yield_Expected_Output_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_TypesArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Types_Set_Input>;
  where: Practice_Yield_Expected_Output_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_Types_By_PkArgs =
  {
    _set?: Maybe<Practice_Yield_Expected_Output_Types_Set_Input>;
    pk_columns: Practice_Yield_Expected_Output_Types_Pk_Columns_Input;
  };

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Grade_MetricArgs = {
  _append?: Maybe<Practice_Yield_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_Yield_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_Yield_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Grade_Metric_Set_Input>;
  where: Practice_Yield_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Grade_Metric_By_PkArgs = {
  _append?: Maybe<Practice_Yield_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_Yield_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_Yield_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Grade_Metric_Set_Input>;
  pk_columns: Practice_Yield_Grade_Metric_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_TypeArgs = {
  _set?: Maybe<Practice_Yield_Type_Set_Input>;
  where: Practice_Yield_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Type_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Type_Set_Input>;
  pk_columns: Practice_Yield_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StudentArgs = {
  _set?: Maybe<Student_Set_Input>;
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_By_PkArgs = {
  _set?: Maybe<Student_Set_Input>;
  pk_columns: Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Student_To_CourseArgs = {
  _set?: Maybe<Student_To_Course_Set_Input>;
  where: Student_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_To_Course_By_PkArgs = {
  _set?: Maybe<Student_To_Course_Set_Input>;
  pk_columns: Student_To_Course_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "practice" */
export type Practice = {
  __typename?: 'practice';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  practice_to_courses: Array<Practice_To_Course>;
  /** An aggregated array relationship */
  practice_to_courses_aggregate: Practice_To_Course_Aggregate;
  /** An array relationship */
  practice_yields: Array<Practice_Yield>;
  /** An aggregated array relationship */
  practice_yields_aggregate: Practice_Yield_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice" */
export type PracticePractice_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice" */
export type Practice_Aggregate = {
  __typename?: 'practice_aggregate';
  aggregate?: Maybe<Practice_Aggregate_Fields>;
  nodes: Array<Practice>;
};

/** aggregate fields of "practice" */
export type Practice_Aggregate_Fields = {
  __typename?: 'practice_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Max_Fields>;
  min?: Maybe<Practice_Min_Fields>;
};

/** aggregate fields of "practice" */
export type Practice_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice" */
export type Practice_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Max_Order_By>;
  min?: Maybe<Practice_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice" */
export type Practice_Arr_Rel_Insert_Input = {
  data: Array<Practice_Insert_Input>;
  onConflict?: Maybe<Practice_onConflict>;
};

/** Boolean expression to filter rows from the table "practice". All fields are combined with a logical 'AND'. */
export type Practice_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Bool_Exp>>>;
  _not?: Maybe<Practice_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_courses?: Maybe<Practice_To_Course_Bool_Exp>;
  practice_yields?: Maybe<Practice_Yield_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice" */
export enum Practice_Constraint {
  /** unique or primary key constraint */
  PracticePkey = 'practice_pkey',
  /** unique or primary key constraint */
  PracticeTitleKey = 'practice_title_key',
}

/** input type for inserting data into table "practice" */
export type Practice_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_courses?: Maybe<Practice_To_Course_Arr_Rel_Insert_Input>;
  practice_yields?: Maybe<Practice_Yield_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Max_Fields = {
  __typename?: 'practice_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice" */
export type Practice_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Min_Fields = {
  __typename?: 'practice_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice" */
export type Practice_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice" */
export type Practice_Mutation_Response = {
  __typename?: 'practice_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice>;
};

/** input type for inserting object relation for remote table "practice" */
export type Practice_Obj_Rel_Insert_Input = {
  data: Practice_Insert_Input;
  onConflict?: Maybe<Practice_onConflict>;
};

/** on conflict condition type for table "practice" */
export type Practice_onConflict = {
  constraint: Practice_Constraint;
  updateColumns: Array<Practice_Update_Column>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** ordering options when selecting data from "practice" */
export type Practice_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_courses_aggregate?: Maybe<Practice_To_Course_Aggregate_Order_By>;
  practice_yields_aggregate?: Maybe<Practice_Yield_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice" */
export type Practice_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice" */
export enum Practice_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice" */
export type Practice_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_Course = {
  __typename?: 'practice_to_course';
  close_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  course: Course;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  gitea_org_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "is_open_practice_to_course_fn" */
  is_open?: Maybe<Scalars['Boolean']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An array relationship */
  practice_to_students: Array<Practice_To_Student>;
  /** An aggregated array relationship */
  practice_to_students_aggregate: Practice_To_Student_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_CoursePractice_To_StudentsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_CoursePractice_To_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** aggregated selection of "practice_to_course" */
export type Practice_To_Course_Aggregate = {
  __typename?: 'practice_to_course_aggregate';
  aggregate?: Maybe<Practice_To_Course_Aggregate_Fields>;
  nodes: Array<Practice_To_Course>;
};

/** aggregate fields of "practice_to_course" */
export type Practice_To_Course_Aggregate_Fields = {
  __typename?: 'practice_to_course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Course_Max_Fields>;
  min?: Maybe<Practice_To_Course_Min_Fields>;
};

/** aggregate fields of "practice_to_course" */
export type Practice_To_Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_course" */
export type Practice_To_Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Course_Max_Order_By>;
  min?: Maybe<Practice_To_Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_course" */
export type Practice_To_Course_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Course_Insert_Input>;
  onConflict?: Maybe<Practice_To_Course_onConflict>;
};

/** Boolean expression to filter rows from the table "practice_to_course". All fields are combined with a logical 'AND'. */
export type Practice_To_Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Course_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Course_Bool_Exp>>>;
  close_date?: Maybe<Timestamptz_Comparison_Exp>;
  course?: Maybe<Course_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  open_date?: Maybe<Timestamptz_Comparison_Exp>;
  practice?: Maybe<Practice_Bool_Exp>;
  practice_id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_students?: Maybe<Practice_To_Student_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_course" */
export enum Practice_To_Course_Constraint {
  /** unique or primary key constraint */
  PracticeToPromotionPkey = 'practice_to_promotion_pkey',
  /** unique or primary key constraint */
  PracticeToPromotionPromotionIdPracticeIdKey = 'practice_to_promotion_promotion_id_practice_id_key',
}

/** input type for inserting data into table "practice_to_course" */
export type Practice_To_Course_Insert_Input = {
  close_date?: Maybe<Scalars['timestamptz']>;
  course?: Maybe<Course_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice?: Maybe<Practice_Obj_Rel_Insert_Input>;
  practice_id?: Maybe<Scalars['uuid']>;
  practice_to_students?: Maybe<Practice_To_Student_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Course_Max_Fields = {
  __typename?: 'practice_to_course_max_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_course" */
export type Practice_To_Course_Max_Order_By = {
  close_date?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Course_Min_Fields = {
  __typename?: 'practice_to_course_min_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_course" */
export type Practice_To_Course_Min_Order_By = {
  close_date?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_course" */
export type Practice_To_Course_Mutation_Response = {
  __typename?: 'practice_to_course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Course>;
};

/** input type for inserting object relation for remote table "practice_to_course" */
export type Practice_To_Course_Obj_Rel_Insert_Input = {
  data: Practice_To_Course_Insert_Input;
  onConflict?: Maybe<Practice_To_Course_onConflict>;
};

/** on conflict condition type for table "practice_to_course" */
export type Practice_To_Course_onConflict = {
  constraint: Practice_To_Course_Constraint;
  updateColumns: Array<Practice_To_Course_Update_Column>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_course" */
export type Practice_To_Course_Order_By = {
  close_date?: Maybe<Order_By>;
  course?: Maybe<Course_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice?: Maybe<Practice_Order_By>;
  practice_id?: Maybe<Order_By>;
  practice_to_students_aggregate?: Maybe<Practice_To_Student_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_course" */
export type Practice_To_Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_course" */
export enum Practice_To_Course_Select_Column {
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgName = 'gitea_org_name',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'open_date',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_course" */
export type Practice_To_Course_Set_Input = {
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "practice_to_course" */
export enum Practice_To_Course_Update_Column {
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgName = 'gitea_org_name',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'open_date',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_to_student" */
export type Practice_To_Student = {
  __typename?: 'practice_to_student';
  course_practice_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_course: Practice_To_Course;
  /** An array relationship */
  practice_to_student_yields: Array<Practice_To_Student_Yield>;
  /** An aggregated array relationship */
  practice_to_student_yields_aggregate: Practice_To_Student_Yield_Aggregate;
  /** An object relationship */
  student: Student;
  /** An object relationship */
  student_feedback?: Maybe<Practice_To_Student_Feedback>;
  /** An object relationship */
  student_grade?: Maybe<Practice_To_Student_Grade>;
  student_id: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentGrade_DetailArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentPractice_To_Student_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentPractice_To_Student_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** aggregated selection of "practice_to_student" */
export type Practice_To_Student_Aggregate = {
  __typename?: 'practice_to_student_aggregate';
  aggregate?: Maybe<Practice_To_Student_Aggregate_Fields>;
  nodes: Array<Practice_To_Student>;
};

/** aggregate fields of "practice_to_student" */
export type Practice_To_Student_Aggregate_Fields = {
  __typename?: 'practice_to_student_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Max_Fields>;
  min?: Maybe<Practice_To_Student_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Variance_Fields>;
};

/** aggregate fields of "practice_to_student" */
export type Practice_To_Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student" */
export type Practice_To_Student_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student" */
export type Practice_To_Student_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Insert_Input>;
  onConflict?: Maybe<Practice_To_Student_onConflict>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Avg_Fields = {
  __typename?: 'practice_to_student_avg_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student" */
export type Practice_To_Student_Avg_Order_By = {
  grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Bool_Exp>>>;
  course_practice_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  grade?: Maybe<Float8_Comparison_Exp>;
  grade_detail?: Maybe<Jsonb_Comparison_Exp>;
  graded?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_course?: Maybe<Practice_To_Course_Bool_Exp>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_feedback?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
  student_grade?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
  submited?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student" */
export enum Practice_To_Student_Constraint {
  /** unique or primary key constraint */
  PracticeToStudentPkey = 'practice_to_student_pkey',
  /** unique or primary key constraint */
  PracticeToStudentStudentIdPromotionPracticeIdKey = 'practice_to_student_student_id_promotion_practice_id_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_detail?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
  grade_detail?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
  grade_detail?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback = {
  __typename?: 'practice_to_student_feedback';
  feedback?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  practice_to_student?: Maybe<Practice_To_Student>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_feedback" */
export type Practice_To_Student_FeedbackFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate = {
  __typename?: 'practice_to_student_feedback_aggregate';
  aggregate?: Maybe<Practice_To_Student_Feedback_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Feedback>;
};

/** aggregate fields of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate_Fields = {
  __typename?: 'practice_to_student_feedback_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Feedback_Max_Fields>;
  min?: Maybe<Practice_To_Student_Feedback_Min_Fields>;
};

/** aggregate fields of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Feedback_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Feedback_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Feedback_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Feedback_Insert_Input>;
};

/** Boolean expression to filter rows from the table "practice_to_student_feedback". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Feedback_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Feedback_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Feedback_Bool_Exp>>>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Feedback_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Feedback_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Feedback_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Insert_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Feedback_Max_Fields = {
  __typename?: 'practice_to_student_feedback_max_fields';
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Max_Order_By = {
  practice_to_student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Feedback_Min_Fields = {
  __typename?: 'practice_to_student_feedback_min_fields';
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Min_Order_By = {
  practice_to_student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Mutation_Response = {
  __typename?: 'practice_to_student_feedback_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Feedback>;
};

/** input type for inserting object relation for remote table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Feedback_Insert_Input;
};

/** ordering options when selecting data from "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Order_By = {
  feedback?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Feedback_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_feedback" */
export enum Practice_To_Student_Feedback_Select_Column {
  /** column name */
  Feedback = 'feedback',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
}

/** input type for updating data in table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Set_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_grade" */
export type Practice_To_Student_Grade = {
  __typename?: 'practice_to_student_grade';
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  practice_to_student?: Maybe<Practice_To_Student>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_grade" */
export type Practice_To_Student_GradeGrade_DetailArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate = {
  __typename?: 'practice_to_student_grade_aggregate';
  aggregate?: Maybe<Practice_To_Student_Grade_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Grade>;
};

/** aggregate fields of "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate_Fields = {
  __typename?: 'practice_to_student_grade_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Grade_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Grade_Max_Fields>;
  min?: Maybe<Practice_To_Student_Grade_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Grade_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Grade_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Grade_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Grade_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Grade_Variance_Fields>;
};

/** aggregate fields of "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Grade_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Grade_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Grade_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Grade_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Grade_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Grade_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Grade_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Grade_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Append_Input = {
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Grade_Insert_Input>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Grade_Avg_Fields = {
  __typename?: 'practice_to_student_grade_avg_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Avg_Order_By = {
  grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student_grade". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Grade_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Grade_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Grade_Bool_Exp>>>;
  grade?: Maybe<Float8_Comparison_Exp>;
  grade_detail?: Maybe<Jsonb_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Grade_Delete_At_Path_Input = {
  grade_detail?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Grade_Delete_Elem_Input = {
  grade_detail?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Grade_Delete_Key_Input = {
  grade_detail?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Inc_Input = {
  grade?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Insert_Input = {
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Grade_Max_Fields = {
  __typename?: 'practice_to_student_grade_max_fields';
  grade?: Maybe<Scalars['float8']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Max_Order_By = {
  grade?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric = {
  __typename?: 'practice_to_student_grade_metric';
  created_at: Scalars['timestamptz'];
  feedback: Scalars['jsonb'];
  id: Scalars['uuid'];
  percent_grade: Scalars['numeric'];
  /** An object relationship */
  practice_to_student_yield: Practice_To_Student_Yield;
  practice_to_student_yield_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield_grade_metric: Practice_Yield_Grade_Metric;
  practice_yield_grade_metric_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_MetricFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate = {
  __typename?: 'practice_to_student_grade_metric_aggregate';
  aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Grade_Metric>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_Fields = {
  __typename?: 'practice_to_student_grade_metric_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Grade_Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Grade_Metric_Max_Fields>;
  min?: Maybe<Practice_To_Student_Grade_Metric_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Grade_Metric_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Grade_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Grade_Metric_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Grade_Metric_Variance_Fields>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Grade_Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Grade_Metric_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Grade_Metric_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Grade_Metric_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Grade_Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Grade_Metric_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Grade_Metric_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Metric_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Grade_Metric_Insert_Input>;
  onConflict?: Maybe<Practice_To_Student_Grade_Metric_onConflict>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Grade_Metric_Avg_Fields = {
  __typename?: 'practice_to_student_grade_metric_avg_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Avg_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student_grade_metric". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Grade_Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  percent_grade?: Maybe<Numeric_Comparison_Exp>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  practice_to_student_yield_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  practice_yield_grade_metric_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Constraint {
  /** unique or primary key constraint */
  PracticeToStudentGradeMetricPkey = 'practice_to_student_grade_metric_pkey',
  /** unique or primary key constraint */
  PracticeToStudentGradeMetricPracticeYieldGradeMetricId = 'practice_to_student_grade_metric_practice_yield_grade_metric_id',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Grade_Metric_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Grade_Metric_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Grade_Metric_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Inc_Input = {
  percent_grade?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Obj_Rel_Insert_Input>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Obj_Rel_Insert_Input>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Grade_Metric_Max_Fields = {
  __typename?: 'practice_to_student_grade_metric_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Grade_Metric_Min_Fields = {
  __typename?: 'practice_to_student_grade_metric_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Mutation_Response = {
  __typename?: 'practice_to_student_grade_metric_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Grade_Metric>;
};

/** input type for inserting object relation for remote table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Grade_Metric_Insert_Input;
  onConflict?: Maybe<Practice_To_Student_Grade_Metric_onConflict>;
};

/** on conflict condition type for table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_onConflict = {
  constraint: Practice_To_Student_Grade_Metric_Constraint;
  updateColumns: Array<Practice_To_Student_Grade_Metric_Update_Column>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Order_By = {
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Metric_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percent_grade',
  /** column name */
  PracticeToStudentYieldId = 'practice_to_student_yield_id',
  /** column name */
  PracticeYieldGradeMetricId = 'practice_yield_grade_metric_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_pop_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Pop_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_samp_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Samp_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Grade_Metric_Sum_Fields = {
  __typename?: 'practice_to_student_grade_metric_sum_fields';
  percent_grade?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Sum_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** update columns of table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percent_grade',
  /** column name */
  PracticeToStudentYieldId = 'practice_to_student_yield_id',
  /** column name */
  PracticeYieldGradeMetricId = 'practice_yield_grade_metric_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_To_Student_Grade_Metric_Var_Pop_Fields = {
  __typename?: 'practice_to_student_grade_metric_var_pop_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Var_Pop_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Grade_Metric_Var_Samp_Fields = {
  __typename?: 'practice_to_student_grade_metric_var_samp_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Var_Samp_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Grade_Metric_Variance_Fields = {
  __typename?: 'practice_to_student_grade_metric_variance_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Variance_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Grade_Min_Fields = {
  __typename?: 'practice_to_student_grade_min_fields';
  grade?: Maybe<Scalars['float8']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Min_Order_By = {
  grade?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Mutation_Response = {
  __typename?: 'practice_to_student_grade_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Grade>;
};

/** input type for inserting object relation for remote table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Grade_Insert_Input;
};

/** ordering options when selecting data from "practice_to_student_grade" */
export type Practice_To_Student_Grade_Order_By = {
  grade?: Maybe<Order_By>;
  grade_detail?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Prepend_Input = {
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_grade" */
export enum Practice_To_Student_Grade_Select_Column {
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
}

/** input type for updating data in table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Set_Input = {
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Grade_Stddev_Fields = {
  __typename?: 'practice_to_student_grade_stddev_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Stddev_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Grade_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_grade_stddev_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Stddev_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Grade_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_grade_stddev_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Stddev_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Grade_Sum_Fields = {
  __typename?: 'practice_to_student_grade_sum_fields';
  grade?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Sum_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Practice_To_Student_Grade_Var_Pop_Fields = {
  __typename?: 'practice_to_student_grade_var_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Var_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Grade_Var_Samp_Fields = {
  __typename?: 'practice_to_student_grade_var_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Var_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Grade_Variance_Fields = {
  __typename?: 'practice_to_student_grade_variance_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Variance_Order_By = {
  grade?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "practice_to_student" */
export type Practice_To_Student_Inc_Input = {
  grade?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "practice_to_student" */
export type Practice_To_Student_Insert_Input = {
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_course?: Maybe<Practice_To_Course_Obj_Rel_Insert_Input>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Arr_Rel_Insert_Input>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_feedback?: Maybe<Practice_To_Student_Feedback_Obj_Rel_Insert_Input>;
  student_grade?: Maybe<Practice_To_Student_Grade_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Max_Fields = {
  __typename?: 'practice_to_student_max_fields';
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student" */
export type Practice_To_Student_Max_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Min_Fields = {
  __typename?: 'practice_to_student_min_fields';
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student" */
export type Practice_To_Student_Min_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student" */
export type Practice_To_Student_Mutation_Response = {
  __typename?: 'practice_to_student_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student>;
};

/** input type for inserting object relation for remote table "practice_to_student" */
export type Practice_To_Student_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Insert_Input;
  onConflict?: Maybe<Practice_To_Student_onConflict>;
};

/** on conflict condition type for table "practice_to_student" */
export type Practice_To_Student_onConflict = {
  constraint: Practice_To_Student_Constraint;
  updateColumns: Array<Practice_To_Student_Update_Column>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student" */
export type Practice_To_Student_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  grade_detail?: Maybe<Order_By>;
  graded?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_course?: Maybe<Practice_To_Course_Order_By>;
  practice_to_student_yields_aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Order_By>;
  student?: Maybe<Student_Order_By>;
  student_feedback?: Maybe<Practice_To_Student_Feedback_Order_By>;
  student_grade?: Maybe<Practice_To_Student_Grade_Order_By>;
  student_id?: Maybe<Order_By>;
  submited?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student" */
export type Practice_To_Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student" */
export enum Practice_To_Student_Select_Column {
  /** column name */
  CoursePracticeId = 'course_practice_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_student" */
export type Practice_To_Student_Set_Input = {
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Stddev_Fields = {
  __typename?: 'practice_to_student_stddev_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_stddev_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_stddev_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Sum_Fields = {
  __typename?: 'practice_to_student_sum_fields';
  grade?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "practice_to_student" */
export type Practice_To_Student_Sum_Order_By = {
  grade?: Maybe<Order_By>;
};

/** update columns of table "practice_to_student" */
export enum Practice_To_Student_Update_Column {
  /** column name */
  CoursePracticeId = 'course_practice_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_To_Student_Var_Pop_Fields = {
  __typename?: 'practice_to_student_var_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student" */
export type Practice_To_Student_Var_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Var_Samp_Fields = {
  __typename?: 'practice_to_student_var_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student" */
export type Practice_To_Student_Var_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Variance_Fields = {
  __typename?: 'practice_to_student_variance_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student" */
export type Practice_To_Student_Variance_Order_By = {
  grade?: Maybe<Order_By>;
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_Yield = {
  __typename?: 'practice_to_student_yield';
  created_at: Scalars['timestamptz'];
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_student: Practice_To_Student;
  /** An array relationship */
  practice_to_student_grade_metrics: Array<Practice_To_Student_Grade_Metric>;
  /** An aggregated array relationship */
  practice_to_student_grade_metrics_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  practice_to_student_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield: Practice_Yield;
  practice_yield_id: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_YieldPractice_To_Student_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_YieldPractice_To_Student_Grade_Metrics_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
    where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  };

/** aggregated selection of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate = {
  __typename?: 'practice_to_student_yield_aggregate';
  aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Yield>;
};

/** aggregate fields of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_Fields = {
  __typename?: 'practice_to_student_yield_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Yield_Max_Fields>;
  min?: Maybe<Practice_To_Student_Yield_Min_Fields>;
};

/** aggregate fields of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Yield_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Yield_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Yield_Insert_Input>;
  onConflict?: Maybe<Practice_To_Student_Yield_onConflict>;
};

/** Boolean expression to filter rows from the table "practice_to_student_yield". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Yield_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Yield_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Yield_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_and_repo?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield?: Maybe<Practice_Yield_Bool_Exp>;
  practice_yield_id?: Maybe<Uuid_Comparison_Exp>;
  submited?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Constraint {
  /** unique or primary key constraint */
  StudentPracticeYieldPkey = 'student_practice_yield_pkey',
  /** unique or primary key constraint */
  StudentPracticeYieldPracticeYieldIdPracticeToStudenKey = 'student_practice_yield_practice_yield_id_practice_to_studen_key',
}

/** input type for inserting data into table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield?: Maybe<Practice_Yield_Obj_Rel_Insert_Input>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Yield_Max_Fields = {
  __typename?: 'practice_to_student_yield_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Yield_Min_Fields = {
  __typename?: 'practice_to_student_yield_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Mutation_Response = {
  __typename?: 'practice_to_student_yield_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Yield>;
};

/** input type for inserting object relation for remote table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Yield_Insert_Input;
  onConflict?: Maybe<Practice_To_Student_Yield_onConflict>;
};

/** on conflict condition type for table "practice_to_student_yield" */
export type Practice_To_Student_Yield_onConflict = {
  constraint: Practice_To_Student_Yield_Constraint;
  updateColumns: Array<Practice_To_Student_Yield_Update_Column>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student_yield" */
export type Practice_To_Student_Yield_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_grade_metrics_aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield?: Maybe<Practice_Yield_Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  submited?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student_yield" */
export type Practice_To_Student_Yield_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgAndRepo = 'gitea_org_and_repo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgAndRepo = 'gitea_org_and_repo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** update columns of table "practice" */
export enum Practice_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_yield" */
export type Practice_Yield = {
  __typename?: 'practice_yield';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  method: Practice_Yield_Type_Enum;
  name: Scalars['String'];
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An array relationship */
  practice_to_student_yields: Array<Practice_To_Student_Yield>;
  /** An aggregated array relationship */
  practice_to_student_yields_aggregate: Practice_To_Student_Yield_Aggregate;
  /** An array relationship */
  practice_yield_expected_outputs: Array<Practice_Yield_Expected_Output>;
  /** An aggregated array relationship */
  practice_yield_expected_outputs_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** An object relationship */
  practice_yield_type: Practice_Yield_Type;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldMetaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_To_Student_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_To_Student_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_Yield_Expected_OutputsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_Yield_Expected_Outputs_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** aggregated selection of "practice_yield" */
export type Practice_Yield_Aggregate = {
  __typename?: 'practice_yield_aggregate';
  aggregate?: Maybe<Practice_Yield_Aggregate_Fields>;
  nodes: Array<Practice_Yield>;
};

/** aggregate fields of "practice_yield" */
export type Practice_Yield_Aggregate_Fields = {
  __typename?: 'practice_yield_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Max_Fields>;
  min?: Maybe<Practice_Yield_Min_Fields>;
};

/** aggregate fields of "practice_yield" */
export type Practice_Yield_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield" */
export type Practice_Yield_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Max_Order_By>;
  min?: Maybe<Practice_Yield_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield" */
export type Practice_Yield_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_onConflict>;
};

/** Boolean expression to filter rows from the table "practice_yield". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  method?: Maybe<Practice_Yield_Type_Enum_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  practice?: Maybe<Practice_Bool_Exp>;
  practice_id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield" */
export enum Practice_Yield_Constraint {
  /** unique or primary key constraint */
  PracticeYieldPkey = 'practice_yield_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_Yield_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_Yield_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_Yield_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output = {
  __typename?: 'practice_yield_expected_output';
  code_lang?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  method: Practice_Yield_Expected_Output_Types_Enum;
  /** An object relationship */
  practice_yield: Practice_Yield;
  /** An object relationship */
  practice_yield_expected_output_type: Practice_Yield_Expected_Output_Types;
  /** An array relationship */
  practice_yield_grade_metrics: Array<Practice_Yield_Grade_Metric>;
  /** An aggregated array relationship */
  practice_yield_grade_metrics_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  practice_yield_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_OutputPractice_Yield_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_OutputPractice_Yield_Grade_Metrics_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
    where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  };

/** aggregated selection of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate = {
  __typename?: 'practice_yield_expected_output_aggregate';
  aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Expected_Output>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_Fields = {
  __typename?: 'practice_yield_expected_output_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Expected_Output_Max_Fields>;
  min?: Maybe<Practice_Yield_Expected_Output_Min_Fields>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Expected_Output_Max_Order_By>;
  min?: Maybe<Practice_Yield_Expected_Output_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Expected_Output_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Expected_Output_onConflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Expected_Output_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Bool_Exp>>>;
  code_lang?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expected?: Maybe<String_Comparison_Exp>;
  git_path?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum_Comparison_Exp>;
  practice_yield?: Maybe<Practice_Yield_Bool_Exp>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
  practice_yield_grade_metrics?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  practice_yield_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Constraint {
  /** unique or primary key constraint */
  PracticeYieldExpectedOutputPkey = 'practice_yield_expected_output_pkey',
  /** unique or primary key constraint */
  PracticeYieldExpectedOutputPracticeYieldIdGitPathMetho = 'practice_yield_expected_output_practice_yield_id_git_path_metho',
}

/** input type for inserting data into table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Insert_Input = {
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  practice_yield?: Maybe<Practice_Yield_Obj_Rel_Insert_Input>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Obj_Rel_Insert_Input>;
  practice_yield_grade_metrics?: Maybe<Practice_Yield_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Expected_Output_Max_Fields = {
  __typename?: 'practice_yield_expected_output_max_fields';
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Max_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Expected_Output_Min_Fields = {
  __typename?: 'practice_yield_expected_output_min_fields';
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Min_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Mutation_Response = {
  __typename?: 'practice_yield_expected_output_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Expected_Output>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Expected_Output_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Expected_Output_onConflict>;
};

/** on conflict condition type for table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_onConflict = {
  constraint: Practice_Yield_Expected_Output_Constraint;
  updateColumns: Array<Practice_Yield_Expected_Output_Update_Column>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  method?: Maybe<Order_By>;
  practice_yield?: Maybe<Practice_Yield_Order_By>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Order_By>;
  practice_yield_grade_metrics_aggregate?: Maybe<Practice_Yield_Grade_Metric_Aggregate_Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Select_Column {
  /** column name */
  CodeLang = 'code_lang',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'git_path',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Set_Input = {
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types = {
  __typename?: 'practice_yield_expected_output_types';
  name: Scalars['String'];
  /** An array relationship */
  practice_yield_expected_outputs: Array<Practice_Yield_Expected_Output>;
  /** An aggregated array relationship */
  practice_yield_expected_outputs_aggregate: Practice_Yield_Expected_Output_Aggregate;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_TypesPractice_Yield_Expected_OutputsArgs =
  {
    distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
    where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  };

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_TypesPractice_Yield_Expected_Outputs_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
    where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  };

/** aggregated selection of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate = {
  __typename?: 'practice_yield_expected_output_types_aggregate';
  aggregate?: Maybe<Practice_Yield_Expected_Output_Types_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Expected_Output_Types>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_Fields = {
  __typename?: 'practice_yield_expected_output_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Expected_Output_Types_Max_Fields>;
  min?: Maybe<Practice_Yield_Expected_Output_Types_Min_Fields>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Expected_Output_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Expected_Output_Types_Max_Order_By>;
  min?: Maybe<Practice_Yield_Expected_Output_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Expected_Output_Types_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Expected_Output_Types_onConflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output_types". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Expected_Output_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Constraint {
  /** unique or primary key constraint */
  PracticeGradeMetricTypePkey = 'practice_grade_metric_type_pkey',
}

export enum Practice_Yield_Expected_Output_Types_Enum {
  CompareCodeFile = 'COMPARE_CODE_FILE',
  CompareGitFile = 'COMPARE_GIT_FILE',
  LinkOpen = 'LINK_OPEN',
  Manual = 'MANUAL',
  ManualGitFileReview = 'MANUAL_GIT_FILE_REVIEW',
  ShowGitFile = 'SHOW_GIT_FILE',
  ShowGitLog = 'SHOW_GIT_LOG',
}

/** expression to compare columns of type practice_yield_expected_output_types_enum. All fields are combined with logical 'AND'. */
export type Practice_Yield_Expected_Output_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  _in?: Maybe<Array<Practice_Yield_Expected_Output_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  _nin?: Maybe<Array<Practice_Yield_Expected_Output_Types_Enum>>;
};

/** input type for inserting data into table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Practice_Yield_Expected_Output_Types_Max_Fields = {
  __typename?: 'practice_yield_expected_output_types_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Expected_Output_Types_Min_Fields = {
  __typename?: 'practice_yield_expected_output_types_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Mutation_Response = {
  __typename?: 'practice_yield_expected_output_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Expected_Output_Types>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Expected_Output_Types_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Expected_Output_Types_onConflict>;
};

/** on conflict condition type for table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_onConflict = {
  constraint: Practice_Yield_Expected_Output_Types_Constraint;
  updateColumns: Array<Practice_Yield_Expected_Output_Types_Update_Column>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Order_By = {
  name?: Maybe<Order_By>;
  practice_yield_expected_outputs_aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Order_By>;
};

/** primary key columns input for table: "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Update_Column {
  /** column name */
  Name = 'name',
}

/** update columns of table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Update_Column {
  /** column name */
  CodeLang = 'code_lang',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'git_path',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric = {
  __typename?: 'practice_yield_grade_metric';
  created_at: Scalars['timestamptz'];
  expected_yield_id: Scalars['uuid'];
  feedbacks: Scalars['jsonb'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  points: Scalars['Int'];
  /** An array relationship */
  practice_to_student_grade_metrics: Array<Practice_To_Student_Grade_Metric>;
  /** An aggregated array relationship */
  practice_to_student_grade_metrics_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** An object relationship */
  practice_yield_expected_output: Practice_Yield_Expected_Output;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricFeedbacksArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricPractice_To_Student_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricPractice_To_Student_Grade_Metrics_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
    where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  };

/** aggregated selection of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate = {
  __typename?: 'practice_yield_grade_metric_aggregate';
  aggregate?: Maybe<Practice_Yield_Grade_Metric_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Grade_Metric>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_Fields = {
  __typename?: 'practice_yield_grade_metric_aggregate_fields';
  avg?: Maybe<Practice_Yield_Grade_Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Grade_Metric_Max_Fields>;
  min?: Maybe<Practice_Yield_Grade_Metric_Min_Fields>;
  stddev?: Maybe<Practice_Yield_Grade_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_Yield_Grade_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_Yield_Grade_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_Yield_Grade_Metric_Sum_Fields>;
  var_pop?: Maybe<Practice_Yield_Grade_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_Yield_Grade_Metric_Var_Samp_Fields>;
  variance?: Maybe<Practice_Yield_Grade_Metric_Variance_Fields>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_Order_By = {
  avg?: Maybe<Practice_Yield_Grade_Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Grade_Metric_Max_Order_By>;
  min?: Maybe<Practice_Yield_Grade_Metric_Min_Order_By>;
  stddev?: Maybe<Practice_Yield_Grade_Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_Yield_Grade_Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_Yield_Grade_Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_Yield_Grade_Metric_Sum_Order_By>;
  var_pop?: Maybe<Practice_Yield_Grade_Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_Yield_Grade_Metric_Var_Samp_Order_By>;
  variance?: Maybe<Practice_Yield_Grade_Metric_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Grade_Metric_Append_Input = {
  feedbacks?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Grade_Metric_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Grade_Metric_onConflict>;
};

/** aggregate avg on columns */
export type Practice_Yield_Grade_Metric_Avg_Fields = {
  __typename?: 'practice_yield_grade_metric_avg_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Avg_Order_By = {
  points?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_yield_grade_metric". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Grade_Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Grade_Metric_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Grade_Metric_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expected_yield_id?: Maybe<Uuid_Comparison_Exp>;
  feedbacks?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Constraint {
  /** unique or primary key constraint */
  PracticeGradeMetricPkey = 'practice_grade_metric_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_Yield_Grade_Metric_Delete_At_Path_Input = {
  feedbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_Yield_Grade_Metric_Delete_Elem_Input = {
  feedbacks?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_Yield_Grade_Metric_Delete_Key_Input = {
  feedbacks?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Inc_Input = {
  points?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  feedbacks?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Grade_Metric_Max_Fields = {
  __typename?: 'practice_yield_grade_metric_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Grade_Metric_Min_Fields = {
  __typename?: 'practice_yield_grade_metric_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Mutation_Response = {
  __typename?: 'practice_yield_grade_metric_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Grade_Metric>;
};

/** input type for inserting object relation for remote table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Grade_Metric_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Grade_Metric_onConflict>;
};

/** on conflict condition type for table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_onConflict = {
  constraint: Practice_Yield_Grade_Metric_Constraint;
  updateColumns: Array<Practice_Yield_Grade_Metric_Update_Column>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  feedbacks?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  practice_to_student_grade_metrics_aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Order_By>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Grade_Metric_Prepend_Input = {
  feedbacks?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpectedYieldId = 'expected_yield_id',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  feedbacks?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_Yield_Grade_Metric_Stddev_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_Yield_Grade_Metric_Stddev_Pop_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_Yield_Grade_Metric_Stddev_Samp_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_Yield_Grade_Metric_Sum_Fields = {
  __typename?: 'practice_yield_grade_metric_sum_fields';
  points?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Sum_Order_By = {
  points?: Maybe<Order_By>;
};

/** update columns of table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpectedYieldId = 'expected_yield_id',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_Yield_Grade_Metric_Var_Pop_Fields = {
  __typename?: 'practice_yield_grade_metric_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Var_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_Yield_Grade_Metric_Var_Samp_Fields = {
  __typename?: 'practice_yield_grade_metric_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Var_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_Yield_Grade_Metric_Variance_Fields = {
  __typename?: 'practice_yield_grade_metric_variance_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Variance_Order_By = {
  points?: Maybe<Order_By>;
};

/** input type for inserting data into table "practice_yield" */
export type Practice_Yield_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  method?: Maybe<Practice_Yield_Type_Enum>;
  name?: Maybe<Scalars['String']>;
  practice?: Maybe<Practice_Obj_Rel_Insert_Input>;
  practice_id?: Maybe<Scalars['uuid']>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Arr_Rel_Insert_Input>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Arr_Rel_Insert_Input>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Max_Fields = {
  __typename?: 'practice_yield_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield" */
export type Practice_Yield_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Min_Fields = {
  __typename?: 'practice_yield_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield" */
export type Practice_Yield_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield" */
export type Practice_Yield_Mutation_Response = {
  __typename?: 'practice_yield_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield>;
};

/** input type for inserting object relation for remote table "practice_yield" */
export type Practice_Yield_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Insert_Input;
  onConflict?: Maybe<Practice_Yield_onConflict>;
};

/** on conflict condition type for table "practice_yield" */
export type Practice_Yield_onConflict = {
  constraint: Practice_Yield_Constraint;
  updateColumns: Array<Practice_Yield_Update_Column>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield" */
export type Practice_Yield_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  method?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice?: Maybe<Practice_Order_By>;
  practice_id?: Maybe<Order_By>;
  practice_to_student_yields_aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Order_By>;
  practice_yield_expected_outputs_aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Order_By>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield" */
export type Practice_Yield_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield" */
export enum Practice_Yield_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
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
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield" */
export type Practice_Yield_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  method?: Maybe<Practice_Yield_Type_Enum>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_Type = {
  __typename?: 'practice_yield_type';
  name: Scalars['String'];
  /** An array relationship */
  practice_yields: Array<Practice_Yield>;
  /** An aggregated array relationship */
  practice_yields_aggregate: Practice_Yield_Aggregate;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_TypePractice_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_TypePractice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate = {
  __typename?: 'practice_yield_type_aggregate';
  aggregate?: Maybe<Practice_Yield_Type_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Type>;
};

/** aggregate fields of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_Fields = {
  __typename?: 'practice_yield_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Type_Max_Fields>;
  min?: Maybe<Practice_Yield_Type_Min_Fields>;
};

/** aggregate fields of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Type_Max_Order_By>;
  min?: Maybe<Practice_Yield_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_type" */
export type Practice_Yield_Type_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Type_Insert_Input>;
  onConflict?: Maybe<Practice_Yield_Type_onConflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_type". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Type_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Type_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  practice_yields?: Maybe<Practice_Yield_Bool_Exp>;
};

/** unique or primary key constraints on table "practice_yield_type" */
export enum Practice_Yield_Type_Constraint {
  /** unique or primary key constraint */
  PracticeYieldTypePkey = 'practice_yield_type_pkey',
}

export enum Practice_Yield_Type_Enum {
  Blob = 'BLOB',
  Code = 'CODE',
  GitRepo = 'GIT_REPO',
  Url = 'URL',
}

/** expression to compare columns of type practice_yield_type_enum. All fields are combined with logical 'AND'. */
export type Practice_Yield_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Practice_Yield_Type_Enum>;
  _in?: Maybe<Array<Practice_Yield_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Practice_Yield_Type_Enum>;
  _nin?: Maybe<Array<Practice_Yield_Type_Enum>>;
};

/** input type for inserting data into table "practice_yield_type" */
export type Practice_Yield_Type_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  practice_yields?: Maybe<Practice_Yield_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Practice_Yield_Type_Max_Fields = {
  __typename?: 'practice_yield_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_yield_type" */
export type Practice_Yield_Type_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Type_Min_Fields = {
  __typename?: 'practice_yield_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_yield_type" */
export type Practice_Yield_Type_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_type" */
export type Practice_Yield_Type_Mutation_Response = {
  __typename?: 'practice_yield_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Type>;
};

/** input type for inserting object relation for remote table "practice_yield_type" */
export type Practice_Yield_Type_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Type_Insert_Input;
  onConflict?: Maybe<Practice_Yield_Type_onConflict>;
};

/** on conflict condition type for table "practice_yield_type" */
export type Practice_Yield_Type_onConflict = {
  constraint: Practice_Yield_Type_Constraint;
  updateColumns: Array<Practice_Yield_Type_Update_Column>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_type" */
export type Practice_Yield_Type_Order_By = {
  name?: Maybe<Order_By>;
  practice_yields_aggregate?: Maybe<Practice_Yield_Aggregate_Order_By>;
};

/** primary key columns input for table: "practice_yield_type" */
export type Practice_Yield_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_type" */
export enum Practice_Yield_Type_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_type" */
export type Practice_Yield_Type_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_yield_type" */
export enum Practice_Yield_Type_Update_Column {
  /** column name */
  Name = 'name',
}

/** update columns of table "practice_yield" */
export enum Practice_Yield_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
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
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "allowed_roles" */
  allowed_roles: Array<Allowed_Roles>;
  /** fetch aggregated fields from the table: "allowed_roles" */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** perform the action: "getGitFileData" */
  getGitFileData?: Maybe<GetGitFileDataOutput>;
  /** perform the action: "getGitLogData" */
  getGitLogData: Array<CommitItem>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practice_to_course: Array<Practice_To_Course>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practice_to_course_aggregate: Practice_To_Course_Aggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_to_student_feedback" */
  practice_to_student_feedback: Array<Practice_To_Student_Feedback>;
  /** fetch aggregated fields from the table: "practice_to_student_feedback" */
  practice_to_student_feedback_aggregate: Practice_To_Student_Feedback_Aggregate;
  /** fetch data from the table: "practice_to_student_grade" */
  practice_to_student_grade: Array<Practice_To_Student_Grade>;
  /** fetch aggregated fields from the table: "practice_to_student_grade" */
  practice_to_student_grade_aggregate: Practice_To_Student_Grade_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric: Array<Practice_To_Student_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** fetch data from the table: "practice_to_student_yield" */
  practice_to_student_yield: Array<Practice_To_Student_Yield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practice_to_student_yield_aggregate: Practice_To_Student_Yield_Aggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practice_yield_expected_output: Array<Practice_Yield_Expected_Output>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practice_yield_expected_output_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types: Array<Practice_Yield_Expected_Output_Types>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types_aggregate: Practice_Yield_Expected_Output_Types_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric: Array<Practice_Yield_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_to_course" */
  student_to_course: Array<Student_To_Course>;
  /** fetch aggregated fields from the table: "student_to_course" */
  student_to_course_aggregate: Student_To_Course_Aggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** query root */
export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** query root */
export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** query root */
export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** query root */
export type Query_RootAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** query root */
export type Query_RootAllowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** query root */
export type Query_RootCourseArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** query root */
export type Query_RootCourse_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** query root */
export type Query_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootGetGitFileDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** query root */
export type Query_RootGetGitLogDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** query root */
export type Query_RootPracticeArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_CourseArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_StudentArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_Student_FeedbackArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Feedback_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_GradeArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_Student_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_Expected_OutputArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_TypesArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_Types_AggregateArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** query root */
export type Query_RootPractice_Yield_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_TypeArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_By_PkArgs = {
  value: Scalars['String'];
};

/** query root */
export type Query_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootStudent_To_CourseArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUserAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUserByPkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  /** An array relationship */
  allowed_roles: Array<Allowed_Roles>;
  /** An aggregated array relationship */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
  value: Scalars['String'];
};

/** columns and relationships of "roles" */
export type RolesAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** columns and relationships of "roles" */
export type RolesAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "roles" */
export type RolesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  onConflict?: Maybe<Roles_onConflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  allowed_roles?: Maybe<Allowed_Roles_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey',
}

export enum Roles_Enum {
  Student = 'student',
  Teacher = 'teacher',
}

/** expression to compare columns of type roles_enum. All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Roles_Enum>;
  _in?: Maybe<Array<Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Roles_Enum>;
  _nin?: Maybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  allowed_roles?: Maybe<Allowed_Roles_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  onConflict?: Maybe<Roles_onConflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_onConflict = {
  constraint: Roles_Constraint;
  updateColumns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  allowed_roles_aggregate?: Maybe<Allowed_Roles_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "roles" */
export type Roles_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "student" */
export type Student = {
  __typename?: 'student';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  /** A computed field, executes function "student_full_name" */
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  practice_to_students: Array<Practice_To_Student>;
  /** An aggregated array relationship */
  practice_to_students_aggregate: Practice_To_Student_Aggregate;
  /** An array relationship */
  student_to_courses: Array<Student_To_Course>;
  /** An aggregated array relationship */
  student_to_courses_aggregate: Student_To_Course_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "student" */
export type StudentPractice_To_StudentsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentPractice_To_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** aggregated selection of "student" */
export type Student_Aggregate = {
  __typename?: 'student_aggregate';
  aggregate?: Maybe<Student_Aggregate_Fields>;
  nodes: Array<Student>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_Fields = {
  __typename?: 'student_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_Max_Fields>;
  min?: Maybe<Student_Min_Fields>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student" */
export type Student_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Max_Order_By>;
  min?: Maybe<Student_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student" */
export type Student_Arr_Rel_Insert_Input = {
  data: Array<Student_Insert_Input>;
  onConflict?: Maybe<Student_onConflict>;
};

/** Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'. */
export type Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  _not?: Maybe<Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  claim_token?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  practice_to_students?: Maybe<Practice_To_Student_Bool_Exp>;
  student_to_courses?: Maybe<Student_To_Course_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "student" */
export enum Student_Constraint {
  /** unique or primary key constraint */
  StudentClaimTokenKey = 'student_claim_token_key',
  /** unique or primary key constraint */
  StudentEmailKey = 'student_email_key',
  /** unique or primary key constraint */
  StudentPkey = 'student_pkey',
  /** unique or primary key constraint */
  StudentUserIdKey = 'student_user_id_key',
}

/** input type for inserting data into table "student" */
export type Student_Insert_Input = {
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  practice_to_students?: Maybe<Practice_To_Student_Arr_Rel_Insert_Input>;
  student_to_courses?: Maybe<Student_To_Course_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Student_Max_Fields = {
  __typename?: 'student_max_fields';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "student" */
export type Student_Max_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Min_Fields = {
  __typename?: 'student_min_fields';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "student" */
export type Student_Min_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "student" */
export type Student_Mutation_Response = {
  __typename?: 'student_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student>;
};

/** input type for inserting object relation for remote table "student" */
export type Student_Obj_Rel_Insert_Input = {
  data: Student_Insert_Input;
  onConflict?: Maybe<Student_onConflict>;
};

/** on conflict condition type for table "student" */
export type Student_onConflict = {
  constraint: Student_Constraint;
  updateColumns: Array<Student_Update_Column>;
  where?: Maybe<Student_Bool_Exp>;
};

/** ordering options when selecting data from "student" */
export type Student_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  practice_to_students_aggregate?: Maybe<Practice_To_Student_Aggregate_Order_By>;
  student_to_courses_aggregate?: Maybe<Student_To_Course_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "student" */
export type Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "student" */
export enum Student_Select_Column {
  /** column name */
  ClaimToken = 'claim_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "student" */
export type Student_Set_Input = {
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "student_to_course" */
export type Student_To_Course = {
  __typename?: 'student_to_course';
  /** An object relationship */
  course: Course;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  student: Student;
  student_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "student_to_course" */
export type Student_To_Course_Aggregate = {
  __typename?: 'student_to_course_aggregate';
  aggregate?: Maybe<Student_To_Course_Aggregate_Fields>;
  nodes: Array<Student_To_Course>;
};

/** aggregate fields of "student_to_course" */
export type Student_To_Course_Aggregate_Fields = {
  __typename?: 'student_to_course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_To_Course_Max_Fields>;
  min?: Maybe<Student_To_Course_Min_Fields>;
};

/** aggregate fields of "student_to_course" */
export type Student_To_Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_To_Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student_to_course" */
export type Student_To_Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_To_Course_Max_Order_By>;
  min?: Maybe<Student_To_Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student_to_course" */
export type Student_To_Course_Arr_Rel_Insert_Input = {
  data: Array<Student_To_Course_Insert_Input>;
  onConflict?: Maybe<Student_To_Course_onConflict>;
};

/** Boolean expression to filter rows from the table "student_to_course". All fields are combined with a logical 'AND'. */
export type Student_To_Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_To_Course_Bool_Exp>>>;
  _not?: Maybe<Student_To_Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_To_Course_Bool_Exp>>>;
  course?: Maybe<Course_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_to_course" */
export enum Student_To_Course_Constraint {
  /** unique or primary key constraint */
  StudentToPromotionPkey = 'student_to_promotion_pkey',
  /** unique or primary key constraint */
  StudentToPromotionPromotionIdStudentIdKey = 'student_to_promotion_promotion_id_student_id_key',
}

/** input type for inserting data into table "student_to_course" */
export type Student_To_Course_Insert_Input = {
  course?: Maybe<Course_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Student_To_Course_Max_Fields = {
  __typename?: 'student_to_course_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "student_to_course" */
export type Student_To_Course_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_To_Course_Min_Fields = {
  __typename?: 'student_to_course_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "student_to_course" */
export type Student_To_Course_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_to_course" */
export type Student_To_Course_Mutation_Response = {
  __typename?: 'student_to_course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student_To_Course>;
};

/** input type for inserting object relation for remote table "student_to_course" */
export type Student_To_Course_Obj_Rel_Insert_Input = {
  data: Student_To_Course_Insert_Input;
  onConflict?: Maybe<Student_To_Course_onConflict>;
};

/** on conflict condition type for table "student_to_course" */
export type Student_To_Course_onConflict = {
  constraint: Student_To_Course_Constraint;
  updateColumns: Array<Student_To_Course_Update_Column>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** ordering options when selecting data from "student_to_course" */
export type Student_To_Course_Order_By = {
  course?: Maybe<Course_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "student_to_course" */
export type Student_To_Course_Pk_Columns_Input = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** select columns of table "student_to_course" */
export enum Student_To_Course_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "student_to_course" */
export type Student_To_Course_Set_Input = {
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "student_to_course" */
export enum Student_To_Course_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** update columns of table "student" */
export enum Student_Update_Column {
  /** column name */
  ClaimToken = 'claim_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "allowed_roles" */
  allowed_roles: Array<Allowed_Roles>;
  /** fetch aggregated fields from the table: "allowed_roles" */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** perform the action: "getGitFileData" */
  getGitFileData?: Maybe<GetGitFileDataOutput>;
  /** perform the action: "getGitLogData" */
  getGitLogData: Array<CommitItem>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practice_to_course: Array<Practice_To_Course>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practice_to_course_aggregate: Practice_To_Course_Aggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_to_student_feedback" */
  practice_to_student_feedback: Array<Practice_To_Student_Feedback>;
  /** fetch aggregated fields from the table: "practice_to_student_feedback" */
  practice_to_student_feedback_aggregate: Practice_To_Student_Feedback_Aggregate;
  /** fetch data from the table: "practice_to_student_grade" */
  practice_to_student_grade: Array<Practice_To_Student_Grade>;
  /** fetch aggregated fields from the table: "practice_to_student_grade" */
  practice_to_student_grade_aggregate: Practice_To_Student_Grade_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric: Array<Practice_To_Student_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** fetch data from the table: "practice_to_student_yield" */
  practice_to_student_yield: Array<Practice_To_Student_Yield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practice_to_student_yield_aggregate: Practice_To_Student_Yield_Aggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practice_yield_expected_output: Array<Practice_Yield_Expected_Output>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practice_yield_expected_output_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types: Array<Practice_Yield_Expected_Output_Types>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types_aggregate: Practice_Yield_Expected_Output_Types_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric: Array<Practice_Yield_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_to_course" */
  student_to_course: Array<Student_To_Course>;
  /** fetch aggregated fields from the table: "student_to_course" */
  student_to_course_aggregate: Student_To_Course_Aggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** subscription root */
export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAllowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCourseArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCourse_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootGetGitFileDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootGetGitLogDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPracticeArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_CourseArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_StudentArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_Student_FeedbackArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Feedback_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_GradeArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_Student_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_OutputArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_TypesArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_Types_AggregateArgs =
  {
    distinct_on?: Maybe<
      Array<Practice_Yield_Expected_Output_Types_Select_Column>
    >;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
    where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
  };

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_TypeArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  value: Scalars['String'];
};

/** subscription root */
export type Subscription_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootStudent_To_CourseArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUserAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUserByPkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregated array relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** An array relationship */
  allowed_roles: Array<Allowed_Roles>;
  /** An aggregated array relationship */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  createdAt: Scalars['timestamptz'];
  default_role: Roles_Enum;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['timestamptz']>;
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
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  onConflict?: Maybe<User_onConflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  allowed_roles?: Maybe<Allowed_Roles_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<Roles_Enum_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  allowed_roles?: Maybe<Allowed_Roles_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Roles_Enum>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  onConflict?: Maybe<User_onConflict>;
};

/** on conflict condition type for table "user" */
export type User_onConflict = {
  constraint: User_Constraint;
  updateColumns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  allowed_roles_aggregate?: Maybe<Allowed_Roles_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  student?: Maybe<Student_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
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
export type User_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Roles_Enum>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "verification_requests" */
export type Verification_Requests_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Verification_Requests_Max_Order_By>;
  min?: Maybe<Verification_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "verification_requests" */
export type Verification_Requests_Arr_Rel_Insert_Input = {
  data: Array<Verification_Requests_Insert_Input>;
  onConflict?: Maybe<Verification_Requests_onConflict>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey',
  /** unique or primary key constraint */
  VerificationRequestsTokenKey = 'verification_requests_token_key',
}

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "verification_requests" */
export type Verification_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "verification_requests" */
export type Verification_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verification_Requests>;
};

/** input type for inserting object relation for remote table "verification_requests" */
export type Verification_Requests_Obj_Rel_Insert_Input = {
  data: Verification_Requests_Insert_Input;
  onConflict?: Maybe<Verification_Requests_onConflict>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_onConflict = {
  constraint: Verification_Requests_Constraint;
  updateColumns: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "verification_requests" */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "verification_requests" */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
}

export type GradeMetricInputYieldFragment = {
  __typename?: 'practice_yield';
} & Pick<Practice_Yield, 'id' | 'meta' | 'method' | 'name' | 'description'>;

export type GetYieldsForNewGradeTpQueryVariables = Exact<{
  tpId: Scalars['uuid'];
}>;

export type GetYieldsForNewGradeTpQuery = { __typename?: 'query_root' } & {
  practice_by_pk?: Maybe<
    { __typename?: 'practice' } & Pick<Practice, 'id' | 'title'> & {
        practice_yields: Array<
          { __typename?: 'practice_yield' } & GradeMetricInputYieldFragment
        >;
      }
  >;
};

export type InsertYieldGradeMetricNewDataMutationVariables = Exact<{
  data: Array<Practice_Yield_Expected_Output_Insert_Input>;
}>;

export type InsertYieldGradeMetricNewDataMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_yield_expected_output?: Maybe<
    { __typename?: 'practice_yield_expected_output_mutation_response' } & Pick<
      Practice_Yield_Expected_Output_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'practice_yield_expected_output' } & Pick<
            Practice_Yield_Expected_Output,
            'id'
          >
        >;
      }
  >;
};

export type InsertNewPracticeToCourseMutationVariables = Exact<{
  close_date: Scalars['timestamptz'];
  open_date: Scalars['timestamptz'];
  practice_id: Scalars['uuid'];
  courseId: Scalars['uuid'];
}>;

export type InsertNewPracticeToCourseMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_to_course?: Maybe<
    { __typename?: 'practice_to_course_mutation_response' } & {
      returning: Array<
        { __typename?: 'practice_to_course' } & Pick<Practice_To_Course, 'id'>
      >;
    }
  >;
};

export type InsertFeedbackForGradeMetricMutationVariables = Exact<{
  id: Scalars['uuid'];
  feedback: Scalars['jsonb'];
}>;

export type InsertFeedbackForGradeMetricMutation = {
  __typename?: 'mutation_root';
} & {
  update_practice_yield_grade_metric_by_pk?: Maybe<
    { __typename?: 'practice_yield_grade_metric' } & Pick<
      Practice_Yield_Grade_Metric,
      'feedbacks' | 'id' | 'name' | 'points'
    >
  >;
};

export type InsertPracticeToStudentGradeMetricMutationVariables = Exact<{
  objects: Array<Practice_To_Student_Grade_Metric_Insert_Input>;
}>;

export type InsertPracticeToStudentGradeMetricMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_to_student_grade_metric?: Maybe<
    {
      __typename?: 'practice_to_student_grade_metric_mutation_response';
    } & Pick<
      Practice_To_Student_Grade_Metric_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'practice_to_student_grade_metric' } & Pick<
            Practice_To_Student_Grade_Metric,
            | 'created_at'
            | 'feedback'
            | 'percent_grade'
            | 'id'
            | 'practice_to_student_yield_id'
            | 'practice_yield_grade_metric_id'
          >
        >;
      }
  >;
};

export type GetFileDataFromServerQueryVariables = Exact<{
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
}>;

export type GetFileDataFromServerQuery = { __typename?: 'query_root' } & {
  getGitFileData?: Maybe<
    { __typename?: 'GetGitFileDataOutput' } & Pick<
      GetGitFileDataOutput,
      'content' | 'encoding'
    >
  >;
};

export type GetLogDataFromServerQueryVariables = Exact<{
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
}>;

export type GetLogDataFromServerQuery = { __typename?: 'query_root' } & {
  getGitLogData: Array<
    { __typename?: 'CommitItem' } & Pick<
      CommitItem,
      | 'author_profile_picture'
      | 'commit_message'
      | 'commit_author_date'
      | 'commit_author_email'
      | 'commit_author_name'
      | 'commit_committer_date'
      | 'commit_committer_email'
      | 'commit_committer_name'
      | 'commit_tree_created'
      | 'commit_tree_sha'
      | 'commit_tree_url'
      | 'commit_url'
      | 'created'
      | 'html_url'
      | 'sha'
      | 'url'
      | 'parents'
    >
  >;
};

export type YieldPracticeInputFragment = {
  __typename?: 'practice_yield';
} & Pick<Practice_Yield, 'id' | 'meta' | 'method' | 'name' | 'description'>;

export type HandOffByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type HandOffByIdQuery = { __typename?: 'query_root' } & {
  practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & Pick<
      Practice_To_Course,
      'is_open' | 'open_date' | 'close_date' | 'id'
    > & {
        practice: { __typename?: 'practice' } & Pick<
          Practice,
          'title' | 'description' | 'id'
        > & {
            practice_yields: Array<
              { __typename?: 'practice_yield' } & YieldPracticeInputFragment
            >;
          };
        practice_to_students: Array<
          { __typename?: 'practice_to_student' } & Pick<
            Practice_To_Student,
            'id' | 'student_id'
          >
        >;
      }
  >;
};

export type SubmitHandoffMutationVariables = Exact<{
  practiceToPromotionId: Scalars['uuid'];
  yields: Array<YieldForHandoff>;
}>;

export type SubmitHandoffMutation = { __typename?: 'mutation_root' } & {
  submitHandoff?: Maybe<
    { __typename?: 'SubmitHandoffOutput' } & Pick<SubmitHandoffOutput, 'status'>
  >;
};

export type HandoffListQueryVariables = Exact<{ [key: string]: never }>;

export type HandoffListQuery = { __typename?: 'query_root' } & {
  course: Array<{ __typename?: 'course' } & HandoffCourseFragment>;
};

export type HandoffCourseFragment = { __typename?: 'course' } & Pick<
  Course,
  'name' | 'years' | 'id'
> & {
    practice_to_courses: Array<
      { __typename?: 'practice_to_course' } & Pick<
        Practice_To_Course,
        'is_open' | 'open_date' | 'close_date' | 'id'
      > & {
          practice: { __typename?: 'practice' } & Pick<
            Practice,
            'title' | 'id'
          >;
          practice_to_students: Array<
            { __typename?: 'practice_to_student' } & Pick<
              Practice_To_Student,
              'id' | 'student_id'
            >
          >;
        }
    >;
  };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = { __typename?: 'query_root' } & {
  user: Array<
    { __typename?: 'user' } & Pick<
      User,
      'createdAt' | 'email' | 'updatedAt' | 'id'
    >
  >;
};

export type ListTpYieldTypesQueryVariables = Exact<{ [key: string]: never }>;

export type ListTpYieldTypesQuery = { __typename?: 'query_root' } & {
  practice_yield_type: Array<
    { __typename?: 'practice_yield_type' } & Pick<Practice_Yield_Type, 'name'>
  >;
};

export type CourseDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type CourseDetailsQuery = { __typename?: 'query_root' } & {
  course_by_pk?: Maybe<
    { __typename?: 'course' } & Pick<Course, 'name' | 'years'> & {
        student_to_courses_aggregate: {
          __typename?: 'student_to_course_aggregate';
        } & {
          nodes: Array<
            { __typename?: 'student_to_course' } & {
              student: { __typename?: 'student' } & Pick<
                Student,
                'id' | 'email' | 'full_name' | 'user_id'
              >;
            }
          >;
          aggregate?: Maybe<
            { __typename?: 'student_to_course_aggregate_fields' } & Pick<
              Student_To_Course_Aggregate_Fields,
              'count'
            >
          >;
        };
      }
  >;
};

export type SendStudentClaimMailMutationVariables = Exact<{
  studentsIds: Array<Maybe<Scalars['uuid']>>;
}>;

export type SendStudentClaimMailMutation = { __typename?: 'mutation_root' } & {
  sendStudentClaimMail?: Maybe<
    { __typename?: 'SendStudentClaimMailOutput' } & Pick<
      SendStudentClaimMailOutput,
      'nmbMailSent'
    >
  >;
};

export type CourseCardFragment = { __typename?: 'course' } & Pick<
  Course,
  'id' | 'name' | 'years'
> & {
    student_to_courses_aggregate: {
      __typename?: 'student_to_course_aggregate';
    } & {
      aggregate?: Maybe<
        { __typename?: 'student_to_course_aggregate_fields' } & Pick<
          Student_To_Course_Aggregate_Fields,
          'count'
        >
      >;
    };
  };

export type ListCoursesQueryVariables = Exact<{ [key: string]: never }>;

export type ListCoursesQuery = { __typename?: 'query_root' } & {
  course: Array<{ __typename?: 'course' } & CourseCardFragment>;
};

export type CreateCourseMutationVariables = Exact<{
  name: Scalars['String'];
  years: Scalars['String'];
  students: Array<Student_To_Course_Insert_Input>;
}>;

export type CreateCourseMutation = { __typename?: 'mutation_root' } & {
  insert_course_one?: Maybe<
    { __typename?: 'course' } & Pick<Course, 'created_at' | 'id'>
  >;
};

export type FetchDataForStudentDashboardQueryVariables = Exact<{
  [key: string]: never;
}>;

export type FetchDataForStudentDashboardQuery = {
  __typename?: 'query_root';
} & {
  practice_to_student: Array<
    { __typename?: 'practice_to_student' } & Pick<
      Practice_To_Student,
      'submited'
    > & {
        student_grade?: Maybe<
          { __typename?: 'practice_to_student_grade' } & Pick<
            Practice_To_Student_Grade,
            'grade' | 'grade_detail'
          >
        >;
        student_feedback?: Maybe<
          { __typename?: 'practice_to_student_feedback' } & Pick<
            Practice_To_Student_Feedback,
            'feedback'
          >
        >;
        practice_to_course: { __typename?: 'practice_to_course' } & Pick<
          Practice_To_Course,
          'is_open'
        > & {
            course: { __typename?: 'course' } & Pick<Course, 'name'>;
            practice: { __typename?: 'practice' } & Pick<Practice, 'title'>;
          };
      }
  >;
};

export type GetPracticeToStudentForGradingQueryVariables = Exact<{
  courseId: Scalars['uuid'];
  practiceId: Scalars['uuid'];
}>;

export type GetPracticeToStudentForGradingQuery = {
  __typename?: 'query_root';
} & {
  practice_to_course: Array<
    { __typename?: 'practice_to_course' } & {
      practice_to_students: Array<
        { __typename?: 'practice_to_student' } & Pick<
          Practice_To_Student,
          'grade'
        > & { student: { __typename?: 'student' } & Pick<Student, 'full_name'> }
      >;
      course: { __typename?: 'course' } & {
        student_to_courses_aggregate: {
          __typename?: 'student_to_course_aggregate';
        } & {
          aggregate?: Maybe<
            { __typename?: 'student_to_course_aggregate_fields' } & Pick<
              Student_To_Course_Aggregate_Fields,
              'count'
            >
          >;
        };
      };
    }
  >;
  practice_yield: Array<
    { __typename?: 'practice_yield' } & Pick<Practice_Yield, 'id' | 'name'> & {
        practice_to_student_yields: Array<
          {
            __typename?: 'practice_to_student_yield';
          } & PracticeToStudentYieldForGradingFragment
        >;
        practice_yield_expected_outputs: Array<
          { __typename?: 'practice_yield_expected_output' } & Pick<
            Practice_Yield_Expected_Output,
            | 'id'
            | 'code_lang'
            | 'expected'
            | 'git_path'
            | 'method'
            | 'practice_yield_id'
          > & {
              practice_yield_grade_metrics: Array<
                { __typename?: 'practice_yield_grade_metric' } & Pick<
                  Practice_Yield_Grade_Metric,
                  'id' | 'name' | 'points' | 'feedbacks' | 'created_at'
                > & {
                    practice_to_student_grade_metrics_aggregate: {
                      __typename?: 'practice_to_student_grade_metric_aggregate';
                    } & {
                      aggregate?: Maybe<
                        {
                          __typename?: 'practice_to_student_grade_metric_aggregate_fields';
                        } & Pick<
                          Practice_To_Student_Grade_Metric_Aggregate_Fields,
                          'count'
                        >
                      >;
                      nodes: Array<
                        {
                          __typename?: 'practice_to_student_grade_metric';
                        } & Pick<
                          Practice_To_Student_Grade_Metric,
                          | 'practice_to_student_yield_id'
                          | 'practice_yield_grade_metric_id'
                        >
                      >;
                    };
                  }
              >;
            }
        >;
      }
  >;
};

export type PracticeToStudentYieldForGradingFragment = {
  __typename?: 'practice_to_student_yield';
} & Pick<
  Practice_To_Student_Yield,
  'gitea_org_and_repo' | 'value' | 'practice_yield_id'
> & { practiceToStudentYieldId: Practice_To_Student_Yield['id'] } & {
    practice_to_student_grade_metrics: Array<
      {
        __typename?: 'practice_to_student_grade_metric';
      } & PracticeToStudentGradeMetricForGradingFragment
    >;
  };

export type PracticeToStudentGradeMetricForGradingFragment = {
  __typename?: 'practice_to_student_grade_metric';
} & Pick<
  Practice_To_Student_Grade_Metric,
  | 'id'
  | 'feedback'
  | 'created_at'
  | 'percent_grade'
  | 'practice_yield_grade_metric_id'
  | 'updated_at'
>;

export type TriggerRefreshGradesMutationVariables = Exact<{
  practice_id: Scalars['uuid'];
  course_id: Scalars['uuid'];
}>;

export type TriggerRefreshGradesMutation = { __typename?: 'mutation_root' } & {
  refreshGrades?: Maybe<
    { __typename?: 'RefreshGradesOutput' } & Pick<
      RefreshGradesOutput,
      'affected_rows'
    >
  >;
};

export type PracticeToPromoDetailsFragment = {
  __typename?: 'practice_to_course';
} & Pick<
  Practice_To_Course,
  | 'close_date'
  | 'created_at'
  | 'gitea_org_name'
  | 'is_open'
  | 'id'
  | 'open_date'
  | 'updated_at'
> & {
    course: { __typename?: 'course' } & Pick<
      Course,
      'name' | 'years' | 'id'
    > & {
        student_to_courses: Array<
          { __typename?: 'student_to_course' } & Pick<
            Student_To_Course,
            'course_id' | 'student_id'
          > & {
              student: { __typename?: 'student' } & Pick<
                Student,
                'id' | 'full_name' | 'email'
              > & {
                  practice_to_students: Array<
                    { __typename?: 'practice_to_student' } & Pick<
                      Practice_To_Student,
                      'created_at' | 'grade' | 'submited'
                    >
                  >;
                };
            }
        >;
      };
  };

export type GetPracticeDetailQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPracticeDetailQuery = { __typename?: 'query_root' } & {
  practice_by_pk?: Maybe<
    { __typename?: 'practice' } & Pick<Practice, 'id' | 'title'> & {
        practice_yields_aggregate: {
          __typename?: 'practice_yield_aggregate';
        } & {
          aggregate?: Maybe<
            { __typename?: 'practice_yield_aggregate_fields' } & Pick<
              Practice_Yield_Aggregate_Fields,
              'count'
            >
          >;
          nodes: Array<
            { __typename?: 'practice_yield' } & Pick<
              Practice_Yield,
              'id' | 'name' | 'method' | 'meta'
            > & {
                practice_yield_expected_outputs_aggregate: {
                  __typename?: 'practice_yield_expected_output_aggregate';
                } & {
                  aggregate?: Maybe<
                    {
                      __typename?: 'practice_yield_expected_output_aggregate_fields';
                    } & Pick<
                      Practice_Yield_Expected_Output_Aggregate_Fields,
                      'count'
                    >
                  >;
                  nodes: Array<
                    { __typename?: 'practice_yield_expected_output' } & Pick<
                      Practice_Yield_Expected_Output,
                      'id'
                    > & {
                        practice_yield_grade_metrics_aggregate: {
                          __typename?: 'practice_yield_grade_metric_aggregate';
                        } & {
                          aggregate?: Maybe<
                            {
                              __typename?: 'practice_yield_grade_metric_aggregate_fields';
                            } & Pick<
                              Practice_Yield_Grade_Metric_Aggregate_Fields,
                              'count'
                            > & {
                                sum?: Maybe<
                                  {
                                    __typename?: 'practice_yield_grade_metric_sum_fields';
                                  } & Pick<
                                    Practice_Yield_Grade_Metric_Sum_Fields,
                                    'points'
                                  >
                                >;
                              }
                          >;
                        };
                      }
                  >;
                };
              }
          >;
        };
        practice_to_courses_aggregate: {
          __typename?: 'practice_to_course_aggregate';
        } & {
          aggregate?: Maybe<
            { __typename?: 'practice_to_course_aggregate_fields' } & Pick<
              Practice_To_Course_Aggregate_Fields,
              'count'
            >
          >;
          nodes: Array<
            {
              __typename?: 'practice_to_course';
            } & PracticeToPromoDetailsFragment
          >;
        };
      }
  >;
};

export type GetPromotionForTpAddQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetPromotionForTpAddQuery = { __typename?: 'query_root' } & {
  course: Array<
    { __typename?: 'course' } & Pick<Course, 'id' | 'name' | 'years'>
  >;
};

export type GetPracticeForGradeMetricQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPracticeForGradeMetricQuery = { __typename?: 'query_root' } & {
  practice_by_pk?: Maybe<
    { __typename?: 'practice' } & Pick<Practice, 'id' | 'title'>
  >;
};

export type PracticeListItemFragment = { __typename?: 'practice' } & Pick<
  Practice,
  'id' | 'title'
> & {
    practice_to_courses: Array<
      { __typename?: 'practice_to_course' } & Pick<
        Practice_To_Course,
        'id' | 'close_date' | 'open_date'
      > & { course: { __typename?: 'course' } & Pick<Course, 'name' | 'years'> }
    >;
  };

export type ListPracticeQueryVariables = Exact<{ [key: string]: never }>;

export type ListPracticeQuery = { __typename?: 'query_root' } & {
  practice: Array<{ __typename?: 'practice' } & PracticeListItemFragment>;
};

export type CreateNewPracticeMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  data: Array<Practice_Yield_Insert_Input>;
}>;

export type CreateNewPracticeMutation = { __typename?: 'mutation_root' } & {
  insert_practice_one?: Maybe<
    { __typename?: 'practice' } & Pick<
      Practice,
      'created_at' | 'id' | 'title' | 'updated_at'
    >
  >;
};

export type LinkStudentToUserMutationVariables = Exact<{
  linkId: Scalars['uuid'];
}>;

export type LinkStudentToUserMutation = { __typename?: 'mutation_root' } & {
  linkStudentToUser?: Maybe<
    { __typename?: 'linkStudentToUserOutput' } & Pick<
      LinkStudentToUserOutput,
      'ok'
    >
  >;
};

export const GradeMetricInputYieldFragmentDoc = gql`
  fragment GradeMetricInputYield on practice_yield {
    id
    meta
    method
    name
    description
  }
`;
export const YieldPracticeInputFragmentDoc = gql`
  fragment YieldPracticeInput on practice_yield {
    id
    meta
    method
    name
    description
  }
`;
export const HandoffCourseFragmentDoc = gql`
  fragment HandoffCourse on course {
    name
    years
    id
    practice_to_courses(order_by: { close_date: desc }) {
      practice {
        title
        id
      }
      practice_to_students {
        id
        student_id
      }
      is_open
      open_date
      close_date
      id
    }
  }
`;
export const CourseCardFragmentDoc = gql`
  fragment CourseCard on course {
    id
    name
    years
    student_to_courses_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export const PracticeToStudentGradeMetricForGradingFragmentDoc = gql`
  fragment PracticeToStudentGradeMetricForGrading on practice_to_student_grade_metric {
    id
    feedback
    created_at
    percent_grade
    practice_yield_grade_metric_id
    updated_at
  }
`;
export const PracticeToStudentYieldForGradingFragmentDoc = gql`
  fragment PracticeToStudentYieldForGrading on practice_to_student_yield {
    practiceToStudentYieldId: id
    gitea_org_and_repo
    value
    practice_yield_id
    practice_to_student_grade_metrics {
      ...PracticeToStudentGradeMetricForGrading
    }
  }
  ${PracticeToStudentGradeMetricForGradingFragmentDoc}
`;
export const PracticeToPromoDetailsFragmentDoc = gql`
  fragment PracticeToPromoDetails on practice_to_course {
    course {
      name
      years
      id
      student_to_courses {
        course_id
        student_id
        student {
          id
          full_name
          email
          practice_to_students(
            where: { practice_to_course: { practice_id: { _eq: $id } } }
          ) {
            created_at
            grade
            submited
          }
        }
      }
    }
    close_date
    created_at
    gitea_org_name
    is_open
    id
    open_date
    updated_at
  }
`;
export const PracticeListItemFragmentDoc = gql`
  fragment PracticeListItem on practice {
    id
    title
    practice_to_courses {
      id
      close_date
      open_date
      course {
        name
        years
      }
    }
  }
`;
export const GetYieldsForNewGradeTpDocument = gql`
  query getYieldsForNewGradeTp($tpId: uuid!) {
    practice_by_pk(id: $tpId) {
      id
      title
      practice_yields(order_by: { method: asc }) {
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
  > = {}
) {
  return Urql.useQuery<GetYieldsForNewGradeTpQuery>({
    query: GetYieldsForNewGradeTpDocument,
    ...options,
  });
}
export const InsertYieldGradeMetricNewDataDocument = gql`
  mutation insertYieldGradeMetricNewData(
    $data: [practice_yield_expected_output_insert_input!]!
  ) {
    insert_practice_yield_expected_output(objects: $data) {
      affected_rows
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
    insert_practice_to_course(
      objects: {
        close_date: $close_date
        open_date: $open_date
        practice_id: $practice_id
        course_id: $courseId
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
    update_practice_yield_grade_metric_by_pk(
      pk_columns: { id: $id }
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
    $objects: [practice_to_student_grade_metric_insert_input!]!
  ) {
    insert_practice_to_student_grade_metric(
      objects: $objects
      onConflict: {
        constraint: practice_to_student_grade_metric_practice_yield_grade_metric_id
        updateColumns: [percent_grade, feedback]
      }
    ) {
      affected_rows
      returning {
        created_at
        feedback
        percent_grade
        id
        practice_to_student_yield_id
        practice_yield_grade_metric_id
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
  options: Omit<
    Urql.UseQueryArgs<GetFileDataFromServerQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetFileDataFromServerQuery>({
    query: GetFileDataFromServerDocument,
    ...options,
  });
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
  options: Omit<
    Urql.UseQueryArgs<GetLogDataFromServerQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetLogDataFromServerQuery>({
    query: GetLogDataFromServerDocument,
    ...options,
  });
}
export const HandOffByIdDocument = gql`
  query HandOffById($id: uuid!) {
    practice_to_course_by_pk(id: $id) {
      practice {
        title
        description
        id
        practice_yields {
          ...YieldPracticeInput
        }
      }
      practice_to_students {
        id
        student_id
      }
      is_open
      open_date
      close_date
      id
    }
  }
  ${YieldPracticeInputFragmentDoc}
`;

export function useHandOffByIdQuery(
  options: Omit<Urql.UseQueryArgs<HandOffByIdQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<HandOffByIdQuery>({
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
    course(order_by: { created_at: desc }) {
      ...HandoffCourse
    }
  }
  ${HandoffCourseFragmentDoc}
`;

export function useHandoffListQuery(
  options: Omit<Urql.UseQueryArgs<HandoffListQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<HandoffListQuery>({
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
  options: Omit<Urql.UseQueryArgs<CurrentUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<CurrentUserQuery>({
    query: CurrentUserDocument,
    ...options,
  });
}
export const ListTpYieldTypesDocument = gql`
  query listTpYieldTypes {
    practice_yield_type {
      name
    }
  }
`;

export function useListTpYieldTypesQuery(
  options: Omit<Urql.UseQueryArgs<ListTpYieldTypesQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<ListTpYieldTypesQuery>({
    query: ListTpYieldTypesDocument,
    ...options,
  });
}
export const CourseDetailsDocument = gql`
  query courseDetails($id: uuid!) {
    course_by_pk(id: $id) {
      name
      years
      student_to_courses_aggregate {
        nodes {
          student {
            id
            email
            full_name
            user_id
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
  options: Omit<Urql.UseQueryArgs<CourseDetailsQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<CourseDetailsQuery>({
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
  options: Omit<Urql.UseQueryArgs<ListCoursesQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<ListCoursesQuery>({
    query: ListCoursesDocument,
    ...options,
  });
}
export const CreateCourseDocument = gql`
  mutation CreateCourse(
    $name: String!
    $years: String!
    $students: [student_to_course_insert_input!]!
  ) {
    insert_course_one(
      object: {
        name: $name
        years: $years
        student_to_courses: { data: $students }
      }
    ) {
      created_at
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
    practice_to_student {
      submited
      student_grade {
        grade
        grade_detail
      }
      student_feedback {
        feedback
      }
      practice_to_course {
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
  options: Omit<
    Urql.UseQueryArgs<FetchDataForStudentDashboardQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<FetchDataForStudentDashboardQuery>({
    query: FetchDataForStudentDashboardDocument,
    ...options,
  });
}
export const GetPracticeToStudentForGradingDocument = gql`
  query getPracticeToStudentForGrading($courseId: uuid!, $practiceId: uuid!) {
    practice_to_course(
      where: {
        course_id: { _eq: $courseId }
        _and: { practice_id: { _eq: $practiceId } }
      }
    ) {
      practice_to_students {
        grade
        student {
          full_name
        }
      }
      course {
        student_to_courses_aggregate {
          aggregate {
            count
          }
        }
      }
    }
    practice_yield(
      where: {
        practice: {
          practice_to_courses: {
            course_id: { _eq: $courseId }
            _and: { practice_id: { _eq: $practiceId } }
          }
        }
      }
    ) {
      id
      name
      practice_to_student_yields(
        where: {
          submited: { _eq: true }
          _and: {
            practice_to_student: {
              practice_to_course: {
                course_id: { _eq: $courseId }
                _and: { practice_id: { _eq: $practiceId } }
              }
            }
          }
        }
      ) {
        ...PracticeToStudentYieldForGrading
      }
      practice_yield_expected_outputs {
        id
        code_lang
        expected
        git_path
        method
        practice_yield_id
        practice_yield_grade_metrics(order_by: { created_at: desc }) {
          id
          name
          points
          feedbacks
          created_at
          practice_to_student_grade_metrics_aggregate(
            where: {
              practice_to_student_yield: {
                practice_to_student: {
                  practice_to_course: {
                    course_id: { _eq: $courseId }
                    _and: { practice_id: { _eq: $practiceId } }
                  }
                }
              }
            }
          ) {
            aggregate {
              count
            }
            nodes {
              practice_to_student_yield_id
              practice_yield_grade_metric_id
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
  > = {}
) {
  return Urql.useQuery<GetPracticeToStudentForGradingQuery>({
    query: GetPracticeToStudentForGradingDocument,
    ...options,
  });
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
    practice_by_pk(id: $id) {
      id
      title
      practice_yields_aggregate(order_by: { created_at: asc }) {
        aggregate {
          count
        }
        nodes {
          id
          name
          method
          meta
          practice_yield_expected_outputs_aggregate {
            aggregate {
              count
            }
            nodes {
              id
              practice_yield_grade_metrics_aggregate {
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
      practice_to_courses_aggregate {
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
  options: Omit<
    Urql.UseQueryArgs<GetPracticeDetailQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetPracticeDetailQuery>({
    query: GetPracticeDetailDocument,
    ...options,
  });
}
export const GetPromotionForTpAddDocument = gql`
  query getPromotionForTpAdd {
    course(order_by: { updated_at: asc }) {
      id
      name
      years
    }
  }
`;

export function useGetPromotionForTpAddQuery(
  options: Omit<
    Urql.UseQueryArgs<GetPromotionForTpAddQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetPromotionForTpAddQuery>({
    query: GetPromotionForTpAddDocument,
    ...options,
  });
}
export const GetPracticeForGradeMetricDocument = gql`
  query getPracticeForGradeMetric($id: uuid!) {
    practice_by_pk(id: $id) {
      id
      title
    }
  }
`;

export function useGetPracticeForGradeMetricQuery(
  options: Omit<
    Urql.UseQueryArgs<GetPracticeForGradeMetricQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetPracticeForGradeMetricQuery>({
    query: GetPracticeForGradeMetricDocument,
    ...options,
  });
}
export const ListPracticeDocument = gql`
  query ListPractice {
    practice(order_by: { created_at: desc }) {
      ...PracticeListItem
    }
  }
  ${PracticeListItemFragmentDoc}
`;

export function useListPracticeQuery(
  options: Omit<Urql.UseQueryArgs<ListPracticeQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<ListPracticeQuery>({
    query: ListPracticeDocument,
    ...options,
  });
}
export const CreateNewPracticeDocument = gql`
  mutation createNewPractice(
    $title: String!
    $description: String!
    $data: [practice_yield_insert_input!]!
  ) {
    insert_practice_one(
      object: {
        title: $title
        description: $description
        practice_yields: { data: $data }
      }
    ) {
      created_at
      id
      title
      updated_at
    }
  }
`;

export function useCreateNewPracticeMutation() {
  return Urql.useMutation<
    CreateNewPracticeMutation,
    CreateNewPracticeMutationVariables
  >(CreateNewPracticeDocument);
}
export const LinkStudentToUserDocument = gql`
  mutation linkStudentToUser($linkId: uuid!) {
    linkStudentToUser(linkId: $linkId) {
      ok
    }
  }
`;

export function useLinkStudentToUserMutation() {
  return Urql.useMutation<
    LinkStudentToUserMutation,
    LinkStudentToUserMutationVariables
  >(LinkStudentToUserDocument);
}
