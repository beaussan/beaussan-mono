import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddBookmark } from './addBookmark';
import {
  mockGetListOfBookmarksQuery,
  mockInsertBookmarkMutation,
} from './requests.generated';
import { userEvent, within, screen } from '@storybook/testing-library';

const Story: ComponentMeta<typeof AddBookmark> = {
  component: AddBookmark,
  title: 'AddBookmark',
};
export default Story;

const handlerWith5Links = mockGetListOfBookmarksQuery((req, res, ctx) => {
  return res(
    ctx.data({
      bookmarks: Array.from({ length: 5 }, (x, i) => ({
        link: `https://example.com/${i}`,
        displayName: `Example ${i}`,
        position: i,
        id: `id-${i}`,
      })),
      traefikRoutes: [],
    })
  );
});

const successHandler = mockInsertBookmarkMutation((req, res, ctx) => {
  return res(
    ctx.data({
      insertBookmarksOne: {
        link: req.variables.object.link ?? '',
        displayName: req.variables.object.displayName ?? '',
        id: 'd79cccea-268a-41f3-8be2-ec3ce5225df8',
        position: 28281,
        userId: '258f6a0e-34f9-4581-abc8-fba94b3dae84',
        faviconUrl: req.variables.object.faviconUrl ?? '',
      },
    })
  );
});

const Template: ComponentStory<typeof AddBookmark> = () => <AddBookmark />;

export const OpenedModal = Template.bind({});
OpenedModal.parameters = {
  msw: {
    handlers: [handlerWith5Links, successHandler],
  },
};

OpenedModal.play = async (context) => {
  const canvas = within(context.canvasElement);

  await userEvent.click(canvas.getByRole('button'));
};

export const FormError = Template.bind({});
FormError.parameters = {
  msw: {
    handlers: [handlerWith5Links, successHandler],
  },
};

FormError.play = async (context) => {
  await OpenedModal.play?.(context);

  await screen.findByRole('dialog');

  const modal = within(screen.getByRole('dialog'));

  await modal.findByRole('button', {
    name: /submit/i,
  });

  await userEvent.click(modal.getByRole('button', { name: 'Submit' }));

  await modal.findByRole('alert', {
    name: /invalid url/i,
  });
  await modal.getByRole('alert', {
    name: /display name is required/i,
  });
};
