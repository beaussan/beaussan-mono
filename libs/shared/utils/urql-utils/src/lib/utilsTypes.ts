import { useQuery } from 'urql';

export type ReturnDataFromQuery<H extends (...args: any) => any> =
  ReturnType<H> extends ReturnType<typeof useQuery>
    ? Exclude<ReturnType<H>[0]['data'], undefined>
    : never;
