// GetPracticeToStudentForGradingQuery

import {
  GetPracticeToStudentForGradingQuery,
  Practice_Yield_Expected_Output,
  PracticeToStudentYieldForGradingFragment,
} from '../../../generated/graphql';
import { isBefore } from 'date-fns';

type expectedOutput = Pick<
  Practice_Yield_Expected_Output,
  'id' | 'code_lang' | 'expected' | 'git_path' | 'method'
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
  input: GetPracticeToStudentForGradingQuery['practice_yield'][0]
): Array<PracticeToStudentForGradingFrontEdit> => {
  const yieldId = input.id;
  const yieldName = input.name;
  const studentYields = input.practice_to_student_yields;
  return input.practice_yield_expected_outputs.map(
    (expected): PracticeToStudentForGradingFrontEdit => {
      const gradeMetricsWithDate = expected.practice_yield_grade_metrics.map(
        (data) => ({
          ...data,
          created_at: new Date(data.created_at),
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
          code_lang: expected.code_lang,
          expected: expected.expected,
          git_path: expected.expected,
          method: expected.method,
        },
      };
    }
  );
};

export const mapIntoFrontInterpretation = (
  input: GetPracticeToStudentForGradingQuery['practice_yield']
): Array<PracticeToStudentForGradingFrontEdit> => {
  return input
    .map(mapIntoFrontInterpretationSingle)
    .reduce((prev, curr) => [...prev, ...curr], []);
};
