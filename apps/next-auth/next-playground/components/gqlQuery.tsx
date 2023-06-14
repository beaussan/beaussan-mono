import { gql, useQuery } from 'urql';

const TodosQuery = gql`
  query MyUserQuery {
    user {
      email
      defaultRole
      emailVerified
      id
      image
      name
    }
  }
`;

export const Todos = () => {
  const [result] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
