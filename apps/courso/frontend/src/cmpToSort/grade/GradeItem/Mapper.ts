// GetPracticeToStudentForGradingQuery

import {
  GetPracticeToStudentForGradingQuery,
  PracticeYieldExpectedOutput,
  PracticeToStudentYieldForGradingFragment,
} from '../../../generated/graphql';
import { isBefore } from 'date-fns';

type expectedOutput = Pick<
  PracticeYieldExpectedOutput,
  'id' | 'codeLang' | 'expected' | 'gitPath' | 'method'
>;
export interface PracticeToStudentForGradingFrontEdit {
  yieldId: string;
  yieldName: string;
  expectedOutput: expectedOutput;
  gradeMetrics: Array<{
    id: string;
    name: string;
    points: number;
    feedbacks: string[];
    created_at: Date;
  }>;
  studentYields: Array<PracticeToStudentYieldForGradingFragment>;
}

const mapIntoFrontInterpretationSingle = (
  input: GetPracticeToStudentForGradingQuery['practiceYield'][0]
): Array<PracticeToStudentForGradingFrontEdit> => {
  const yieldId = input.id;
  const yieldName = input.name;
  const studentYields = input.practiceToStudentYields;
  return input.practiceYieldExpectedOutputs.map(
    (expected): PracticeToStudentForGradingFrontEdit => {
      const gradeMetricsWithDate = expected.practiceYieldGradeMetrics.map(
        (data) => ({
          ...data,
          created_at: new Date(data.createdAt),
        })
      );
      const gradeMetrics = gradeMetricsWithDate.sort((a, b) =>
        isBefore(a.created_at, b.created_at) ? -1 : 0
      );
      console.log('MAPPER : ', { gradeMetricsWithDate, gradeMetrics });
      return {
        yieldName,
        yieldId,
        studentYields,
        gradeMetrics,
        expectedOutput: {
          id: expected.id,
          codeLang: expected.codeLang,
          expected: expected.expected,
          gitPath: expected.expected,
          method: expected.method,
        },
      };
    }
  );
};

export const mapIntoFrontInterpretation = (
  input: GetPracticeToStudentForGradingQuery['practiceYield']
): Array<PracticeToStudentForGradingFrontEdit> => {
  return input
    .map(mapIntoFrontInterpretationSingle)
    .reduce((prev, curr) => [...prev, ...curr], []);
};
