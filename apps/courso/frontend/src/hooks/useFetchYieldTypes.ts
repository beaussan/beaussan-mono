import { useListTpYieldTypesQuery } from '../generated/graphql';
import gql from 'graphql-tag';

gql`
  query listTpYieldTypes {
    practiceYieldType {
      name
    }
  }
`;

export const useFetchYieldTypes = () => {
  const [{ data: rawData, fetching, error }] = useListTpYieldTypesQuery();

  const data = rawData ? rawData.practiceYieldType.map(({ name }) => name) : [];

  return { data, rawData, loading: fetching, error };
};
