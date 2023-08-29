import { useListTpYieldTypesQuery } from '../generated/graphql';
import gql from 'graphql-tag';

gql`
  query listTpYieldTypes {
    practice_yield_type {
      name
    }
  }
`;

export const useFetchYieldTypes = () => {
  const [{ data: rawData, fetching, error }] = useListTpYieldTypesQuery();

  const data = rawData
    ? rawData.practice_yield_type.map(({ name }) => name)
    : [];

  return { data, rawData, loading: fetching, error };
};
