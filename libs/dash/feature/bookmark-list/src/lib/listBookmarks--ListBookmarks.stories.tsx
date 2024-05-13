import type { StoryFn, Meta, StoryObj } from '@storybook/react';
import { ListBookmarks } from './listBookmarks';
import { mockGetListOfBookmarksQuery } from './requests.generated';
import { formatHasuraDate } from '@beaussan/shared/utils/hasura-ts';
import {
  within,
  waitForElementToBeRemoved,
  userEvent,
} from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: ListBookmarks,
  title: 'ListBookmarks',
} satisfies Meta<typeof ListBookmarks>;

const Template: StoryFn<typeof ListBookmarks> = (args) => <ListBookmarks />;

export const Empty = {
  render: Template,

  parameters: {
    msw: {
      handlers: [
        mockGetListOfBookmarksQuery((req, res, ctx) => {
          return res(ctx.data({ bookmarks: [], traefikRoutes: [] }));
        }),
      ],
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitForElementToBeRemoved(() => canvas.queryByText('Loading...'));

    await expect(canvas.getAllByRole('link')).toHaveLength(1);
  },

  args: {},
} satisfies StoryObj<typeof ListBookmarks>;

export const OneOfEach = {
  render: Template,

  parameters: {
    msw: {
      handlers: [
        mockGetListOfBookmarksQuery((req, res, ctx) => {
          return res(
            ctx.data({
              bookmarks: [
                {
                  link: 'https://example.com',
                  displayName: 'Display name',
                  id: '303b56e5-dfb4-4b35-bcfa-ded584b022f4',
                  position: 1,
                },
              ],
              traefikRoutes: [
                {
                  link: 'https://example.com',
                  name: 'something@docker',
                  friendlyName: 'Nicer name',
                  lastSeenAlive: formatHasuraDate(new Date()),
                  isUp: true,
                },
              ],
            })
          );
        }),
      ],
    },
  },

  args: {},

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitForElementToBeRemoved(() => canvas.queryByText('Loading...'));

    await expect(canvas.getAllByRole('link')).toHaveLength(3);
    await expect(
      canvas.getByRole('link', { name: /favicon display name/i })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('link', { name: /favicon nicer name/i })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('link', { name: /favicon google it !/i })
    ).toBeInTheDocument();
  },
} satisfies StoryObj<typeof ListBookmarks>;

export const ALotOfBookmarks = {
  render: Template,

  parameters: {
    msw: {
      handlers: [
        mockGetListOfBookmarksQuery((req, res, ctx) => {
          return res(
            ctx.data({
              bookmarks: Array.from({ length: 20 }, (x, i) => ({
                link: `https://example.com/${i}`,
                displayName: `Example ${i}`,
                position: i,
                id: `id-${i}`,
              })),
              traefikRoutes: Array.from({ length: 20 }, (x, i) => ({
                link: `https://example.com/traefik/${i}`,
                name: 'something@docker',
                friendlyName: `Example Traefik ${i}`,
                lastSeenAlive: formatHasuraDate(new Date()),
                isUp: true,
              })),
            })
          );
        }),
      ],
    },
  },

  args: {},

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitForElementToBeRemoved(() => canvas.queryByText('Loading...'));

    await expect(canvas.getAllByRole('link')).toHaveLength(41);

    await userEvent.type(canvas.getByRole('textbox'), 'traefik');

    await expect(canvas.getAllByRole('link')).toHaveLength(21);

    await userEvent.clear(canvas.getByRole('textbox'));

    await expect(canvas.getAllByRole('link')).toHaveLength(41);

    await userEvent.type(canvas.getByRole('textbox'), '18');

    await expect(canvas.getAllByRole('link')).toHaveLength(3);

    await userEvent.clear(canvas.getByRole('textbox'));

    await userEvent.type(canvas.getByRole('textbox'), 'Too spesific to exist');

    await expect(canvas.getAllByRole('link')).toHaveLength(1);

    await userEvent.clear(canvas.getByRole('textbox'));
  },
} satisfies StoryObj<typeof ListBookmarks>;

export const Errored = {
  render: Template,

  parameters: {
    msw: {
      handlers: [
        mockGetListOfBookmarksQuery((req, res, ctx) => {
          return res(ctx.errors([{ message: 'Something is not going good.' }]));
        }),
      ],
    },
  },

  args: {},

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitForElementToBeRemoved(() => canvas.queryByText('Loading...'));

    await expect(
      canvas.getByText('Something went wrong. Please try again')
    ).toBeInTheDocument();
  },
} satisfies StoryObj<typeof ListBookmarks>;

export const Loading = {
  render: Template,

  parameters: {
    msw: {
      handlers: [
        mockGetListOfBookmarksQuery((req, res, ctx) => {
          return res(
            ctx.delay(5000),
            ctx.data({ bookmarks: [], traefikRoutes: [] })
          );
        }),
      ],
    },
  },

  args: {},

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    await expect(canvas.getByText('Loading...')).toBeInTheDocument();
  },
} satisfies StoryObj<typeof ListBookmarks>;
