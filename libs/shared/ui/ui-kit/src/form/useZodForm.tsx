import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { FormProvider, useForm as useReactHookForm } from 'react-hook-form';
import { infer as zodInfer, Schema } from 'zod';
import { FormProps, UseZodFormProps } from './form.types';
import { DevTool } from '@hookform/devtools';

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
            data-non-regression="new-form-pattern"
          >
            {props.children}
          </form>
        </FormProvider>
      ),
    [methods]
  );

  return {
    methods,
    Form: BoundWrapper,
  };
};

export const SimpleForm = <FormSchema extends Schema>({
  children,
  ...props
}: FormProps<zodInfer<FormSchema>> &
  UseZodFormProps<zodInfer<FormSchema>, FormSchema>) => {
  const { Form, methods } = useZodForm<FormSchema>(props);
  return (
    <Form {...props}>
      {children}
      <DevTool control={methods.control} />
    </Form>
  );
};
