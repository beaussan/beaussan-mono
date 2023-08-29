import { PageHead } from '../../../../components/PageHead';
import { BackButton } from '../../../../components/BackButton';
import React from 'react';
import { useGetPracticeForGradeMetricQuery } from '../../../../generated/graphql';
import { Wip } from '../../../../components/Wip';
import gql from 'graphql-tag';
import { Loader } from '../../../../components/Loader';
import { NewGradeMetricInput } from '../../../../cmpToSort/NewGradeMetricInput';
import { useRouter } from 'next/router';
import { routes } from '../../../../routGetters';
import { getLayoutRoleTeacher } from '../../../../layouts/WithRole';

gql`
  query getPracticeForGradeMetric($id: uuid!) {
    practice_by_pk(id: $id) {
      id
      title
    }
  }
`;

export const NewTpGradeMetrics = () => {
  const router = useRouter();
  const { practiceId } = router.query;
  const [{ data, error, fetching }] = useGetPracticeForGradeMetricQuery({
    variables: { id: practiceId },
  });

  if (fetching) {
    return <Loader />;
  }
  if (!data?.practice_by_pk || error) {
    router.push(routes.practice());
  }

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex items-center">
          <BackButton className="mr-2" /> {data?.practice_by_pk?.title ?? ''}
        </div>
      </PageHead>
      <NewGradeMetricInput
        tpId={practiceId as string}
        onTpNotFound={() => router.push(routes.practice())}
      />
      <Wip todo={['Able to see old inputs']} />
    </>
  );
};

NewTpGradeMetrics.getLayout = getLayoutRoleTeacher;

export default NewTpGradeMetrics;
