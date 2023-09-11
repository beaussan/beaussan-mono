import { ActionMap } from './types';
import { isBefore } from 'date-fns';
import { gqlSdk } from '../../gql';
import {
  PracticeToStudentInsertInput,
  PracticeToStudentYieldArrRelInsertInput,
  PracticeToStudentYieldConstraint,
  PracticeToStudentYieldInsertInput,
  PracticeToStudentYieldUpdateColumn,
} from '../../generated/graphql';
import { HttpsError } from '../../common/HttpsError';

export const fillEmptyYields: ActionMap['fillEmptyYields'] = async ({
  course_id,
  practice_id,
}) => {
  const { practiceToCourse: practiceToCourseRaw } =
    await gqlSdk.dataForPracticeToGradeEmpty({
      practice_id,
      course_id,
    });
  if (!practiceToCourseRaw || practiceToCourseRaw.length === 0) {
    throw new HttpsError('not-found', 'Not found');
  }
  const practiceToCourse = practiceToCourseRaw[0];
  /*
  if (practiceToCourse.is_open) {
    throw new HttpsError('invalid-argument', 'Practice is still open');
  }

  const openDate = new Date(practiceToCourse.openDate);
  if (isBefore(new Date(), openDate) || practiceToCourse.is_open) {
    throw new HttpsError('invalid-argument', 'Practice is not over yet');
  }

   */

  const yieldsId: string[] = practiceToCourse.practice.practiceYields.map(
    (value) => value.id
  );

  const dataToSave = practiceToCourse.course.studentToCourses.map(
    (data): PracticeToStudentInsertInput => {
      return {
        id: data.student.practiceToStudents[0]?.id ?? undefined,
        coursePracticeId: practiceToCourse.id,
        submited: false,
        studentId: data.student.id,
        practiceToStudentYields: {
          data: yieldsId.map(
            (id): PracticeToStudentYieldInsertInput => ({
              practiceYieldId: id,
              value: '',
              submited: false,
            })
          ),
          onConflict: {
            constraint:
              PracticeToStudentYieldConstraint.StudentPracticeYieldPracticeYieldIdPracticeToStudenKey,
            updateColumns: [PracticeToStudentYieldUpdateColumn.PracticeYieldId],
          },
        },
      };
    }
  );

  console.log('DATA TO SAVE :', dataToSave);

  const { insertPracticeToStudent } = await gqlSdk.updateFillEmptyHandouts({
    data: dataToSave,
  });

  return { affected_rows: insertPracticeToStudent?.affectedRows ?? 0 };
};
