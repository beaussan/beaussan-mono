import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './listBookmarks';
import { Dialog } from '@beaussan/shared/ui/ui-kit';
import { userEvent, within, screen } from '@storybook/testing-library';

export default {
  component: Link,
  title: 'Link',
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

const Template = (args: any) => (
  <Dialog.Root>
    <Link {...args} />
  </Dialog.Root>
);

export const Primary: Story = {
  render: Template,

  args: {
    item: {
      link: 'https://example.com',
      type: 'search',
      displayName: 'Google it!',
    },
  },
};

export const Editable: Story = {
  render: Template,

  args: {
    item: {
      id: 'aaa',
      link: 'https://example.com',
      type: 'bookmark',
      displayName: 'Google it!',
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.getByText(/google it!/i);
    await userEvent.pointer({ keys: '[MouseRight>]', target: linkElement });

    const editButton = await screen.findByRole('menuitem', {
      name: /modify/i,
    });

    await userEvent.click(editButton);
  },
};
