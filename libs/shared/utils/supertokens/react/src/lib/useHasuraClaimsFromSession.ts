import { useSessionContext } from 'supertokens-auth-react/recipe/session';

interface HasuraClaims {
  'x-hasura-user-id'?: string;
  'x-hasura-default-role'?: string;
  'x-hasura-allowed-roles'?: [string];
}

interface SuperTokensClaimsWithHasura {
  jwt?: string;
  'https://hasura.io/jwt/claims'?: HasuraClaims;
}

export function useHasuraClaimsFromSession():
  | { loading: true }
  | {
      loading: false;
      isHasuraClaimPresent: false;
      claims: undefined;
    }
  | {
      loading: false;
      isHasuraClaimPresent: true;
      claims: HasuraClaims;
    } {
  const session = useSessionContext();

  if (session.loading || !session.accessTokenPayload) {
    return {
      loading: true,
    };
  }

  const claims = session.accessTokenPayload as SuperTokensClaimsWithHasura;

  if (claims['https://hasura.io/jwt/claims']) {
    return {
      loading: false,
      isHasuraClaimPresent: true,
      claims: claims['https://hasura.io/jwt/claims'],
    };
  }
  return { loading: false, isHasuraClaimPresent: false, claims: undefined };
}
