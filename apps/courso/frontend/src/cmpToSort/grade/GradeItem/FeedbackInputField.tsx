import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FieldProps } from 'formik/dist/Field';
import gql from 'graphql-tag';
import { useFormikMutationSubmit } from '../../../hooks/useFormikMutationSubmit';
import { useInsertFeedbackForGradeMetricMutation } from '../../../generated/graphql';
import { Button } from '../../../components/Button';
import { Modal } from '../../../components/Modal';
import * as yup from 'yup';
import { Input } from '../../../components/Input';
import { PlusIcon } from '@heroicons/react/outline';

gql`
  mutation insertFeedbackForGradeMetric($id: uuid!, $feedback: jsonb!) {
    updatePracticeYieldGradeMetricByPk(
      pkColumns: { id: $id }
      _append: { feedbacks: $feedback }
    ) {
      feedbacks
      id
      name
      points
    }
  }
`;

export const FeedbackInputField: React.FC<{
  name: string;
  metricId: string;
  feedbacks: string[];
}> = ({ name, feedbacks, metricId }) => {
  const [, insertNewFeedback] = useInsertFeedbackForGradeMetricMutation();
  const [isModalOpen, setModalOpen] = useState(false);
  const onCloseModal = () => setModalOpen(false);
  const onSubmit = useFormikMutationSubmit({
    mutation: insertNewFeedback,
    successMessage: 'Successfully added',
    onSuccess: (data) => {
      data.resetForm();
      onCloseModal();
    },
    mapFormData: (values: { label: string }) => ({
      feedback: values.label,
      id: metricId,
    }),
  });

  return (
    <div>
      <div className="flex justify-between mb-4 items-center">
        <div
          id={`${name} label`}
          className="block text-sm font-semibold leading-5 text-gray-700 mb-1"
        >
          Feedbacks
        </div>
        <Button
          type="button"
          variant="secondary"
          Icon={PlusIcon}
          onClick={() => setModalOpen(true)}
        >
          Add new
        </Button>
      </div>
      <div
        role="group"
        aria-labelledby={`${name} label`}
        className="flex flex-col space-y-4"
      >
        {feedbacks.map((feedback, index) => (
          <label key={`${feedback}.${index}`}>
            <Field type="checkbox" name={name} value={feedback}>
              {({ field }: FieldProps<string>) => {
                return (
                  <div
                    className={`${
                      field.checked
                        ? 'bg-indigo-50 border-indigo-200 z-10'
                        : 'border-gray-200'
                    } relative border rounded-md px-4 py-2 flex`}
                  >
                    <div className="flex items-center h-5">
                      <input
                        id={`${name}.${index}-input`}
                        type="checkbox"
                        className="focus:ring-indigo-500 ring-white h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                        {...field}
                      />
                    </div>
                    <label
                      htmlFor={`${name}.${index}-input`}
                      className="ml-3 flex flex-col cursor-pointer"
                    >
                      <span
                        className={`${
                          field.checked ? 'text-indigo-900' : 'text-gray-900'
                        } block text-sm font-medium`}
                      >
                        {field.value}
                      </span>
                    </label>
                  </div>
                );
              }}
            </Field>
          </label>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <Formik
          initialValues={{
            label: '',
          }}
          validationSchema={yup.object().shape({
            label: yup.string().required(),
          })}
          onSubmit={onSubmit}
        >
          {({ isValid, isSubmitting, isValidating, values }) => {
            return (
              <Form>
                <Modal.Body icon="add" onClose={onCloseModal}>
                  <div>
                    <Modal.Title>Add feedback</Modal.Title>
                    <Input name="label" type="string" label="Feedback" />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Modal.ButtonWrapper>
                    <Button
                      variant="ghost"
                      type="button"
                      onClick={onCloseModal}
                    >
                      Cancel
                    </Button>
                  </Modal.ButtonWrapper>
                  <Modal.ButtonWrapper>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={(!isValid || isValidating) && !isSubmitting}
                    >
                      Create
                    </Button>
                  </Modal.ButtonWrapper>
                </Modal.Footer>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};
