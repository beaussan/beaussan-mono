import {
  RouterApiDefinition,
  routerApiDefinitionSchema,
} from './traefik.types';
import { setupServer } from 'msw/node';
import { generateMock } from '@anatine/zod-mock';
import { getTraefikRouters } from './traefikCalls';
import { getTraefikRouterMswHandler } from './testUtils';

const server = setupServer();

beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

const mockResult: RouterApiDefinition[] = [
  generateMock(routerApiDefinitionSchema),
  generateMock(routerApiDefinitionSchema),
  generateMock(routerApiDefinitionSchema),
];

describe('getTraefikRouters', () => {
  it('should return the content of the api when everything is going good', async () => {
    const basePath = 'http://localtraefik';
    server.use(
      getTraefikRouterMswHandler(basePath, (req, res, ctx) => {
        return res(ctx.json(mockResult));
      })
    );

    await expect(getTraefikRouters(basePath)).resolves.toEqual(mockResult);
  });
  it('should throw when there is a api error', async () => {
    const basePath = 'http://localtraefik';
    server.use(
      getTraefikRouterMswHandler(basePath, (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    await expect(getTraefikRouters(basePath)).rejects.toThrowError(
      'Request failed with status code 404'
    );
  });
  it('should throw when the response format is not matching the expected output', async () => {
    const basePath = 'http://localtraefik';
    server.use(
      getTraefikRouterMswHandler(basePath, (req, res, ctx) => {
        return res(ctx.json([{ data: 'false' }] as never));
      })
    );

    await expect(getTraefikRouters(basePath)).rejects
      .toThrowErrorMatchingInlineSnapshot(`
      "[
        {
          \\"code\\": \\"invalid_type\\",
          \\"expected\\": \\"array\\",
          \\"received\\": \\"undefined\\",
          \\"path\\": [
            0,
            \\"entryPoints\\"
          ],
          \\"message\\": \\"Required\\"
        },
        {
          \\"code\\": \\"invalid_type\\",
          \\"expected\\": \\"string\\",
          \\"received\\": \\"undefined\\",
          \\"path\\": [
            0,
            \\"service\\"
          ],
          \\"message\\": \\"Required\\"
        },
        {
          \\"code\\": \\"invalid_type\\",
          \\"expected\\": \\"string\\",
          \\"received\\": \\"undefined\\",
          \\"path\\": [
            0,
            \\"rule\\"
          ],
          \\"message\\": \\"Required\\"
        },
        {
          \\"code\\": \\"invalid_type\\",
          \\"expected\\": \\"string\\",
          \\"received\\": \\"undefined\\",
          \\"path\\": [
            0,
            \\"status\\"
          ],
          \\"message\\": \\"Required\\"
        },
        {
          \\"code\\": \\"invalid_type\\",
          \\"expected\\": \\"array\\",
          \\"received\\": \\"undefined\\",
          \\"path\\": [
            0,
            \\"using\\"
          ],
          \\"message\\": \\"Required\\"
        },
        {
          \\"code\\": \\"invalid_type\\",
          \\"expected\\": \\"string\\",
          \\"received\\": \\"undefined\\",
          \\"path\\": [
            0,
            \\"name\\"
          ],
          \\"message\\": \\"Required\\"
        },
        {
          \\"code\\": \\"invalid_type\\",
          \\"expected\\": \\"string\\",
          \\"received\\": \\"undefined\\",
          \\"path\\": [
            0,
            \\"provider\\"
          ],
          \\"message\\": \\"Required\\"
        }
      ]"
    `);
  });
});
