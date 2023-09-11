import {
  RolesEnum,
  StudentConstraint,
  StudentInsertInput,
  StudentToCourseInsertInput,
  StudentUpdateColumn,
} from '../generated/graphql';
import { parse } from 'papaparse';
import * as yup from 'yup';

type PartialStudent = Required<
  Pick<StudentInsertInput, 'firstName' | 'lastName' | 'email' | 'user'>
>;

export const parseCsv = (data: string): PartialStudent[] => {
  return parse<string[]>(data)
    .data.filter((value) => value.length >= 3)
    .map(
      ([first_name, last_name, email]): PartialStudent => ({
        firstName: first_name,
        lastName: last_name,
        email,
        user: {
          data: {
            email,
            allowedRoles: {
              data: [
                {
                  role: RolesEnum.Student,
                },
              ],
            },
            defaultRole: RolesEnum.Student,
          },
        },
      })
    );
};

export const mapToSave = (
  students: PartialStudent[]
): StudentToCourseInsertInput[] =>
  students.map((data) => ({
    student: {
      data,
      onConflict: {
        constraint: StudentConstraint.StudentEmailKey,
        updateColumns: [
          StudentUpdateColumn.FirstName,
          StudentUpdateColumn.LastName,
        ],
      },
    },
  }));

export const studentValidator = yup
  .array(
    yup
      .object()
      .shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().email().required(),
      })
      .required()
  )
  .required('No student found')
  .min(1);
