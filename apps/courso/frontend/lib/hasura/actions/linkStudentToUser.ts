import { ActionMap } from './types';
import { gqlSdk } from '../../gql';
import * as yup from 'yup';
import { HttpsError } from '../../common/HttpsError';

const LINK_ERRORS = {
  userAlreadyLinked: 'User is already linked to a student',
  linkNotFound: 'Link not found',
};

const argValidation = yup
  .object()
  .shape({
    linkId: yup.string().uuid().required(),
  })
  .required();

export const linkStudentToUser: ActionMap['linkStudentToUser'] = async (
  args,
  env
) => {
  await argValidation.validate(args);
  const { maybeStudentWithUser, studentToSet } =
    await gqlSdk.dataForUpdateToStudentLink({
      userId: env['x-hasura-user-id'],
      tokenId: args.linkId,
    });

  if (maybeStudentWithUser && maybeStudentWithUser.length > 0) {
    throw new HttpsError('invalid-argument', LINK_ERRORS.userAlreadyLinked);
  }
  if (studentToSet?.length === 0) {
    throw new HttpsError('invalid-argument', LINK_ERRORS.linkNotFound);
  }

  await gqlSdk.linkStudentToUser({
    id: studentToSet[0].id,
    user_id: env['x-hasura-user-id'],
  });
  return {
    ok: true,
  };
};
