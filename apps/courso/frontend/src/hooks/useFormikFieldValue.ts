import { useFormikContext } from 'formik';

export function useFormikFieldValue<T = string>(name: string): T {
  const { getFieldProps } = useFormikContext<any>();
  const { value } = getFieldProps<T>(name);

  return value;
}
