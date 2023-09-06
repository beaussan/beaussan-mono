import React, { useMemo } from 'react';
import { DebugJson } from '../../../../../components/DebugJson';
import gql from 'graphql-tag';
import { Loader } from '../../../../../components/Loader';
import { useArrayNavigator } from '../../../../../hooks/useArrayNavigator';
import { FullScreen } from '../../../../../components/FullScreen';
import { Button } from '../../../../../components/Button';
import { CardBox } from '../../../../../components/CardBox';
import { Chip } from '../../../../../components/Chip';
import { BackButton } from '../../../../../components/BackButton';
import {
  useGetPracticeToStudentForGradingQuery,
  useTriggerRefreshGradesMutation,
} from '../../../../../generated/graphql';
import {
  Bar,
  Tooltip,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from 'recharts';
import {
  mapIntoFrontInterpretation,
  PracticeToStudentForGradingFrontEdit,
} from '../../../../../cmpToSort/grade/GradeItem/Mapper';
import { GradeItem } from '../../../../../cmpToSort/grade/GradeItem';
import { getLayoutRoleTeacher } from '../../../../../layouts/WithRole';
import { useRouter } from 'next/router';

gql`
  query getPracticeToStudentForGrading($courseId: uuid!, $practiceId: uuid!) {
    practiceToCourse(
      where: {
        courseId: { _eq: $courseId }
        _and: { practiceId: { _eq: $practiceId } }
      }
    ) {
      practiceToStudents {
        calculatedGrades {
          calculatedGrade
        }
        student {
          full_name
        }
      }
      course {
        studentToCoursesAggregate {
          aggregate {
            count
          }
        }
      }
    }

    practiceYield(
      where: {
        practice: {
          practiceToCourses: {
            courseId: { _eq: $courseId }
            _and: { practiceId: { _eq: $practiceId } }
          }
        }
      }
    ) {
      id
      name
      practiceToStudentYields(
        where: {
          submited: { _eq: true }
          _and: {
            practiceToStudent: {
              practiceToCourse: {
                courseId: { _eq: $courseId }
                _and: { practiceId: { _eq: $practiceId } }
              }
            }
          }
        }
      ) {
        ...PracticeToStudentYieldForGrading
      }
      practiceYieldExpectedOutputs {
        id
        codeLang
        expected
        gitPath
        method
        practiceYieldId
        practiceYieldGradeMetrics(orderBy: { createdAt: DESC }) {
          id
          name
          points
          feedbacks
          createdAt
          practiceToStudentGradeMetricsAggregate(
            where: {
              practiceToStudentYield: {
                practiceToStudent: {
                  practiceToCourse: {
                    courseId: { _eq: $courseId }
                    _and: { practiceId: { _eq: $practiceId } }
                  }
                }
              }
            }
          ) {
            aggregate {
              count
            }
            nodes {
              practiceYieldGradeMetricId
              practiceToStudentYieldId
            }
          }
        }
      }
    }
  }

  fragment PracticeToStudentYieldForGrading on PracticeToStudentYield {
    practiceToStudentYieldId: id
    giteaOrgAndRepo
    value
    practiceYieldId
    practiceToStudentGradeMetrics {
      ...PracticeToStudentGradeMetricForGrading
    }
  }
  fragment PracticeToStudentGradeMetricForGrading on PracticeToStudentGradeMetric {
    id
    feedback
    createdAt
    percentGrade
    practiceYieldGradeMetricId
    updatedAt
  }

  mutation triggerRefreshGrades($practice_id: uuid!, $course_id: uuid!) {
    refreshGrades(course_id: $course_id, practice_id: $practice_id) {
      affected_rows
    }
  }
`;

interface GradeGraphItem {
  grade: number;
  amount: number;
  students: string[];
}

export const Grading = () => {
  const router = useRouter();
  const { practiceId, courseId } = router.query;
  const [{ data, fetching, error }, refresh] =
    useGetPracticeToStudentForGradingQuery({
      variables: {
        practiceId: practiceId,
        courseId: courseId,
      },
      // pollInterval: 30000,
      requestPolicy: 'cache-and-network',
      // requestPolicy: 'network-only',
    });
  const [, refreshGrades] = useTriggerRefreshGradesMutation();
  const mappedValuesForFront = useMemo<
    Array<PracticeToStudentForGradingFrontEdit>
  >(() => {
    if (!data) {
      return [];
    }
    return mapIntoFrontInterpretation(data.practiceYield);
  }, [data]);
  const { item, goNext, isLast, isFirst, goPrev } =
    useArrayNavigator(mappedValuesForFront);

  const mappedForGraph = useMemo<GradeGraphItem[]>(() => {
    if (!data) {
      return [];
    }
    const practiceToStudents = data.practiceToCourse[0].practiceToStudents;
    const pre = practiceToStudents
      .map((item) => ({
        grade: Math.round(item.calculatedGrades?.calculatedGrade ?? 0),
        fullName: item.student.full_name ?? '',
      }))
      .reduce<{ [key: number]: string[] }>(
        (full, curr) => ({
          ...full,
          [curr.grade]: [...full[curr.grade], curr.fullName],
        }),
        {
          0: [],
          1: [],
          2: [],
          3: [],
          4: [],
          5: [],
          6: [],
          7: [],
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: [],
        }
      );
    return Object.entries(pre).reduce<GradeGraphItem[]>(
      (arr, [key, val]) => [
        ...arr,
        { grade: parseInt(key), amount: val.length, students: val },
      ],
      []
    );
  }, [data]);

  const isAllDone = useMemo<boolean>(() => {
    if (!data) {
      return false;
    }

    return data.practiceYield
      .map((itm) => {
        const studentYieldNumber = itm.practiceToStudentYields.length;
        return itm.practiceYieldExpectedOutputs
          .map((itm) =>
            itm.practiceYieldGradeMetrics
              .map(
                (dati) =>
                  dati.practiceToStudentGradeMetricsAggregate.aggregate
                    ?.count === studentYieldNumber
              )
              .reduce((prev, curr) => prev && curr, true)
          )
          .reduce((prev, curr) => prev && curr, true);
      })
      .reduce((prev, curr) => prev && curr, true);
  }, [data]);

  if (fetching || !item) {
    return <Loader />;
  }

  if (error) {
    return <DebugJson json={error} />;
  }
  return (
    <div>
      <FullScreen
        onStateChange={(newValue) => {
          console.log('ON STATE CHANGE MODAL : ', newValue);
          if (newValue) {
            refresh();
          }
        }}
      >
        <div className="flex justify-between items-center content-center pb-4">
          <div className="flex items-center content-center">
            <BackButton backTo="../.." className="mr-2" />
            {isAllDone ? 'All done' : 'Not all done'}
            {isAllDone ? (
              <Button
                onClick={() =>
                  refreshGrades({
                    course_id: courseId,
                    practice_id: practiceId,
                  }).then(() => refresh())
                }
                className="ml-4"
              >
                Refresh grades
              </Button>
            ) : null}
          </div>
          <FullScreen.Trigger>
            <Button>Start grading</Button>
          </FullScreen.Trigger>
        </div>
        <FullScreen.Body>
          {/*

          <GradeItem
            data={item}
            goNext={goNext}
            goPrev={goPrev}
            isFirstBlock={isFirst}
            isLastBlock={isLast}
          />
            */}

          <GradeItem
            data={item}
            goNext={goNext}
            goPrev={goPrev}
            isFirstBlock={isFirst}
            isLastBlock={isLast}
          />
        </FullScreen.Body>
      </FullScreen>
      <div className="grid grid-cols-2 gap-4">
        {data?.practiceYield.map((itm) => {
          const studentYieldNumber = itm.practiceToStudentYields.length;
          return (
            <CardBox key={itm.name}>
              <div className="font-semibold text-xl pb-2">{itm.name}</div>
              <div className="space-y-2">
                {itm.practiceYieldExpectedOutputs.map((yieldMetric) => {
                  // const ammountStudentOutpout = yieldMetric;
                  return (
                    <>
                      {yieldMetric.practiceYieldGradeMetrics.map((metric) => {
                        const yieldGradeMetricAmount =
                          metric.practiceToStudentGradeMetricsAggregate
                            .aggregate?.count ?? 0;
                        const isFilled =
                          studentYieldNumber === yieldGradeMetricAmount;
                        return (
                          <div className="flex" key={metric.name}>
                            <div className="w-1/2">{metric.name}</div>
                            <div className="w-1/2 flex">
                              <div className="w-1/2">
                                {yieldGradeMetricAmount} / {studentYieldNumber}
                              </div>
                              <div className="w-1/2">
                                <Chip variant={isFilled ? 'success' : 'error'}>
                                  {isFilled ? 'Done' : 'Todo'}
                                </Chip>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })}
              </div>
            </CardBox>
          );
        })}
      </div>

      <div className="flex justify-center mt-4">
        <BarChart width={730} height={250} data={mappedForGraph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="grade" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

/*
 formatter={(value: GradeGraphItem) => `${value}/20`}
                <div className="grid grid-cols-3">
*/
/*
export const Grading = () => {
  return <div>WIP</div>;
};
 */

Grading.getLayout = getLayoutRoleTeacher;

export default Grading;
