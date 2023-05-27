import { setupServer } from 'msw/node';

export const server = setupServer();

server.listen({
  onUnhandledRequest: (req) => {
    if (req.url.href.endsWith('recipe/jwt/jwks')) {
      return;
    }
    if (req.url.href === 'http://localhost:3567/apiversion') {
      return;
    }
    if (req.url.href === 'http://localhost:3567/telemetry') {
      return;
    }
    if (req.url.href === 'http://localhost:8090/v1/graphql') {
      return;
    }
    console.error(
      'Found an unhandled %s request to %s',
      req.method,
      req.url.href
    );
  },
});

/*
server.use(
  getTraefikRouterMswHandler(env.TRAEFIK_BASE_URL, (req, res, context) => {
    console.log('MOCKING TRAEFIK ENDPOINT');
    return res(context.json(mockResult));
  })
);
 */
