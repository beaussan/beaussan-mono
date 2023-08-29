import { gqlSdk } from '../../gql';
import * as yup from 'yup';
import { ActionMap } from './types';
import { HttpsError } from '../../common/HttpsError';

const argValidation = yup.object().shape({
  practiceToPromotionId: yup.string().uuid().required(),
  yields: yup.array().of(
    yup.object({
      yieldId: yup.string().uuid().required(),
      value: yup.string(),
    })
  ),
});

export const submitHandoff: ActionMap['submitHandoff'] = async (
  args,
  sessionVars
) => {
  await argValidation.validate(args);
  const { practiceToCourseByPk: practice_to_course_by_pk } =
    await gqlSdk.dataForSubmitHandoff({
      practiceToPromoId: args.practiceToPromotionId,
      userId: sessionVars['x-hasura-user-id'],
    });

  if (!practice_to_course_by_pk) {
    throw new HttpsError('not-found', 'Not found');
  }
  if ((practice_to_course_by_pk.course.studentToCourses.length ?? 0) === 0) {
    throw new HttpsError('not-found', 'Not found');
  }
  if (!practice_to_course_by_pk.practice?.id) {
    throw new HttpsError('not-found', 'Not found');
  }
  if (!practice_to_course_by_pk.practice.practiceYields) {
    throw new HttpsError('not-found', 'Not found');
  }
  const userYieldsId = args.yields.map(({ yieldId }) => yieldId);
  const serverYieldsIds = practice_to_course_by_pk.practice.practiceYields.map(
    ({ id }) => id
  );
  if (userYieldsId.length !== serverYieldsIds.length) {
    throw new HttpsError('not-found', 'Not found');
  }
  if (!serverYieldsIds.every((item) => userYieldsId.includes(item))) {
    throw new HttpsError('invalid-argument', 'Invalid yields');
  }

  if (practice_to_course_by_pk.practiceToStudents.length > 0) {
    throw new HttpsError('invalid-argument', 'Already submitted');
  }
  if (!practice_to_course_by_pk.is_open) {
    throw new HttpsError('invalid-argument', 'Submit is not open');
  }

  await gqlSdk.mutationSubmitHandoff({
    student_id: practice_to_course_by_pk.course.studentToCourses[0].studentId,
    promotion_practice_id: args.practiceToPromotionId,
    studentYields: args.yields.map(({ yieldId, value }) => ({
      value,
      practice_yield_id: yieldId,
    })),
  });

  return {
    status: 'ok',
  };
};
