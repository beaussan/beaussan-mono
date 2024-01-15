import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBookmarks } from './listBookmarks';
import { mockGetListOfBookmarksQuery } from './requests.generated';
import { formatHasuraDate } from '@beaussan/shared/utils/hasura-ts';
import {
  within,
  waitForElementToBeRemoved,
  userEvent,
} from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const Story: ComponentMeta<typeof ListBookmarks> = {
  component: ListBookmarks,
  title: 'ListBookmarks',
};
export default Story;

const Template: ComponentStory<typeof ListBookmarks> = (args) => (
  <ListBookmarks />
);

export const Empty = Template.bind({});

Empty.parameters = {
  msw: {
    handlers: [
      mockGetListOfBookmarksQuery((req, res, ctx) => {
        return res(ctx.data({ bookmarks: [], traefikRoutes: [] }));
      }),
    ],
  },
};
Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitForElementToBeRemoved(() => canvas.queryByText('Loading...'));

  await expect(canvas.getAllByRole('link')).toHaveLength(1);
};
Empty.args = {};

export const OneOfEach = Template.bind({});

OneOfEach.parameters = {
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
};

OneOfEach.args = {};

OneOfEach.play = async ({ canvasElement }) => {
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
};
export const ALotOfBookmarks = Template.bind({});

const manyBookmarksHandler = mockGetListOfBookmarksQuery((req, res, ctx) => {
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
  })

ALotOfBookmarks.parameters = {
  msw: {
    handlers: [
      manyBookmarksHandler
    ],
  },
};

ALotOfBookmarks.args = {};

ALotOfBookmarks.play = async ({ canvasElement }) => {
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
};

export const Playground = Template.bind({});


Playground.parameters = {
  msw: {
    handlers: [
      manyBookmarksHandler
    ],
  },
};
export const Errored = Template.bind({});

Errored.parameters = {
  msw: {
    handlers: [
      mockGetListOfBookmarksQuery((req, res, ctx) => {
        return res(ctx.errors([{ message: 'Something is not going good.' }]));
      }),
    ],
  },
};

Errored.args = {};

Errored.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitForElementToBeRemoved(() => canvas.queryByText('Loading...'));

  await expect(
    canvas.getByText('Something went wrong. Please try again')
  ).toBeInTheDocument();
};

export const Loading = Template.bind({});

Loading.parameters = {
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
};

Loading.args = {};

Loading.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Assert DOM structure
  await expect(canvas.getByText('Loading...')).toBeInTheDocument();
};
