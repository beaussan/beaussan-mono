import {
  Roles_Enum,
  Student_Constraint,
  Student_Insert_Input,
  Student_To_Course_Insert_Input,
  Student_Update_Column,
} from '../generated/graphql';
import { parse } from 'papaparse';
import * as yup from 'yup';

type PartialStudent = Required<
  Pick<Student_Insert_Input, 'first_name' | 'last_name' | 'email' | 'user'>
>;

export const parseCsv = (data: string): PartialStudent[] => {
  return parse<string[]>(data)
    .data.filter((value) => value.length >= 3)
    .map(
      ([first_name, last_name, email]): PartialStudent => ({
        first_name,
        last_name,
        email,
        user: {
          data: {
            email,
            allowed_roles: {
              data: [
                {
                  role: Roles_Enum.Student,
                },
              ],
            },
            default_role: Roles_Enum.Student,
          },
        },
      })
    );
};

export const mapToSave = (
  students: PartialStudent[]
): Student_To_Course_Insert_Input[] =>
  students.map((data) => ({
    student: {
      data,
      onConflict: {
        constraint: Student_Constraint.StudentEmailKey,
        updateColumns: [
          Student_Update_Column.FirstName,
          Student_Update_Column.LastName,
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
