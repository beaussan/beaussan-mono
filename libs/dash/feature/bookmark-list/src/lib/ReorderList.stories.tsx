import type { Meta, StoryFn } from '@storybook/react';
import { ReorderList } from "./ReorderList"; // Adjust the import path as necessary
import { within, userEvent } from '@storybook/testing-library';
import {mockGetListOfBookmarksQuery} from "./requests.generated";
import {formatHasuraDate} from "@beaussan/shared/utils/hasura-ts";

export default {
  title: 'ReorderList',
  component: ReorderList,
} as Meta<typeof ReorderList>;

export const Default: StoryFn<typeof ReorderList> = () => <ReorderList />;

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const triggerButton = canvas.getByRole('button');
  await userEvent.click(triggerButton);
};

const manyBookmarksHandler = mockGetListOfBookmarksQuery((req, res, ctx) => {
  return res(
    ctx.data({
      bookmarks: Array.from({ length: 40 }, (x, i) => ({
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

Default.parameters = {
  msw: {
    handlers: [
      manyBookmarksHandler
    ],
  },
};
