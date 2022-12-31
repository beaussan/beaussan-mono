import React from 'react';
import { FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

// hook props:
export type UseZodFormProps<
  TFieldValues extends FieldValues,
  TSchema extends ZodType<TFieldValues, ZodTypeDef, TFieldValues>
> = {
  /**
   * The form options
   */
  options?: UseFormProps<TFieldValues>;
  /**
   * The form validation schema
   */
  schema: TSchema;
};

export type FormProps<TFieldValues extends FieldValues> = {
  /**
   * Classes to apply to the wrapped <form> element
   */
  className?: string;
  /**
   * On submit handler
   */
  onSubmit: SubmitHandler<TFieldValues>;
  /**
   * The component children
   * @param methods
   */
  children: React.ReactNode;
  /**
   * The form options
   */
  options?: UseFormProps<TFieldValues>;
  /**
   * The form ID
   */
  id?: string;
};
