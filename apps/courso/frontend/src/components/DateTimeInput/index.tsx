import React, { useEffect } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enGB } from 'date-fns/locale';
import { Field, useFormikContext } from 'formik';
import { FieldProps } from 'formik/dist/Field';
import { addMinutes, isBefore } from 'date-fns';
import clsx from 'clsx';
import { CalendarIcon } from '@heroicons/react/outline';

// TODO readonly, if it's there to handle
const ExampleCustomInput: React.FC<{
  value?: string;
  onClick?: any;
  label: string;
  error?: string | boolean;
  id: string;
}> = ({ value, onClick, error, id, label, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-5 text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <button
          id={id}
          className={clsx(
            'cursor-default relative w-full rounded-md cursor-pointer border border-gray-300 bg-white pl-3 pr-10 py-3 text-left focus:outline-none focus:ring-blue focus:border-blue-300 transition ease-in-out duration-150',
            'cursor-default relative w-full rounded-md cursor-pointer border border-gray-300 bg-white pl-3 pr-10 py-3 text-left focus:outline-none focus:ring-blue focus:border-blue-300 transition ease-in-out duration-150',
            {
              'group-hover:border-red-500  border-red-500': error,
              'group-hover:border-blue-500 border-gray-300': !error,
            },
          )}
          onClick={onClick}
          type="button"
        >
          {value}
        </button>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <CalendarIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      {error ? (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export interface DateTimeInputFieldProps
  extends Omit<
    ReactDatePickerProps,
    | 'customInput'
    | 'locale'
    | 'dateFormat'
    | 'showTimeInput'
    | 'selected'
    | 'onChange'
  > {
  name: string;
  label: string;
}

export const DateTimeInputField: React.FC<DateTimeInputFieldProps> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({
        field: { value },
        form: { setFieldValue },
        meta: { error, touched },
      }: FieldProps<Date | null>) => (
        <DatePicker
          selected={value}
          onChange={(date) => {
            if (Array.isArray(date)) {
              return;
            }
            setFieldValue(name, date);
          }}
          customInput={
            <ExampleCustomInput
              label={label}
              id={name}
              error={touched && error}
            />
          }
          portalId="date-picker-container"
          showTimeSelect
          locale={enGB}
          dateFormat="dd/MM/yyyy HH:mm"
          {...rest}
        />
      )}
    </Field>
  );
};
export interface DateTimeInputRangeFieldProps {
  nameStart: string;
  nameEnd: string;
  labelStart: string;
  labelEnd: string;
  minDate?: Date;
}

export const DateTimeInputRangeField: React.FC<DateTimeInputRangeFieldProps> = ({
  nameStart,
  labelStart,
  nameEnd,
  labelEnd,
  minDate,
}) => {
  const { setFieldValue, getFieldProps } = useFormikContext<any>();
  const { value: startDate } = getFieldProps(nameStart);
  const { value: endDate } = getFieldProps(nameEnd);

  useEffect(() => {
    if (isBefore(endDate, addMinutes(startDate, 29))) {
      setFieldValue(nameEnd, addMinutes(startDate, 30));
    }
  }, [startDate, endDate, setFieldValue, nameEnd]);
  return (
    <div className="flex justify-between content-between space-x-4">
      <DateTimeInputField
        name={nameStart}
        label={labelStart}
        selectsStart
        minDate={minDate}
        startDate={startDate}
        endDate={endDate}
      />
      <DateTimeInputField
        name={nameEnd}
        label={labelEnd}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={addMinutes(startDate, 30)}
      />
    </div>
  );
};
