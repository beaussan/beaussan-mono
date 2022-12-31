import clsx from 'clsx';
import get from 'lodash.get';
import React, { ReactElement } from 'react';
import {
  FieldError,
  FieldPath,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import { BsXCircleFill } from 'react-icons/bs';
import { z, ZodType, ZodTypeDef } from 'zod';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { cva } from 'cva';
import { FieldValues } from 'react-hook-form/dist/types/fields';

// putting this into a standalone component so `useWatch` won't have to run even if ClearButton is not enabled.
const ClearButton: React.FC<{ fieldName: string; className: string }> = ({
  fieldName,
  className,
}) => {
  // typing this as such as we know that it's string:string for this particular case
  const { setValue } = useFormContext<Record<string, string>>();

  // watch the value so we can decide if the clear button should be enabled.
  const value = useWatch<Record<string, string>>({ name: fieldName });

  if (!value) return null;

  return (
    <button
      className={clsx(
        'border-0 bg-transparent bg-none shadow-none active:opacity-75 pointer-events-auto',
        className
      )}
      onClick={() => setValue(fieldName, '')}
    >
      <BsXCircleFill className="w-4 h-4 cursor-pointer mr-0 text-gray-300 fill-current hover:text-gray-400" />
      <span className="sr-only">Clear input</span>
    </button>
  );
};

export type InputFieldProps = FieldWrapperPassThroughProps & {
  /**
   * The input field name
   */
  name: FieldPath<FieldValues>;
  /**
   * The input field type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'file';
  /**
   * The input field classes
   */
  className?: string;
  /**
   * The input field icon
   */
  icon?: ReactElement;
  /**
   * The input field icon position
   */
  iconPosition?: 'start' | 'end';
  /**
   * The input field placeholder
   */
  placeholder?: string;
  /**
   * Flag to indicate if the field is disabled
   */
  disabled?: boolean;
  /**
   * Renders a button to clear the input onClick
   */
  clearButton?: boolean;
};

const inputClasses = cva(
  'block w-full shadow-sm rounded border border-gray-300 hover:border-gray-400 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-violet-200 focus-visible:border-violet-400 placeholder-gray-500',
  {
    variants: {
      error: {
        true: 'border-red-600 hover:border-red-700',
        false: 'border-gray-300',
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-200 border-gray-200 hover:border-gray-200',
        false: 'hover:border-gray-400',
      },
      iconPosition: {
        start: 'pl-10',
        end: 'pr-10',
      },
      inputType: {
        file: 'h-auto',
        text: '',
        email: '',
        number: '',
        password: '',
      },
    },
    defaultVariants: {
      disabled: false,
      error: false,
    },
  }
);

export const InputField = ({
  type = 'text',
  name,
  icon,
  iconPosition = 'start',
  placeholder,
  disabled,
  dataTest,
  clearButton,
  ...wrapperProps
}: InputFieldProps) => {
  const { register, getFieldState } = useFormContext();

  const { error } = getFieldState(name);

  const { onChange, ...regReturn } = register(name);
  const showInputEndContainer = clearButton || (iconPosition === 'end' && icon);

  return (
    <FieldWrapper id={name} {...wrapperProps} error={error}>
      <div className="flex">
        <div className="flex relative w-full">
          {iconPosition === 'start' && icon ? (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {React.cloneElement(icon, {
                className: 'h-5 w-5 text-gray-400',
              })}
            </div>
          ) : null}
          <input
            id={name}
            type={type}
            aria-invalid={error ? 'true' : 'false'}
            aria-label={wrapperProps.label}
            data-test={dataTest}
            className={inputClasses({
              disabled: disabled,
              iconPosition: icon ? iconPosition : null,
              error: !!error,
              inputType: type,
            })}
            placeholder={placeholder}
            {...regReturn}
            onChange={onChange}
            disabled={disabled}
            data-testid={name}
          />
          {showInputEndContainer && (
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
              {clearButton && (
                <ClearButton
                  fieldName={name}
                  className={clsx(
                    'px-4',
                    iconPosition === 'end' && icon && '-mr-2'
                  )}
                />
              )}

              {iconPosition === 'end' && icon ? (
                <div className={clsx('pr-3 pointer-events-none')}>
                  {React.cloneElement(icon, {
                    className: 'h-5 text-gray-400',
                  })}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </FieldWrapper>
  );
};
