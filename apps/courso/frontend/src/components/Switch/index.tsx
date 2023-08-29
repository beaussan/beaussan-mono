import React from 'react';
import { Switch } from '@headlessui/react';
import { Field } from 'formik';
import { FieldProps } from 'formik/dist/Field';

export interface SwitchFieldProps {
  name: string;
  label: string;
}

export const SwitchField: React.FC<SwitchFieldProps> = ({ name, label }) => {
  return (
    <Field name={name}>
      {({
        field: { value },
        form: { setFieldValue },
        meta: { error, touched },
      }: FieldProps<boolean>) => (
        <Switch.Group>
          <Switch.Label>{label}</Switch.Label>
          <Switch
            checked={value}
            onChange={(newValue) => {
              setFieldValue(name, newValue);
            }}
            className={`${
              value ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 rounded-full w-8`}
          >
            <span
              className={`${
                value ? 'translate-x-4' : 'translate-x-0'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </Switch.Group>
      )}
    </Field>
  );
};
