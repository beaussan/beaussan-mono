import { useHasuraClaimsFromSession } from './useHasuraClaimsFromSession';

export function useRoles():
  | { loading: true }
  | {
      loading: false;
      roles: string[];
    } {
  const session = useHasuraClaimsFromSession();

  if (session.loading) {
    return {
      loading: true,
    };
  }

  const claims = session.claims;

  const roles = claims?.['x-hasura-allowed-roles'] ?? [];

  return {
    loading: false,
    roles,
  };
}
