import { useQuery } from 'urql';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ReturnDataFromQuery<H extends (...args: any) => any> =
  ReturnType<H> extends ReturnType<typeof useQuery>
    ? Exclude<ReturnType<H>[0]['data'], undefined>
    : never;
