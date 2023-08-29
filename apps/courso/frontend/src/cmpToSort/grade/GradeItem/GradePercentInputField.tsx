import { Field } from 'formik';
import React from 'react';
import { FieldProps } from 'formik/dist/Field';

export const GradePercentInputField: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <div>
      <div
        id={`${name} label`}
        className="block text-sm font-semibold leading-5 text-gray-700 mb-1"
      >
        Grade
      </div>
      <div
        role="group"
        aria-labelledby={`${name} label`}
        className="flex space-x-4"
      >
        {['0', '0.5', '1'].map((grade, index) => (
          <label className="flex-1" key={`${grade}.${index}`}>
            <Field type="radio" name={name} value={grade}>
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
                        type="radio"
                        className="focus:ring-indigo-500 ring-white h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                        {...field}
                        value={grade}
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
                        {+field.value * 100} %
                      </span>
                    </label>
                  </div>
                );
              }}
            </Field>
          </label>
        ))}
      </div>
    </div>
  );
};
