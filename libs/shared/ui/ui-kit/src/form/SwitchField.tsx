import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import {
  FieldPath,
  useFormContext,
  FieldValues,
  Controller,
} from 'react-hook-form';
import * as Switch from '@radix-ui/react-switch';
import clsx from 'clsx';

export type SwitchFieldProps = FieldWrapperPassThroughProps & {
  /**
   * The input field name
   */
  name: FieldPath<FieldValues>;
  /**
   * Flag to indicate if the field is disabled
   */
  disabled?: boolean;
};

export const SwitchField = ({ name, disabled, ...rest }: SwitchFieldProps) => {
  const { getFieldState, control } = useFormContext();

  const { error } = getFieldState(name);

  return (
    <Controller
      control={control}
      render={({ field }) => {
        return (
          <FieldWrapper id={name} {...rest} error={error}>
            <Switch.Root
              className={clsx(
                field.value ? 'bg-violet-600' : 'bg-gray-200',
                disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer',
                'relative inline-flex shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'
              )}
              checked={field.value}
              ref={field.ref}
              onCheckedChange={(event) => {
                field.onChange(event);
                field.onBlur();
              }}
            >
              <Switch.Thumb
                className={clsx(
                  field.value ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
              />
            </Switch.Root>
          </FieldWrapper>
        );
      }}
      name={name}
    />
  );
};
