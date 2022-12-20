import { calculateUrl, traefikSyncDb } from './traefikSyncDb';
import { setupServer } from 'msw/node';
import {
  getTraefikRouterMswHandler,
  RouterApiDefinition,
} from '@beaussan/shared/data/traefik-read-api';
import {
  getSdk,
  mockSetAllDownNodesBasedOnLastUpdateMutationHasura,
  mockUpsertTraefikRoutesIntoDbMutationHasura,
} from '@beaussan/dash/data/backend-admin-sdk';
import { GraphQLClient } from 'graphql-request';

describe('calculateUrl', () => {
  it.each`
    rule                                                      | expected
    ${'Host(`something.dome.io`)'}                            | ${'https://something.dome.io'}
    ${'Host(`something.dome.io`) || Host(`else.dome.io`'}     | ${undefined}
    ${'Host(`other.dome.io`)'}                                | ${'https://other.dome.io'}
    ${'Host(`a.b.c.d.e.io`)'}                                 | ${'https://a.b.c.d.e.io'}
    ${'Host(`dash.dome.io`) && PathPrefix(`/`)'}              | ${'https://dash.dome.io'}
    ${'Host(`dash.dome.io`) && PathPrefix(`/`) && Something'} | ${undefined}
    ${'Host(`dash.dome.io`) && PathPrefix(`/`) || Something'} | ${undefined}
    ${'(Host(`dash.dome.io`) && PathPrefix(`/some/path`))'}   | ${undefined}
    ${'Host(`dash.dome.io`) || PathPrefix(`/some/path`)'}     | ${undefined}
    ${'PathPrefix(`/api`)'}                                   | ${undefined}
    ${'PathPrefix(`/metrics`)'}                               | ${undefined}
    ${'PathPrefix(`/`)'}                                      | ${undefined}
    ${'HostRegexp(`{host:.+}`)'}                              | ${undefined}
  `('should tranform $rule into $expected', ({ rule, expected }) => {
    expect(calculateUrl(rule)).toEqual(expected);
  });
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

describe('traefikSyncDb', () => {
  const server = setupServer();
  const traefikBaseUrl = 'http://localtraefik';
  const sdk = getSdk(new GraphQLClient('http://localhost:8090/v1/graphql'));

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('when the traefik fails', () => {
    it('should fail gracefully when the endpoint is 404', async () => {
      server.use(
        getTraefikRouterMswHandler(traefikBaseUrl, (req, res, context) =>
          res(context.status(404))
        )
      );

      await expect(traefikSyncDb(sdk, traefikBaseUrl)).resolves.toEqual({
        error: 'Request failed with status code 404',
        status: 'error',
      });
    });
    it('should fail gracefully when there is invalid data', async () => {
      server.use(
        getTraefikRouterMswHandler(traefikBaseUrl, (req, res, context) =>
          res(
            context.json([
              {
                rule: 'Host(`BBB.dome.io`)',
                service: 'BBB-service',
                provider: 'BBB',
                entryPoints: [],
                status: 'up',
                using: [],
              },
            ] as any)
          )
        )
      );

      await expect(traefikSyncDb(sdk, traefikBaseUrl)).resolves
        .toMatchInlineSnapshot(`
        Object {
          "error": "Validation error: Required at \\"[0].name\\"",
          "status": "error",
        }
      `);
    });
  });

  describe('when the traefik api works', () => {
    beforeEach(() => {
      server.use(
        getTraefikRouterMswHandler(traefikBaseUrl, (req, res, context) =>
          res(context.json(mockResult))
        )
      );
    });

    describe('when the graphql api fails', () => {
      it('should fail gracefully', async () => {
        server.use(
          mockUpsertTraefikRoutesIntoDbMutationHasura((req, res, context) =>
            res(context.errors(['Something is wrong']))
          )
        );

        await expect(traefikSyncDb(sdk, traefikBaseUrl)).resolves
          .toMatchInlineSnapshot(`
          Object {
            "error": "Something is wrong",
            "status": "error",
          }
        `);
      });
    });

    describe('when the graphql api is working', () => {
      const fakeTimerDate = new Date(2022, 3, 2, 12, 30, 20, 26);
      beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(fakeTimerDate);
      });

      afterEach(() => {
        jest.useRealTimers();
      });

      it('should cal the two api with the correct data', async () => {
        const upsertMock = jest.fn();
        const allNodeUpdateMock = jest.fn();
        server.use(
          mockUpsertTraefikRoutesIntoDbMutationHasura((req, res, context) => {
            upsertMock(req.variables);
            return res(
              context.data({ insertTraefikRoutes: { affected_rows: 2 } })
            );
          }),
          mockSetAllDownNodesBasedOnLastUpdateMutationHasura(
            (req, res, context) => {
              allNodeUpdateMock(req.variables);
              return res(
                context.data({ updateTraefikRoutes: { affected_rows: 1 } })
              );
            }
          )
        );

        await expect(traefikSyncDb(sdk, traefikBaseUrl)).resolves.toEqual({
          status: 'ok',
        });

        expect(upsertMock).toHaveBeenCalledWith({
          insertData: [
            {
              calculatedUrl: 'https://AAA.dome.io',
              isUp: true,
              lastSeenAlive: '2022-04-02T12:30:20+02:00',
              name: 'AAA',
              provider: 'AAA',
              rule: 'Host(`AAA.dome.io`)',
              service: 'AAA-service',
            },
            {
              calculatedUrl: 'https://BBB.dome.io',
              isUp: true,
              lastSeenAlive: '2022-04-02T12:30:20+02:00',
              name: 'BBB',
              provider: 'BBB',
              rule: 'Host(`BBB.dome.io`)',
              service: 'BBB-service',
            },
          ],
        });
        expect(allNodeUpdateMock).toHaveBeenCalledWith({
          update: '2022-04-02T12:30:20+02:00',
        });
      });
    });
  });
});
