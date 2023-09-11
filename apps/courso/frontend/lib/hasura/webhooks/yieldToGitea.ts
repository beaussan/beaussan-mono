import { handlerFn, HandlerMap } from './types';
import slug from 'slug';
import { gqlSdk } from '../../gql';
// import { createLogger } from '../../common/log';
import { HttpsError } from '../../common/HttpsError';
import { getOrgAndRepoFromMerged, giteaApi } from '../../gitea/giteaApi';

interface StudentPracticeYieldInput {
  id: string;
  value: string;
  gitea_org_and_repo?: string;
}

// const logger = createLogger({ component: 'yieldToGitea' });

const onStudentYieldCreated: handlerFn<StudentPracticeYieldInput> = async (
  input
) => {
  const after = input.event.data.new;
  if (!after) {
    throw new HttpsError('internal', 'No after found');
  }

  const { practiceToStudentYieldByPk: practice_to_student_yield_by_pk } =
    await gqlSdk.onStudentYieldCreatedData({
      id: after.id,
    });

  if (!practice_to_student_yield_by_pk) {
    return 'ok';
  }

  if (practice_to_student_yield_by_pk?.practiceYield?.method !== 'GIT_REPO') {
    return 'ok';
  }

  if (`${after.value}`.length === 0) {
    return 'value not set';
  }

  if (
    !practice_to_student_yield_by_pk.practiceToStudent.practiceToCourse
      .giteaOrgName
  ) {
    throw new HttpsError('internal', 'gita org not found');
  }

  const slugedName = slug(
    `${practice_to_student_yield_by_pk.practiceToStudent.student.full_name} ${practice_to_student_yield_by_pk.practiceYield.name}`,
    { lower: false }
  );
  const repoOwner =
    practice_to_student_yield_by_pk.practiceToStudent.practiceToCourse
      .giteaOrgName;

  await giteaApi.repos.repoMigrate({
    repo_owner: repoOwner,
    repo_name: slugedName,
    mirror: false,
    clone_addr: after.value,
    description: `Yield generated for ${after.id}`,
  });

  await gqlSdk.onStudentYieldMutation({
    id: after.id,
    gitea_org_and_repo: `${repoOwner}/${slugedName}`,
  });
  return 'ok';
};

const onStudentYieldDeleted: handlerFn<StudentPracticeYieldInput> = async (
  data
) => {
  const before = data.event.data.old;
  if (!before) {
    throw new HttpsError('internal', 'No after found');
  }
  if (!before.gitea_org_and_repo) {
    return 'No git found';
  }

  const { repo, org } = getOrgAndRepoFromMerged(before.gitea_org_and_repo);

  await giteaApi.repos.repoDelete(org, repo);

  return 'ok';
};

export const yieldToGiteaHandler: HandlerMap = {
  onStudentYieldCreated,
  onStudentYieldDeleted,
};
