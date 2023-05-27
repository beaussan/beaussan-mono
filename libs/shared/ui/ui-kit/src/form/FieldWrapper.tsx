import * as React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { HiExclamationCircle } from 'react-icons/hi';

type FieldWrapperProps = {
  id: string;
  /**
   * The field name
   */
  name: string;
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
   * The field description
   */
  description?: React.ReactNode;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children' | 'id'
>;

export const useFormField = <P extends FieldWrapperPassThroughProps>(
  props: P
): {
  formFieldProps: Omit<FieldWrapperProps, 'children' | 'className'>;
  childProps: Omit<
    P,
    'name' | 'labelIcon' | 'label' | 'size' | 'description'
  > & {
    id: string;
    name: string;
    size?: 'full' | 'medium';
  };
} => {
  const { label, name, size, labelIcon, description, ...otherProps } = props;
  const id = name;

  return {
    formFieldProps: {
      id,
      name,
      label,
      size,
      labelIcon,
      description,
    },
    childProps: { ...otherProps, id, name, size },
  };
};

export const ErrorComponentTemplate = ({ name }: { name: string }) => {
  const ctx = useFormContext();
  const state = ctx.getFieldState(name);
  const label = state.error?.message;
  console.log({ state, label });
  if (!label) {
    /* A &nbsp; character is displayed even if there is no error to
            book some space for the error message. It prevents other fields to
            be pushed down when an error is displayed. */
    return (
      <div className="text-red-600 flex items-center text-sm mt-1">&nbsp;</div>
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

const Label = ({
  label,
  labelIcon,
  description,
  id,
}: Pick<FieldWrapperProps, 'label' | 'id' | 'labelIcon' | 'description'>) => {
  if (!label) {
    return null;
  }
  return (
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
  );
};

export const FieldWrapper = ({
  id,
  labelIcon,
  label,
  className,
  size = 'full',
  children,
  description,
  name,
}: FieldWrapperProps) => {
  return (
    <div
      className={clsx(
        className,
        size === 'medium' ? 'w-1/2' : 'w-full',
        size === 'full' ? '' : 'max-w-xl'
      )}
    >
      <Label
        label={label}
        id={id}
        labelIcon={labelIcon}
        description={description}
      />
      <div>
        <div>{children}</div>
        <ErrorComponentTemplate name={name} />
      </div>
    </div>
  );
};
