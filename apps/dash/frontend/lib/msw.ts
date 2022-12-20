import { setupServer } from 'msw/node';
import {
  getTraefikRouterMswHandler,
  RouterApiDefinition,
} from '@beaussan/shared/data/traefik-read-api';

export const server = setupServer();

server.listen({
  onUnhandledRequest: (req) => {
    if (req.url.href.endsWith('recipe/jwt/jwks')) {
      return;
    }
    console.error(
      'Found an unhandled %s request to %s',
      req.method,
      req.url.href
    );
  },
});

const mockResult: RouterApiDefinition[] = [
  {
    name: 'AAA',
    rule: 'Host(`AAA.dome.io`)',
    service: 'AAA-service',
    provider: 'AAA',
    entryPoints: [],
    status: 'up',
    using: [],
  },
  {
    name: 'BBB',
    rule: 'Host(`BBB.dome.io`)',
    service: 'BBB-service',
    provider: 'BBB',
    entryPoints: [],
    status: 'up',
    using: [],
  },
];
console.log('TRAEFIK BASE URL', process.env.TRAEFIK_BASE_URL);

server.use(
  getTraefikRouterMswHandler(
    process.env.TRAEFIK_BASE_URL!,
    (req, res, context) => {
      console.log('MOCKING TRAEFIK ENDPOINT');
      return res(context.json(mockResult));
    }
  )
);
