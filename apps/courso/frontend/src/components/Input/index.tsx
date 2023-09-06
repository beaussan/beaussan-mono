import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import clsx from 'clsx';

type InputProps = FieldHookConfig<string> & {
  label: string;
};

interface RawInput extends Record<string, any> {
  disabled?: boolean;
  error?: string;
  label: string;
}

export const RawInput = ({ label, disabled, error, ...rest }: RawInput) => {
  return (
    <div
      className={clsx('relative group block w-full', {
        'pointer-events-none': disabled,
        'text-gray-500': disabled,
      })}
    >
      <div className="block">
        <label className="block text-sm font-semibold leading-5 text-gray-700 mb-1">
          {label}
        </label>
        <div
          className={clsx(
            'font-normal relative overflow-hidden rounded-lg border',
            {
              'bg-gray-500 text-gray-500': disabled,
              'text-black': !disabled,
              'group-hover:border-red-500  border-red-500': error,
              'group-hover:border-blue-500 border-gray-300': !error,
            }
          )}
        >
          {React.createElement('input', {
            className: clsx(
              'form-input border-none block w-full py-3 px-4 flex-1 outline-none placeholder-gray-500',
              {
                'bg-gray-100': disabled,
                'text-gray-500': disabled,
              }
            ),
            type: 'text',
            disabled,
            ...rest,
          })}
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
      </div>
      {error ? <div className="mt-2 text-sm text-red-600">{error}</div> : null}
    </div>
  );
};

const generateInput =
  (component: string): React.FC<InputProps> =>
  // eslint-disable-next-line react/display-name
  ({ label, className, ...rest }) => {
    const [field, meta] = useField(rest);
    const { disabled } = rest;

    const hasError = meta.touched && meta.error;

    return (
      <div
        className={clsx(
          'relative group block w-full',
          {
            'pointer-events-none': disabled,
            'text-gray-500': disabled,
          },
          className
        )}
      >
        <div className="block">
          <label className="block text-sm font-semibold leading-5 text-gray-700 mb-1">
            {label}
          </label>
          <div
            className={clsx(
              'font-normal relative overflow-hidden rounded-lg border',
              {
                'bg-gray-500 text-gray-500': disabled,
                'text-black': !disabled,
                'group-hover:border-red-500  border-red-500': hasError,
                'group-hover:border-blue-500 border-gray-300': !hasError,
              }
            )}
          >
            {React.createElement(component, {
              className: clsx(
                'form-input border-none block w-full py-3 px-4 flex-1 outline-none placeholder-gray-500',
                {
                  'bg-gray-100': disabled,
                  'text-gray-500': disabled,
                }
              ),
              type: 'text',
              disabled,
              ...rest,
              ...field,
            })}
            {hasError ? (
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
        </div>
        {hasError ? (
          <div className="mt-2 text-sm text-red-600">{meta.error}</div>
        ) : null}
      </div>
    );
  };

export const Input: React.FC<InputProps> = generateInput('input');
export const TextArea: React.FC<InputProps> = generateInput('textarea');
