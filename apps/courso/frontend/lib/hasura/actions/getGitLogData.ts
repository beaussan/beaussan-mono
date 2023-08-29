import { ActionMap } from './types';
import { gqlSdk } from '../../gql';
import { HttpsError } from '../../common/HttpsError';
// import gravatar from 'gravatar-url';
import { fetchAllCommits } from '../../gitea/giteaApi';

const getProfilePicFromEmail = (email: string): string => {
  return email;
};

export const getGitLogData: ActionMap['getGitLogData'] = async ({
  practice_to_student_yield_id,
  practice_yield_expected_output_id,
}) => {
  const { expectedOutput, studentYield } =
    await gqlSdk.getGitInfoForStudentYield({
      practice_to_student_yield_id,
      practice_yield_expected_output_id,
    });

  if (!expectedOutput) {
    throw new HttpsError('not-found', 'Expected output not found');
  }
  if (!studentYield) {
    throw new HttpsError('not-found', 'Student not found');
  }
  if (studentYield.practiceYieldId !== expectedOutput.practiceYieldId) {
    throw new HttpsError(
      'invalid-argument',
      'Mismatch between expected output and student yield'
    );
  }

  const orgAndRepo = studentYield.giteaOrgAndRepo;

  if (!orgAndRepo) {
    return [];
  }

  const commits = await fetchAllCommits(orgAndRepo);
  /*
  await Promise.all(
    commits
      .map((item) => item.commit_author_email)
      .filter((val) => val !== undefined && val !== null)
      .map((itm) => itm ?? 'none')
      .filter((value, index, array) => array.indexOf(value) !== index)
      .map(getProfilePicFromEmail),
  );
 */

  return commits.map((item) => ({
    ...item,
    author_profile_picture: getProfilePicFromEmail(
      item.commit_author_email ?? 'none'
    ),
  }));
};
