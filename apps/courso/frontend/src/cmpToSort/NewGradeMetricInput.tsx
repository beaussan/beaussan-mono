import React from 'react';
import gql from 'graphql-tag';
import {
  GradeMetricDefinitionInput,
  yupGradeMetricDefSchema,
} from './GradeMetricDefinitionInput';
import {
  PracticeYieldExpectedOutputInsertInput,
  PracticeYieldExpectedOutputTypesEnum,
  PracticeYieldGradeMetricInsertInput,
  useGetYieldsForNewGradeTpQuery,
  useInsertYieldGradeMetricNewDataMutation,
} from '../generated/graphql';
import { Loader } from '../components/Loader';
import { Form, Formik } from 'formik';
import { Button } from '../components/Button';
import { DebugJson } from '../components/DebugJson';
import { CardBox } from '../components/CardBox';
import { ArrayInput } from '../components/ArrayInput';
import * as yup from 'yup';
import { useFormikMutationSubmitWithNavigate } from '../hooks/useFormikMutationSubmit';

gql`
  query getYieldsForNewGradeTp($tpId: uuid!) {
    practiceByPk(id: $tpId) {
      id
      title
      practiceYields(orderBy: { method: ASC }) {
        ...GradeMetricInputYield
      }
    }
  }

  mutation insertYieldGradeMetricNewData(
    $data: [PracticeYieldExpectedOutputInsertInput!]!
  ) {
    insertPracticeYieldExpectedOutput(objects: $data) {
      affectedRows
      returning {
        id
      }
    }
  }

  ${GradeMetricDefinitionInput.fragments.GradeMetricInputYield}
`;
/*

  mutation insertNewGradeMetricData(
    $data: [practice_grade_metric_insert_input!]!
  ) {
    insert_practice_grade_metric(objects: $data) {
      affected_rows
      returning {
        id
        meta
        feedbacks
        method
        points
      }
    }
  }
 */
interface NewGradeMetricInputProps {
  tpId: string;
  onTpNotFound: () => void;
}

interface NewGradeMetricInputForm {
  [key: string]: [
    {
      method?: PracticeYieldExpectedOutputTypesEnum;
      lang?: string;
      gitPath?: string;
      expected?: string;
      metrics: [
        {
          name: string;
          points: number;
          feedbacks: string[];
        }
      ];
    }
  ];
}

const mapToSave = (
  data: NewGradeMetricInputForm,
  practiceId: string
): Array<PracticeYieldExpectedOutputInsertInput> => {
  return Object.entries(data)
    .map(
      ([key, val]): Array<PracticeYieldExpectedOutputInsertInput> =>
        val.map((data) => ({
          practice_yield_id: key,
          method: data.method,
          code_lang: data.lang,
          git_path: data.gitPath,
          expected: data.expected,
          practice_yield_grade_metrics: {
            data: data.metrics.map(
              (metricData): PracticeYieldGradeMetricInsertInput => ({
                name: metricData.name,
                feedbacks: metricData.feedbacks,
                points: metricData.points,
              })
            ),
          },
        }))
    )
    .reduce(
      (previousValue, currentValue) => [...previousValue, ...currentValue],
      []
    );
};

export const NewGradeMetricInput: React.FC<NewGradeMetricInputProps> = ({
  tpId,
  onTpNotFound,
}) => {
  const [{ fetching, error, data }] = useGetYieldsForNewGradeTpQuery({
    variables: { tpId },
  });
  const [, mutateNewGradeMetric] = useInsertYieldGradeMetricNewDataMutation();
  const onSubmit = useFormikMutationSubmitWithNavigate({
    mutation: mutateNewGradeMetric,
    mapFormData: (values: NewGradeMetricInputForm) => {
      const newVar = {
        data: mapToSave(values, tpId),
      };
      console.log('DATA : ', { newVar });
      return newVar;
    },
    successMessage: 'Successfully saved ',
  });
  if (fetching || !data) {
    return <Loader />;
  }
  if (
    error ||
    !data ||
    !data.practiceByPk ||
    !data.practiceByPk.practiceYields
  ) {
    onTpNotFound();
    return <div>Error</div>;
  }
  const yields = data.practiceByPk.practiceYields;

  const yupSchema = yup
    .object()
    .shape(
      yields
        .map((it) => ({
          [it.id]: yup.array().of(yupGradeMetricDefSchema).required(),
        }))
        .reduce(
          (previousValue, currentValue) => ({
            ...previousValue,
            ...currentValue,
          }),
          {}
        )
    )
    .required();

  return (
    <div>
      <Formik<NewGradeMetricInputForm>
        initialValues={yields
          .map(
            (it): NewGradeMetricInputForm => ({
              [it.id as string]: [
                {
                  metrics: [
                    {
                      points: 1,
                      name: '',
                      feedbacks: [],
                    },
                  ],
                },
              ],
            })
          )
          .reduce(
            (previousValue, currentValue) => ({
              ...previousValue,
              ...currentValue,
            }),
            {}
          )}
        validationSchema={yupSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, isSubmitting, isValidating, values }) => {
          return (
            <Form>
              <div className="space-y-4">
                {yields.map((yieldTp, yieldIndex) => {
                  return (
                    <CardBox key={yieldTp.id}>
                      <div>
                        <ArrayInput
                          name={yieldTp.id}
                          label={`Metrics for yield ${yieldTp.name}`}
                          labelAdd="Add another Grade metric"
                          defaultNewItem={() => ({
                            metrics: [
                              {
                                points: 0,
                                name: '',
                                feedbacks: [''],
                              },
                            ],
                          })}
                        >
                          {(name, removeSelf) => (
                            <GradeMetricDefinitionInput
                              name={name}
                              yieldLinked={yieldTp}
                              onRemove={removeSelf}
                            />
                          )}
                        </ArrayInput>
                      </div>
                    </CardBox>
                  );
                })}
              </div>
              <div>
                <Button type="submit">Submit</Button>
              </div>
              <DebugJson json={values} />
              <DebugJson json={{ isValid, isSubmitting, isValidating }} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
