import { CommitItem } from '../hasura/actions/types';
import {
  Api,
  GiteaCommit,
  GiteaContentsResponse,
  HttpClient,
} from '../generated/GiteaApi';
import { serverEnv } from '../env';
export type Maybe<T> = T | null;

export const giteaApi = new Api(
  new HttpClient({
    baseURL: `${serverEnv.GITEA_URL}/api/v1`,
    headers: {
      Authorization: `token ${serverEnv.GITEA_TOKEN}`,
    },
  })
);

export const getOrgAndRepoFromMerged = (
  orgAndRepo: string
): { org: string; repo: string } => {
  const [org, repo] = orgAndRepo.split('/');
  return {
    org,
    repo,
  };
};

export const fetchAllCommits = async (
  orgAndRepo: string
): Promise<CommitItem[]> => {
  const { org, repo } = getOrgAndRepoFromMerged(orgAndRepo);
  return fetchAllCommitsWithPages(org, repo);
};

const mapCommitItem = (item: GiteaCommit): CommitItem => {
  const commit = item?.commit;
  return {
    commit_author_date: commit?.author?.date,
    commit_author_email: commit?.author?.email,
    commit_author_name: commit?.author?.name,
    commit_committer_date: commit?.committer?.date,
    commit_committer_email: commit?.committer?.email,
    commit_committer_name: commit?.committer?.name,
    commit_message: commit?.message,
    commit_url: commit?.url,
    commit_tree_created: commit?.tree?.created,
    commit_tree_sha: commit?.tree?.sha,
    commit_tree_url: commit?.tree?.url,
    created: item.created,
    html_url: item.html_url,
    parents: JSON.stringify(item.parents),
    sha: item.sha,
    url: item.url,
  };
};

const fetchAllCommitsWithPages = async (
  org: string,
  repo: string,
  page = 1
): Promise<CommitItem[]> => {
  const { data, headers } = await giteaApi.repos.repoGetAllCommits(org, repo, {
    page,
  });

  if (!data) {
    throw new Error('No data found, weird...');
  }

  const parsedPageCount =
    typeof headers?.['x-pagecount'] === 'number'
      ? headers['x-pagecount']
      : parseInt(headers?.['x-pagecount'] ?? '0');
  const hasMore = parsedPageCount > page;
  const mappedData = data.map(mapCommitItem);

  if (hasMore) {
    const more = await fetchAllCommitsWithPages(org, repo, page + 1);
    return [...mappedData, ...more];
  }
  return mappedData;
};

export const getFileFromGitea = async (
  orgAndRepo: string,
  filePath: string
): Promise<GiteaContentsResponse | null> => {
  const { org, repo } = getOrgAndRepoFromMerged(orgAndRepo);

  const { data } = await giteaApi.repos.repoGetContents(org, repo, filePath);

  if (!data) {
    return null;
  }

  return {
    content: data.content,
    download_url: data.download_url,
    encoding: data.encoding,
    git_url: data.git_url,
    html_url: data.html_url,
    name: data.name,
    path: data.path,
    sha: data.sha,
    size: data.size,
    submodule_git_url: data.submodule_git_url,
    target: data.target,
    type: data.type,
    url: data.url,
  };
};
