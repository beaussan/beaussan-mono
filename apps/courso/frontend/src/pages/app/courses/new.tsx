import gql from 'graphql-tag';
import { useCreateCourseMutation } from '../../../generated/graphql';
import { PageHead } from '../../../components/PageHead';
import { BackButton } from '../../../components/BackButton';
import { Form, Formik } from 'formik';
import { Input, TextArea } from '../../../components/Input';
import { Button } from '../../../components/Button';
import React from 'react';
import { CardBox } from '../../../components/CardBox';
import { useFormikMutationSubmitWithNavigate } from '../../../hooks/useFormikMutationSubmit';
import { getLayoutRoleTeacher } from '../../../layouts/WithRole';
import { ValidationError } from 'yup';
import {
  mapToSave,
  parseCsv,
  studentValidator,
} from '../../../cmpToSort/validation';

gql`
  mutation CreateCourse(
    $name: String!
    $years: String!
    $students: [student_to_course_insert_input!]!
  ) {
    insert_course_one(
      object: {
        name: $name
        years: $years
        student_to_courses: { data: $students }
      }
    ) {
      created_at
      id
    }
  }
`;

interface NewPromo {
  name: string;
  year: string;
  csv: string;
}

const validateData = async (values: Partial<NewPromo>) => {
  const errors: Partial<NewPromo> = {};
  if (!values.name) {
    errors.name = 'Name must be set.';
  }
  if (!values.year) {
    errors.year = 'Year must be set';
  }
  if (!values.csv) {
    errors.csv = 'Csv is not defined !';
  } else {
    const parsedData = parseCsv(values.csv);
    try {
      await studentValidator.validate(parsedData);
    } catch (e) {
      console.error(e);
      if (e instanceof ValidationError) {
        errors.csv = e.message;
      }
    }
  }

  return errors;
};

export const CourseNew = () => {
  const [, createPromo] = useCreateCourseMutation();
  const onSubmit = useFormikMutationSubmitWithNavigate({
    mapFormData: (values: NewPromo) => {
      return {
        name: values.name,
        years: values.year,
        students: mapToSave(parseCsv(values.csv)),
      };
    },
    successMessage: 'Promotion added successfully',
    mutation: createPromo,
  });
  const initialData: NewPromo = {
    csv: '',
    year: '',
    name: '',
  };

  return (
    <>
      <PageHead className="">
        <div className="flex items-center">
          <BackButton className="mr-2" /> New course
        </div>
      </PageHead>
      <CardBox>
        <Formik
          initialValues={initialData}
          validate={validateData}
          onSubmit={onSubmit}
        >
          {({ isValid, isValidating }) => (
            <Form className="flex flex-col">
              <div className="text-xl font-bold pt-2 pb-4">Course details</div>
              <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <Input label="Name" type="text" name="name" />
                <Input label="Years" type="text" name="year" />
              </div>
              <div className="text-xl font-bold pt-6 pb-4">Students</div>
              <div className="rounded-lg bg-yellow-50 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm leading-5 font-medium text-yellow-800">
                      We only support csv for now
                    </h3>
                    <div className="mt-2 text-sm leading-5 text-yellow-700">
                      <p>
                        It excepts the following format :
                        <br />
                        firstName,lastName,email It can have extra data, as long
                        as the three are correct.
                        <br />
                        You can use a Icampus export of an exam to fill the data
                        easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <TextArea
                className="mb-4"
                label="Student as a csv"
                type="text"
                name="csv"
                rows={5}
              />
              <Button disabled={!isValid || isValidating} type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardBox>
    </>
  );
};

CourseNew.getLayout = getLayoutRoleTeacher;

export default CourseNew;
