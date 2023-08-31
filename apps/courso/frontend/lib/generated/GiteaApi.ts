/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** APIError is an api error with a message */
export interface GiteaAPIError {
  message?: string;
  url?: string;
}

/** AccessToken represents an API access token. */
export interface GiteaAccessToken {
  /** @format int64 */
  id?: number;
  name?: string;
  scopes?: string[];
  sha1?: string;
  token_last_eight?: string;
}

export interface GiteaActivity {
  /** User represents a user */
  act_user?: GiteaUser;
  /** @format int64 */
  act_user_id?: number;
  /** Comment represents a comment on a commit or issue */
  comment?: GiteaComment;
  /** @format int64 */
  comment_id?: number;
  content?: string;
  /** @format date-time */
  created?: string;
  /** @format int64 */
  id?: number;
  is_private?: boolean;
  op_type?: string;
  ref_name?: string;
  /** Repository represents a repository */
  repo?: GiteaRepository;
  /** @format int64 */
  repo_id?: number;
  /** @format int64 */
  user_id?: number;
}

/** ActivityPub type */
export interface GiteaActivityPub {
  '@context'?: string;
}

/** AddCollaboratorOption options when adding a user as a collaborator of a repository */
export interface GiteaAddCollaboratorOption {
  permission?: string;
}

/** AddTimeOption options for adding time to an issue */
export interface GiteaAddTimeOption {
  /** @format date-time */
  created?: string;
  /**
   * time in seconds
   * @format int64
   */
  time: number;
  /** User who spent the time (optional) */
  user_name?: string;
}

/** AnnotatedTag represents an annotated tag */
export interface GiteaAnnotatedTag {
  message?: string;
  /** AnnotatedTagObject contains meta information of the tag object */
  object?: GiteaAnnotatedTagObject;
  sha?: string;
  tag?: string;
  tagger?: GiteaCommitUser;
  url?: string;
  /** PayloadCommitVerification represents the GPG verification of a commit */
  verification?: GiteaPayloadCommitVerification;
}

/** AnnotatedTagObject contains meta information of the tag object */
export interface GiteaAnnotatedTagObject {
  sha?: string;
  type?: string;
  url?: string;
}

/** Attachment a generic attachment */
export interface GiteaAttachment {
  browser_download_url?: string;
  /** @format date-time */
  created_at?: string;
  /** @format int64 */
  download_count?: number;
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int64 */
  size?: number;
  uuid?: string;
}

/** Branch represents a repository branch */
export interface GiteaBranch {
  /** PayloadCommit represents a commit */
  commit?: GiteaPayloadCommit;
  effective_branch_protection_name?: string;
  enable_status_check?: boolean;
  name?: string;
  protected?: boolean;
  /** @format int64 */
  required_approvals?: number;
  status_check_contexts?: string[];
  user_can_merge?: boolean;
  user_can_push?: boolean;
}

/** BranchProtection represents a branch protection for a repository */
export interface GiteaBranchProtection {
  approvals_whitelist_teams?: string[];
  approvals_whitelist_username?: string[];
  block_on_official_review_requests?: boolean;
  block_on_outdated_branch?: boolean;
  block_on_rejected_reviews?: boolean;
  /** Deprecated: true */
  branch_name?: string;
  /** @format date-time */
  created_at?: string;
  dismiss_stale_approvals?: boolean;
  enable_approvals_whitelist?: boolean;
  enable_merge_whitelist?: boolean;
  enable_push?: boolean;
  enable_push_whitelist?: boolean;
  enable_status_check?: boolean;
  merge_whitelist_teams?: string[];
  merge_whitelist_usernames?: string[];
  protected_file_patterns?: string;
  push_whitelist_deploy_keys?: boolean;
  push_whitelist_teams?: string[];
  push_whitelist_usernames?: string[];
  require_signed_commits?: boolean;
  /** @format int64 */
  required_approvals?: number;
  rule_name?: string;
  status_check_contexts?: string[];
  unprotected_file_patterns?: string;
  /** @format date-time */
  updated_at?: string;
}

/** ChangeFileOperation for creating, updating or deleting a file */
export interface GiteaChangeFileOperation {
  /** new or updated file content, must be base64 encoded */
  content?: string;
  /** old path of the file to move */
  from_path?: string;
  /** indicates what to do with the file */
  operation: 'create' | 'update' | 'delete';
  /** path to the existing or new file */
  path: string;
  /** sha is the SHA for the file that already exists, required for update or delete */
  sha?: string;
}

/**
 * ChangeFilesOptions options for creating, updating or deleting multiple files
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 */
export interface GiteaChangeFilesOptions {
  /** Identity for a person's identity like an author or committer */
  author?: GiteaIdentity;
  /** branch (optional) to base this file from. if not given, the default branch is used */
  branch?: string;
  /** Identity for a person's identity like an author or committer */
  committer?: GiteaIdentity;
  /** CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE */
  dates?: GiteaCommitDateOptions;
  /** list of file operations */
  files: GiteaChangeFileOperation[];
  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  message?: string;
  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  new_branch?: string;
  /** Add a Signed-off-by trailer by the committer at the end of the commit log message. */
  signoff?: boolean;
}

/** ChangedFile store information about files affected by the pull request */
export interface GiteaChangedFile {
  /** @format int64 */
  additions?: number;
  /** @format int64 */
  changes?: number;
  contents_url?: string;
  /** @format int64 */
  deletions?: number;
  filename?: string;
  html_url?: string;
  previous_filename?: string;
  raw_url?: string;
  status?: string;
}

/** CombinedStatus holds the combined state of several statuses for a single commit */
export interface GiteaCombinedStatus {
  commit_url?: string;
  /** Repository represents a repository */
  repository?: GiteaRepository;
  sha?: string;
  /**
   * CommitStatusState holds the state of a CommitStatus
   * It can be "pending", "success", "error", "failure", and "warning"
   */
  state?: GiteaCommitStatusState;
  statuses?: GiteaCommitStatus[];
  /** @format int64 */
  total_count?: number;
  url?: string;
}

/** Comment represents a comment on a commit or issue */
export interface GiteaComment {
  assets?: GiteaAttachment[];
  body?: string;
  /** @format date-time */
  created_at?: string;
  html_url?: string;
  /** @format int64 */
  id?: number;
  issue_url?: string;
  original_author?: string;
  /** @format int64 */
  original_author_id?: number;
  pull_request_url?: string;
  /** @format date-time */
  updated_at?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** Commit contains information generated from a Git commit. */
export interface GiteaCommit {
  /** User represents a user */
  author?: GiteaUser;
  commit?: GiteaRepoCommit;
  /** User represents a user */
  committer?: GiteaUser;
  /** @format date-time */
  created?: string;
  files?: GiteaCommitAffectedFiles[];
  html_url?: string;
  parents?: GiteaCommitMeta[];
  sha?: string;
  /** CommitStats is statistics for a RepoCommit */
  stats?: GiteaCommitStats;
  url?: string;
}

/** CommitAffectedFiles store information about files affected by the commit */
export interface GiteaCommitAffectedFiles {
  filename?: string;
}

/** CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE */
export interface GiteaCommitDateOptions {
  /** @format date-time */
  author?: string;
  /** @format date-time */
  committer?: string;
}

/** CommitMeta contains meta information of a commit in terms of API. */
export interface GiteaCommitMeta {
  /** @format date-time */
  created?: string;
  sha?: string;
  url?: string;
}

/** CommitStats is statistics for a RepoCommit */
export interface GiteaCommitStats {
  /** @format int64 */
  additions?: number;
  /** @format int64 */
  deletions?: number;
  /** @format int64 */
  total?: number;
}

/** CommitStatus holds a single status of a single Commit */
export interface GiteaCommitStatus {
  context?: string;
  /** @format date-time */
  created_at?: string;
  /** User represents a user */
  creator?: GiteaUser;
  description?: string;
  /** @format int64 */
  id?: number;
  /**
   * CommitStatusState holds the state of a CommitStatus
   * It can be "pending", "success", "error", "failure", and "warning"
   */
  status?: GiteaCommitStatusState;
  target_url?: string;
  /** @format date-time */
  updated_at?: string;
  url?: string;
}

/**
 * CommitStatusState holds the state of a CommitStatus
 * It can be "pending", "success", "error", "failure", and "warning"
 */
export type GiteaCommitStatusState = string;

/** CommitUser contains information of a user in the context of a commit. */
export interface GiteaCommitUser {
  date?: string;
  /** @format email */
  email?: string;
  name?: string;
}

/** ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content */
export interface GiteaContentsResponse {
  /** FileLinksResponse contains the links for a repo's file */
  _links?: GiteaFileLinksResponse;
  /** `content` is populated when `type` is `file`, otherwise null */
  content?: string;
  download_url?: string;
  /** `encoding` is populated when `type` is `file`, otherwise null */
  encoding?: string;
  git_url?: string;
  html_url?: string;
  last_commit_sha?: string;
  name?: string;
  path?: string;
  sha?: string;
  /** @format int64 */
  size?: number;
  /** `submodule_git_url` is populated when `type` is `submodule`, otherwise null */
  submodule_git_url?: string;
  /** `target` is populated when `type` is `symlink`, otherwise null */
  target?: string;
  /** `type` will be `file`, `dir`, `symlink`, or `submodule` */
  type?: string;
  url?: string;
}

/** CreateAccessTokenOption options when create access token */
export interface GiteaCreateAccessTokenOption {
  name: string;
  scopes?: string[];
}

/** CreateBranchProtectionOption options for creating a branch protection */
export interface GiteaCreateBranchProtectionOption {
  approvals_whitelist_teams?: string[];
  approvals_whitelist_username?: string[];
  block_on_official_review_requests?: boolean;
  block_on_outdated_branch?: boolean;
  block_on_rejected_reviews?: boolean;
  /** Deprecated: true */
  branch_name?: string;
  dismiss_stale_approvals?: boolean;
  enable_approvals_whitelist?: boolean;
  enable_merge_whitelist?: boolean;
  enable_push?: boolean;
  enable_push_whitelist?: boolean;
  enable_status_check?: boolean;
  merge_whitelist_teams?: string[];
  merge_whitelist_usernames?: string[];
  protected_file_patterns?: string;
  push_whitelist_deploy_keys?: boolean;
  push_whitelist_teams?: string[];
  push_whitelist_usernames?: string[];
  require_signed_commits?: boolean;
  /** @format int64 */
  required_approvals?: number;
  rule_name?: string;
  status_check_contexts?: string[];
  unprotected_file_patterns?: string;
}

/** CreateBranchRepoOption options when creating a branch in a repository */
export interface GiteaCreateBranchRepoOption {
  /**
   * Name of the branch to create
   * @uniqueItems true
   */
  new_branch_name: string;
  /**
   * Deprecated: true
   * Name of the old branch to create from
   * @uniqueItems true
   */
  old_branch_name?: string;
  /**
   * Name of the old branch/tag/commit to create from
   * @uniqueItems true
   */
  old_ref_name?: string;
}

/** CreateEmailOption options when creating email addresses */
export interface GiteaCreateEmailOption {
  /** email addresses to add */
  emails?: string[];
}

/**
 * CreateFileOptions options for creating files
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 */
export interface GiteaCreateFileOptions {
  /** Identity for a person's identity like an author or committer */
  author?: GiteaIdentity;
  /** branch (optional) to base this file from. if not given, the default branch is used */
  branch?: string;
  /** Identity for a person's identity like an author or committer */
  committer?: GiteaIdentity;
  /** content must be base64 encoded */
  content: string;
  /** CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE */
  dates?: GiteaCommitDateOptions;
  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  message?: string;
  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  new_branch?: string;
  /** Add a Signed-off-by trailer by the committer at the end of the commit log message. */
  signoff?: boolean;
}

/** CreateForkOption options for creating a fork */
export interface GiteaCreateForkOption {
  /** name of the forked repository */
  name?: string;
  /** organization name, if forking into an organization */
  organization?: string;
}

/** CreateGPGKeyOption options create user GPG key */
export interface GiteaCreateGPGKeyOption {
  /**
   * An armored GPG key to add
   * @uniqueItems true
   */
  armored_public_key: string;
  armored_signature?: string;
}

/** CreateHookOption options when create a hook */
export interface GiteaCreateHookOption {
  /** @default false */
  active?: boolean;
  authorization_header?: string;
  branch_filter?: string;
  /**
   * CreateHookOptionConfig has all config options in it
   * required are "content_type" and "url" Required
   */
  config: GiteaCreateHookOptionConfig;
  events?: string[];
  type:
    | 'dingtalk'
    | 'discord'
    | 'gitea'
    | 'gogs'
    | 'msteams'
    | 'slack'
    | 'telegram'
    | 'feishu'
    | 'wechatwork'
    | 'packagist';
}

/**
 * CreateHookOptionConfig has all config options in it
 * required are "content_type" and "url" Required
 */
export type GiteaCreateHookOptionConfig = Record<string, string>;

/** CreateIssueCommentOption options for creating a comment on an issue */
export interface GiteaCreateIssueCommentOption {
  body: string;
}

/** CreateIssueOption options to create one issue */
export interface GiteaCreateIssueOption {
  /** deprecated */
  assignee?: string;
  assignees?: string[];
  body?: string;
  closed?: boolean;
  /** @format date-time */
  due_date?: string;
  /** list of label ids */
  labels?: number[];
  /**
   * milestone id
   * @format int64
   */
  milestone?: number;
  ref?: string;
  title: string;
}

/** CreateKeyOption options when creating a key */
export interface GiteaCreateKeyOption {
  /**
   * An armored SSH key to add
   * @uniqueItems true
   */
  key: string;
  /** Describe if the key has only read access or read/write */
  read_only?: boolean;
  /**
   * Title of the key to add
   * @uniqueItems true
   */
  title: string;
}

/** CreateLabelOption options for creating a label */
export interface GiteaCreateLabelOption {
  /** @example "#00aabb" */
  color: string;
  description?: string;
  /** @example false */
  exclusive?: boolean;
  name: string;
}

/** CreateMilestoneOption options for creating a milestone */
export interface GiteaCreateMilestoneOption {
  description?: string;
  /** @format date-time */
  due_on?: string;
  state?: 'open' | 'closed';
  title?: string;
}

/** CreateOAuth2ApplicationOptions holds options to create an oauth2 application */
export interface GiteaCreateOAuth2ApplicationOptions {
  confidential_client?: boolean;
  name?: string;
  redirect_uris?: string[];
}

/** CreateOrgOption options for creating an organization */
export interface GiteaCreateOrgOption {
  description?: string;
  full_name?: string;
  location?: string;
  repo_admin_change_team_access?: boolean;
  username: string;
  /** possible values are `public` (default), `limited` or `private` */
  visibility?: 'public' | 'limited' | 'private';
  website?: string;
}

/** CreatePullRequestOption options when creating a pull request */
export interface GiteaCreatePullRequestOption {
  assignee?: string;
  assignees?: string[];
  base?: string;
  body?: string;
  /** @format date-time */
  due_date?: string;
  head?: string;
  labels?: number[];
  /** @format int64 */
  milestone?: number;
  title?: string;
}

/** CreatePullReviewComment represent a review comment for creation api */
export interface GiteaCreatePullReviewComment {
  body?: string;
  /**
   * if comment to new file line or 0
   * @format int64
   */
  new_position?: number;
  /**
   * if comment to old file line or 0
   * @format int64
   */
  old_position?: number;
  /** the tree path */
  path?: string;
}

/** CreatePullReviewOptions are options to create a pull review */
export interface GiteaCreatePullReviewOptions {
  body?: string;
  comments?: GiteaCreatePullReviewComment[];
  commit_id?: string;
  /** ReviewStateType review state type */
  event?: GiteaReviewStateType;
}

/** CreatePushMirrorOption represents need information to create a push mirror of a repository. */
export interface GiteaCreatePushMirrorOption {
  interval?: string;
  remote_address?: string;
  remote_password?: string;
  remote_username?: string;
  sync_on_commit?: boolean;
}

/** CreateReleaseOption options when creating a release */
export interface GiteaCreateReleaseOption {
  body?: string;
  draft?: boolean;
  name?: string;
  prerelease?: boolean;
  tag_name: string;
  target_commitish?: string;
}

/** CreateRepoOption options when creating repository */
export interface GiteaCreateRepoOption {
  /** Whether the repository should be auto-initialized? */
  auto_init?: boolean;
  /** DefaultBranch of the repository (used when initializes and in template) */
  default_branch?: string;
  /** Description of the repository to create */
  description?: string;
  /** Gitignores to use */
  gitignores?: string;
  /** Label-Set to use */
  issue_labels?: string;
  /** License to use */
  license?: string;
  /**
   * Name of the repository to create
   * @uniqueItems true
   */
  name: string;
  /** Whether the repository is private */
  private?: boolean;
  /** Readme of the repository to create */
  readme?: string;
  /** Whether the repository is template */
  template?: boolean;
  /** TrustModel of the repository */
  trust_model?:
    | 'default'
    | 'collaborator'
    | 'committer'
    | 'collaboratorcommitter';
}

/** CreateStatusOption holds the information needed to create a new CommitStatus for a Commit */
export interface GiteaCreateStatusOption {
  context?: string;
  description?: string;
  /**
   * CommitStatusState holds the state of a CommitStatus
   * It can be "pending", "success", "error", "failure", and "warning"
   */
  state?: GiteaCommitStatusState;
  target_url?: string;
}

/** CreateTagOption options when creating a tag */
export interface GiteaCreateTagOption {
  message?: string;
  tag_name: string;
  target?: string;
}

/** CreateTeamOption options for creating a team */
export interface GiteaCreateTeamOption {
  can_create_org_repo?: boolean;
  description?: string;
  includes_all_repositories?: boolean;
  name: string;
  permission?: 'read' | 'write' | 'admin';
  /** @example ["repo.code","repo.issues","repo.ext_issues","repo.wiki","repo.pulls","repo.releases","repo.projects","repo.ext_wiki"] */
  units?: string[];
  /** @example {"repo.code":"read","repo.ext_issues":"none","repo.ext_wiki":"none","repo.issues":"write","repo.projects":"none","repo.pulls":"owner","repo.releases":"none","repo.wiki":"admin"} */
  units_map?: Record<string, string>;
}

/** CreateUserOption create user options */
export interface GiteaCreateUserOption {
  /**
   * For explicitly setting the user creation timestamp. Useful when users are
   * migrated from other systems. When omitted, the user's creation timestamp
   * will be set to "now".
   * @format date-time
   */
  created_at?: string;
  /** @format email */
  email: string;
  full_name?: string;
  login_name?: string;
  must_change_password?: boolean;
  password: string;
  restricted?: boolean;
  send_notify?: boolean;
  /** @format int64 */
  source_id?: number;
  username: string;
  visibility?: string;
}

/** CreateWikiPageOptions form for creating wiki */
export interface GiteaCreateWikiPageOptions {
  /** content must be base64 encoded */
  content_base64?: string;
  /** optional commit message summarizing the change */
  message?: string;
  /** page title. leave empty to keep unchanged */
  title?: string;
}

/** Cron represents a Cron task */
export interface GiteaCron {
  /** @format int64 */
  exec_times?: number;
  name?: string;
  /** @format date-time */
  next?: string;
  /** @format date-time */
  prev?: string;
  schedule?: string;
}

/** DeleteEmailOption options when deleting email addresses */
export interface GiteaDeleteEmailOption {
  /** email addresses to delete */
  emails?: string[];
}

/**
 * DeleteFileOptions options for deleting files (used for other File structs below)
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 */
export interface GiteaDeleteFileOptions {
  /** Identity for a person's identity like an author or committer */
  author?: GiteaIdentity;
  /** branch (optional) to base this file from. if not given, the default branch is used */
  branch?: string;
  /** Identity for a person's identity like an author or committer */
  committer?: GiteaIdentity;
  /** CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE */
  dates?: GiteaCommitDateOptions;
  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  message?: string;
  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  new_branch?: string;
  /** sha is the SHA for the file that already exists */
  sha: string;
  /** Add a Signed-off-by trailer by the committer at the end of the commit log message. */
  signoff?: boolean;
}

/** DeployKey a deploy key */
export interface GiteaDeployKey {
  /** @format date-time */
  created_at?: string;
  fingerprint?: string;
  /** @format int64 */
  id?: number;
  key?: string;
  /** @format int64 */
  key_id?: number;
  read_only?: boolean;
  /** Repository represents a repository */
  repository?: GiteaRepository;
  title?: string;
  url?: string;
}

/** DismissPullReviewOptions are options to dismiss a pull review */
export interface GiteaDismissPullReviewOptions {
  message?: string;
  priors?: boolean;
}

/** EditAttachmentOptions options for editing attachments */
export interface GiteaEditAttachmentOptions {
  name?: string;
}

/** EditBranchProtectionOption options for editing a branch protection */
export interface GiteaEditBranchProtectionOption {
  approvals_whitelist_teams?: string[];
  approvals_whitelist_username?: string[];
  block_on_official_review_requests?: boolean;
  block_on_outdated_branch?: boolean;
  block_on_rejected_reviews?: boolean;
  dismiss_stale_approvals?: boolean;
  enable_approvals_whitelist?: boolean;
  enable_merge_whitelist?: boolean;
  enable_push?: boolean;
  enable_push_whitelist?: boolean;
  enable_status_check?: boolean;
  merge_whitelist_teams?: string[];
  merge_whitelist_usernames?: string[];
  protected_file_patterns?: string;
  push_whitelist_deploy_keys?: boolean;
  push_whitelist_teams?: string[];
  push_whitelist_usernames?: string[];
  require_signed_commits?: boolean;
  /** @format int64 */
  required_approvals?: number;
  status_check_contexts?: string[];
  unprotected_file_patterns?: string;
}

/** EditDeadlineOption options for creating a deadline */
export interface GiteaEditDeadlineOption {
  /** @format date-time */
  due_date: string;
}

/** EditGitHookOption options when modifying one Git hook */
export interface GiteaEditGitHookOption {
  content?: string;
}

/** EditHookOption options when modify one hook */
export interface GiteaEditHookOption {
  active?: boolean;
  authorization_header?: string;
  branch_filter?: string;
  config?: Record<string, string>;
  events?: string[];
}

/** EditIssueCommentOption options for editing a comment */
export interface GiteaEditIssueCommentOption {
  body: string;
}

/** EditIssueOption options for editing an issue */
export interface GiteaEditIssueOption {
  /** deprecated */
  assignee?: string;
  assignees?: string[];
  body?: string;
  /** @format date-time */
  due_date?: string;
  /** @format int64 */
  milestone?: number;
  ref?: string;
  state?: string;
  title?: string;
  unset_due_date?: boolean;
}

/** EditLabelOption options for editing a label */
export interface GiteaEditLabelOption {
  /** @example "#00aabb" */
  color?: string;
  description?: string;
  /** @example false */
  exclusive?: boolean;
  name?: string;
}

/** EditMilestoneOption options for editing a milestone */
export interface GiteaEditMilestoneOption {
  description?: string;
  /** @format date-time */
  due_on?: string;
  state?: string;
  title?: string;
}

/** EditOrgOption options for editing an organization */
export interface GiteaEditOrgOption {
  description?: string;
  full_name?: string;
  location?: string;
  repo_admin_change_team_access?: boolean;
  /** possible values are `public`, `limited` or `private` */
  visibility?: 'public' | 'limited' | 'private';
  website?: string;
}

/** EditPullRequestOption options when modify pull request */
export interface GiteaEditPullRequestOption {
  allow_maintainer_edit?: boolean;
  assignee?: string;
  assignees?: string[];
  base?: string;
  body?: string;
  /** @format date-time */
  due_date?: string;
  labels?: number[];
  /** @format int64 */
  milestone?: number;
  state?: string;
  title?: string;
  unset_due_date?: boolean;
}

/** EditReactionOption contain the reaction type */
export interface GiteaEditReactionOption {
  content?: string;
}

/** EditReleaseOption options when editing a release */
export interface GiteaEditReleaseOption {
  body?: string;
  draft?: boolean;
  name?: string;
  prerelease?: boolean;
  tag_name?: string;
  target_commitish?: string;
}

/** EditRepoOption options when editing a repository's properties */
export interface GiteaEditRepoOption {
  /** either `true` to allow mark pr as merged manually, or `false` to prevent it. */
  allow_manual_merge?: boolean;
  /** either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. */
  allow_merge_commits?: boolean;
  /** either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. */
  allow_rebase?: boolean;
  /** either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. */
  allow_rebase_explicit?: boolean;
  /** either `true` to allow updating pull request branch by rebase, or `false` to prevent it. */
  allow_rebase_update?: boolean;
  /** either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. */
  allow_squash_merge?: boolean;
  /** set to `true` to archive this repository. */
  archived?: boolean;
  /** either `true` to enable AutodetectManualMerge, or `false` to prevent it. Note: In some special cases, misjudgments can occur. */
  autodetect_manual_merge?: boolean;
  /** set to `true` to allow edits from maintainers by default */
  default_allow_maintainer_edit?: boolean;
  /** sets the default branch for this repository. */
  default_branch?: string;
  /** set to `true` to delete pr branch after merge by default */
  default_delete_branch_after_merge?: boolean;
  /** set to a merge style to be used by this repository: "merge", "rebase", "rebase-merge", or "squash". */
  default_merge_style?: string;
  /** a short description of the repository. */
  description?: string;
  /** enable prune - remove obsolete remote-tracking references */
  enable_prune?: boolean;
  /** ExternalTracker represents settings for external tracker */
  external_tracker?: GiteaExternalTracker;
  /** ExternalWiki represents setting for external wiki */
  external_wiki?: GiteaExternalWiki;
  /** either `true` to enable actions unit, or `false` to disable them. */
  has_actions?: boolean;
  /** either `true` to enable issues for this repository or `false` to disable them. */
  has_issues?: boolean;
  /** either `true` to enable packages unit, or `false` to disable them. */
  has_packages?: boolean;
  /** either `true` to enable project unit, or `false` to disable them. */
  has_projects?: boolean;
  /** either `true` to allow pull requests, or `false` to prevent pull request. */
  has_pull_requests?: boolean;
  /** either `true` to enable releases unit, or `false` to disable them. */
  has_releases?: boolean;
  /** either `true` to enable the wiki for this repository or `false` to disable it. */
  has_wiki?: boolean;
  /** either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. */
  ignore_whitespace_conflicts?: boolean;
  /** InternalTracker represents settings for internal tracker */
  internal_tracker?: GiteaInternalTracker;
  /** set to a string like `8h30m0s` to set the mirror interval time */
  mirror_interval?: string;
  /**
   * name of the repository
   * @uniqueItems true
   */
  name?: string;
  /**
   * either `true` to make the repository private or `false` to make it public.
   * Note: you will get a 422 error if the organization restricts changing repository visibility to organization
   * owners and a non-owner tries to change the value of private.
   */
  private?: boolean;
  /** either `true` to make this repository a template or `false` to make it a normal repository */
  template?: boolean;
  /** a URL with more information about the repository. */
  website?: string;
}

/** EditTeamOption options for editing a team */
export interface GiteaEditTeamOption {
  can_create_org_repo?: boolean;
  description?: string;
  includes_all_repositories?: boolean;
  name: string;
  permission?: 'read' | 'write' | 'admin';
  /** @example ["repo.code","repo.issues","repo.ext_issues","repo.wiki","repo.pulls","repo.releases","repo.projects","repo.ext_wiki"] */
  units?: string[];
  /** @example {"repo.code":"read","repo.ext_issues":"none","repo.ext_wiki":"none","repo.issues":"write","repo.projects":"none","repo.pulls":"owner","repo.releases":"none","repo.wiki":"admin"} */
  units_map?: Record<string, string>;
}

/** EditUserOption edit user options */
export interface GiteaEditUserOption {
  active?: boolean;
  admin?: boolean;
  allow_create_organization?: boolean;
  allow_git_hook?: boolean;
  allow_import_local?: boolean;
  description?: string;
  /** @format email */
  email?: string;
  full_name?: string;
  location?: string;
  login_name: string;
  /** @format int64 */
  max_repo_creation?: number;
  must_change_password?: boolean;
  password?: string;
  prohibit_login?: boolean;
  restricted?: boolean;
  /** @format int64 */
  source_id: number;
  visibility?: string;
  website?: string;
}

/** Email an email address belonging to a user */
export interface GiteaEmail {
  /** @format email */
  email?: string;
  primary?: boolean;
  /** @format int64 */
  user_id?: number;
  username?: string;
  verified?: boolean;
}

/** ExternalTracker represents settings for external tracker */
export interface GiteaExternalTracker {
  /** External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index. */
  external_tracker_format?: string;
  /** External Issue Tracker issue regular expression */
  external_tracker_regexp_pattern?: string;
  /** External Issue Tracker Number Format, either `numeric`, `alphanumeric`, or `regexp` */
  external_tracker_style?: string;
  /** URL of external issue tracker. */
  external_tracker_url?: string;
}

/** ExternalWiki represents setting for external wiki */
export interface GiteaExternalWiki {
  /** URL of external wiki. */
  external_wiki_url?: string;
}

/** FileCommitResponse contains information generated from a Git commit for a repo's file. */
export interface GiteaFileCommitResponse {
  author?: GiteaCommitUser;
  committer?: GiteaCommitUser;
  /** @format date-time */
  created?: string;
  html_url?: string;
  message?: string;
  parents?: GiteaCommitMeta[];
  sha?: string;
  tree?: GiteaCommitMeta;
  url?: string;
}

/** FileDeleteResponse contains information about a repo's file that was deleted */
export interface GiteaFileDeleteResponse {
  commit?: GiteaFileCommitResponse;
  content?: any;
  /** PayloadCommitVerification represents the GPG verification of a commit */
  verification?: GiteaPayloadCommitVerification;
}

/** FileLinksResponse contains the links for a repo's file */
export interface GiteaFileLinksResponse {
  git?: string;
  html?: string;
  self?: string;
}

/** FileResponse contains information about a repo's file */
export interface GiteaFileResponse {
  commit?: GiteaFileCommitResponse;
  /** ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content */
  content?: GiteaContentsResponse;
  /** PayloadCommitVerification represents the GPG verification of a commit */
  verification?: GiteaPayloadCommitVerification;
}

/** FilesResponse contains information about multiple files from a repo */
export interface GiteaFilesResponse {
  commit?: GiteaFileCommitResponse;
  files?: GiteaContentsResponse[];
  /** PayloadCommitVerification represents the GPG verification of a commit */
  verification?: GiteaPayloadCommitVerification;
}

/** GPGKey a user GPG key to sign commit and tag in repository */
export interface GiteaGPGKey {
  can_certify?: boolean;
  can_encrypt_comms?: boolean;
  can_encrypt_storage?: boolean;
  can_sign?: boolean;
  /** @format date-time */
  created_at?: string;
  emails?: GiteaGPGKeyEmail[];
  /** @format date-time */
  expires_at?: string;
  /** @format int64 */
  id?: number;
  key_id?: string;
  primary_key_id?: string;
  public_key?: string;
  subkeys?: GiteaGPGKey[];
  verified?: boolean;
}

/** GPGKeyEmail an email attached to a GPGKey */
export interface GiteaGPGKeyEmail {
  email?: string;
  verified?: boolean;
}

/** GeneralAPISettings contains global api settings exposed by it */
export interface GiteaGeneralAPISettings {
  /** @format int64 */
  default_git_trees_per_page?: number;
  /** @format int64 */
  default_max_blob_size?: number;
  /** @format int64 */
  default_paging_num?: number;
  /** @format int64 */
  max_response_items?: number;
}

/** GeneralAttachmentSettings contains global Attachment settings exposed by API */
export interface GiteaGeneralAttachmentSettings {
  allowed_types?: string;
  enabled?: boolean;
  /** @format int64 */
  max_files?: number;
  /** @format int64 */
  max_size?: number;
}

/** GeneralRepoSettings contains global repository settings exposed by API */
export interface GiteaGeneralRepoSettings {
  http_git_disabled?: boolean;
  lfs_disabled?: boolean;
  migrations_disabled?: boolean;
  mirrors_disabled?: boolean;
  stars_disabled?: boolean;
  time_tracking_disabled?: boolean;
}

/** GeneralUISettings contains global ui settings exposed by API */
export interface GiteaGeneralUISettings {
  allowed_reactions?: string[];
  custom_emojis?: string[];
  default_theme?: string;
}

/** GenerateRepoOption options when creating repository using a template */
export interface GiteaGenerateRepoOption {
  /** include avatar of the template repo */
  avatar?: boolean;
  /** Default branch of the new repository */
  default_branch?: string;
  /** Description of the repository to create */
  description?: string;
  /** include git content of default branch in template repo */
  git_content?: boolean;
  /** include git hooks in template repo */
  git_hooks?: boolean;
  /** include labels in template repo */
  labels?: boolean;
  /**
   * Name of the repository to create
   * @uniqueItems true
   */
  name: string;
  /** The organization or person who will own the new repository */
  owner: string;
  /** Whether the repository is private */
  private?: boolean;
  /** include topics in template repo */
  topics?: boolean;
  /** include webhooks in template repo */
  webhooks?: boolean;
}

/** GitBlobResponse represents a git blob */
export interface GiteaGitBlobResponse {
  content?: string;
  encoding?: string;
  sha?: string;
  /** @format int64 */
  size?: number;
  url?: string;
}

/** GitEntry represents a git tree */
export interface GiteaGitEntry {
  mode?: string;
  path?: string;
  sha?: string;
  /** @format int64 */
  size?: number;
  type?: string;
  url?: string;
}

/** GitHook represents a Git repository hook */
export interface GiteaGitHook {
  content?: string;
  is_active?: boolean;
  name?: string;
}

/** GitObject represents a Git object. */
export interface GiteaGitObject {
  sha?: string;
  type?: string;
  url?: string;
}

/** GitTreeResponse returns a git tree */
export interface GiteaGitTreeResponse {
  /** @format int64 */
  page?: number;
  sha?: string;
  /** @format int64 */
  total_count?: number;
  tree?: GiteaGitEntry[];
  truncated?: boolean;
  url?: string;
}

/** GitignoreTemplateInfo name and text of a gitignore template */
export interface GiteaGitignoreTemplateInfo {
  name?: string;
  source?: string;
}

/** Hook a hook is a web hook when one repository changed */
export interface GiteaHook {
  active?: boolean;
  authorization_header?: string;
  config?: Record<string, string>;
  /** @format date-time */
  created_at?: string;
  events?: string[];
  /** @format int64 */
  id?: number;
  type?: string;
  /** @format date-time */
  updated_at?: string;
}

/** Identity for a person's identity like an author or committer */
export interface GiteaIdentity {
  /** @format email */
  email?: string;
  name?: string;
}

/** InternalTracker represents settings for internal tracker */
export interface GiteaInternalTracker {
  /** Let only contributors track time (Built-in issue tracker) */
  allow_only_contributors_to_track_time?: boolean;
  /** Enable dependencies for issues and pull requests (Built-in issue tracker) */
  enable_issue_dependencies?: boolean;
  /** Enable time tracking (Built-in issue tracker) */
  enable_time_tracker?: boolean;
}

/** Issue represents an issue in a repository */
export interface GiteaIssue {
  assets?: GiteaAttachment[];
  /** User represents a user */
  assignee?: GiteaUser;
  assignees?: GiteaUser[];
  body?: string;
  /** @format date-time */
  closed_at?: string;
  /** @format int64 */
  comments?: number;
  /** @format date-time */
  created_at?: string;
  /** @format date-time */
  due_date?: string;
  html_url?: string;
  /** @format int64 */
  id?: number;
  is_locked?: boolean;
  labels?: GiteaLabel[];
  /** Milestone milestone is a collection of issues on one repository */
  milestone?: GiteaMilestone;
  /** @format int64 */
  number?: number;
  original_author?: string;
  /** @format int64 */
  original_author_id?: number;
  /** @format int64 */
  pin_order?: number;
  /** PullRequestMeta PR info if an issue is a PR */
  pull_request?: GiteaPullRequestMeta;
  ref?: string;
  /** RepositoryMeta basic repository information */
  repository?: GiteaRepositoryMeta;
  /** StateType issue state type */
  state?: GiteaStateType;
  title?: string;
  /** @format date-time */
  updated_at?: string;
  url?: string;
  /** User represents a user */
  user?: GiteaUser;
}

export interface GiteaIssueConfig {
  blank_issues_enabled?: boolean;
  contact_links?: GiteaIssueConfigContactLink[];
}

export interface GiteaIssueConfigContactLink {
  about?: string;
  name?: string;
  url?: string;
}

export interface GiteaIssueConfigValidation {
  message?: string;
  valid?: boolean;
}

/** IssueDeadline represents an issue deadline */
export interface GiteaIssueDeadline {
  /** @format date-time */
  due_date?: string;
}

/** IssueFormField represents a form field */
export interface GiteaIssueFormField {
  attributes?: Record<string, any>;
  id?: string;
  type?: GiteaIssueFormFieldType;
  validations?: Record<string, any>;
}

/** IssueFormFieldType defines issue form field type, can be "markdown", "textarea", "input", "dropdown" or "checkboxes" */
export type GiteaIssueFormFieldType = string;

/** IssueLabelsOption a collection of labels */
export interface GiteaIssueLabelsOption {
  /** list of label IDs */
  labels?: number[];
}

/** IssueMeta basic issue information */
export interface GiteaIssueMeta {
  /** @format int64 */
  index?: number;
  owner?: string;
  repo?: string;
}

/** IssueTemplate represents an issue template for a repository */
export interface GiteaIssueTemplate {
  about?: string;
  body?: GiteaIssueFormField[];
  content?: string;
  file_name?: string;
  labels?: GiteaIssueTemplateLabels;
  name?: string;
  ref?: string;
  title?: string;
}

export type GiteaIssueTemplateLabels = string[];

/** Label a label to an issue or a pr */
export interface GiteaLabel {
  /** @example "00aabb" */
  color?: string;
  description?: string;
  /** @example false */
  exclusive?: boolean;
  /** @format int64 */
  id?: number;
  name?: string;
  url?: string;
}

/** LabelTemplate info of a Label template */
export interface GiteaLabelTemplate {
  /** @example "00aabb" */
  color?: string;
  description?: string;
  /** @example false */
  exclusive?: boolean;
  name?: string;
}

/** LicensesInfo contains information about a License */
export interface GiteaLicenseTemplateInfo {
  body?: string;
  implementation?: string;
  key?: string;
  name?: string;
  url?: string;
}

/** LicensesListEntry is used for the API */
export interface GiteaLicensesTemplateListEntry {
  key?: string;
  name?: string;
  url?: string;
}

/** MarkdownOption markdown options */
export interface GiteaMarkdownOption {
  /**
   * Context to render
   *
   * in: body
   */
  Context?: string;
  /**
   * Mode to render (comment, gfm, markdown)
   *
   * in: body
   */
  Mode?: string;
  /**
   * Text markdown to render
   *
   * in: body
   */
  Text?: string;
  /**
   * Is it a wiki page ?
   *
   * in: body
   */
  Wiki?: boolean;
}

/** MarkupOption markup options */
export interface GiteaMarkupOption {
  /**
   * Context to render
   *
   * in: body
   */
  Context?: string;
  /**
   * File path for detecting extension in file mode
   *
   * in: body
   */
  FilePath?: string;
  /**
   * Mode to render (comment, gfm, markdown, file)
   *
   * in: body
   */
  Mode?: string;
  /**
   * Text markup to render
   *
   * in: body
   */
  Text?: string;
  /**
   * Is it a wiki page ?
   *
   * in: body
   */
  Wiki?: boolean;
}

/** MergePullRequestForm form for merging Pull Request */
export interface GiteaMergePullRequestOption {
  Do: 'merge' | 'rebase' | 'rebase-merge' | 'squash' | 'manually-merged';
  MergeCommitID?: string;
  MergeMessageField?: string;
  MergeTitleField?: string;
  delete_branch_after_merge?: boolean;
  force_merge?: boolean;
  head_commit_id?: string;
  merge_when_checks_succeed?: boolean;
}

/**
 * MigrateRepoOptions options for migrating repository's
 * this is used to interact with api v1
 */
export interface GiteaMigrateRepoOptions {
  auth_password?: string;
  auth_token?: string;
  auth_username?: string;
  clone_addr: string;
  description?: string;
  issues?: boolean;
  labels?: boolean;
  lfs?: boolean;
  lfs_endpoint?: string;
  milestones?: boolean;
  mirror?: boolean;
  mirror_interval?: string;
  private?: boolean;
  pull_requests?: boolean;
  releases?: boolean;
  repo_name: string;
  /** Name of User or Organisation who will own Repo after migration */
  repo_owner?: string;
  service?:
    | 'git'
    | 'github'
    | 'gitea'
    | 'gitlab'
    | 'gogs'
    | 'onedev'
    | 'gitbucket'
    | 'codebase';
  /**
   * deprecated (only for backwards compatibility)
   * @format int64
   */
  uid?: number;
  wiki?: boolean;
}

/** Milestone milestone is a collection of issues on one repository */
export interface GiteaMilestone {
  /** @format date-time */
  closed_at?: string;
  /** @format int64 */
  closed_issues?: number;
  /** @format date-time */
  created_at?: string;
  description?: string;
  /** @format date-time */
  due_on?: string;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  open_issues?: number;
  /** StateType issue state type */
  state?: GiteaStateType;
  title?: string;
  /** @format date-time */
  updated_at?: string;
}

/** NewIssuePinsAllowed represents an API response that says if new Issue Pins are allowed */
export interface GiteaNewIssuePinsAllowed {
  issues?: boolean;
  pull_requests?: boolean;
}

/** NodeInfo contains standardized way of exposing metadata about a server running one of the distributed social networks */
export interface GiteaNodeInfo {
  metadata?: object;
  openRegistrations?: boolean;
  protocols?: string[];
  /** NodeInfoServices contains the third party sites this server can connect to via their application API */
  services?: GiteaNodeInfoServices;
  /** NodeInfoSoftware contains Metadata about server software in use */
  software?: GiteaNodeInfoSoftware;
  /** NodeInfoUsage contains usage statistics for this server */
  usage?: GiteaNodeInfoUsage;
  version?: string;
}

/** NodeInfoServices contains the third party sites this server can connect to via their application API */
export interface GiteaNodeInfoServices {
  inbound?: string[];
  outbound?: string[];
}

/** NodeInfoSoftware contains Metadata about server software in use */
export interface GiteaNodeInfoSoftware {
  homepage?: string;
  name?: string;
  repository?: string;
  version?: string;
}

/** NodeInfoUsage contains usage statistics for this server */
export interface GiteaNodeInfoUsage {
  /** @format int64 */
  localComments?: number;
  /** @format int64 */
  localPosts?: number;
  /** NodeInfoUsageUsers contains statistics about the users of this server */
  users?: GiteaNodeInfoUsageUsers;
}

/** NodeInfoUsageUsers contains statistics about the users of this server */
export interface GiteaNodeInfoUsageUsers {
  /** @format int64 */
  activeHalfyear?: number;
  /** @format int64 */
  activeMonth?: number;
  /** @format int64 */
  total?: number;
}

/** Note contains information related to a git note */
export interface GiteaNote {
  commit?: GiteaCommit;
  message?: string;
}

/** NotificationCount number of unread notifications */
export interface GiteaNotificationCount {
  /** @format int64 */
  new?: number;
}

/** NotificationSubject contains the notification subject (Issue/Pull/Commit) */
export interface GiteaNotificationSubject {
  html_url?: string;
  latest_comment_html_url?: string;
  latest_comment_url?: string;
  /** StateType issue state type */
  state?: GiteaStateType;
  title?: string;
  /** NotifySubjectType represent type of notification subject */
  type?: GiteaNotifySubjectType;
  url?: string;
}

/** NotificationThread expose Notification on API */
export interface GiteaNotificationThread {
  /** @format int64 */
  id?: number;
  pinned?: boolean;
  /** Repository represents a repository */
  repository?: GiteaRepository;
  /** NotificationSubject contains the notification subject (Issue/Pull/Commit) */
  subject?: GiteaNotificationSubject;
  unread?: boolean;
  /** @format date-time */
  updated_at?: string;
  url?: string;
}

/** NotifySubjectType represent type of notification subject */
export type GiteaNotifySubjectType = string;

/** OAuth2Application represents an OAuth2 application. */
export interface GiteaOAuth2Application {
  client_id?: string;
  client_secret?: string;
  confidential_client?: boolean;
  /** @format date-time */
  created?: string;
  /** @format int64 */
  id?: number;
  name?: string;
  redirect_uris?: string[];
}

/** Organization represents an organization */
export interface GiteaOrganization {
  avatar_url?: string;
  description?: string;
  full_name?: string;
  /** @format int64 */
  id?: number;
  location?: string;
  name?: string;
  repo_admin_change_team_access?: boolean;
  /** deprecated */
  username?: string;
  visibility?: string;
  website?: string;
}

/** OrganizationPermissions list different users permissions on an organization */
export interface GiteaOrganizationPermissions {
  can_create_repository?: boolean;
  can_read?: boolean;
  can_write?: boolean;
  is_admin?: boolean;
  is_owner?: boolean;
}

/** PRBranchInfo information about a branch */
export interface GiteaPRBranchInfo {
  label?: string;
  ref?: string;
  /** Repository represents a repository */
  repo?: GiteaRepository;
  /** @format int64 */
  repo_id?: number;
  sha?: string;
}

/** Package represents a package */
export interface GiteaPackage {
  /** @format date-time */
  created_at?: string;
  /** User represents a user */
  creator?: GiteaUser;
  /** @format int64 */
  id?: number;
  name?: string;
  /** User represents a user */
  owner?: GiteaUser;
  /** Repository represents a repository */
  repository?: GiteaRepository;
  type?: string;
  version?: string;
}

/** PackageFile represents a package file */
export interface GiteaPackageFile {
  /** @format int64 */
  Size?: number;
  /** @format int64 */
  id?: number;
  md5?: string;
  name?: string;
  sha1?: string;
  sha256?: string;
  sha512?: string;
}

/** PayloadCommit represents a commit */
export interface GiteaPayloadCommit {
  added?: string[];
  /** PayloadUser represents the author or committer of a commit */
  author?: GiteaPayloadUser;
  /** PayloadUser represents the author or committer of a commit */
  committer?: GiteaPayloadUser;
  /** sha1 hash of the commit */
  id?: string;
  message?: string;
  modified?: string[];
  removed?: string[];
  /** @format date-time */
  timestamp?: string;
  url?: string;
  /** PayloadCommitVerification represents the GPG verification of a commit */
  verification?: GiteaPayloadCommitVerification;
}

/** PayloadCommitVerification represents the GPG verification of a commit */
export interface GiteaPayloadCommitVerification {
  payload?: string;
  reason?: string;
  signature?: string;
  /** PayloadUser represents the author or committer of a commit */
  signer?: GiteaPayloadUser;
  verified?: boolean;
}

/** PayloadUser represents the author or committer of a commit */
export interface GiteaPayloadUser {
  /** @format email */
  email?: string;
  /** Full name of the commit author */
  name?: string;
  username?: string;
}

/** Permission represents a set of permissions */
export interface GiteaPermission {
  admin?: boolean;
  pull?: boolean;
  push?: boolean;
}

/** PublicKey publickey is a user key to push code to repository */
export interface GiteaPublicKey {
  /** @format date-time */
  created_at?: string;
  fingerprint?: string;
  /** @format int64 */
  id?: number;
  key?: string;
  key_type?: string;
  read_only?: boolean;
  title?: string;
  url?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** PullRequest represents a pull request */
export interface GiteaPullRequest {
  allow_maintainer_edit?: boolean;
  /** User represents a user */
  assignee?: GiteaUser;
  assignees?: GiteaUser[];
  /** PRBranchInfo information about a branch */
  base?: GiteaPRBranchInfo;
  body?: string;
  /** @format date-time */
  closed_at?: string;
  /** @format int64 */
  comments?: number;
  /** @format date-time */
  created_at?: string;
  diff_url?: string;
  /** @format date-time */
  due_date?: string;
  /** PRBranchInfo information about a branch */
  head?: GiteaPRBranchInfo;
  html_url?: string;
  /** @format int64 */
  id?: number;
  is_locked?: boolean;
  labels?: GiteaLabel[];
  merge_base?: string;
  merge_commit_sha?: string;
  mergeable?: boolean;
  merged?: boolean;
  /** @format date-time */
  merged_at?: string;
  /** User represents a user */
  merged_by?: GiteaUser;
  /** Milestone milestone is a collection of issues on one repository */
  milestone?: GiteaMilestone;
  /** @format int64 */
  number?: number;
  patch_url?: string;
  /** @format int64 */
  pin_order?: number;
  requested_reviewers?: GiteaUser[];
  /** StateType issue state type */
  state?: GiteaStateType;
  title?: string;
  /** @format date-time */
  updated_at?: string;
  url?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** PullRequestMeta PR info if an issue is a PR */
export interface GiteaPullRequestMeta {
  merged?: boolean;
  /** @format date-time */
  merged_at?: string;
}

/** PullReview represents a pull request review */
export interface GiteaPullReview {
  body?: string;
  /** @format int64 */
  comments_count?: number;
  commit_id?: string;
  dismissed?: boolean;
  html_url?: string;
  /** @format int64 */
  id?: number;
  official?: boolean;
  pull_request_url?: string;
  stale?: boolean;
  /** ReviewStateType review state type */
  state?: GiteaReviewStateType;
  /** @format date-time */
  submitted_at?: string;
  /** Team represents a team in an organization */
  team?: GiteaTeam;
  /** @format date-time */
  updated_at?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** PullReviewComment represents a comment on a pull request review */
export interface GiteaPullReviewComment {
  body?: string;
  commit_id?: string;
  /** @format date-time */
  created_at?: string;
  diff_hunk?: string;
  html_url?: string;
  /** @format int64 */
  id?: number;
  original_commit_id?: string;
  /** @format uint64 */
  original_position?: number;
  path?: string;
  /** @format uint64 */
  position?: number;
  /** @format int64 */
  pull_request_review_id?: number;
  pull_request_url?: string;
  /** User represents a user */
  resolver?: GiteaUser;
  /** @format date-time */
  updated_at?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** PullReviewRequestOptions are options to add or remove pull review requests */
export interface GiteaPullReviewRequestOptions {
  reviewers?: string[];
  team_reviewers?: string[];
}

/** PushMirror represents information of a push mirror */
export interface GiteaPushMirror {
  created?: string;
  interval?: string;
  last_error?: string;
  last_update?: string;
  remote_address?: string;
  remote_name?: string;
  repo_name?: string;
  sync_on_commit?: boolean;
}

/** Reaction contain one reaction */
export interface GiteaReaction {
  content?: string;
  /** @format date-time */
  created_at?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** Reference represents a Git reference. */
export interface GiteaReference {
  object?: GiteaGitObject;
  ref?: string;
  url?: string;
}

/** Release represents a repository release */
export interface GiteaRelease {
  assets?: GiteaAttachment[];
  /** User represents a user */
  author?: GiteaUser;
  body?: string;
  /** @format date-time */
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  /** @format int64 */
  id?: number;
  name?: string;
  prerelease?: boolean;
  /** @format date-time */
  published_at?: string;
  tag_name?: string;
  tarball_url?: string;
  target_commitish?: string;
  url?: string;
  zipball_url?: string;
}

/** RenameUserOption options when renaming a user */
export interface GiteaRenameUserOption {
  /**
   * New username for this user. This name cannot be in use yet by any other user.
   * @uniqueItems true
   */
  new_username: string;
}

/** RepoCollaboratorPermission to get repository permission for a collaborator */
export interface GiteaRepoCollaboratorPermission {
  permission?: string;
  role_name?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** RepoCommit contains information of a commit in the context of a repository. */
export interface GiteaRepoCommit {
  author?: GiteaCommitUser;
  committer?: GiteaCommitUser;
  message?: string;
  tree?: GiteaCommitMeta;
  url?: string;
  /** PayloadCommitVerification represents the GPG verification of a commit */
  verification?: GiteaPayloadCommitVerification;
}

/** RepoTopicOptions a collection of repo topic names */
export interface GiteaRepoTopicOptions {
  /** list of topic names */
  topics?: string[];
}

/** RepoTransfer represents a pending repo transfer */
export interface GiteaRepoTransfer {
  /** User represents a user */
  doer?: GiteaUser;
  /** User represents a user */
  recipient?: GiteaUser;
  teams?: GiteaTeam[];
}

/** Repository represents a repository */
export interface GiteaRepository {
  allow_merge_commits?: boolean;
  allow_rebase?: boolean;
  allow_rebase_explicit?: boolean;
  allow_rebase_update?: boolean;
  allow_squash_merge?: boolean;
  archived?: boolean;
  /** @format date-time */
  archived_at?: string;
  avatar_url?: string;
  clone_url?: string;
  /** @format date-time */
  created_at?: string;
  default_allow_maintainer_edit?: boolean;
  default_branch?: string;
  default_delete_branch_after_merge?: boolean;
  default_merge_style?: string;
  description?: string;
  empty?: boolean;
  /** ExternalTracker represents settings for external tracker */
  external_tracker?: GiteaExternalTracker;
  /** ExternalWiki represents setting for external wiki */
  external_wiki?: GiteaExternalWiki;
  fork?: boolean;
  /** @format int64 */
  forks_count?: number;
  full_name?: string;
  has_actions?: boolean;
  has_issues?: boolean;
  has_packages?: boolean;
  has_projects?: boolean;
  has_pull_requests?: boolean;
  has_releases?: boolean;
  has_wiki?: boolean;
  html_url?: string;
  /** @format int64 */
  id?: number;
  ignore_whitespace_conflicts?: boolean;
  internal?: boolean;
  /** InternalTracker represents settings for internal tracker */
  internal_tracker?: GiteaInternalTracker;
  language?: string;
  languages_url?: string;
  link?: string;
  mirror?: boolean;
  mirror_interval?: string;
  /** @format date-time */
  mirror_updated?: string;
  name?: string;
  /** @format int64 */
  open_issues_count?: number;
  /** @format int64 */
  open_pr_counter?: number;
  original_url?: string;
  /** User represents a user */
  owner?: GiteaUser;
  /** Repository represents a repository */
  parent?: GiteaRepository;
  /** Permission represents a set of permissions */
  permissions?: GiteaPermission;
  private?: boolean;
  /** @format int64 */
  release_counter?: number;
  /** RepoTransfer represents a pending repo transfer */
  repo_transfer?: GiteaRepoTransfer;
  /** @format int64 */
  size?: number;
  ssh_url?: string;
  /** @format int64 */
  stars_count?: number;
  template?: boolean;
  /** @format date-time */
  updated_at?: string;
  /** @format int64 */
  watchers_count?: number;
  website?: string;
}

/** RepositoryMeta basic repository information */
export interface GiteaRepositoryMeta {
  full_name?: string;
  /** @format int64 */
  id?: number;
  name?: string;
  owner?: string;
}

/** ReviewStateType review state type */
export type GiteaReviewStateType = string;

/** SearchResults results of a successful search */
export interface GiteaSearchResults {
  data?: GiteaRepository[];
  ok?: boolean;
}

/** ServerVersion wraps the version of the server */
export interface GiteaServerVersion {
  version?: string;
}

/** StateType issue state type */
export type GiteaStateType = string;

/** StopWatch represent a running stopwatch */
export interface GiteaStopWatch {
  /** @format date-time */
  created?: string;
  duration?: string;
  /** @format int64 */
  issue_index?: number;
  issue_title?: string;
  repo_name?: string;
  repo_owner_name?: string;
  /** @format int64 */
  seconds?: number;
}

/** SubmitPullReviewOptions are options to submit a pending pull review */
export interface GiteaSubmitPullReviewOptions {
  body?: string;
  /** ReviewStateType review state type */
  event?: GiteaReviewStateType;
}

/** Tag represents a repository tag */
export interface GiteaTag {
  commit?: GiteaCommitMeta;
  id?: string;
  message?: string;
  name?: string;
  tarball_url?: string;
  zipball_url?: string;
}

/** Team represents a team in an organization */
export interface GiteaTeam {
  can_create_org_repo?: boolean;
  description?: string;
  /** @format int64 */
  id?: number;
  includes_all_repositories?: boolean;
  name?: string;
  /** Organization represents an organization */
  organization?: GiteaOrganization;
  permission?: 'none' | 'read' | 'write' | 'admin' | 'owner';
  /** @example ["repo.code","repo.issues","repo.ext_issues","repo.wiki","repo.pulls","repo.releases","repo.projects","repo.ext_wiki"] */
  units?: string[];
  /** @example {"repo.code":"read","repo.ext_issues":"none","repo.ext_wiki":"none","repo.issues":"write","repo.projects":"none","repo.pulls":"owner","repo.releases":"none","repo.wiki":"admin"} */
  units_map?: Record<string, string>;
}

/**
 * TimeStamp defines a timestamp
 * @format int64
 */
export type GiteaTimeStamp = number;

/** TimelineComment represents a timeline comment (comment of any type) on a commit or issue */
export interface GiteaTimelineComment {
  /** User represents a user */
  assignee?: GiteaUser;
  /** Team represents a team in an organization */
  assignee_team?: GiteaTeam;
  body?: string;
  /** @format date-time */
  created_at?: string;
  /** Issue represents an issue in a repository */
  dependent_issue?: GiteaIssue;
  html_url?: string;
  /** @format int64 */
  id?: number;
  issue_url?: string;
  /** Label a label to an issue or a pr */
  label?: GiteaLabel;
  /** Milestone milestone is a collection of issues on one repository */
  milestone?: GiteaMilestone;
  new_ref?: string;
  new_title?: string;
  /** Milestone milestone is a collection of issues on one repository */
  old_milestone?: GiteaMilestone;
  /** @format int64 */
  old_project_id?: number;
  old_ref?: string;
  old_title?: string;
  /** @format int64 */
  project_id?: number;
  pull_request_url?: string;
  ref_action?: string;
  /** Comment represents a comment on a commit or issue */
  ref_comment?: GiteaComment;
  /** commit SHA where issue/PR was referenced */
  ref_commit_sha?: string;
  /** Issue represents an issue in a repository */
  ref_issue?: GiteaIssue;
  /** whether the assignees were removed or added */
  removed_assignee?: boolean;
  /** User represents a user */
  resolve_doer?: GiteaUser;
  /** @format int64 */
  review_id?: number;
  /** TrackedTime worked time for an issue / pr */
  tracked_time?: GiteaTrackedTime;
  type?: string;
  /** @format date-time */
  updated_at?: string;
  /** User represents a user */
  user?: GiteaUser;
}

/** TopicName a list of repo topic names */
export interface GiteaTopicName {
  topics?: string[];
}

/** TopicResponse for returning topics */
export interface GiteaTopicResponse {
  /** @format date-time */
  created?: string;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  repo_count?: number;
  topic_name?: string;
  /** @format date-time */
  updated?: string;
}

/** TrackedTime worked time for an issue / pr */
export interface GiteaTrackedTime {
  /** @format date-time */
  created?: string;
  /** @format int64 */
  id?: number;
  /** Issue represents an issue in a repository */
  issue?: GiteaIssue;
  /**
   * deprecated (only for backwards compatibility)
   * @format int64
   */
  issue_id?: number;
  /**
   * Time in seconds
   * @format int64
   */
  time?: number;
  /**
   * deprecated (only for backwards compatibility)
   * @format int64
   */
  user_id?: number;
  user_name?: string;
}

/** TransferRepoOption options when transfer a repository's ownership */
export interface GiteaTransferRepoOption {
  new_owner: string;
  /** ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories. */
  team_ids?: number[];
}

/**
 * UpdateFileOptions options for updating files
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 */
export interface GiteaUpdateFileOptions {
  /** Identity for a person's identity like an author or committer */
  author?: GiteaIdentity;
  /** branch (optional) to base this file from. if not given, the default branch is used */
  branch?: string;
  /** Identity for a person's identity like an author or committer */
  committer?: GiteaIdentity;
  /** content must be base64 encoded */
  content: string;
  /** CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE */
  dates?: GiteaCommitDateOptions;
  /** from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL */
  from_path?: string;
  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  message?: string;
  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  new_branch?: string;
  /** sha is the SHA for the file that already exists */
  sha: string;
  /** Add a Signed-off-by trailer by the committer at the end of the commit log message. */
  signoff?: boolean;
}

/** User represents a user */
export interface GiteaUser {
  /** Is user active */
  active?: boolean;
  /** URL to the user's avatar */
  avatar_url?: string;
  /** @format date-time */
  created?: string;
  /** the user's description */
  description?: string;
  /** @format email */
  email?: string;
  /**
   * user counts
   * @format int64
   */
  followers_count?: number;
  /** @format int64 */
  following_count?: number;
  /** the user's full name */
  full_name?: string;
  /**
   * the user's id
   * @format int64
   */
  id?: number;
  /** Is the user an administrator */
  is_admin?: boolean;
  /** User locale */
  language?: string;
  /** @format date-time */
  last_login?: string;
  /** the user's location */
  location?: string;
  /** the user's username */
  login?: string;
  /**
   * the user's authentication sign-in name.
   * @default "empty"
   */
  login_name?: string;
  /** Is user login prohibited */
  prohibit_login?: boolean;
  /** Is user restricted */
  restricted?: boolean;
  /** @format int64 */
  starred_repos_count?: number;
  /** User visibility level option: public, limited, private */
  visibility?: string;
  /** the user's website */
  website?: string;
}

/** UserHeatmapData represents the data needed to create a heatmap */
export interface GiteaUserHeatmapData {
  /** @format int64 */
  contributions?: number;
  /** TimeStamp defines a timestamp */
  timestamp?: GiteaTimeStamp;
}

/** UserSettings represents user settings */
export interface GiteaUserSettings {
  description?: string;
  diff_view_style?: string;
  full_name?: string;
  hide_activity?: boolean;
  /** Privacy */
  hide_email?: boolean;
  language?: string;
  location?: string;
  theme?: string;
  website?: string;
}

/** UserSettingsOptions represents options to change user settings */
export interface GiteaUserSettingsOptions {
  description?: string;
  diff_view_style?: string;
  full_name?: string;
  hide_activity?: boolean;
  /** Privacy */
  hide_email?: boolean;
  language?: string;
  location?: string;
  theme?: string;
  website?: string;
}

/** WatchInfo represents an API watch status of one repository */
export interface GiteaWatchInfo {
  /** @format date-time */
  created_at?: string;
  ignored?: boolean;
  reason?: any;
  repository_url?: string;
  subscribed?: boolean;
  url?: string;
}

/** WikiCommit page commit/revision */
export interface GiteaWikiCommit {
  author?: GiteaCommitUser;
  commiter?: GiteaCommitUser;
  message?: string;
  sha?: string;
}

/** WikiCommitList commit/revision list */
export interface GiteaWikiCommitList {
  commits?: GiteaWikiCommit[];
  /** @format int64 */
  count?: number;
}

/** WikiPage a wiki page */
export interface GiteaWikiPage {
  /** @format int64 */
  commit_count?: number;
  /** Page content, base64 encoded */
  content_base64?: string;
  footer?: string;
  html_url?: string;
  /** WikiCommit page commit/revision */
  last_commit?: GiteaWikiCommit;
  sidebar?: string;
  sub_url?: string;
  title?: string;
}

/** WikiPageMetaData wiki page meta information */
export interface GiteaWikiPageMetaData {
  html_url?: string;
  /** WikiCommit page commit/revision */
  last_commit?: GiteaWikiCommit;
  sub_url?: string;
  title?: string;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '/api/v1',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { 'Content-Type': type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Gitea API.
 * @version 1.20.3
 * @license MIT (http://opensource.org/licenses/MIT)
 * @baseUrl /api/v1
 *
 * This documentation describes the Gitea API.
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  activitypub = {
    /**
     * No description
     *
     * @tags activitypub
     * @name ActivitypubPerson
     * @summary Returns the Person actor for a user
     * @request GET:/activitypub/user-id/{user-id}
     * @secure
     */
    activitypubPerson: (userId: number, params: RequestParams = {}) =>
      this.http.request<GiteaActivityPub, any>({
        path: `/activitypub/user-id/${userId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags activitypub
     * @name ActivitypubPersonInbox
     * @summary Send to the inbox
     * @request POST:/activitypub/user-id/{user-id}/inbox
     * @secure
     */
    activitypubPersonInbox: (userId: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/activitypub/user-id/${userId}/inbox`,
        method: 'POST',
        secure: true,
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags admin
     * @name AdminCronList
     * @summary List cron tasks
     * @request GET:/admin/cron
     * @secure
     */
    adminCronList: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCron[], any>({
        path: `/admin/cron`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCronRun
     * @summary Run cron task
     * @request POST:/admin/cron/{task}
     * @secure
     */
    adminCronRun: (task: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/admin/cron/${task}`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminGetAllEmails
     * @summary List all emails
     * @request GET:/admin/emails
     * @secure
     */
    adminGetAllEmails: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaEmail[], any>({
        path: `/admin/emails`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminSearchEmails
     * @summary Search all emails
     * @request GET:/admin/emails/search
     * @secure
     */
    adminSearchEmails: (
      query?: {
        /** keyword */
        q?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaEmail[], any>({
        path: `/admin/emails/search`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminListHooks
     * @summary List system's webhooks
     * @request GET:/admin/hooks
     * @secure
     */
    adminListHooks: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook[], any>({
        path: `/admin/hooks`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCreateHook
     * @summary Create a hook
     * @request POST:/admin/hooks
     * @secure
     */
    adminCreateHook: (
      body: GiteaCreateHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/admin/hooks`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminGetHook
     * @summary Get a hook
     * @request GET:/admin/hooks/{id}
     * @secure
     */
    adminGetHook: (id: number, params: RequestParams = {}) =>
      this.http.request<GiteaHook, any>({
        path: `/admin/hooks/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDeleteHook
     * @summary Delete a hook
     * @request DELETE:/admin/hooks/{id}
     * @secure
     */
    adminDeleteHook: (id: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/admin/hooks/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminEditHook
     * @summary Update a hook
     * @request PATCH:/admin/hooks/{id}
     * @secure
     */
    adminEditHook: (
      id: number,
      body: GiteaEditHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/admin/hooks/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminGetAllOrgs
     * @summary List all organizations
     * @request GET:/admin/orgs
     * @secure
     */
    adminGetAllOrgs: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganization[], any>({
        path: `/admin/orgs`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUnadoptedList
     * @summary List unadopted repositories
     * @request GET:/admin/unadopted
     * @secure
     */
    adminUnadoptedList: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
        /** pattern of repositories to search for */
        pattern?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<string[], any>({
        path: `/admin/unadopted`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminAdoptRepository
     * @summary Adopt unadopted files as a repository
     * @request POST:/admin/unadopted/{owner}/{repo}
     * @secure
     */
    adminAdoptRepository: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/admin/unadopted/${owner}/${repo}`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDeleteUnadoptedRepository
     * @summary Delete unadopted files
     * @request DELETE:/admin/unadopted/{owner}/{repo}
     * @secure
     */
    adminDeleteUnadoptedRepository: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/admin/unadopted/${owner}/${repo}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminSearchUsers
     * @summary Search users according filter conditions
     * @request GET:/admin/users
     * @secure
     */
    adminSearchUsers: (
      query?: {
        /**
         * ID of the user's login source to search for
         * @format int64
         */
        source_id?: number;
        /** user's login name to search for */
        login_name?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/admin/users`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCreateUser
     * @summary Create a user
     * @request POST:/admin/users
     * @secure
     */
    adminCreateUser: (
      body: GiteaCreateUserOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser, any>({
        path: `/admin/users`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDeleteUser
     * @summary Delete a user
     * @request DELETE:/admin/users/{username}
     * @secure
     */
    adminDeleteUser: (
      username: string,
      query?: {
        /** purge the user from the system completely */
        purge?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/admin/users/${username}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminEditUser
     * @summary Edit an existing user
     * @request PATCH:/admin/users/{username}
     * @secure
     */
    adminEditUser: (
      username: string,
      body: GiteaEditUserOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser, any>({
        path: `/admin/users/${username}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCreatePublicKey
     * @summary Add a public key on behalf of a user
     * @request POST:/admin/users/{username}/keys
     * @secure
     */
    adminCreatePublicKey: (
      username: string,
      key: GiteaCreateKeyOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPublicKey, any>({
        path: `/admin/users/${username}/keys`,
        method: 'POST',
        body: key,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDeleteUserPublicKey
     * @summary Delete a user's public key
     * @request DELETE:/admin/users/{username}/keys/{id}
     * @secure
     */
    adminDeleteUserPublicKey: (
      username: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/admin/users/${username}/keys/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCreateOrg
     * @summary Create an organization
     * @request POST:/admin/users/{username}/orgs
     * @secure
     */
    adminCreateOrg: (
      username: string,
      organization: GiteaCreateOrgOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganization, any>({
        path: `/admin/users/${username}/orgs`,
        method: 'POST',
        body: organization,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRenameUser
     * @summary Rename a user
     * @request POST:/admin/users/{username}/rename
     * @secure
     */
    adminRenameUser: (
      username: string,
      body: GiteaRenameUserOption,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/admin/users/${username}/rename`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCreateRepo
     * @summary Create a repository on behalf of a user
     * @request POST:/admin/users/{username}/repos
     * @secure
     */
    adminCreateRepo: (
      username: string,
      repository: GiteaCreateRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/admin/users/${username}/repos`,
        method: 'POST',
        body: repository,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  gitignore = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name ListGitignoresTemplates
     * @summary Returns a list of all gitignore templates
     * @request GET:/gitignore/templates
     * @secure
     */
    listGitignoresTemplates: (params: RequestParams = {}) =>
      this.http.request<string[], any>({
        path: `/gitignore/templates`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags miscellaneous
     * @name GetGitignoreTemplateInfo
     * @summary Returns information about a gitignore template
     * @request GET:/gitignore/templates/{name}
     * @secure
     */
    getGitignoreTemplateInfo: (name: string, params: RequestParams = {}) =>
      this.http.request<GiteaGitignoreTemplateInfo, any>({
        path: `/gitignore/templates/${name}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  label = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name ListLabelTemplates
     * @summary Returns a list of all label templates
     * @request GET:/label/templates
     * @secure
     */
    listLabelTemplates: (params: RequestParams = {}) =>
      this.http.request<string[], any>({
        path: `/label/templates`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags miscellaneous
     * @name GetLabelTemplateInfo
     * @summary Returns all labels in a template
     * @request GET:/label/templates/{name}
     * @secure
     */
    getLabelTemplateInfo: (name: string, params: RequestParams = {}) =>
      this.http.request<GiteaLabelTemplate[], any>({
        path: `/label/templates/${name}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  licenses = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name ListLicenseTemplates
     * @summary Returns a list of all license templates
     * @request GET:/licenses
     * @secure
     */
    listLicenseTemplates: (params: RequestParams = {}) =>
      this.http.request<GiteaLicensesTemplateListEntry[], any>({
        path: `/licenses`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags miscellaneous
     * @name GetLicenseTemplateInfo
     * @summary Returns information about a license template
     * @request GET:/licenses/{name}
     * @secure
     */
    getLicenseTemplateInfo: (name: string, params: RequestParams = {}) =>
      this.http.request<GiteaLicenseTemplateInfo, any>({
        path: `/licenses/${name}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  markdown = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name RenderMarkdown
     * @summary Render a markdown document as HTML
     * @request POST:/markdown
     * @secure
     */
    renderMarkdown: (body: GiteaMarkdownOption, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/markdown`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags miscellaneous
     * @name RenderMarkdownRaw
     * @summary Render raw markdown as HTML
     * @request POST:/markdown/raw
     * @secure
     */
    renderMarkdownRaw: (
      body: GiteaCommitStatusState,
      params: RequestParams = {}
    ) =>
      this.http.request<string, any>({
        path: `/markdown/raw`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Text,
        ...params,
      }),
  };
  markup = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name RenderMarkup
     * @summary Render a markup document as HTML
     * @request POST:/markup
     * @secure
     */
    renderMarkup: (body: GiteaMarkupOption, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/markup`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  nodeinfo = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name GetNodeInfo
     * @summary Returns the nodeinfo of the Gitea application
     * @request GET:/nodeinfo
     * @secure
     */
    getNodeInfo: (params: RequestParams = {}) =>
      this.http.request<GiteaNodeInfo, any>({
        path: `/nodeinfo`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags notification
     * @name NotifyGetList
     * @summary List users's notification threads
     * @request GET:/notifications
     * @secure
     */
    notifyGetList: (
      query?: {
        /** If true, show notifications marked as read. Default value is false */
        all?: boolean;
        /** Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned. */
        'status-types'?: string[];
        /** filter notifications by subject type */
        'subject-type'?: ('issue' | 'pull' | 'commit' | 'repository')[];
        /**
         * Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        since?: string;
        /**
         * Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        before?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaNotificationThread[], any>({
        path: `/notifications`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotifyReadList
     * @summary Mark notification threads as read, pinned or unread
     * @request PUT:/notifications
     * @secure
     */
    notifyReadList: (
      query?: {
        /**
         * Describes the last point that notifications were checked. Anything updated since this time will not be updated.
         * @format date-time
         */
        last_read_at?: string;
        /** If true, mark all notifications on this repo. Default value is false */
        all?: string;
        /** Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. */
        'status-types'?: string[];
        /** Status to mark notifications as, Defaults to read. */
        'to-status'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaNotificationThread[], any>({
        path: `/notifications`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotifyNewAvailable
     * @summary Check if unread notifications exist
     * @request GET:/notifications/new
     * @secure
     */
    notifyNewAvailable: (params: RequestParams = {}) =>
      this.http.request<GiteaNotificationCount, any>({
        path: `/notifications/new`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotifyGetThread
     * @summary Get notification thread by ID
     * @request GET:/notifications/threads/{id}
     * @secure
     */
    notifyGetThread: (id: string, params: RequestParams = {}) =>
      this.http.request<GiteaNotificationThread, any>({
        path: `/notifications/threads/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotifyReadThread
     * @summary Mark notification thread as read by ID
     * @request PATCH:/notifications/threads/{id}
     * @secure
     */
    notifyReadThread: (
      id: string,
      query?: {
        /**
         * Status to mark notifications as
         * @default "read"
         */
        'to-status'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaNotificationThread, any>({
        path: `/notifications/threads/${id}`,
        method: 'PATCH',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  org = {
    /**
     * No description
     *
     * @tags organization
     * @name CreateOrgRepoDeprecated
     * @summary Create a repository in an organization
     * @request POST:/org/{org}/repos
     * @deprecated
     * @secure
     */
    createOrgRepoDeprecated: (
      org: string,
      body: GiteaCreateRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/org/${org}/repos`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  orgs = {
    /**
     * No description
     *
     * @tags organization
     * @name OrgGetAll
     * @summary Get list of organizations
     * @request GET:/orgs
     * @secure
     */
    orgGetAll: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganization[], any>({
        path: `/orgs`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgCreate
     * @summary Create an organization
     * @request POST:/orgs
     * @secure
     */
    orgCreate: (
      organization: GiteaCreateOrgOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganization, any>({
        path: `/orgs`,
        method: 'POST',
        body: organization,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgGet
     * @summary Get an organization
     * @request GET:/orgs/{org}
     * @secure
     */
    orgGet: (org: string, params: RequestParams = {}) =>
      this.http.request<GiteaOrganization, any>({
        path: `/orgs/${org}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgDelete
     * @summary Delete an organization
     * @request DELETE:/orgs/{org}
     * @secure
     */
    orgDelete: (org: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/orgs/${org}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgEdit
     * @summary Edit an organization
     * @request PATCH:/orgs/{org}
     * @secure
     */
    orgEdit: (
      org: string,
      body: GiteaEditOrgOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganization, any>({
        path: `/orgs/${org}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListActivityFeeds
     * @summary List an organization's activity feeds
     * @request GET:/orgs/{org}/activities/feeds
     * @secure
     */
    orgListActivityFeeds: (
      org: string,
      query?: {
        /**
         * the date of the activities to be found
         * @format date
         */
        date?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaActivity[], any>({
        path: `/orgs/${org}/activities/feeds`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListHooks
     * @summary List an organization's webhooks
     * @request GET:/orgs/{org}/hooks
     * @secure
     */
    orgListHooks: (
      org: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook[], any>({
        path: `/orgs/${org}/hooks`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgCreateHook
     * @summary Create a hook
     * @request POST:/orgs/{org}/hooks
     * @secure
     */
    orgCreateHook: (
      org: string,
      body: GiteaCreateHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/orgs/${org}/hooks`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgGetHook
     * @summary Get a hook
     * @request GET:/orgs/{org}/hooks/{id}
     * @secure
     */
    orgGetHook: (org: string, id: number, params: RequestParams = {}) =>
      this.http.request<GiteaHook, any>({
        path: `/orgs/${org}/hooks/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgDeleteHook
     * @summary Delete a hook
     * @request DELETE:/orgs/{org}/hooks/{id}
     * @secure
     */
    orgDeleteHook: (org: string, id: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/orgs/${org}/hooks/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgEditHook
     * @summary Update a hook
     * @request PATCH:/orgs/{org}/hooks/{id}
     * @secure
     */
    orgEditHook: (
      org: string,
      id: number,
      body: GiteaEditHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/orgs/${org}/hooks/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListLabels
     * @summary List an organization's labels
     * @request GET:/orgs/{org}/labels
     * @secure
     */
    orgListLabels: (
      org: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel[], any>({
        path: `/orgs/${org}/labels`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgCreateLabel
     * @summary Create a label for an organization
     * @request POST:/orgs/{org}/labels
     * @secure
     */
    orgCreateLabel: (
      org: string,
      body: GiteaCreateLabelOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel, any>({
        path: `/orgs/${org}/labels`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgGetLabel
     * @summary Get a single label
     * @request GET:/orgs/{org}/labels/{id}
     * @secure
     */
    orgGetLabel: (org: string, id: number, params: RequestParams = {}) =>
      this.http.request<GiteaLabel, any>({
        path: `/orgs/${org}/labels/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgDeleteLabel
     * @summary Delete a label
     * @request DELETE:/orgs/{org}/labels/{id}
     * @secure
     */
    orgDeleteLabel: (org: string, id: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/orgs/${org}/labels/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgEditLabel
     * @summary Update a label
     * @request PATCH:/orgs/{org}/labels/{id}
     * @secure
     */
    orgEditLabel: (
      org: string,
      id: number,
      body: GiteaEditLabelOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel, any>({
        path: `/orgs/${org}/labels/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListMembers
     * @summary List an organization's members
     * @request GET:/orgs/{org}/members
     * @secure
     */
    orgListMembers: (
      org: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/orgs/${org}/members`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgIsMember
     * @summary Check if a user is a member of an organization
     * @request GET:/orgs/{org}/members/{username}
     * @secure
     */
    orgIsMember: (org: string, username: string, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/orgs/${org}/members/${username}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgDeleteMember
     * @summary Remove a member from an organization
     * @request DELETE:/orgs/{org}/members/{username}
     * @secure
     */
    orgDeleteMember: (
      org: string,
      username: string,
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/orgs/${org}/members/${username}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListPublicMembers
     * @summary List an organization's public members
     * @request GET:/orgs/{org}/public_members
     * @secure
     */
    orgListPublicMembers: (
      org: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/orgs/${org}/public_members`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgIsPublicMember
     * @summary Check if a user is a public member of an organization
     * @request GET:/orgs/{org}/public_members/{username}
     * @secure
     */
    orgIsPublicMember: (
      org: string,
      username: string,
      params: RequestParams = {}
    ) =>
      this.http.request<void, void>({
        path: `/orgs/${org}/public_members/${username}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgPublicizeMember
     * @summary Publicize a user's membership
     * @request PUT:/orgs/{org}/public_members/{username}
     * @secure
     */
    orgPublicizeMember: (
      org: string,
      username: string,
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/orgs/${org}/public_members/${username}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgConcealMember
     * @summary Conceal a user's membership
     * @request DELETE:/orgs/{org}/public_members/{username}
     * @secure
     */
    orgConcealMember: (
      org: string,
      username: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/orgs/${org}/public_members/${username}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListRepos
     * @summary List an organization's repos
     * @request GET:/orgs/{org}/repos
     * @secure
     */
    orgListRepos: (
      org: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/orgs/${org}/repos`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name CreateOrgRepo
     * @summary Create a repository in an organization
     * @request POST:/orgs/{org}/repos
     * @secure
     */
    createOrgRepo: (
      org: string,
      body: GiteaCreateRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/orgs/${org}/repos`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListTeams
     * @summary List an organization's teams
     * @request GET:/orgs/{org}/teams
     * @secure
     */
    orgListTeams: (
      org: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTeam[], any>({
        path: `/orgs/${org}/teams`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgCreateTeam
     * @summary Create a team
     * @request POST:/orgs/{org}/teams
     * @secure
     */
    orgCreateTeam: (
      org: string,
      body: GiteaCreateTeamOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTeam, any>({
        path: `/orgs/${org}/teams`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name TeamSearch
     * @summary Search for teams within an organization
     * @request GET:/orgs/{org}/teams/search
     * @secure
     */
    teamSearch: (
      org: string,
      query?: {
        /** keywords to search */
        q?: string;
        /** include search within team description (defaults to true) */
        include_desc?: boolean;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<
        {
          data?: GiteaTeam[];
          ok?: boolean;
        },
        any
      >({
        path: `/orgs/${org}/teams/search`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  packages = {
    /**
     * No description
     *
     * @tags package
     * @name ListPackages
     * @summary Gets all packages of an owner
     * @request GET:/packages/{owner}
     * @secure
     */
    listPackages: (
      owner: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
        /** package type filter */
        type?:
          | 'alpine'
          | 'cargo'
          | 'chef'
          | 'composer'
          | 'conan'
          | 'conda'
          | 'container'
          | 'cran'
          | 'debian'
          | 'generic'
          | 'go'
          | 'helm'
          | 'maven'
          | 'npm'
          | 'nuget'
          | 'pub'
          | 'pypi'
          | 'rpm'
          | 'rubygems'
          | 'swift'
          | 'vagrant';
        /** name filter */
        q?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPackage[], any>({
        path: `/packages/${owner}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags package
     * @name GetPackage
     * @summary Gets a package
     * @request GET:/packages/{owner}/{type}/{name}/{version}
     * @secure
     */
    getPackage: (
      owner: string,
      type: string,
      name: string,
      version: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPackage, any>({
        path: `/packages/${owner}/${type}/${name}/${version}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags package
     * @name DeletePackage
     * @summary Delete a package
     * @request DELETE:/packages/{owner}/{type}/{name}/{version}
     * @secure
     */
    deletePackage: (
      owner: string,
      type: string,
      name: string,
      version: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/packages/${owner}/${type}/${name}/${version}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags package
     * @name ListPackageFiles
     * @summary Gets all files of a package
     * @request GET:/packages/{owner}/{type}/{name}/{version}/files
     * @secure
     */
    listPackageFiles: (
      owner: string,
      type: string,
      name: string,
      version: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPackageFile[], any>({
        path: `/packages/${owner}/${type}/${name}/${version}/files`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  repos = {
    /**
     * No description
     *
     * @tags issue
     * @name IssueSearchIssues
     * @summary Search for issues across the repositories that the user has access to
     * @request GET:/repos/issues/search
     * @secure
     */
    issueSearchIssues: (
      query?: {
        /** whether issue is open or closed */
        state?: string;
        /** comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
        labels?: string;
        /** comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded */
        milestones?: string;
        /** search string */
        q?: string;
        /**
         * repository to prioritize in the results
         * @format int64
         */
        priority_repo_id?: number;
        /** filter by type (issues / pulls) if set */
        type?: string;
        /**
         * Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        since?: string;
        /**
         * Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        before?: string;
        /** filter (issues / pulls) assigned to you, default is false */
        assigned?: boolean;
        /** filter (issues / pulls) created by you, default is false */
        created?: boolean;
        /** filter (issues / pulls) mentioning you, default is false */
        mentioned?: boolean;
        /** filter pulls requesting your review, default is false */
        review_requested?: boolean;
        /** filter pulls reviewed by you, default is false */
        reviewed?: boolean;
        /** filter by owner */
        owner?: string;
        /** filter by team (requires organization owner parameter to be provided) */
        team?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue[], any>({
        path: `/repos/issues/search`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoMigrate
     * @summary Migrate a remote git repository
     * @request POST:/repos/migrate
     * @secure
     */
    repoMigrate: (body: GiteaMigrateRepoOptions, params: RequestParams = {}) =>
      this.http.request<GiteaRepository, void>({
        path: `/repos/migrate`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoSearch
     * @summary Search for repositories
     * @request GET:/repos/search
     * @secure
     */
    repoSearch: (
      query?: {
        /** keyword */
        q?: string;
        /** Limit search to repositories with keyword as topic */
        topic?: boolean;
        /** include search of keyword within repository description */
        includeDesc?: boolean;
        /**
         * search only for repos that the user with the given id owns or contributes to
         * @format int64
         */
        uid?: number;
        /**
         * repo owner to prioritize in the results
         * @format int64
         */
        priority_owner_id?: number;
        /**
         * search only for repos that belong to the given team id
         * @format int64
         */
        team_id?: number;
        /**
         * search only for repos that the user with the given id has starred
         * @format int64
         */
        starredBy?: number;
        /** include private repositories this user has access to (defaults to true) */
        private?: boolean;
        /** show only pubic, private or all repositories (defaults to all) */
        is_private?: boolean;
        /** include template repositories this user has access to (defaults to true) */
        template?: boolean;
        /** show only archived, non-archived or all repositories (defaults to all) */
        archived?: boolean;
        /** type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative" */
        mode?: string;
        /** if `uid` is given, search only for repos that the user owns */
        exclusive?: boolean;
        /** sort repos by attribute. Supported values are "alpha", "created", "updated", "size", and "id". Default is "alpha" */
        sort?: string;
        /** sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified. */
        order?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaSearchResults, any>({
        path: `/repos/search`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGet
     * @summary Get a repository
     * @request GET:/repos/{owner}/{repo}
     * @secure
     */
    repoGet: (owner: string, repo: string, params: RequestParams = {}) =>
      this.http.request<GiteaRepository, any>({
        path: `/repos/${owner}/${repo}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDelete
     * @summary Delete a repository
     * @request DELETE:/repos/{owner}/{repo}
     * @secure
     */
    repoDelete: (owner: string, repo: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEdit
     * @summary Edit a repository's properties. Only fields that are set will be changed.
     * @request PATCH:/repos/{owner}/{repo}
     * @secure
     */
    repoEdit: (
      owner: string,
      repo: string,
      body: GiteaEditRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/repos/${owner}/${repo}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListActivityFeeds
     * @summary List a repository's activity feeds
     * @request GET:/repos/{owner}/{repo}/activities/feeds
     * @secure
     */
    repoListActivityFeeds: (
      owner: string,
      repo: string,
      query?: {
        /**
         * the date of the activities to be found
         * @format date
         */
        date?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaActivity[], any>({
        path: `/repos/${owner}/${repo}/activities/feeds`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetArchive
     * @summary Get an archive of a repository
     * @request GET:/repos/{owner}/{repo}/archive/{archive}
     * @secure
     */
    repoGetArchive: (
      owner: string,
      repo: string,
      archive: string,
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/repos/${owner}/${repo}/archive/${archive}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetAssignees
     * @summary Return all users that have write access and can be assigned to issues
     * @request GET:/repos/{owner}/{repo}/assignees
     * @secure
     */
    repoGetAssignees: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/repos/${owner}/${repo}/assignees`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListBranchProtection
     * @summary List branch protections for a repository
     * @request GET:/repos/{owner}/{repo}/branch_protections
     * @secure
     */
    repoListBranchProtection: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaBranchProtection[], any>({
        path: `/repos/${owner}/${repo}/branch_protections`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateBranchProtection
     * @summary Create a branch protections for a repository
     * @request POST:/repos/{owner}/{repo}/branch_protections
     * @secure
     */
    repoCreateBranchProtection: (
      owner: string,
      repo: string,
      body: GiteaCreateBranchProtectionOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaBranchProtection, any>({
        path: `/repos/${owner}/${repo}/branch_protections`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetBranchProtection
     * @summary Get a specific branch protection for the repository
     * @request GET:/repos/{owner}/{repo}/branch_protections/{name}
     * @secure
     */
    repoGetBranchProtection: (
      owner: string,
      repo: string,
      name: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaBranchProtection, any>({
        path: `/repos/${owner}/${repo}/branch_protections/${name}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteBranchProtection
     * @summary Delete a specific branch protection for the repository
     * @request DELETE:/repos/{owner}/{repo}/branch_protections/{name}
     * @secure
     */
    repoDeleteBranchProtection: (
      owner: string,
      repo: string,
      name: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/branch_protections/${name}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEditBranchProtection
     * @summary Edit a branch protections for a repository. Only fields that are set will be changed
     * @request PATCH:/repos/{owner}/{repo}/branch_protections/{name}
     * @secure
     */
    repoEditBranchProtection: (
      owner: string,
      repo: string,
      name: string,
      body: GiteaEditBranchProtectionOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaBranchProtection, any>({
        path: `/repos/${owner}/${repo}/branch_protections/${name}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListBranches
     * @summary List a repository's branches
     * @request GET:/repos/{owner}/{repo}/branches
     * @secure
     */
    repoListBranches: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaBranch[], any>({
        path: `/repos/${owner}/${repo}/branches`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateBranch
     * @summary Create a branch
     * @request POST:/repos/{owner}/{repo}/branches
     * @secure
     */
    repoCreateBranch: (
      owner: string,
      repo: string,
      body: GiteaCreateBranchRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaBranch, void>({
        path: `/repos/${owner}/${repo}/branches`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetBranch
     * @summary Retrieve a specific branch from a repository, including its effective branch protection
     * @request GET:/repos/{owner}/{repo}/branches/{branch}
     * @secure
     */
    repoGetBranch: (
      owner: string,
      repo: string,
      branch: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaBranch, any>({
        path: `/repos/${owner}/${repo}/branches/${branch}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteBranch
     * @summary Delete a specific branch from a repository
     * @request DELETE:/repos/{owner}/{repo}/branches/{branch}
     * @secure
     */
    repoDeleteBranch: (
      owner: string,
      repo: string,
      branch: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/branches/${branch}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListCollaborators
     * @summary List a repository's collaborators
     * @request GET:/repos/{owner}/{repo}/collaborators
     * @secure
     */
    repoListCollaborators: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/repos/${owner}/${repo}/collaborators`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCheckCollaborator
     * @summary Check if a user is a collaborator of a repository
     * @request GET:/repos/{owner}/{repo}/collaborators/{collaborator}
     * @secure
     */
    repoCheckCollaborator: (
      owner: string,
      repo: string,
      collaborator: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoAddCollaborator
     * @summary Add a collaborator to a repository
     * @request PUT:/repos/{owner}/{repo}/collaborators/{collaborator}
     * @secure
     */
    repoAddCollaborator: (
      owner: string,
      repo: string,
      collaborator: string,
      body: GiteaAddCollaboratorOption,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
        method: 'PUT',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteCollaborator
     * @summary Delete a collaborator from a repository
     * @request DELETE:/repos/{owner}/{repo}/collaborators/{collaborator}
     * @secure
     */
    repoDeleteCollaborator: (
      owner: string,
      repo: string,
      collaborator: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetRepoPermissions
     * @summary Get repository permissions for a user
     * @request GET:/repos/{owner}/{repo}/collaborators/{collaborator}/permission
     * @secure
     */
    repoGetRepoPermissions: (
      owner: string,
      repo: string,
      collaborator: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepoCollaboratorPermission, any>({
        path: `/repos/${owner}/${repo}/collaborators/${collaborator}/permission`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetAllCommits
     * @summary Get a list of all commits from a repository
     * @request GET:/repos/{owner}/{repo}/commits
     * @secure
     */
    repoGetAllCommits: (
      owner: string,
      repo: string,
      query?: {
        /** SHA or branch to start listing commits from (usually 'master') */
        sha?: string;
        /** filepath of a file/dir */
        path?: string;
        /** include diff stats for every commit (disable for speedup, default 'true') */
        stat?: boolean;
        /** include verification for every commit (disable for speedup, default 'true') */
        verification?: boolean;
        /** include a list of affected files for every commit (disable for speedup, default 'true') */
        files?: boolean;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results (ignored if used with 'path') */
        limit?: number;
        /** commits that match the given specifier will not be listed. */
        not?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCommit[], GiteaAPIError>({
        path: `/repos/${owner}/${repo}/commits`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetCombinedStatusByRef
     * @summary Get a commit's combined status, by branch/tag/commit reference
     * @request GET:/repos/{owner}/{repo}/commits/{ref}/status
     * @secure
     */
    repoGetCombinedStatusByRef: (
      owner: string,
      repo: string,
      ref: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCombinedStatus, any>({
        path: `/repos/${owner}/${repo}/commits/${ref}/status`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListStatusesByRef
     * @summary Get a commit's statuses, by branch/tag/commit reference
     * @request GET:/repos/{owner}/{repo}/commits/{ref}/statuses
     * @secure
     */
    repoListStatusesByRef: (
      owner: string,
      repo: string,
      ref: string,
      query?: {
        /** type of sort */
        sort?:
          | 'oldest'
          | 'recentupdate'
          | 'leastupdate'
          | 'leastindex'
          | 'highestindex';
        /** type of state */
        state?: 'pending' | 'success' | 'error' | 'failure' | 'warning';
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCommitStatus[], any>({
        path: `/repos/${owner}/${repo}/commits/${ref}/statuses`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetContentsList
     * @summary Gets the metadata of all the entries of the root dir
     * @request GET:/repos/{owner}/{repo}/contents
     * @secure
     */
    repoGetContentsList: (
      owner: string,
      repo: string,
      query?: {
        /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
        ref?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaContentsResponse[], any>({
        path: `/repos/${owner}/${repo}/contents`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoChangeFiles
     * @summary Modify multiple files in a repository
     * @request POST:/repos/{owner}/{repo}/contents
     * @secure
     */
    repoChangeFiles: (
      owner: string,
      repo: string,
      body: GiteaChangeFilesOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaFilesResponse, any>({
        path: `/repos/${owner}/${repo}/contents`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetContents
     * @summary Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
     * @request GET:/repos/{owner}/{repo}/contents/{filepath}
     * @secure
     */
    repoGetContents: (
      owner: string,
      repo: string,
      filepath: string,
      query?: {
        /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
        ref?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaContentsResponse, any>({
        path: `/repos/${owner}/${repo}/contents/${filepath}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoUpdateFile
     * @summary Update a file in a repository
     * @request PUT:/repos/{owner}/{repo}/contents/{filepath}
     * @secure
     */
    repoUpdateFile: (
      owner: string,
      repo: string,
      filepath: string,
      body: GiteaUpdateFileOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaFileResponse, any>({
        path: `/repos/${owner}/${repo}/contents/${filepath}`,
        method: 'PUT',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateFile
     * @summary Create a file in a repository
     * @request POST:/repos/{owner}/{repo}/contents/{filepath}
     * @secure
     */
    repoCreateFile: (
      owner: string,
      repo: string,
      filepath: string,
      body: GiteaCreateFileOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaFileResponse, any>({
        path: `/repos/${owner}/${repo}/contents/${filepath}`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteFile
     * @summary Delete a file in a repository
     * @request DELETE:/repos/{owner}/{repo}/contents/{filepath}
     * @secure
     */
    repoDeleteFile: (
      owner: string,
      repo: string,
      filepath: string,
      body: GiteaDeleteFileOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaFileDeleteResponse, any>({
        path: `/repos/${owner}/${repo}/contents/${filepath}`,
        method: 'DELETE',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoApplyDiffPatch
     * @summary Apply diff patch to repository
     * @request POST:/repos/{owner}/{repo}/diffpatch
     * @secure
     */
    repoApplyDiffPatch: (
      owner: string,
      repo: string,
      body: GiteaUpdateFileOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaFileResponse, any>({
        path: `/repos/${owner}/${repo}/diffpatch`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetEditorConfig
     * @summary Get the EditorConfig definitions of a file in a repository
     * @request GET:/repos/{owner}/{repo}/editorconfig/{filepath}
     * @secure
     */
    repoGetEditorConfig: (
      owner: string,
      repo: string,
      filepath: string,
      query?: {
        /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
        ref?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/repos/${owner}/${repo}/editorconfig/${filepath}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name ListForks
     * @summary List a repository's forks
     * @request GET:/repos/{owner}/{repo}/forks
     * @secure
     */
    listForks: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/repos/${owner}/${repo}/forks`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name CreateFork
     * @summary Fork a repository
     * @request POST:/repos/{owner}/{repo}/forks
     * @secure
     */
    createFork: (
      owner: string,
      repo: string,
      body: GiteaCreateForkOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, void>({
        path: `/repos/${owner}/${repo}/forks`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name GetBlob
     * @summary Gets the blob of a repository.
     * @request GET:/repos/{owner}/{repo}/git/blobs/{sha}
     * @secure
     */
    getBlob: (
      owner: string,
      repo: string,
      sha: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGitBlobResponse, any>({
        path: `/repos/${owner}/${repo}/git/blobs/${sha}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetSingleCommit
     * @summary Get a single commit from a repository
     * @request GET:/repos/{owner}/{repo}/git/commits/{sha}
     * @secure
     */
    repoGetSingleCommit: (
      owner: string,
      repo: string,
      sha: string,
      query?: {
        /** include diff stats for every commit (disable for speedup, default 'true') */
        stat?: boolean;
        /** include verification for every commit (disable for speedup, default 'true') */
        verification?: boolean;
        /** include a list of affected files for every commit (disable for speedup, default 'true') */
        files?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCommit, any>({
        path: `/repos/${owner}/${repo}/git/commits/${sha}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDownloadCommitDiffOrPatch
     * @summary Get a commit's diff or patch
     * @request GET:/repos/{owner}/{repo}/git/commits/{sha}.{diffType}
     * @secure
     */
    repoDownloadCommitDiffOrPatch: (
      owner: string,
      repo: string,
      sha: string,
      diffType: 'diff' | 'patch',
      params: RequestParams = {}
    ) =>
      this.http.request<string, any>({
        path: `/repos/${owner}/${repo}/git/commits/${sha}.${diffType}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetNote
     * @summary Get a note corresponding to a single commit from a repository
     * @request GET:/repos/{owner}/{repo}/git/notes/{sha}
     * @secure
     */
    repoGetNote: (
      owner: string,
      repo: string,
      sha: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaNote, any>({
        path: `/repos/${owner}/${repo}/git/notes/${sha}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListAllGitRefs
     * @summary Get specified ref or filtered repository's refs
     * @request GET:/repos/{owner}/{repo}/git/refs
     * @secure
     */
    repoListAllGitRefs: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaReference[], any>({
        path: `/repos/${owner}/${repo}/git/refs`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListGitRefs
     * @summary Get specified ref or filtered repository's refs
     * @request GET:/repos/{owner}/{repo}/git/refs/{ref}
     * @secure
     */
    repoListGitRefs: (
      owner: string,
      repo: string,
      ref: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaReference[], any>({
        path: `/repos/${owner}/${repo}/git/refs/${ref}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name GetAnnotatedTag
     * @summary Gets the tag object of an annotated tag (not lightweight tags)
     * @request GET:/repos/{owner}/{repo}/git/tags/{sha}
     * @secure
     */
    getAnnotatedTag: (
      owner: string,
      repo: string,
      sha: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAnnotatedTag, any>({
        path: `/repos/${owner}/${repo}/git/tags/${sha}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name GetTree
     * @summary Gets the tree of a repository.
     * @request GET:/repos/{owner}/{repo}/git/trees/{sha}
     * @secure
     */
    getTree: (
      owner: string,
      repo: string,
      sha: string,
      query?: {
        /** show all directories and files */
        recursive?: boolean;
        /** page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page */
        page?: number;
        /** number of items per page */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGitTreeResponse, any>({
        path: `/repos/${owner}/${repo}/git/trees/${sha}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListHooks
     * @summary List the hooks in a repository
     * @request GET:/repos/{owner}/{repo}/hooks
     * @secure
     */
    repoListHooks: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook[], any>({
        path: `/repos/${owner}/${repo}/hooks`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateHook
     * @summary Create a hook
     * @request POST:/repos/{owner}/{repo}/hooks
     * @secure
     */
    repoCreateHook: (
      owner: string,
      repo: string,
      body: GiteaCreateHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/repos/${owner}/${repo}/hooks`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListGitHooks
     * @summary List the Git hooks in a repository
     * @request GET:/repos/{owner}/{repo}/hooks/git
     * @secure
     */
    repoListGitHooks: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGitHook[], any>({
        path: `/repos/${owner}/${repo}/hooks/git`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetGitHook
     * @summary Get a Git hook
     * @request GET:/repos/{owner}/{repo}/hooks/git/{id}
     * @secure
     */
    repoGetGitHook: (
      owner: string,
      repo: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGitHook, any>({
        path: `/repos/${owner}/${repo}/hooks/git/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteGitHook
     * @summary Delete a Git hook in a repository
     * @request DELETE:/repos/{owner}/{repo}/hooks/git/{id}
     * @secure
     */
    repoDeleteGitHook: (
      owner: string,
      repo: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/hooks/git/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEditGitHook
     * @summary Edit a Git hook in a repository
     * @request PATCH:/repos/{owner}/{repo}/hooks/git/{id}
     * @secure
     */
    repoEditGitHook: (
      owner: string,
      repo: string,
      id: string,
      body: GiteaEditGitHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGitHook, any>({
        path: `/repos/${owner}/${repo}/hooks/git/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetHook
     * @summary Get a hook
     * @request GET:/repos/{owner}/{repo}/hooks/{id}
     * @secure
     */
    repoGetHook: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/repos/${owner}/${repo}/hooks/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteHook
     * @summary Delete a hook in a repository
     * @request DELETE:/repos/{owner}/{repo}/hooks/{id}
     * @secure
     */
    repoDeleteHook: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/hooks/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEditHook
     * @summary Edit a hook in a repository
     * @request PATCH:/repos/{owner}/{repo}/hooks/{id}
     * @secure
     */
    repoEditHook: (
      owner: string,
      repo: string,
      id: number,
      body: GiteaEditHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/repos/${owner}/${repo}/hooks/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoTestHook
     * @summary Test a push webhook
     * @request POST:/repos/{owner}/{repo}/hooks/{id}/tests
     * @secure
     */
    repoTestHook: (
      owner: string,
      repo: string,
      id: number,
      query?: {
        /** The name of the commit/branch/tag, indicates which commit will be loaded to the webhook payload. */
        ref?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/hooks/${id}/tests`,
        method: 'POST',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetIssueConfig
     * @summary Returns the issue config for a repo
     * @request GET:/repos/{owner}/{repo}/issue_config
     * @secure
     */
    repoGetIssueConfig: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssueConfig, any>({
        path: `/repos/${owner}/${repo}/issue_config`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoValidateIssueConfig
     * @summary Returns the validation information for a issue config
     * @request GET:/repos/{owner}/{repo}/issue_config/validate
     * @secure
     */
    repoValidateIssueConfig: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssueConfigValidation, any>({
        path: `/repos/${owner}/${repo}/issue_config/validate`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetIssueTemplates
     * @summary Get available issue templates for a repository
     * @request GET:/repos/{owner}/{repo}/issue_templates
     * @secure
     */
    repoGetIssueTemplates: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssueTemplate[], any>({
        path: `/repos/${owner}/${repo}/issue_templates`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueListIssues
     * @summary List a repository's issues
     * @request GET:/repos/{owner}/{repo}/issues
     * @secure
     */
    issueListIssues: (
      owner: string,
      repo: string,
      query?: {
        /** whether issue is open or closed */
        state?: 'closed' | 'open' | 'all';
        /** comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
        labels?: string;
        /** search string */
        q?: string;
        /** filter by type (issues / pulls) if set */
        type?: 'issues' | 'pulls';
        /** comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded */
        milestones?: string;
        /**
         * Only show items updated after the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        since?: string;
        /**
         * Only show items updated before the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        before?: string;
        /** Only show items which were created by the the given user */
        created_by?: string;
        /** Only show items for which the given user is assigned */
        assigned_by?: string;
        /** Only show items in which the given user was mentioned */
        mentioned_by?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue[], any>({
        path: `/repos/${owner}/${repo}/issues`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateIssue
     * @summary Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
     * @request POST:/repos/{owner}/{repo}/issues
     * @secure
     */
    issueCreateIssue: (
      owner: string,
      repo: string,
      body: GiteaCreateIssueOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue, any>({
        path: `/repos/${owner}/${repo}/issues`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetRepoComments
     * @summary List all comments in a repository
     * @request GET:/repos/{owner}/{repo}/issues/comments
     * @secure
     */
    issueGetRepoComments: (
      owner: string,
      repo: string,
      query?: {
        /**
         * if provided, only comments updated since the provided time are returned.
         * @format date-time
         */
        since?: string;
        /**
         * if provided, only comments updated before the provided time are returned.
         * @format date-time
         */
        before?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaComment[], any>({
        path: `/repos/${owner}/${repo}/issues/comments`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetComment
     * @summary Get a comment
     * @request GET:/repos/{owner}/{repo}/issues/comments/{id}
     * @secure
     */
    issueGetComment: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaComment, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteComment
     * @summary Delete a comment
     * @request DELETE:/repos/{owner}/{repo}/issues/comments/{id}
     * @secure
     */
    issueDeleteComment: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditComment
     * @summary Edit a comment
     * @request PATCH:/repos/{owner}/{repo}/issues/comments/{id}
     * @secure
     */
    issueEditComment: (
      owner: string,
      repo: string,
      id: number,
      body: GiteaEditIssueCommentOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaComment, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueListIssueCommentAttachments
     * @summary List comment's attachments
     * @request GET:/repos/{owner}/{repo}/issues/comments/{id}/assets
     * @secure
     */
    issueListIssueCommentAttachments: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment[], any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/assets`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateIssueCommentAttachment
     * @summary Create a comment attachment
     * @request POST:/repos/{owner}/{repo}/issues/comments/{id}/assets
     * @secure
     */
    issueCreateIssueCommentAttachment: (
      owner: string,
      repo: string,
      id: number,
      data: {
        /** attachment to upload */
        attachment: File;
      },
      query?: {
        /** name of the attachment */
        name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/assets`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetIssueCommentAttachment
     * @summary Get a comment attachment
     * @request GET:/repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}
     * @secure
     */
    issueGetIssueCommentAttachment: (
      owner: string,
      repo: string,
      id: number,
      attachmentId: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/assets/${attachmentId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteIssueCommentAttachment
     * @summary Delete a comment attachment
     * @request DELETE:/repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}
     * @secure
     */
    issueDeleteIssueCommentAttachment: (
      owner: string,
      repo: string,
      id: number,
      attachmentId: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/assets/${attachmentId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditIssueCommentAttachment
     * @summary Edit a comment attachment
     * @request PATCH:/repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}
     * @secure
     */
    issueEditIssueCommentAttachment: (
      owner: string,
      repo: string,
      id: number,
      attachmentId: number,
      body: GiteaEditAttachmentOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/assets/${attachmentId}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetCommentReactions
     * @summary Get a list of reactions from a comment of an issue
     * @request GET:/repos/{owner}/{repo}/issues/comments/{id}/reactions
     * @secure
     */
    issueGetCommentReactions: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaReaction[], any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssuePostCommentReaction
     * @summary Add a reaction to a comment of an issue
     * @request POST:/repos/{owner}/{repo}/issues/comments/{id}/reactions
     * @secure
     */
    issuePostCommentReaction: (
      owner: string,
      repo: string,
      id: number,
      content: GiteaEditReactionOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaReaction, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
        method: 'POST',
        body: content,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteCommentReaction
     * @summary Remove a reaction from a comment of an issue
     * @request DELETE:/repos/{owner}/{repo}/issues/comments/{id}/reactions
     * @secure
     */
    issueDeleteCommentReaction: (
      owner: string,
      repo: string,
      id: number,
      content: GiteaEditReactionOption,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
        method: 'DELETE',
        body: content,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListPinnedIssues
     * @summary List a repo's pinned issues
     * @request GET:/repos/{owner}/{repo}/issues/pinned
     * @secure
     */
    repoListPinnedIssues: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue[], any>({
        path: `/repos/${owner}/${repo}/issues/pinned`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetIssue
     * @summary Get an issue
     * @request GET:/repos/{owner}/{repo}/issues/{index}
     * @secure
     */
    issueGetIssue: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue, any>({
        path: `/repos/${owner}/${repo}/issues/${index}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDelete
     * @summary Delete an issue
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}
     * @secure
     */
    issueDelete: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditIssue
     * @summary Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
     * @request PATCH:/repos/{owner}/{repo}/issues/{index}
     * @secure
     */
    issueEditIssue: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaEditIssueOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue, any>({
        path: `/repos/${owner}/${repo}/issues/${index}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueListIssueAttachments
     * @summary List issue's attachments
     * @request GET:/repos/{owner}/{repo}/issues/{index}/assets
     * @secure
     */
    issueListIssueAttachments: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/assets`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateIssueAttachment
     * @summary Create an issue attachment
     * @request POST:/repos/{owner}/{repo}/issues/{index}/assets
     * @secure
     */
    issueCreateIssueAttachment: (
      owner: string,
      repo: string,
      index: number,
      data: {
        /** attachment to upload */
        attachment: File;
      },
      query?: {
        /** name of the attachment */
        name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/assets`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetIssueAttachment
     * @summary Get an issue attachment
     * @request GET:/repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}
     * @secure
     */
    issueGetIssueAttachment: (
      owner: string,
      repo: string,
      index: number,
      attachmentId: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/assets/${attachmentId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteIssueAttachment
     * @summary Delete an issue attachment
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}
     * @secure
     */
    issueDeleteIssueAttachment: (
      owner: string,
      repo: string,
      index: number,
      attachmentId: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/assets/${attachmentId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditIssueAttachment
     * @summary Edit an issue attachment
     * @request PATCH:/repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}
     * @secure
     */
    issueEditIssueAttachment: (
      owner: string,
      repo: string,
      index: number,
      attachmentId: number,
      body: GiteaEditAttachmentOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/assets/${attachmentId}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueListBlocks
     * @summary List issues that are blocked by this issue
     * @request GET:/repos/{owner}/{repo}/issues/{index}/blocks
     * @secure
     */
    issueListBlocks: (
      owner: string,
      repo: string,
      index: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/blocks`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateIssueBlocking
     * @summary Block the issue given in the body by the issue in path
     * @request POST:/repos/{owner}/{repo}/issues/{index}/blocks
     * @secure
     */
    issueCreateIssueBlocking: (
      owner: string,
      repo: string,
      index: string,
      body: GiteaIssueMeta,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue, void>({
        path: `/repos/${owner}/${repo}/issues/${index}/blocks`,
        method: 'POST',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueRemoveIssueBlocking
     * @summary Unblock the issue given in the body by the issue in path
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/blocks
     * @secure
     */
    issueRemoveIssueBlocking: (
      owner: string,
      repo: string,
      index: string,
      body: GiteaIssueMeta,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/blocks`,
        method: 'DELETE',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetComments
     * @summary List all comments on an issue
     * @request GET:/repos/{owner}/{repo}/issues/{index}/comments
     * @secure
     */
    issueGetComments: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /**
         * if provided, only comments updated since the specified time are returned.
         * @format date-time
         */
        since?: string;
        /**
         * if provided, only comments updated before the provided time are returned.
         * @format date-time
         */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaComment[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/comments`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateComment
     * @summary Add a comment to an issue
     * @request POST:/repos/{owner}/{repo}/issues/{index}/comments
     * @secure
     */
    issueCreateComment: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaCreateIssueCommentOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaComment, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/comments`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteCommentDeprecated
     * @summary Delete a comment
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/comments/{id}
     * @deprecated
     * @secure
     */
    issueDeleteCommentDeprecated: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/comments/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditCommentDeprecated
     * @summary Edit a comment
     * @request PATCH:/repos/{owner}/{repo}/issues/{index}/comments/{id}
     * @deprecated
     * @secure
     */
    issueEditCommentDeprecated: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      body: GiteaEditIssueCommentOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaComment, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/comments/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditIssueDeadline
     * @summary Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
     * @request POST:/repos/{owner}/{repo}/issues/{index}/deadline
     * @secure
     */
    issueEditIssueDeadline: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaEditDeadlineOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssueDeadline, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/deadline`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueListIssueDependencies
     * @summary List an issue's dependencies, i.e all issues that block this issue.
     * @request GET:/repos/{owner}/{repo}/issues/{index}/dependencies
     * @secure
     */
    issueListIssueDependencies: (
      owner: string,
      repo: string,
      index: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/dependencies`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateIssueDependencies
     * @summary Make the issue in the url depend on the issue in the form.
     * @request POST:/repos/{owner}/{repo}/issues/{index}/dependencies
     * @secure
     */
    issueCreateIssueDependencies: (
      owner: string,
      repo: string,
      index: string,
      body: GiteaIssueMeta,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue, void>({
        path: `/repos/${owner}/${repo}/issues/${index}/dependencies`,
        method: 'POST',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueRemoveIssueDependencies
     * @summary Remove an issue dependency
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/dependencies
     * @secure
     */
    issueRemoveIssueDependencies: (
      owner: string,
      repo: string,
      index: string,
      body: GiteaIssueMeta,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaIssue, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/dependencies`,
        method: 'DELETE',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetLabels
     * @summary Get an issue's labels
     * @request GET:/repos/{owner}/{repo}/issues/{index}/labels
     * @secure
     */
    issueGetLabels: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/labels`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueReplaceLabels
     * @summary Replace an issue's labels
     * @request PUT:/repos/{owner}/{repo}/issues/{index}/labels
     * @secure
     */
    issueReplaceLabels: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaIssueLabelsOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/labels`,
        method: 'PUT',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueAddLabel
     * @summary Add a label to an issue
     * @request POST:/repos/{owner}/{repo}/issues/{index}/labels
     * @secure
     */
    issueAddLabel: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaIssueLabelsOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/labels`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueClearLabels
     * @summary Remove all labels from an issue
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/labels
     * @secure
     */
    issueClearLabels: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/labels`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueRemoveLabel
     * @summary Remove a label from an issue
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/labels/{id}
     * @secure
     */
    issueRemoveLabel: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/labels/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name PinIssue
     * @summary Pin an Issue
     * @request POST:/repos/{owner}/{repo}/issues/{index}/pin
     * @secure
     */
    pinIssue: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/pin`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name UnpinIssue
     * @summary Unpin an Issue
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/pin
     * @secure
     */
    unpinIssue: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/pin`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name MoveIssuePin
     * @summary Moves the Pin to the given Position
     * @request PATCH:/repos/{owner}/{repo}/issues/{index}/pin/{position}
     * @secure
     */
    moveIssuePin: (
      owner: string,
      repo: string,
      index: number,
      position: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/pin/${position}`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetIssueReactions
     * @summary Get a list reactions of an issue
     * @request GET:/repos/{owner}/{repo}/issues/{index}/reactions
     * @secure
     */
    issueGetIssueReactions: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaReaction[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssuePostIssueReaction
     * @summary Add a reaction to an issue
     * @request POST:/repos/{owner}/{repo}/issues/{index}/reactions
     * @secure
     */
    issuePostIssueReaction: (
      owner: string,
      repo: string,
      index: number,
      content: GiteaEditReactionOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaReaction, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
        method: 'POST',
        body: content,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteIssueReaction
     * @summary Remove a reaction from an issue
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/reactions
     * @secure
     */
    issueDeleteIssueReaction: (
      owner: string,
      repo: string,
      index: number,
      content: GiteaEditReactionOption,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
        method: 'DELETE',
        body: content,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteStopWatch
     * @summary Delete an issue's existing stopwatch.
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/stopwatch/delete
     * @secure
     */
    issueDeleteStopWatch: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, void>({
        path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/delete`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueStartStopWatch
     * @summary Start stopwatch on an issue.
     * @request POST:/repos/{owner}/{repo}/issues/{index}/stopwatch/start
     * @secure
     */
    issueStartStopWatch: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, void>({
        path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/start`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueStopStopWatch
     * @summary Stop an issue's existing stopwatch.
     * @request POST:/repos/{owner}/{repo}/issues/{index}/stopwatch/stop
     * @secure
     */
    issueStopStopWatch: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, void>({
        path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/stop`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueSubscriptions
     * @summary Get users who subscribed on an issue.
     * @request GET:/repos/{owner}/{repo}/issues/{index}/subscriptions
     * @secure
     */
    issueSubscriptions: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/subscriptions`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCheckSubscription
     * @summary Check if user is subscribed to an issue
     * @request GET:/repos/{owner}/{repo}/issues/{index}/subscriptions/check
     * @secure
     */
    issueCheckSubscription: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWatchInfo, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/check`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueAddSubscription
     * @summary Subscribe user to issue
     * @request PUT:/repos/{owner}/{repo}/issues/{index}/subscriptions/{user}
     * @secure
     */
    issueAddSubscription: (
      owner: string,
      repo: string,
      index: number,
      user: string,
      params: RequestParams = {}
    ) =>
      this.http.request<void, void>({
        path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/${user}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteSubscription
     * @summary Unsubscribe user from issue
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/subscriptions/{user}
     * @secure
     */
    issueDeleteSubscription: (
      owner: string,
      repo: string,
      index: number,
      user: string,
      params: RequestParams = {}
    ) =>
      this.http.request<void, void>({
        path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/${user}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetCommentsAndTimeline
     * @summary List all comments and events on an issue
     * @request GET:/repos/{owner}/{repo}/issues/{index}/timeline
     * @secure
     */
    issueGetCommentsAndTimeline: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /**
         * if provided, only comments updated since the specified time are returned.
         * @format date-time
         */
        since?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
        /**
         * if provided, only comments updated before the provided time are returned.
         * @format date-time
         */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTimelineComment[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/timeline`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueTrackedTimes
     * @summary List an issue's tracked times
     * @request GET:/repos/{owner}/{repo}/issues/{index}/times
     * @secure
     */
    issueTrackedTimes: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /** optional filter by user (available for issue managers) */
        user?: string;
        /**
         * Only show times updated after the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        since?: string;
        /**
         * Only show times updated before the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        before?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTrackedTime[], any>({
        path: `/repos/${owner}/${repo}/issues/${index}/times`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueAddTime
     * @summary Add tracked time to a issue
     * @request POST:/repos/{owner}/{repo}/issues/{index}/times
     * @secure
     */
    issueAddTime: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaAddTimeOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTrackedTime, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/times`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueResetTime
     * @summary Reset a tracked time of an issue
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/times
     * @secure
     */
    issueResetTime: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/times`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteTime
     * @summary Delete specific tracked time
     * @request DELETE:/repos/{owner}/{repo}/issues/{index}/times/{id}
     * @secure
     */
    issueDeleteTime: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/issues/${index}/times/${id}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListKeys
     * @summary List a repository's keys
     * @request GET:/repos/{owner}/{repo}/keys
     * @secure
     */
    repoListKeys: (
      owner: string,
      repo: string,
      query?: {
        /** the key_id to search for */
        key_id?: number;
        /** fingerprint of the key */
        fingerprint?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaDeployKey[], any>({
        path: `/repos/${owner}/${repo}/keys`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateKey
     * @summary Add a key to a repository
     * @request POST:/repos/{owner}/{repo}/keys
     * @secure
     */
    repoCreateKey: (
      owner: string,
      repo: string,
      body: GiteaCreateKeyOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaDeployKey, any>({
        path: `/repos/${owner}/${repo}/keys`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetKey
     * @summary Get a repository's key by id
     * @request GET:/repos/{owner}/{repo}/keys/{id}
     * @secure
     */
    repoGetKey: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaDeployKey, any>({
        path: `/repos/${owner}/${repo}/keys/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteKey
     * @summary Delete a key from a repository
     * @request DELETE:/repos/{owner}/{repo}/keys/{id}
     * @secure
     */
    repoDeleteKey: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/keys/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueListLabels
     * @summary Get all of a repository's labels
     * @request GET:/repos/{owner}/{repo}/labels
     * @secure
     */
    issueListLabels: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel[], any>({
        path: `/repos/${owner}/${repo}/labels`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateLabel
     * @summary Create a label
     * @request POST:/repos/{owner}/{repo}/labels
     * @secure
     */
    issueCreateLabel: (
      owner: string,
      repo: string,
      body: GiteaCreateLabelOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel, any>({
        path: `/repos/${owner}/${repo}/labels`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetLabel
     * @summary Get a single label
     * @request GET:/repos/{owner}/{repo}/labels/{id}
     * @secure
     */
    issueGetLabel: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel, any>({
        path: `/repos/${owner}/${repo}/labels/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteLabel
     * @summary Delete a label
     * @request DELETE:/repos/{owner}/{repo}/labels/{id}
     * @secure
     */
    issueDeleteLabel: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/labels/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditLabel
     * @summary Update a label
     * @request PATCH:/repos/{owner}/{repo}/labels/{id}
     * @secure
     */
    issueEditLabel: (
      owner: string,
      repo: string,
      id: number,
      body: GiteaEditLabelOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaLabel, any>({
        path: `/repos/${owner}/${repo}/labels/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetLanguages
     * @summary Get languages and number of bytes of code written
     * @request GET:/repos/{owner}/{repo}/languages
     * @secure
     */
    repoGetLanguages: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<Record<string, number>, any>({
        path: `/repos/${owner}/${repo}/languages`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetRawFileOrLfs
     * @summary Get a file or it's LFS object from a repository
     * @request GET:/repos/{owner}/{repo}/media/{filepath}
     * @secure
     */
    repoGetRawFileOrLfs: (
      owner: string,
      repo: string,
      filepath: string,
      query?: {
        /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
        ref?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/repos/${owner}/${repo}/media/${filepath}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetMilestonesList
     * @summary Get all of a repository's opened milestones
     * @request GET:/repos/{owner}/{repo}/milestones
     * @secure
     */
    issueGetMilestonesList: (
      owner: string,
      repo: string,
      query?: {
        /** Milestone state, Recognized values are open, closed and all. Defaults to "open" */
        state?: string;
        /** filter by milestone name */
        name?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaMilestone[], any>({
        path: `/repos/${owner}/${repo}/milestones`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueCreateMilestone
     * @summary Create a milestone
     * @request POST:/repos/{owner}/{repo}/milestones
     * @secure
     */
    issueCreateMilestone: (
      owner: string,
      repo: string,
      body: GiteaCreateMilestoneOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaMilestone, any>({
        path: `/repos/${owner}/${repo}/milestones`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueGetMilestone
     * @summary Get a milestone
     * @request GET:/repos/{owner}/{repo}/milestones/{id}
     * @secure
     */
    issueGetMilestone: (
      owner: string,
      repo: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaMilestone, any>({
        path: `/repos/${owner}/${repo}/milestones/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueDeleteMilestone
     * @summary Delete a milestone
     * @request DELETE:/repos/{owner}/{repo}/milestones/{id}
     * @secure
     */
    issueDeleteMilestone: (
      owner: string,
      repo: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/milestones/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags issue
     * @name IssueEditMilestone
     * @summary Update a milestone
     * @request PATCH:/repos/{owner}/{repo}/milestones/{id}
     * @secure
     */
    issueEditMilestone: (
      owner: string,
      repo: string,
      id: string,
      body: GiteaEditMilestoneOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaMilestone, any>({
        path: `/repos/${owner}/${repo}/milestones/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoMirrorSync
     * @summary Sync a mirrored repository
     * @request POST:/repos/{owner}/{repo}/mirror-sync
     * @secure
     */
    repoMirrorSync: (owner: string, repo: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/mirror-sync`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoNewPinAllowed
     * @summary Returns if new Issue Pins are allowed
     * @request GET:/repos/{owner}/{repo}/new_pin_allowed
     * @secure
     */
    repoNewPinAllowed: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaNewIssuePinsAllowed, any>({
        path: `/repos/${owner}/${repo}/new_pin_allowed`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotifyGetRepoList
     * @summary List users's notification threads on a specific repo
     * @request GET:/repos/{owner}/{repo}/notifications
     * @secure
     */
    notifyGetRepoList: (
      owner: string,
      repo: string,
      query?: {
        /** If true, show notifications marked as read. Default value is false */
        all?: boolean;
        /** Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned */
        'status-types'?: string[];
        /** filter notifications by subject type */
        'subject-type'?: ('issue' | 'pull' | 'commit' | 'repository')[];
        /**
         * Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        since?: string;
        /**
         * Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        before?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaNotificationThread[], any>({
        path: `/repos/${owner}/${repo}/notifications`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotifyReadRepoList
     * @summary Mark notification threads as read, pinned or unread on a specific repo
     * @request PUT:/repos/{owner}/{repo}/notifications
     * @secure
     */
    notifyReadRepoList: (
      owner: string,
      repo: string,
      query?: {
        /** If true, mark all notifications on this repo. Default value is false */
        all?: string;
        /** Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. */
        'status-types'?: string[];
        /** Status to mark notifications as. Defaults to read. */
        'to-status'?: string;
        /**
         * Describes the last point that notifications were checked. Anything updated since this time will not be updated.
         * @format date-time
         */
        last_read_at?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaNotificationThread[], any>({
        path: `/repos/${owner}/${repo}/notifications`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListPullRequests
     * @summary List a repo's pull requests
     * @request GET:/repos/{owner}/{repo}/pulls
     * @secure
     */
    repoListPullRequests: (
      owner: string,
      repo: string,
      query?: {
        /** State of pull request: open or closed (optional) */
        state?: 'closed' | 'open' | 'all';
        /** Type of sort */
        sort?:
          | 'oldest'
          | 'recentupdate'
          | 'leastupdate'
          | 'mostcomment'
          | 'leastcomment'
          | 'priority';
        /**
         * ID of the milestone
         * @format int64
         */
        milestone?: number;
        /** Label IDs */
        labels?: number[];
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullRequest[], any>({
        path: `/repos/${owner}/${repo}/pulls`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreatePullRequest
     * @summary Create a pull request
     * @request POST:/repos/{owner}/{repo}/pulls
     * @secure
     */
    repoCreatePullRequest: (
      owner: string,
      repo: string,
      body: GiteaCreatePullRequestOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullRequest, any>({
        path: `/repos/${owner}/${repo}/pulls`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListPinnedPullRequests
     * @summary List a repo's pinned pull requests
     * @request GET:/repos/{owner}/{repo}/pulls/pinned
     * @secure
     */
    repoListPinnedPullRequests: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullRequest[], any>({
        path: `/repos/${owner}/${repo}/pulls/pinned`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetPullRequest
     * @summary Get a pull request
     * @request GET:/repos/{owner}/{repo}/pulls/{index}
     * @secure
     */
    repoGetPullRequest: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullRequest, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEditPullRequest
     * @summary Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
     * @request PATCH:/repos/{owner}/{repo}/pulls/{index}
     * @secure
     */
    repoEditPullRequest: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaEditPullRequestOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullRequest, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDownloadPullDiffOrPatch
     * @summary Get a pull request diff or patch
     * @request GET:/repos/{owner}/{repo}/pulls/{index}.{diffType}
     * @secure
     */
    repoDownloadPullDiffOrPatch: (
      owner: string,
      repo: string,
      index: number,
      diffType: 'diff' | 'patch',
      query?: {
        /** whether to include binary file changes. if true, the diff is applicable with `git apply` */
        binary?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<string, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}.${diffType}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetPullRequestCommits
     * @summary Get commits for a pull request
     * @request GET:/repos/{owner}/{repo}/pulls/{index}/commits
     * @secure
     */
    repoGetPullRequestCommits: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCommit[], any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/commits`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetPullRequestFiles
     * @summary Get changed files for a pull request
     * @request GET:/repos/{owner}/{repo}/pulls/{index}/files
     * @secure
     */
    repoGetPullRequestFiles: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /** skip to given file */
        'skip-to'?: string;
        /** whitespace behavior */
        whitespace?: 'ignore-all' | 'ignore-change' | 'ignore-eol' | 'show-all';
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaChangedFile[], any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/files`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoPullRequestIsMerged
     * @summary Check if a pull request has been merged
     * @request GET:/repos/{owner}/{repo}/pulls/{index}/merge
     * @secure
     */
    repoPullRequestIsMerged: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<void, void>({
        path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoMergePullRequest
     * @summary Merge a pull request
     * @request POST:/repos/{owner}/{repo}/pulls/{index}/merge
     * @secure
     */
    repoMergePullRequest: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaMergePullRequestOption,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCancelScheduledAutoMerge
     * @summary Cancel the scheduled auto merge for the given pull request
     * @request DELETE:/repos/{owner}/{repo}/pulls/{index}/merge
     * @secure
     */
    repoCancelScheduledAutoMerge: (
      owner: string,
      repo: string,
      index: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreatePullReviewRequests
     * @summary create review requests for a pull request
     * @request POST:/repos/{owner}/{repo}/pulls/{index}/requested_reviewers
     * @secure
     */
    repoCreatePullReviewRequests: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaPullReviewRequestOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReview[], any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/requested_reviewers`,
        method: 'POST',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeletePullReviewRequests
     * @summary cancel review requests for a pull request
     * @request DELETE:/repos/{owner}/{repo}/pulls/{index}/requested_reviewers
     * @secure
     */
    repoDeletePullReviewRequests: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaPullReviewRequestOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/requested_reviewers`,
        method: 'DELETE',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListPullReviews
     * @summary List all reviews for a pull request
     * @request GET:/repos/{owner}/{repo}/pulls/{index}/reviews
     * @secure
     */
    repoListPullReviews: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReview[], any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreatePullReview
     * @summary Create a review to an pull request
     * @request POST:/repos/{owner}/{repo}/pulls/{index}/reviews
     * @secure
     */
    repoCreatePullReview: (
      owner: string,
      repo: string,
      index: number,
      body: GiteaCreatePullReviewOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReview, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetPullReview
     * @summary Get a specific review for a pull request
     * @request GET:/repos/{owner}/{repo}/pulls/{index}/reviews/{id}
     * @secure
     */
    repoGetPullReview: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReview, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoSubmitPullReview
     * @summary Submit a pending review to an pull request
     * @request POST:/repos/{owner}/{repo}/pulls/{index}/reviews/{id}
     * @secure
     */
    repoSubmitPullReview: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      body: GiteaSubmitPullReviewOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReview, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeletePullReview
     * @summary Delete a specific review from a pull request
     * @request DELETE:/repos/{owner}/{repo}/pulls/{index}/reviews/{id}
     * @secure
     */
    repoDeletePullReview: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetPullReviewComments
     * @summary Get a specific review for a pull request
     * @request GET:/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments
     * @secure
     */
    repoGetPullReviewComments: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReviewComment[], any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/comments`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDismissPullReview
     * @summary Dismiss a review for a pull request
     * @request POST:/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals
     * @secure
     */
    repoDismissPullReview: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      body: GiteaDismissPullReviewOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReview, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/dismissals`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoUnDismissPullReview
     * @summary Cancel to dismiss a review for a pull request
     * @request POST:/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals
     * @secure
     */
    repoUnDismissPullReview: (
      owner: string,
      repo: string,
      index: number,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPullReview, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/undismissals`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoUpdatePullRequest
     * @summary Merge PR's baseBranch into headBranch
     * @request POST:/repos/{owner}/{repo}/pulls/{index}/update
     * @secure
     */
    repoUpdatePullRequest: (
      owner: string,
      repo: string,
      index: number,
      query?: {
        /** how to update pull request */
        style?: 'merge' | 'rebase';
      },
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/pulls/${index}/update`,
        method: 'POST',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListPushMirrors
     * @summary Get all push mirrors of the repository
     * @request GET:/repos/{owner}/{repo}/push_mirrors
     * @secure
     */
    repoListPushMirrors: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPushMirror[], any>({
        path: `/repos/${owner}/${repo}/push_mirrors`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoAddPushMirror
     * @summary add a push mirror to the repository
     * @request POST:/repos/{owner}/{repo}/push_mirrors
     * @secure
     */
    repoAddPushMirror: (
      owner: string,
      repo: string,
      body: GiteaCreatePushMirrorOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPushMirror, any>({
        path: `/repos/${owner}/${repo}/push_mirrors`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoPushMirrorSync
     * @summary Sync all push mirrored repository
     * @request POST:/repos/{owner}/{repo}/push_mirrors-sync
     * @secure
     */
    repoPushMirrorSync: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/push_mirrors-sync`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetPushMirrorByRemoteName
     * @summary Get push mirror of the repository by remoteName
     * @request GET:/repos/{owner}/{repo}/push_mirrors/{name}
     * @secure
     */
    repoGetPushMirrorByRemoteName: (
      owner: string,
      repo: string,
      name: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPushMirror, any>({
        path: `/repos/${owner}/${repo}/push_mirrors/${name}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeletePushMirror
     * @summary deletes a push mirror from a repository by remoteName
     * @request DELETE:/repos/{owner}/{repo}/push_mirrors/{name}
     * @secure
     */
    repoDeletePushMirror: (
      owner: string,
      repo: string,
      name: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/push_mirrors/${name}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetRawFile
     * @summary Get a file from a repository
     * @request GET:/repos/{owner}/{repo}/raw/{filepath}
     * @secure
     */
    repoGetRawFile: (
      owner: string,
      repo: string,
      filepath: string,
      query?: {
        /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
        ref?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/repos/${owner}/${repo}/raw/${filepath}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListReleases
     * @summary List a repo's releases
     * @request GET:/repos/{owner}/{repo}/releases
     * @secure
     */
    repoListReleases: (
      owner: string,
      repo: string,
      query?: {
        /** filter (exclude / include) drafts, if you dont have repo write access none will show */
        draft?: boolean;
        /** filter (exclude / include) pre-releases */
        'pre-release'?: boolean;
        /** page size of results, deprecated - use limit */
        per_page?: number;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRelease[], any>({
        path: `/repos/${owner}/${repo}/releases`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateRelease
     * @summary Create a release
     * @request POST:/repos/{owner}/{repo}/releases
     * @secure
     */
    repoCreateRelease: (
      owner: string,
      repo: string,
      body: GiteaCreateReleaseOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRelease, any>({
        path: `/repos/${owner}/${repo}/releases`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetLatestRelease
     * @summary Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at
     * @request GET:/repos/{owner}/{repo}/releases/latest
     * @secure
     */
    repoGetLatestRelease: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRelease, any>({
        path: `/repos/${owner}/${repo}/releases/latest`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetReleaseByTag
     * @summary Get a release by tag name
     * @request GET:/repos/{owner}/{repo}/releases/tags/{tag}
     * @secure
     */
    repoGetReleaseByTag: (
      owner: string,
      repo: string,
      tag: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRelease, any>({
        path: `/repos/${owner}/${repo}/releases/tags/${tag}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteReleaseByTag
     * @summary Delete a release by tag name
     * @request DELETE:/repos/{owner}/{repo}/releases/tags/{tag}
     * @secure
     */
    repoDeleteReleaseByTag: (
      owner: string,
      repo: string,
      tag: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/releases/tags/${tag}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetRelease
     * @summary Get a release
     * @request GET:/repos/{owner}/{repo}/releases/{id}
     * @secure
     */
    repoGetRelease: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRelease, any>({
        path: `/repos/${owner}/${repo}/releases/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteRelease
     * @summary Delete a release
     * @request DELETE:/repos/{owner}/{repo}/releases/{id}
     * @secure
     */
    repoDeleteRelease: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/releases/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEditRelease
     * @summary Update a release
     * @request PATCH:/repos/{owner}/{repo}/releases/{id}
     * @secure
     */
    repoEditRelease: (
      owner: string,
      repo: string,
      id: number,
      body: GiteaEditReleaseOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRelease, any>({
        path: `/repos/${owner}/${repo}/releases/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListReleaseAttachments
     * @summary List release's attachments
     * @request GET:/repos/{owner}/{repo}/releases/{id}/assets
     * @secure
     */
    repoListReleaseAttachments: (
      owner: string,
      repo: string,
      id: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment[], any>({
        path: `/repos/${owner}/${repo}/releases/${id}/assets`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateReleaseAttachment
     * @summary Create a release attachment
     * @request POST:/repos/{owner}/{repo}/releases/{id}/assets
     * @secure
     */
    repoCreateReleaseAttachment: (
      owner: string,
      repo: string,
      id: number,
      data: {
        /** attachment to upload */
        attachment: File;
      },
      query?: {
        /** name of the attachment */
        name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/releases/${id}/assets`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetReleaseAttachment
     * @summary Get a release attachment
     * @request GET:/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}
     * @secure
     */
    repoGetReleaseAttachment: (
      owner: string,
      repo: string,
      id: number,
      attachmentId: number,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachmentId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteReleaseAttachment
     * @summary Delete a release attachment
     * @request DELETE:/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}
     * @secure
     */
    repoDeleteReleaseAttachment: (
      owner: string,
      repo: string,
      id: number,
      attachmentId: number,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachmentId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEditReleaseAttachment
     * @summary Edit a release attachment
     * @request PATCH:/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}
     * @secure
     */
    repoEditReleaseAttachment: (
      owner: string,
      repo: string,
      id: number,
      attachmentId: number,
      body: GiteaEditAttachmentOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAttachment, any>({
        path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachmentId}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetReviewers
     * @summary Return all users that can be requested to review in this repo
     * @request GET:/repos/{owner}/{repo}/reviewers
     * @secure
     */
    repoGetReviewers: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/repos/${owner}/${repo}/reviewers`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoSigningKey
     * @summary Get signing-key.gpg for given repository
     * @request GET:/repos/{owner}/{repo}/signing-key.gpg
     * @secure
     */
    repoSigningKey: (owner: string, repo: string, params: RequestParams = {}) =>
      this.http.request<GiteaCommitStatusState, any>({
        path: `/repos/${owner}/${repo}/signing-key.gpg`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListStargazers
     * @summary List a repo's stargazers
     * @request GET:/repos/{owner}/{repo}/stargazers
     * @secure
     */
    repoListStargazers: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/repos/${owner}/${repo}/stargazers`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListStatuses
     * @summary Get a commit's statuses
     * @request GET:/repos/{owner}/{repo}/statuses/{sha}
     * @secure
     */
    repoListStatuses: (
      owner: string,
      repo: string,
      sha: string,
      query?: {
        /** type of sort */
        sort?:
          | 'oldest'
          | 'recentupdate'
          | 'leastupdate'
          | 'leastindex'
          | 'highestindex';
        /** type of state */
        state?: 'pending' | 'success' | 'error' | 'failure' | 'warning';
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCommitStatus[], any>({
        path: `/repos/${owner}/${repo}/statuses/${sha}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateStatus
     * @summary Create a commit status
     * @request POST:/repos/{owner}/{repo}/statuses/{sha}
     * @secure
     */
    repoCreateStatus: (
      owner: string,
      repo: string,
      sha: string,
      body: GiteaCreateStatusOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaCommitStatus, any>({
        path: `/repos/${owner}/${repo}/statuses/${sha}`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListSubscribers
     * @summary List a repo's watchers
     * @request GET:/repos/{owner}/{repo}/subscribers
     * @secure
     */
    repoListSubscribers: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/repos/${owner}/${repo}/subscribers`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name UserCurrentCheckSubscription
     * @summary Check if the current user is watching a repo
     * @request GET:/repos/{owner}/{repo}/subscription
     * @secure
     */
    userCurrentCheckSubscription: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWatchInfo, void>({
        path: `/repos/${owner}/${repo}/subscription`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name UserCurrentPutSubscription
     * @summary Watch a repo
     * @request PUT:/repos/{owner}/{repo}/subscription
     * @secure
     */
    userCurrentPutSubscription: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWatchInfo, any>({
        path: `/repos/${owner}/${repo}/subscription`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name UserCurrentDeleteSubscription
     * @summary Unwatch a repo
     * @request DELETE:/repos/{owner}/{repo}/subscription
     * @secure
     */
    userCurrentDeleteSubscription: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/subscription`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListTags
     * @summary List a repository's tags
     * @request GET:/repos/{owner}/{repo}/tags
     * @secure
     */
    repoListTags: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results, default maximum page size is 50 */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTag[], any>({
        path: `/repos/${owner}/${repo}/tags`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateTag
     * @summary Create a new git tag in a repository
     * @request POST:/repos/{owner}/{repo}/tags
     * @secure
     */
    repoCreateTag: (
      owner: string,
      repo: string,
      body: GiteaCreateTagOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTag, any>({
        path: `/repos/${owner}/${repo}/tags`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetTag
     * @summary Get the tag of a repository by tag name
     * @request GET:/repos/{owner}/{repo}/tags/{tag}
     * @secure
     */
    repoGetTag: (
      owner: string,
      repo: string,
      tag: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTag, any>({
        path: `/repos/${owner}/${repo}/tags/${tag}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteTag
     * @summary Delete a repository's tag by name
     * @request DELETE:/repos/{owner}/{repo}/tags/{tag}
     * @secure
     */
    repoDeleteTag: (
      owner: string,
      repo: string,
      tag: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/tags/${tag}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListTeams
     * @summary List a repository's teams
     * @request GET:/repos/{owner}/{repo}/teams
     * @secure
     */
    repoListTeams: (owner: string, repo: string, params: RequestParams = {}) =>
      this.http.request<GiteaTeam[], any>({
        path: `/repos/${owner}/${repo}/teams`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCheckTeam
     * @summary Check if a team is assigned to a repository
     * @request GET:/repos/{owner}/{repo}/teams/{team}
     * @secure
     */
    repoCheckTeam: (
      owner: string,
      repo: string,
      team: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTeam, any>({
        path: `/repos/${owner}/${repo}/teams/${team}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoAddTeam
     * @summary Add a team to a repository
     * @request PUT:/repos/{owner}/{repo}/teams/{team}
     * @secure
     */
    repoAddTeam: (
      owner: string,
      repo: string,
      team: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/teams/${team}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteTeam
     * @summary Delete a team from a repository
     * @request DELETE:/repos/{owner}/{repo}/teams/{team}
     * @secure
     */
    repoDeleteTeam: (
      owner: string,
      repo: string,
      team: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/teams/${team}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoTrackedTimes
     * @summary List a repo's tracked times
     * @request GET:/repos/{owner}/{repo}/times
     * @secure
     */
    repoTrackedTimes: (
      owner: string,
      repo: string,
      query?: {
        /** optional filter by user (available for issue managers) */
        user?: string;
        /**
         * Only show times updated after the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        since?: string;
        /**
         * Only show times updated before the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        before?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTrackedTime[], any>({
        path: `/repos/${owner}/${repo}/times`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name UserTrackedTimes
     * @summary List a user's tracked times in a repo
     * @request GET:/repos/{owner}/{repo}/times/{user}
     * @deprecated
     * @secure
     */
    userTrackedTimes: (
      owner: string,
      repo: string,
      user: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTrackedTime[], any>({
        path: `/repos/${owner}/${repo}/times/${user}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoListTopics
     * @summary Get list of topics that a repository has
     * @request GET:/repos/{owner}/{repo}/topics
     * @secure
     */
    repoListTopics: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTopicName, any>({
        path: `/repos/${owner}/${repo}/topics`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoUpdateTopics
     * @summary Replace list of topics for a repository
     * @request PUT:/repos/{owner}/{repo}/topics
     * @secure
     */
    repoUpdateTopics: (
      owner: string,
      repo: string,
      body: GiteaRepoTopicOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/topics`,
        method: 'PUT',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoAddTopic
     * @summary Add a topic to a repository
     * @request PUT:/repos/{owner}/{repo}/topics/{topic}
     * @secure
     */
    repoAddTopic: (
      owner: string,
      repo: string,
      topic: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/topics/${topic}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteTopic
     * @summary Delete a topic from a repository
     * @request DELETE:/repos/{owner}/{repo}/topics/{topic}
     * @secure
     */
    repoDeleteTopic: (
      owner: string,
      repo: string,
      topic: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/topics/${topic}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoTransfer
     * @summary Transfer a repo ownership
     * @request POST:/repos/{owner}/{repo}/transfer
     * @secure
     */
    repoTransfer: (
      owner: string,
      repo: string,
      body: GiteaTransferRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/repos/${owner}/${repo}/transfer`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name AcceptRepoTransfer
     * @summary Accept a repo transfer
     * @request POST:/repos/{owner}/{repo}/transfer/accept
     * @secure
     */
    acceptRepoTransfer: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/repos/${owner}/${repo}/transfer/accept`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RejectRepoTransfer
     * @summary Reject a repo transfer
     * @request POST:/repos/{owner}/{repo}/transfer/reject
     * @secure
     */
    rejectRepoTransfer: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/repos/${owner}/${repo}/transfer/reject`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoCreateWikiPage
     * @summary Create a wiki page
     * @request POST:/repos/{owner}/{repo}/wiki/new
     * @secure
     */
    repoCreateWikiPage: (
      owner: string,
      repo: string,
      body: GiteaCreateWikiPageOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWikiPage, any>({
        path: `/repos/${owner}/${repo}/wiki/new`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetWikiPage
     * @summary Get a wiki page
     * @request GET:/repos/{owner}/{repo}/wiki/page/{pageName}
     * @secure
     */
    repoGetWikiPage: (
      owner: string,
      repo: string,
      pageName: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWikiPage, any>({
        path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoDeleteWikiPage
     * @summary Delete a wiki page
     * @request DELETE:/repos/{owner}/{repo}/wiki/page/{pageName}
     * @secure
     */
    repoDeleteWikiPage: (
      owner: string,
      repo: string,
      pageName: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoEditWikiPage
     * @summary Edit a wiki page
     * @request PATCH:/repos/{owner}/{repo}/wiki/page/{pageName}
     * @secure
     */
    repoEditWikiPage: (
      owner: string,
      repo: string,
      pageName: string,
      body: GiteaCreateWikiPageOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWikiPage, any>({
        path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetWikiPages
     * @summary Get all wiki pages
     * @request GET:/repos/{owner}/{repo}/wiki/pages
     * @secure
     */
    repoGetWikiPages: (
      owner: string,
      repo: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWikiPageMetaData[], any>({
        path: `/repos/${owner}/${repo}/wiki/pages`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name RepoGetWikiPageRevisions
     * @summary Get revisions of a wiki page
     * @request GET:/repos/{owner}/{repo}/wiki/revisions/{pageName}
     * @secure
     */
    repoGetWikiPageRevisions: (
      owner: string,
      repo: string,
      pageName: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaWikiCommitList, any>({
        path: `/repos/${owner}/${repo}/wiki/revisions/${pageName}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository
     * @name GenerateRepo
     * @summary Create a repository using a template
     * @request POST:/repos/{template_owner}/{template_repo}/generate
     * @secure
     */
    generateRepo: (
      templateOwner: string,
      templateRepo: string,
      body: GiteaGenerateRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, void>({
        path: `/repos/${templateOwner}/${templateRepo}/generate`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  repositories = {
    /**
     * No description
     *
     * @tags repository
     * @name RepoGetById
     * @summary Get a repository by id
     * @request GET:/repositories/{id}
     * @secure
     */
    repoGetById: (id: number, params: RequestParams = {}) =>
      this.http.request<GiteaRepository, any>({
        path: `/repositories/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  settings = {
    /**
     * No description
     *
     * @tags settings
     * @name GetGeneralApiSettings
     * @summary Get instance's global settings for api
     * @request GET:/settings/api
     * @secure
     */
    getGeneralApiSettings: (params: RequestParams = {}) =>
      this.http.request<GiteaGeneralAPISettings, any>({
        path: `/settings/api`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name GetGeneralAttachmentSettings
     * @summary Get instance's global settings for Attachment
     * @request GET:/settings/attachment
     * @secure
     */
    getGeneralAttachmentSettings: (params: RequestParams = {}) =>
      this.http.request<GiteaGeneralAttachmentSettings, any>({
        path: `/settings/attachment`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name GetGeneralRepositorySettings
     * @summary Get instance's global settings for repositories
     * @request GET:/settings/repository
     * @secure
     */
    getGeneralRepositorySettings: (params: RequestParams = {}) =>
      this.http.request<GiteaGeneralRepoSettings, any>({
        path: `/settings/repository`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name GetGeneralUiSettings
     * @summary Get instance's global settings for ui
     * @request GET:/settings/ui
     * @secure
     */
    getGeneralUiSettings: (params: RequestParams = {}) =>
      this.http.request<GiteaGeneralUISettings, any>({
        path: `/settings/ui`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  signingKeyGpg = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name GetSigningKey
     * @summary Get default signing-key.gpg
     * @request GET:/signing-key.gpg
     * @secure
     */
    getSigningKey: (params: RequestParams = {}) =>
      this.http.request<GiteaCommitStatusState, any>({
        path: `/signing-key.gpg`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  teams = {
    /**
     * No description
     *
     * @tags organization
     * @name OrgGetTeam
     * @summary Get a team
     * @request GET:/teams/{id}
     * @secure
     */
    orgGetTeam: (id: number, params: RequestParams = {}) =>
      this.http.request<GiteaTeam, any>({
        path: `/teams/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgDeleteTeam
     * @summary Delete a team
     * @request DELETE:/teams/{id}
     * @secure
     */
    orgDeleteTeam: (id: number, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/teams/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgEditTeam
     * @summary Edit a team
     * @request PATCH:/teams/{id}
     * @secure
     */
    orgEditTeam: (
      id: number,
      body: GiteaEditTeamOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTeam, any>({
        path: `/teams/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListTeamActivityFeeds
     * @summary List a team's activity feeds
     * @request GET:/teams/{id}/activities/feeds
     * @secure
     */
    orgListTeamActivityFeeds: (
      id: number,
      query?: {
        /**
         * the date of the activities to be found
         * @format date
         */
        date?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaActivity[], any>({
        path: `/teams/${id}/activities/feeds`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListTeamMembers
     * @summary List a team's members
     * @request GET:/teams/{id}/members
     * @secure
     */
    orgListTeamMembers: (
      id: number,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/teams/${id}/members`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListTeamMember
     * @summary List a particular member of team
     * @request GET:/teams/{id}/members/{username}
     * @secure
     */
    orgListTeamMember: (
      id: number,
      username: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser, any>({
        path: `/teams/${id}/members/${username}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgAddTeamMember
     * @summary Add a team member
     * @request PUT:/teams/{id}/members/{username}
     * @secure
     */
    orgAddTeamMember: (
      id: number,
      username: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/teams/${id}/members/${username}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgRemoveTeamMember
     * @summary Remove a team member
     * @request DELETE:/teams/{id}/members/{username}
     * @secure
     */
    orgRemoveTeamMember: (
      id: number,
      username: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/teams/${id}/members/${username}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListTeamRepos
     * @summary List a team's repos
     * @request GET:/teams/{id}/repos
     * @secure
     */
    orgListTeamRepos: (
      id: number,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/teams/${id}/repos`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListTeamRepo
     * @summary List a particular repo of team
     * @request GET:/teams/{id}/repos/{org}/{repo}
     * @secure
     */
    orgListTeamRepo: (
      id: number,
      org: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, any>({
        path: `/teams/${id}/repos/${org}/${repo}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgAddTeamRepository
     * @summary Add a repository to a team
     * @request PUT:/teams/{id}/repos/{org}/{repo}
     * @secure
     */
    orgAddTeamRepository: (
      id: number,
      org: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/teams/${id}/repos/${org}/${repo}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * @description This does not delete the repository, it only removes the repository from the team.
     *
     * @tags organization
     * @name OrgRemoveTeamRepository
     * @summary Remove a repository from a team
     * @request DELETE:/teams/{id}/repos/{org}/{repo}
     * @secure
     */
    orgRemoveTeamRepository: (
      id: number,
      org: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/teams/${id}/repos/${org}/${repo}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  topics = {
    /**
     * No description
     *
     * @tags repository
     * @name TopicSearch
     * @summary search topics via keyword
     * @request GET:/topics/search
     * @secure
     */
    topicSearch: (
      query: {
        /** keywords to search */
        q: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTopicResponse[], any>({
        path: `/topics/search`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserGetCurrent
     * @summary Get the authenticated user
     * @request GET:/user
     * @secure
     */
    userGetCurrent: (params: RequestParams = {}) =>
      this.http.request<GiteaUser, any>({
        path: `/user`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserGetOauth2Application
     * @summary List the authenticated user's oauth2 applications
     * @request GET:/user/applications/oauth2
     * @secure
     */
    userGetOauth2Application: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOAuth2Application[], any>({
        path: `/user/applications/oauth2`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCreateOAuth2Application
     * @summary creates a new OAuth2 application
     * @request POST:/user/applications/oauth2
     * @secure
     */
    userCreateOAuth2Application: (
      body: GiteaCreateOAuth2ApplicationOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOAuth2Application, any>({
        path: `/user/applications/oauth2`,
        method: 'POST',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserGetOAuth2Application
     * @summary get an OAuth2 Application
     * @request GET:/user/applications/oauth2/{id}
     * @secure
     */
    userGetOAuth2Application: (id: number, params: RequestParams = {}) =>
      this.http.request<GiteaOAuth2Application, any>({
        path: `/user/applications/oauth2/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDeleteOAuth2Application
     * @summary delete an OAuth2 Application
     * @request DELETE:/user/applications/oauth2/{id}
     * @secure
     */
    userDeleteOAuth2Application: (id: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/user/applications/oauth2/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserUpdateOAuth2Application
     * @summary update an OAuth2 Application, this includes regenerating the client secret
     * @request PATCH:/user/applications/oauth2/{id}
     * @secure
     */
    userUpdateOAuth2Application: (
      id: number,
      body: GiteaCreateOAuth2ApplicationOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOAuth2Application, any>({
        path: `/user/applications/oauth2/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListEmails
     * @summary List the authenticated user's email addresses
     * @request GET:/user/emails
     * @secure
     */
    userListEmails: (params: RequestParams = {}) =>
      this.http.request<GiteaEmail[], any>({
        path: `/user/emails`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserAddEmail
     * @summary Add email addresses
     * @request POST:/user/emails
     * @secure
     */
    userAddEmail: (body: GiteaCreateEmailOption, params: RequestParams = {}) =>
      this.http.request<GiteaEmail[], any>({
        path: `/user/emails`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDeleteEmail
     * @summary Delete email addresses
     * @request DELETE:/user/emails
     * @secure
     */
    userDeleteEmail: (
      body: GiteaDeleteEmailOption,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/user/emails`,
        method: 'DELETE',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentListFollowers
     * @summary List the authenticated user's followers
     * @request GET:/user/followers
     * @secure
     */
    userCurrentListFollowers: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/user/followers`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentListFollowing
     * @summary List the users that the authenticated user is following
     * @request GET:/user/following
     * @secure
     */
    userCurrentListFollowing: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/user/following`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentCheckFollowing
     * @summary Check whether a user is followed by the authenticated user
     * @request GET:/user/following/{username}
     * @secure
     */
    userCurrentCheckFollowing: (username: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/user/following/${username}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentPutFollow
     * @summary Follow a user
     * @request PUT:/user/following/{username}
     * @secure
     */
    userCurrentPutFollow: (username: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/user/following/${username}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentDeleteFollow
     * @summary Unfollow a user
     * @request DELETE:/user/following/{username}
     * @secure
     */
    userCurrentDeleteFollow: (username: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/user/following/${username}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name GetVerificationToken
     * @summary Get a Token to verify
     * @request GET:/user/gpg_key_token
     * @secure
     */
    getVerificationToken: (params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/user/gpg_key_token`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserVerifyGpgKey
     * @summary Verify a GPG key
     * @request POST:/user/gpg_key_verify
     * @secure
     */
    userVerifyGpgKey: (params: RequestParams = {}) =>
      this.http.request<GiteaGPGKey, any>({
        path: `/user/gpg_key_verify`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentListGpgKeys
     * @summary List the authenticated user's GPG keys
     * @request GET:/user/gpg_keys
     * @secure
     */
    userCurrentListGpgKeys: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGPGKey[], any>({
        path: `/user/gpg_keys`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentPostGpgKey
     * @summary Create a GPG key
     * @request POST:/user/gpg_keys
     * @secure
     */
    userCurrentPostGpgKey: (
      Form: GiteaCreateGPGKeyOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGPGKey, any>({
        path: `/user/gpg_keys`,
        method: 'POST',
        body: Form,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentGetGpgKey
     * @summary Get a GPG key
     * @request GET:/user/gpg_keys/{id}
     * @secure
     */
    userCurrentGetGpgKey: (id: number, params: RequestParams = {}) =>
      this.http.request<GiteaGPGKey, any>({
        path: `/user/gpg_keys/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentDeleteGpgKey
     * @summary Remove a GPG key
     * @request DELETE:/user/gpg_keys/{id}
     * @secure
     */
    userCurrentDeleteGpgKey: (id: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/user/gpg_keys/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListHooks
     * @summary List the authenticated user's webhooks
     * @request GET:/user/hooks
     * @secure
     */
    userListHooks: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook[], any>({
        path: `/user/hooks`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCreateHook
     * @summary Create a hook
     * @request POST:/user/hooks
     * @secure
     */
    userCreateHook: (body: GiteaCreateHookOption, params: RequestParams = {}) =>
      this.http.request<GiteaHook, any>({
        path: `/user/hooks`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserGetHook
     * @summary Get a hook
     * @request GET:/user/hooks/{id}
     * @secure
     */
    userGetHook: (id: number, params: RequestParams = {}) =>
      this.http.request<GiteaHook, any>({
        path: `/user/hooks/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDeleteHook
     * @summary Delete a hook
     * @request DELETE:/user/hooks/{id}
     * @secure
     */
    userDeleteHook: (id: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/user/hooks/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserEditHook
     * @summary Update a hook
     * @request PATCH:/user/hooks/{id}
     * @secure
     */
    userEditHook: (
      id: number,
      body: GiteaEditHookOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaHook, any>({
        path: `/user/hooks/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentListKeys
     * @summary List the authenticated user's public keys
     * @request GET:/user/keys
     * @secure
     */
    userCurrentListKeys: (
      query?: {
        /** fingerprint of the key */
        fingerprint?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPublicKey[], any>({
        path: `/user/keys`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentPostKey
     * @summary Create a public key
     * @request POST:/user/keys
     * @secure
     */
    userCurrentPostKey: (
      body: GiteaCreateKeyOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPublicKey, any>({
        path: `/user/keys`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentGetKey
     * @summary Get a public key
     * @request GET:/user/keys/{id}
     * @secure
     */
    userCurrentGetKey: (id: number, params: RequestParams = {}) =>
      this.http.request<GiteaPublicKey, any>({
        path: `/user/keys/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentDeleteKey
     * @summary Delete a public key
     * @request DELETE:/user/keys/{id}
     * @secure
     */
    userCurrentDeleteKey: (id: number, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/user/keys/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListCurrentUserOrgs
     * @summary List the current user's organizations
     * @request GET:/user/orgs
     * @secure
     */
    orgListCurrentUserOrgs: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganization[], any>({
        path: `/user/orgs`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentListRepos
     * @summary List the repos that the authenticated user owns
     * @request GET:/user/repos
     * @secure
     */
    userCurrentListRepos: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/user/repos`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags repository, user
     * @name CreateCurrentUserRepo
     * @summary Create a repository
     * @request POST:/user/repos
     * @secure
     */
    createCurrentUserRepo: (
      body: GiteaCreateRepoOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository, void>({
        path: `/user/repos`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name GetUserSettings
     * @summary Get user settings
     * @request GET:/user/settings
     * @secure
     */
    getUserSettings: (params: RequestParams = {}) =>
      this.http.request<GiteaUserSettings, any>({
        path: `/user/settings`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UpdateUserSettings
     * @summary Update user settings
     * @request PATCH:/user/settings
     * @secure
     */
    updateUserSettings: (
      body: GiteaUserSettingsOptions,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUserSettings, any>({
        path: `/user/settings`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentListStarred
     * @summary The repos that the authenticated user has starred
     * @request GET:/user/starred
     * @secure
     */
    userCurrentListStarred: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/user/starred`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentCheckStarring
     * @summary Whether the authenticated is starring the repo
     * @request GET:/user/starred/{owner}/{repo}
     * @secure
     */
    userCurrentCheckStarring: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/user/starred/${owner}/${repo}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentPutStar
     * @summary Star the given repo
     * @request PUT:/user/starred/{owner}/{repo}
     * @secure
     */
    userCurrentPutStar: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/user/starred/${owner}/${repo}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentDeleteStar
     * @summary Unstar the given repo
     * @request DELETE:/user/starred/{owner}/{repo}
     * @secure
     */
    userCurrentDeleteStar: (
      owner: string,
      repo: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/user/starred/${owner}/${repo}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserGetStopWatches
     * @summary Get list of all existing stopwatches
     * @request GET:/user/stopwatches
     * @secure
     */
    userGetStopWatches: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaStopWatch[], any>({
        path: `/user/stopwatches`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentListSubscriptions
     * @summary List repositories watched by the authenticated user
     * @request GET:/user/subscriptions
     * @secure
     */
    userCurrentListSubscriptions: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/user/subscriptions`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListTeams
     * @summary List all the teams a user belongs to
     * @request GET:/user/teams
     * @secure
     */
    userListTeams: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTeam[], any>({
        path: `/user/teams`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCurrentTrackedTimes
     * @summary List the current user's tracked times
     * @request GET:/user/times
     * @secure
     */
    userCurrentTrackedTimes: (
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
        /**
         * Only show times updated after the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        since?: string;
        /**
         * Only show times updated before the given time. This is a timestamp in RFC 3339 format
         * @format date-time
         */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaTrackedTime[], any>({
        path: `/user/times`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags user
     * @name UserSearch
     * @summary Search for users
     * @request GET:/users/search
     * @secure
     */
    userSearch: (
      query?: {
        /** keyword */
        q?: string;
        /**
         * ID of the user to search for
         * @format int64
         */
        uid?: number;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<
        {
          data?: GiteaUser[];
          ok?: boolean;
        },
        any
      >({
        path: `/users/search`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserGet
     * @summary Get a user
     * @request GET:/users/{username}
     * @secure
     */
    userGet: (username: string, params: RequestParams = {}) =>
      this.http.request<GiteaUser, any>({
        path: `/users/${username}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListActivityFeeds
     * @summary List a user's activity feeds
     * @request GET:/users/{username}/activities/feeds
     * @secure
     */
    userListActivityFeeds: (
      username: string,
      query?: {
        /** if true, only show actions performed by the requested user */
        'only-performed-by'?: boolean;
        /**
         * the date of the activities to be found
         * @format date
         */
        date?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaActivity[], any>({
        path: `/users/${username}/activities/feeds`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListFollowers
     * @summary List the given user's followers
     * @request GET:/users/{username}/followers
     * @secure
     */
    userListFollowers: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/users/${username}/followers`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListFollowing
     * @summary List the users that the given user is following
     * @request GET:/users/{username}/following
     * @secure
     */
    userListFollowing: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaUser[], any>({
        path: `/users/${username}/following`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCheckFollowing
     * @summary Check if one user is following another user
     * @request GET:/users/{username}/following/{target}
     * @secure
     */
    userCheckFollowing: (
      username: string,
      target: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/users/${username}/following/${target}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListGpgKeys
     * @summary List the given user's GPG keys
     * @request GET:/users/{username}/gpg_keys
     * @secure
     */
    userListGpgKeys: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaGPGKey[], any>({
        path: `/users/${username}/gpg_keys`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserGetHeatmapData
     * @summary Get a user's heatmap
     * @request GET:/users/{username}/heatmap
     * @secure
     */
    userGetHeatmapData: (username: string, params: RequestParams = {}) =>
      this.http.request<GiteaUserHeatmapData, any>({
        path: `/users/${username}/heatmap`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListKeys
     * @summary List the given user's public keys
     * @request GET:/users/{username}/keys
     * @secure
     */
    userListKeys: (
      username: string,
      query?: {
        /** fingerprint of the key */
        fingerprint?: string;
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaPublicKey[], any>({
        path: `/users/${username}/keys`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgListUserOrgs
     * @summary List a user's organizations
     * @request GET:/users/{username}/orgs
     * @secure
     */
    orgListUserOrgs: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganization[], any>({
        path: `/users/${username}/orgs`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name OrgGetUserPermissions
     * @summary Get user permissions in organization
     * @request GET:/users/{username}/orgs/{org}/permissions
     * @secure
     */
    orgGetUserPermissions: (
      username: string,
      org: string,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaOrganizationPermissions, any>({
        path: `/users/${username}/orgs/${org}/permissions`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListRepos
     * @summary List the repos owned by the given user
     * @request GET:/users/{username}/repos
     * @secure
     */
    userListRepos: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/users/${username}/repos`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListStarred
     * @summary The repos that the given user has starred
     * @request GET:/users/{username}/starred
     * @secure
     */
    userListStarred: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/users/${username}/starred`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserListSubscriptions
     * @summary List the repositories watched by a user
     * @request GET:/users/{username}/subscriptions
     * @secure
     */
    userListSubscriptions: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaRepository[], any>({
        path: `/users/${username}/subscriptions`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserGetTokens
     * @summary List the authenticated user's access tokens
     * @request GET:/users/{username}/tokens
     * @secure
     */
    userGetTokens: (
      username: string,
      query?: {
        /** page number of results to return (1-based) */
        page?: number;
        /** page size of results */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAccessToken[], any>({
        path: `/users/${username}/tokens`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCreateToken
     * @summary Create an access token
     * @request POST:/users/{username}/tokens
     * @secure
     */
    userCreateToken: (
      username: string,
      body: GiteaCreateAccessTokenOption,
      params: RequestParams = {}
    ) =>
      this.http.request<GiteaAccessToken, any>({
        path: `/users/${username}/tokens`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDeleteAccessToken
     * @summary delete an access token
     * @request DELETE:/users/{username}/tokens/{token}
     * @secure
     */
    userDeleteAccessToken: (
      username: string,
      token: string,
      params: RequestParams = {}
    ) =>
      this.http.request<any, any>({
        path: `/users/${username}/tokens/${token}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  version = {
    /**
     * No description
     *
     * @tags miscellaneous
     * @name GetVersion
     * @summary Returns the version of the Gitea application
     * @request GET:/version
     * @secure
     */
    getVersion: (params: RequestParams = {}) =>
      this.http.request<GiteaServerVersion, any>({
        path: `/version`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
}
