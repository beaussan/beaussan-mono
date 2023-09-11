import { PageHead } from '../../../../components/PageHead';
import { BackButton } from '../../../../components/BackButton';
import React from 'react';
import {
  PracticeToPromoDetailsFragment,
  useGetPracticeDetailQuery,
  useGetPromotionForTpAddQuery,
} from '../../../../generated/graphql';
import { CardBox } from '../../../../components/CardBox';
import { Wip } from '../../../../components/Wip';
import { Table } from '../../../../components/Table';
import { Chip } from '../../../../components/Chip';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { enGB } from 'date-fns/locale';
import gql from 'graphql-tag';
import { Loader } from '../../../../components/Loader';
import { Button } from '../../../../components/Button';
import { NewTpToPromo } from '../../../../cmpToSort/NewTpToPromo';
import { getLayoutRoleTeacher } from '../../../../layouts/WithRole';
import { useRouter } from 'next/router';
import { routes } from '../../../../routGetters';

const fragments = {
  PracticeToPromoDetails: gql`
    fragment PracticeToPromoDetails on PracticeToCourse {
      course {
        name
        years
        id
        studentToCourses {
          courseId
          studentId
          student {
            id
            full_name
            email
            practiceToStudents(
              where: { practiceToCourse: { practiceId: { _eq: $id } } }
            ) {
              createdAt
              grade
              submited
            }
          }
        }
      }
      closeDate
      createdAt
      giteaOrgName
      is_open
      id
      openDate
      updatedAt
    }
  `,
};

gql`
  query getPracticeDetail($id: uuid!) {
    practiceByPk(id: $id) {
      id
      title
      practiceYieldsAggregate(orderBy: { createdAt: ASC }) {
        aggregate {
          count
        }
        nodes {
          id
          name
          method
          meta
          practiceYieldExpectedOutputsAggregate {
            aggregate {
              count
            }
            nodes {
              id
              practiceYieldGradeMetricsAggregate {
                aggregate {
                  count
                  sum {
                    points
                  }
                }
              }
            }
          }
        }
      }
      practiceToCoursesAggregate {
        aggregate {
          count
        }
        nodes {
          ...PracticeToPromoDetails
        }
      }
    }
  }
  ${fragments.PracticeToPromoDetails}
`;

gql`
  query getPromotionForTpAdd {
    course(orderBy: { updatedAt: ASC }) {
      id
      name
      years
    }
  }
`;

const TpIdHandouts: React.FC<{ data: PracticeToPromoDetailsFragment }> = ({
  data,
}) => {
  const router = useRouter();
  const { practiceId } = router.query;
  const amountLeft = data.course.studentToCourses.filter(
    (itm) =>
      itm.student?.practiceToStudents.length === 0 ||
      itm.student?.practiceToStudents?.[0].submited === false
  ).length;
  return (
    <CardBox key={data.id}>
      <div className="leading-loose flex justify-between">
        <div>
          <span className="font-bold">{data.course.name}</span>
          <span>{` - ${data.course.years}`}</span>
        </div>
        <div>
          {
            // FIXME ROUTER PUSH
          }
          <Button
            onClick={() =>
              router.push(
                routes.practiceGrading({
                  practiceId: practiceId as string,
                  courseId: data.course.id,
                })
              )
            }
          >
            Grade this course
          </Button>
        </div>
      </div>
      <div>
        <FormatDates
          open={new Date(data.openDate)}
          close={new Date(data.closeDate)}
        />
      </div>
      <div>
        Got {data.course.studentToCourses.length - amountLeft}/
        {data.course.studentToCourses.length} handouts
      </div>
      <Table>
        <Table.TableHead items={['Name', 'Email', 'Has handout']} />
        <Table.TBody items={data.course.studentToCourses}>
          {({ student }) => {
            const hasStudentHandout =
              student.practiceToStudents.length > 0 &&
              student.practiceToStudents[0].submited;
            return (
              <>
                <Table.Td isMainInfo>{student?.full_name}</Table.Td>
                <Table.Td>{student?.email}</Table.Td>
                <Table.Td>
                  <Chip variant={hasStudentHandout ? 'success' : 'error'}>
                    {hasStudentHandout ? 'Yes' : 'No'}
                  </Chip>
                </Table.Td>
              </>
            );
          }}
        </Table.TBody>
      </Table>
    </CardBox>
  );
};

const FormatSingleDate: React.FC<{ date: Date; prefix: string }> = ({
  date,
  prefix,
}) => {
  return (
    <div>
      {`${prefix} `}
      <span className="font-semibold">
        {formatDistanceToNowStrict(date, {
          addSuffix: true,
          locale: enGB,
        })}
      </span>
      <span>{' at '}</span>
      <span className="font-semibold">
        {format(date, 'Pp', { locale: enGB })}
      </span>
    </div>
  );
};

const FormatDates: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  return (
    <div className="flex justify-between">
      <FormatSingleDate date={open} prefix="Open" />
      <FormatSingleDate date={close} prefix="Closes" />
    </div>
  );
};

export const TpId = () => {
  const router = useRouter();
  const { practiceId } = router.query;
  const [{ data: promotions }] = useGetPromotionForTpAddQuery({});
  const [{ data, error, fetching }] = useGetPracticeDetailQuery({
    variables: { id: practiceId },
  });

  if (fetching) {
    return <Loader />;
  }
  if (!data?.practiceByPk || error) {
    router.push(routes.practice());
  }

  const practiceUsedId = (
    data?.practiceByPk?.practiceToCoursesAggregate.nodes ?? []
  )
    .map((it) => it.course)
    .map(({ id }) => id);

  const promotionAvailable = (promotions?.course ?? []).filter(
    ({ id }) => !practiceUsedId.includes(id)
  );

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex items-center">
          <BackButton className="mr-2" /> {data?.practiceByPk?.title ?? ''}
        </div>
      </PageHead>
      <CardBox className="mb-4">
        {
          // FIXME ROUTER PUSH
        }
        <Button
          onClick={() =>
            router.push(
              routes.practiceNewMetrics({ practiceId: practiceId as string })
            )
          }
        >
          Add grading criteria
        </Button>
      </CardBox>
      <CardBox>
        <div className="font-bold text-xl">
          {(data &&
            data.practiceByPk?.practiceYieldsAggregate.aggregate?.count) ??
            0}{' '}
          Yields
        </div>
        <ul className="list-disc pl-5 space-y-1">
          {data &&
            data.practiceByPk?.practiceYieldsAggregate.nodes.map((value) => (
              <li key={value.id}>
                <span className="font-bold">{value.name}</span>
                <span> using {value.method} as a way to handoff</span>
                <span>
                  {' '}
                  with{' '}
                  {value.practiceYieldExpectedOutputsAggregate.aggregate
                    ?.count ?? 0}{' '}
                  expected output with{' '}
                  {value.practiceYieldExpectedOutputsAggregate.nodes
                    .map(
                      (val) =>
                        val.practiceYieldGradeMetricsAggregate.aggregate
                          ?.count ?? 0
                    )
                    .reduce((prev, curr) => prev + curr, 0)}{' '}
                  metrics, for a total of{' '}
                  {value.practiceYieldExpectedOutputsAggregate.nodes
                    .map(
                      (val) =>
                        val.practiceYieldGradeMetricsAggregate.aggregate?.sum
                          ?.points ?? 0
                    )
                    .reduce((prev, curr) => prev + curr, 0)}{' '}
                  points
                </span>
              </li>
            ))}
        </ul>
      </CardBox>

      <div className="my-4 flex content-between justify-between items-baseline">
        <div className="text-xl font-bold">
          {data?.practiceByPk?.practiceToCoursesAggregate.aggregate?.count}{' '}
          course
        </div>
        <NewTpToPromo
          tpId={practiceId as string}
          promotions={promotionAvailable}
        />
      </div>
      <div className="space-y-4">
        {data?.practiceByPk?.practiceToCoursesAggregate?.nodes.map((promo) => {
          return <TpIdHandouts key={promo.id} data={promo} />;
        })}
      </div>

      <Wip
        todo={[
          'Able to edit if the student can see feedback',
          'Able to edit if the student can see grade',
          'Able to edit the notation tools for the tp',
          'Able to edit the handout for practice to tp',
          'Able to edit the name of the tp',
          'Able to edit the yeilds',
          'Able to delete the practice',
          'Able to delete the practice to promotion',
          'TO FIX : when a student handout one tp, do not mark all as done',
        ]}
      />
    </>
  );
};

TpId.getLayout = getLayoutRoleTeacher;
export default TpId;
