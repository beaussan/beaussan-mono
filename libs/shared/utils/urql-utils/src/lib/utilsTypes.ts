import { useQuery } from 'urql';

export type ReturnDataFromQuery<H extends (...args: unknown[]) => unknown> =
  ReturnType<H> extends ReturnType<typeof useQuery>
    ? Exclude<ReturnType<H>[0]['data'], undefined>
    : never;
