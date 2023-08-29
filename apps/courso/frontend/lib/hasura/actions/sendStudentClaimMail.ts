import { ActionMap } from './types';
import { gqlSdk } from '../../gql';
import { HttpsError } from '../../common/HttpsError';

export const sendStudentClaimMail: ActionMap['sendStudentClaimMail'] = async (
  args
) => {
  const { student } = await gqlSdk.getStudentForMailSend({
    studentIds: args.studentsIds,
  });

  if (!student || student.length === 0) {
    throw new HttpsError('invalid-argument', 'students not found.');
  }
  /*
  // TODO this
  await Promise.all(
    student.map((value) =>
      db.collection('mail').add({
        to: [value.email],
        template: {
          name: 'link',
          data: {
            full_name: value.full_name,
            claimLink: `${webBaseUrl}/links/${value.claim_token}`,
          },
        },
      }),
    ),
  );
   */
  return {
    nmbMailSent: student.length,
  };
};
