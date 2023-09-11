import {
  PracticeYieldExpectedOutputTypesEnum,
  useGetFileDataFromServerQuery,
  useGetLogDataFromServerQuery,
} from '../../../generated/graphql';
import React from 'react';
import { DebugJson } from '../../../components/DebugJson';
import { DiffViewerLazy } from '../../../components/CodeInput/DiffViewerLazy';
import { Button } from '../../../components/Button';
import gql from 'graphql-tag';
import { Form, Formik } from 'formik';
import { FeedbackInputField } from './FeedbackInputField';
import { GradePercentInputField } from './GradePercentInputField';
import { Chip } from '../../../components/Chip';
import { useGradeItemDataSetup } from './useGradeItemDataSetup';
import { PracticeToStudentForGradingFrontEdit } from './Mapper';
import { Loader } from '../../../components/Loader';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import gravatar from 'gravatar';

gql`
  mutation insertPracticeToStudentGradeMetric(
    $objects: [PracticeToStudentGradeMetricInsertInput!]!
  ) {
    insertPracticeToStudentGradeMetric(
      objects: $objects
      onConflict: {
        constraint: practice_to_student_grade_metric_practice_yield_grade_metric_id
        updateColumns: [percentGrade, feedback]
      }
    ) {
      affectedRows
      returning {
        createdAt
        feedback
        percentGrade
        id
        practiceToStudentYieldId
        practiceYieldGradeMetricId
      }
    }
  }
  query getFileDataFromServer(
    $practice_to_student_yield_id: uuid!
    $practice_yield_expected_output_id: uuid!
  ) {
    getGitFileData(
      practice_to_student_yield_id: $practice_to_student_yield_id
      practice_yield_expected_output_id: $practice_yield_expected_output_id
    ) {
      content
      encoding
    }
  }
  query getLogDataFromServer(
    $practice_to_student_yield_id: uuid!
    $practice_yield_expected_output_id: uuid!
  ) {
    getGitLogData(
      practice_to_student_yield_id: $practice_to_student_yield_id
      practice_yield_expected_output_id: $practice_yield_expected_output_id
    ) {
      author_profile_picture
      commit_message
      commit_author_date
      commit_author_email
      commit_author_name
      commit_committer_date
      commit_committer_email
      commit_committer_name
      commit_tree_created
      commit_tree_sha
      commit_tree_url
      commit_url
      created
      html_url
      sha
      url
      parents
    }
  }
`;

type ItemGrading = PracticeToStudentForGradingFrontEdit;
type ItemMetric = ItemGrading['gradeMetrics'][0];
type ItemToLook = ItemGrading['studentYields'][0];

type DisplayItem = React.FC<{ expected: ItemGrading; value: ItemToLook }>;
type DisplayGitItem = React.FC<{
  expected: ItemGrading;
  value: ItemToLook;
  gitFileData: string;
}>;
/*
TODO : avoid duplication
 */
const withGitFileData = (Component: DisplayGitItem): DisplayItem => {
  function Comp(props: { expected: ItemGrading; value: ItemToLook }) {
    const [{ data, fetching, error }, retry] = useGetFileDataFromServerQuery({
      variables: {
        practice_yield_expected_output_id: props.expected.expectedOutput.id,
        practice_to_student_yield_id: props.value.practiceToStudentYieldId,
      },
    });
    if (fetching) {
      return <Loader visible />;
    }
    if (error) {
      return (
        <div>
          <div>En error occured...</div>
          <Button onClick={() => retry()}>Retry</Button>
        </div>
      );
    }
    if (!data || !data.getGitFileData) {
      return <div>No data</div>;
    }
    if (data.getGitFileData.encoding !== 'base64') {
      return <div>Unknown encoding : {data.getGitFileData.encoding}</div>;
    }
    if (!data.getGitFileData.content) {
      return <div>No data</div>;
    }
    const value = atob(data.getGitFileData.content);
    return <Component {...props} gitFileData={value} />;
  }

  return Comp;
};

const GitLogFiles: DisplayItem = (props) => {
  const [{ data, fetching, error }, retry] = useGetLogDataFromServerQuery({
    variables: {
      practice_yield_expected_output_id: props.expected.expectedOutput.id,
      practice_to_student_yield_id: props.value.practiceToStudentYieldId,
    },
  });
  if (fetching) {
    return <Loader visible />;
  }
  if (error) {
    return (
      <div>
        <div>En error occured...</div>
        <Button onClick={() => retry()}>Retry</Button>
      </div>
    );
  }
  if (!data || !data.getGitLogData) {
    return <div>No data</div>;
  }

  return (
    <>
      {/*<Button onClick={() => retry()}>Retry</Button>*/}
      <ol className="overflow-scroll h-full space-y-4">
        {data.getGitLogData.map((item) => (
          <li key={item.sha} className="bg-white p-2 rounded-lg">
            <div className="flex items-center mb-2">
              <img
                src={item.author_profile_picture ?? ''}
                className="w-10 h-10 mr-2 rounded-lg"
                alt="committer"
                onError={(event) => {
                  if (!event.target) {
                    return;
                  }
                  (event.target as HTMLImageElement).src = gravatar.url(
                    item.author_profile_picture ?? 'RANDOM'
                  );
                }}
              />
              <div>
                {item.commit_author_email} - {item.commit_author_name} at{' '}
                {format(new Date(item.commit_author_date ?? 0), 'Pp', {
                  locale: enGB,
                })}
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-400 underline ml-2"
                  href={item.html_url ?? ''}
                >
                  Detail
                </a>
              </div>
            </div>
            <ReactMarkdown className="prose" remarkPlugins={[gfm, remarkEmoji]}>
              {`## ${item.commit_message}` ?? ''}
            </ReactMarkdown>
          </li>
        ))}
      </ol>
    </>
  );
};

const DummyGit: DisplayGitItem = (props) => (
  <div>
    TODO COMPARE :<DebugJson json={props} />{' '}
  </div>
);

const CompareGitCodeFile: DisplayGitItem = ({
  value,
  expected,
  gitFileData,
}) => (
  <DiffViewerLazy
    className="!h-[90vh]"
    lang={expected.expectedOutput.codeLang as any}
    expected={expected.expectedOutput.expected ?? ''}
    got={gitFileData}
  />
);

const CompareCodeFile: DisplayItem = ({ value, expected }) => (
  <DiffViewerLazy
    className="!h-[90vh]"
    lang={expected.expectedOutput.codeLang as any}
    expected={expected.expectedOutput.expected ?? ''}
    got={value?.value}
  />
);

const ManualCompare: DisplayItem = ({ value, expected }) => (
  <div className="flex">
    <div className="flex-1 flex">
      <div>Expected</div>
      <div>{expected.expectedOutput.expected}</div>
    </div>
    <div className="flex-1 flex">
      <div>Got</div>
      <div>{value?.value}</div>
    </div>
  </div>
);

const UrlCompare: DisplayItem = ({ value, expected }) => (
  <div className="flex">
    <div className="flex-1 flex">
      Target link :
      <a
        target="_blank"
        className="text-blue-400 underline"
        rel="noopener noreferrer"
        href={value.value}
      >
        {value.value}
      </a>
    </div>
  </div>
);

const mapToShow: Record<PracticeYieldExpectedOutputTypesEnum, DisplayItem> = {
  COMPARE_CODE_FILE: CompareCodeFile,
  COMPARE_GIT_FILE: withGitFileData(CompareGitCodeFile),
  SHOW_GIT_LOG: GitLogFiles,
  SHOW_GIT_FILE: withGitFileData(DummyGit),
  MANUAL_GIT_FILE_REVIEW: withGitFileData(DummyGit),
  MANUAL: ManualCompare,
  LINK_OPEN: UrlCompare,
};
// practice_to_student_grade_metric

const GradeAndFeedbackItem: React.FC<{
  metric: ItemMetric;
  graded?: boolean;
}> = ({ metric, graded }) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 space-y-4 pb-4">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">
          {metric.name} ({metric.points} points)
        </div>
        {graded ? <Chip variant={'success'}>Graded</Chip> : null}
      </div>
      <FeedbackInputField
        name={`${metric.id}.feedbacks`}
        feedbacks={metric.feedbacks}
        metricId={metric.id}
      />
      <GradePercentInputField name={`${metric.id}.grade`} />
    </div>
  );
};

export const GradeItem: React.FC<{
  data: PracticeToStudentForGradingFrontEdit;
  goNext?: () => void;
  goPrev?: () => void;
  isFirstBlock: boolean;
  isLastBlock: boolean;
}> = ({ data, isFirstBlock, isLastBlock, goNext, goPrev }) => {
  const {
    item,
    onSubmit,
    initialFormValue,
    maybeGradeForStudents,
    goNextStep,
    goPreviousStep,
    position,
    isLastItemEver,
    isFirstItemEver,
  } = useGradeItemDataSetup({
    data,
    goPrev,
    goNext,
    isFirstBlock,
    isLastBlock,
  });

  if (!data.expectedOutput.method) {
    return <div>Something went wrong.</div>;
  }

  const ToCompare = mapToShow[data.expectedOutput.method];
  if (!item) {
    return <div />;
  }
  return (
    <div className="flex h-full">
      <div className="w-3/4">
        <div className="font-semibold text-lg mb-2">{data.yieldName}</div>
        <ToCompare value={item} expected={data} />
      </div>
      <div className="w-1/4 px-2 h-full overflow-y-scroll space-y-4">
        <Formik
          initialValues={initialFormValue}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, isSubmitting }) => (
            <Form className="space-y-4">
              <div className="font-semibold text-lg -mb-2">
                Student {position + 1} over {data.studentYields.length}
              </div>
              {data.gradeMetrics.map((metric) => (
                <>
                  <GradeAndFeedbackItem
                    metric={metric}
                    key={metric.id}
                    graded={!!maybeGradeForStudents[metric.id]}
                  />
                  <DebugJson json={metric}></DebugJson>
                </>
              ))}
              <div className="flex justify-center space-x-4">
                <Button
                  type="button"
                  disabled={isSubmitting || isFirstItemEver}
                  onClick={() => goPreviousStep()}
                  variant="secondary"
                >
                  Prev
                </Button>
                <Button disabled={isSubmitting} className="flex-1 w-full">
                  Grade
                </Button>
                <Button
                  type="button"
                  disabled={isSubmitting || isLastItemEver}
                  onClick={() => goNextStep()}
                  variant="secondary"
                >
                  Next
                </Button>
              </div>
              <DebugJson json={values} title="values" />
              <DebugJson json={data.gradeMetrics} title="gradeMetrics" />
              <DebugJson json={data} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
