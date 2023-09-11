import React from 'react';
import { PageHead } from '../../../components/PageHead';
import { Button } from '../../../components/Button';
import gql from 'graphql-tag';
import {
  PracticeListItemFragment,
  useListPracticeQuery,
} from '../../../generated/graphql';
import { Wip } from '../../../components/Wip';
import { Loader } from '../../../components/Loader';
import { CardBox } from '../../../components/CardBox';
import { Table } from '../../../components/Table';
import { Chip } from '../../../components/Chip';
import { format } from 'date-fns/fp';
import { isBefore } from 'date-fns';
import { useTimeInterval } from '../../../hooks/useTimeInterval';
import { getLayoutRoleTeacher } from '../../../layouts/WithRole';
import { useRouter } from 'next/router';
import { routes } from '../../../routGetters';

gql`
  fragment PracticeListItem on Practice {
    id
    title
    practiceToCourses {
      id
      closeDate
      openDate
      course {
        name
        years
      }
    }
  }

  query ListPractice {
    practice(orderBy: { createdAt: DESC }) {
      ...PracticeListItem
    }
  }
`;

const formatForDisplay = format('Pp');

const TpCardPromoState: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  useTimeInterval(100);
  const now = new Date();
  if (isBefore(now, open)) {
    return <Chip variant="error">Not open yet</Chip>;
  }
  if (isBefore(now, close)) {
    return <Chip variant="success">Open</Chip>;
  }
  return <Chip variant="error">Closed</Chip>;
};

const TpCard: React.FC<{ data: PracticeListItemFragment }> = ({ data }) => {
  const router = useRouter();
  return (
    <CardBox
      key={data.id}
      onClick={() => router.push(routes.practiceId({ practiceId: data.id }))}
    >
      <div className="font-bold text-lg">{data.title}</div>
      {data.practiceToCourses && (
        <div className="pt-4">
          <Table>
            <Table.TableHead
              items={['Course', 'Open date', 'Close date', 'State']}
            />
            <Table.TBody items={data.practiceToCourses}>
              {({ openDate: open_date, closeDate: close_date, course }) => {
                const openDate = new Date(open_date);
                const closeDate = new Date(close_date);

                return (
                  <>
                    <Table.Td
                      isMainInfo
                    >{`${course.name} - ${course.years}`}</Table.Td>
                    <Table.Td>{formatForDisplay(openDate)}</Table.Td>
                    <Table.Td>{formatForDisplay(closeDate)}</Table.Td>
                    <Table.Td>
                      <TpCardPromoState open={openDate} close={closeDate} />
                    </Table.Td>
                  </>
                );
              }}
            </Table.TBody>
          </Table>
        </div>
      )}
    </CardBox>
  );
};

export const TpList = () => {
  const router = useRouter();
  const [{ data }] = useListPracticeQuery();

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex content-between justify-between items-center">
          <span>TPs</span>

          {
            // FIXME ROUTER PUSH
          }
          <Button onClick={() => router.push(routes.practiceNew())}>
            Add new TP
          </Button>
        </div>
      </PageHead>
      <Loader visible={false}>
        <div className="flex flex-col space-y-4">
          {data &&
            data.practice.map((data) => <TpCard data={data} key={data.id} />)}
        </div>
      </Loader>
      <Wip todo={['Practice detail']} />
    </>
  );
};

TpList.getLayout = getLayoutRoleTeacher;

export default TpList;
