import { useHasuraClaimsFromSession } from './useHasuraClaimsFromSession';

export function useUserId():
  | { loading: true; userId: undefined }
  | {
      loading: false;
      userId: string;
    } {
  const session = useHasuraClaimsFromSession();

  if (session.loading) {
    return {
      loading: true,
      userId: undefined,
    };
  }

  const claims = session.claims;

  const userId = claims?.['x-hasura-user-id'] ?? '';

  return {
    loading: false,
    userId,
  };
}
