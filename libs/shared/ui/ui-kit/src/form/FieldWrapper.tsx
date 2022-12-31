import * as React from 'react';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';
import { HiExclamationCircle } from 'react-icons/hi';

type FieldWrapperProps = {
  /**
   * The field ID
   */
  id?: string;
  /**
   * The field label icon
   */
  labelIcon?: React.ReactElement;
  /**
   * The field label
   */
  label?: string;
  /**
   * The field class
   */
  className?: string;
  /**
   * The field size (full: the full width of the container , medium: half the
   * width of the container)
   */
  size?: 'full' | 'medium';
  /**
   * The field children
   */
  children: React.ReactNode;
  /**
   * The field error
   */
  error?: FieldError | undefined;
  /**
   * The field description
   */
  description?: React.ReactNode;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children' | 'error'
>;

export const ErrorComponentTemplate = ({ label }: { label?: string }) => {
  if (!label) {
    /* A &nbsp; character is displayed even if there is no error to
            book some space for the error message. It prevents other fields to
            be pushed down when an error is displayed. */
    return (
      <div className="text-red-600 flex items-center text-sm mt-1">
        <>&nbsp;</>
      </div>
    );
  }

  return (
    <div
      role="alert"
      aria-label={label}
      className="text-red-600 flex items-center text-sm mt-1"
    >
      <HiExclamationCircle className="fill-current h-4 w-4 mr-2" />
      <span className="flex items-center">{label}</span>
    </div>
  );
};

export const FieldWrapper = (props: FieldWrapperProps) => {
  const {
    id,
    labelIcon,
    label,
    className,
    size = 'full',
    error,
    children,
    description,
  } = props;

  return (
    <div
      className={clsx(
        className,
        size === 'medium' ? 'w-1/2' : 'w-full',
        size === 'full' ? '' : 'max-w-xl'
      )}
    >
      {label ? (
        <label htmlFor={id} className={clsx('block pt-1 text-gray-600 mb-xs')}>
          <span className={clsx('flex items-center font-semibold')}>
            <span>
              {labelIcon
                ? React.cloneElement(labelIcon, {
                    className: 'h-4 w-4 mr-xs',
                  })
                : null}
              {label}
            </span>
          </span>
          {description ? (
            <span className={clsx('text-gray-600 mb-xs font-normal text-sm ')}>
              <span>{description}</span>
            </span>
          ) : null}
        </label>
      ) : null}
      <div>
        <div>{children}</div>
        <ErrorComponentTemplate label={error?.message} />
      </div>
    </div>
  );
};
