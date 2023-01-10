import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { FormProvider, useForm as useReactHookForm } from 'react-hook-form';
import { infer as zodInfer, Schema } from 'zod';
import { FormProps, UseZodFormProps } from './form.types';
import { DevTool } from '@hookform/devtools';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { UseFormReturn } from 'react-hook-form/dist/types/form';
import { FieldPath } from 'react-hook-form/dist/types/path';

type ExtendedUseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = UseFormReturn<TFieldValues, TContext> & {
  name: <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
    name: TFieldName
  ) => { name: TFieldName };
};
export const useZodForm = <FormSchema extends Schema>(
  hookProps: UseZodFormProps<zodInfer<FormSchema>, FormSchema>
) => {
  const { options = {}, schema } = hookProps;

  const methods = useReactHookForm<zodInfer<FormSchema>>({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  const BoundWrapper = React.useMemo(
    () => (props: FormProps<zodInfer<typeof schema>>) =>
      (
        <FormProvider {...methods}>
          <form
            id={props.id}
            className={props.className}
            onSubmit={methods.handleSubmit(props.onSubmit)}
          >
            {/* <fieldset> passes the form's 'disabled' state to all of its elements,
            allowing us to handle disabled style variants with just css */}
            <fieldset disabled={methods.formState.isSubmitting}>
              {props.children}
            </fieldset>
          </form>
          <DevTool control={methods.control} />
        </FormProvider>
      ),
    [methods]
  );

  const newMethods: ExtendedUseFormReturn<zodInfer<FormSchema>> = {
    ...methods,
    name: (name) => ({ name: methods.register(name).name }),
  };

  return {
    methods: newMethods,
    Form: BoundWrapper,
  };
};
