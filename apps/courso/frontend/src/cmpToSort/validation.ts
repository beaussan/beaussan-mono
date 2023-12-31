import {
  RolesEnum,
  StudentConstraint,
  StudentInsertInput,
  StudentToCourseInsertInput,
  StudentUpdateColumn,
} from '../generated/graphql';
import { parse } from 'papaparse';
import { z } from 'zod';

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

export const studentValidator = z
  .array(
    z.object({
      first_name: z.string().nonempty(),
      last_name: z.string().nonempty(),
      email: z.string().email(),
    })
  )
  .min(1);
