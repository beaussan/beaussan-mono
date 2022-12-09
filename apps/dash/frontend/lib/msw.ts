import { setupServer } from 'msw/node';

export const server = setupServer();

server.listen({
  onUnhandledRequest: (req) => {
    console.error(
      'Found an unhandled %s request to %s',
      req.method,
      req.url.href
    );
  },
});
