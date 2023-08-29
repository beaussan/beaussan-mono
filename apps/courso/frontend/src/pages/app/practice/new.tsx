import React from 'react';
import { PageHead } from '../../../components/PageHead';
import { BackButton } from '../../../components/BackButton';
import gql from 'graphql-tag';
import {
  Practice_Yield_Insert_Input,
  useCreateNewPracticeMutation,
} from '../../../generated/graphql';
import { Loader } from '../../../components/Loader';
import { useFetchYieldTypes } from '../../../hooks/useFetchYieldTypes';
import { FieldArray, Form, Formik } from 'formik';
import { Input, TextArea } from '../../../components/Input';
import { Button } from '../../../components/Button';
import * as yup from 'yup';
import { CardBox } from '../../../components/CardBox';
import { useFormikMutationSubmitWithNavigate } from '../../../hooks/useFormikMutationSubmit';
import { AnimatePresence, motion } from 'framer-motion';
import { YieldInput } from '../../../cmpToSort/YieldInput';
import { getLayoutRoleTeacher } from '../../../layouts/WithRole';
import { YieldTypesDescription } from '../../../cmpToSort/YieldTypesDescription';
import { PlusIcon } from '@heroicons/react/outline';
import { ArrayHelpers } from 'formik/dist/FieldArray';

gql`
  mutation createNewPractice(
    $title: String!
    $description: String!
    $data: [practice_yield_insert_input!]!
  ) {
    insert_practice_one(
      object: {
        title: $title
        description: $description
        practice_yields: { data: $data }
      }
    ) {
      created_at
      id
      title
      updated_at
    }
  }
`;

interface NewTp {
  title: string;
  description: string;
  yields: [
    {
      name: string;
      method: string;
      meta?: any;
    }
  ];
}

export const TpNew = () => {
  const { data: yieldTypes, loading } = useFetchYieldTypes();
  const [, createTp] = useCreateNewPracticeMutation();
  const onSubmit = useFormikMutationSubmitWithNavigate({
    mutation: createTp,
    successMessage: 'TP added successfully',
    mapFormData: (values: NewTp) => ({
      data: values.yields as Practice_Yield_Insert_Input[],
      title: values.title,
      description: values.description,
    }),
  });

  return (
    <>
      <PageHead className="">
        <div className="flex items-center">
          <BackButton className="mr-2" /> New TP
        </div>
      </PageHead>
      <Loader visible={loading}>
        <CardBox>
          <Formik
            initialValues={{
              title: '',
              description: '',
              yields: [
                {
                  name: '',
                  method: 'GIT_REPO',
                },
              ],
            }}
            validationSchema={yup
              .object()
              .shape({
                title: yup.string().required('Title is required'),
                description: yup.string().notRequired(),
                yields: yup
                  .array()
                  .of(
                    yup.object().shape({
                      name: yup.string().required('Name is required'),
                      description: yup.string().notRequired(),
                      method: yup
                        .string()
                        .oneOf(yieldTypes)
                        .required('Method is required'),
                    })
                  )
                  .required()
                  .min(1),
              })
              .required()}
            onSubmit={onSubmit}
          >
            {({ isValid, isValidating, values }) => (
              <Form className="flex flex-col">
                <div className="text-xl font-bold pt-2 pb-4">
                  Tp informations
                </div>
                <Input label="Title" type="text" name="title" />
                <TextArea label="Description" type="text" name="description" />
                <FieldArray name="yields">
                  {({ push, remove }: ArrayHelpers<string[]>) => (
                    <>
                      <div className="flex content-between font-bold justify-between items-center pt-6 pb-4">
                        <div className="text-xl font-bold">Students yield</div>

                        <Button
                          onClick={() =>
                            push({
                              name: '',
                              method: yieldTypes[0],
                            })
                          }
                          Icon={PlusIcon}
                          type="button"
                          variant="secondary"
                        >
                          Add new yield from student
                        </Button>
                      </div>
                      <YieldTypesDescription />
                      <div className="space-y-8">
                        <AnimatePresence>
                          {(values?.yields || []).map((data, idx) => (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              key={idx}
                              variants={{
                                hidden: { height: 0, overflow: 'hidden' },
                                visible: {
                                  height: 'auto',
                                  overflow: 'visible',
                                },
                              }}
                              transition={{ duration: 0.275 }}
                            >
                              <YieldInput
                                index={idx}
                                key={idx}
                                baseName={`yields.${idx}`}
                                yieldTypes={yieldTypes}
                                remove={() => remove(idx)}
                              />
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </>
                  )}
                </FieldArray>
                <Button
                  disabled={!isValid || isValidating}
                  type="submit"
                  className="mt-5"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </CardBox>
      </Loader>
    </>
  );
};

TpNew.getLayout = getLayoutRoleTeacher;

export default TpNew;
