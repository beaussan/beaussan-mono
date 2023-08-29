import { useToasts } from 'react-toast-notifications';
import { FormikHelpers } from 'formik';
import { OperationContext, OperationResult } from '@urql/core';
import { useRouter } from 'next/router';
import { AnyVariables } from 'urql';

interface UseFormikMutationSubmitType<
  TFormData,
  TData,
  TVariables extends AnyVariables = AnyVariables
> {
  mutation: (
    variables: TVariables,
    context?: Partial<OperationContext>
  ) => Promise<OperationResult<TData, TVariables>>;
  extraParamsMutation?: Partial<OperationContext>;
  mapFormData: (values: TFormData) => Promise<TVariables> | TVariables;
  onSuccess?: (formikHelpers: FormikHelpers<TFormData>) => any;
  successMessage?: string;
}

export function useFormikMutationSubmit<
  TFormData,
  TData,
  TVariables extends AnyVariables = AnyVariables
>({
  mutation,
  extraParamsMutation = {},
  mapFormData,
  successMessage,
  onSuccess,
}: UseFormikMutationSubmitType<TFormData, TData, TVariables>) {
  const { addToast } = useToasts();
  console.log('Init !');
  return async (values: TFormData, formikHelpers: FormikHelpers<TFormData>) => {
    console.log('async !');
    try {
      formikHelpers.setSubmitting(true);
      const dataForMutation = await mapFormData(values);

      const { error } = await mutation(dataForMutation, extraParamsMutation);
      if (error) {
        throw error;
      }
      if (successMessage) {
        addToast(successMessage, {
          appearance: 'success',
        });
      }
      if (onSuccess) {
        onSuccess(formikHelpers);
      }
    } catch (e) {
      console.error(e);
      addToast('An error occured, please try again latter', {
        appearance: 'error',
      });
    }
  };
}

interface UseFormikMutationSubmitWithNavigateType<
  TFormData,
  TData,
  TVariables extends AnyVariables = AnyVariables
> extends Omit<
    UseFormikMutationSubmitType<TFormData, TData, TVariables>,
    'onSuccess'
  > {
  navigateDestination?: string | null;
}

export function useFormikMutationSubmitWithNavigate<
  TFormData,
  TData,
  TVariables extends AnyVariables = AnyVariables
>({
  navigateDestination = '../',
  ...rest
}: UseFormikMutationSubmitWithNavigateType<TFormData, TData, TVariables>) {
  const router = useRouter();
  const onSuccess = () => {
    if (!!navigateDestination) {
      router.push(navigateDestination);
    }
  };

  return useFormikMutationSubmit({
    ...rest,
    onSuccess,
  });
}
