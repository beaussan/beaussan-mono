import { z } from 'zod';

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

export const webHookModel = z.object({
  created_at: z.string(),
  id: z.string().uuid(),
  trigger: z.object({
    name: z.string(),
  }),
  table: z.any(),
  event: z.object({
    session_variables: z.any(),
    op: z.enum(['INSERT', 'UPDATE', 'DELETE', 'MANUAL']),
    data: z.object({
      old: z.any().optional().nullable(),
      new: z.any().optional().nullable(),
    }),
  }),
});

export type handlerFn<F> = (data: WebhookPayload<F>) => Promise<any>;

export type HandlerMap = { [key: string]: handlerFn<any> };
