import { ResponseResolver, rest, RestContext, RestRequest } from 'msw';
import { RouterApiDefinition } from './traefik.types';

export function getTraefikRouterMswHandler(
  basePath: string,
  resolver: ResponseResolver<
    RestRequest<null, never>,
    RestContext,
    RouterApiDefinition[]
  >
) {
  return rest.get<null, never, RouterApiDefinition[]>(
    `${basePath}/api/http/routers`,
    resolver
  );
}
