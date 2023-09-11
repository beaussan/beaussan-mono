import * as yup from 'yup';

export interface WebhookPayload<T> {
  created_at: string;
  id: string;
  trigger: {
    name: string;
  };
  table: {
    schema: string;
    name: string;
  };
  event: {
    session_variables: object;
    op: 'INSERT' | 'UPDATE' | 'DELETE' | 'MANUAL';
    data: {
      old: T | null;
      new: T | null;
    };
  };
}

export const webHookModel = yup
  .object()
  .shape({
    created_at: yup.string().required(),
    id: yup.string().uuid().required(),
    trigger: yup
      .object()
      .shape({
        name: yup.string().required(),
      })
      .required(),
    table: yup.object().required(),
    event: yup
      .object()
      .shape({
        session_variables: yup.object().required(),
        op: yup
          .string()
          .oneOf(['INSERT', 'UPDATE', 'DELETE', 'MANUAL'])
          .required(),
        data: yup
          .object()
          .shape({
            old: yup.object().optional().nullable(),
            new: yup.object().optional().nullable(),
          })
          .required(),
      })
      .required(),
  })
  .required();

export type handlerFn<F> = (data: WebhookPayload<F>) => Promise<any>;

export type HandlerMap = { [key: string]: handlerFn<any> };
