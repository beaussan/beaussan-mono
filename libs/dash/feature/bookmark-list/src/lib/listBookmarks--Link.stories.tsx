import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './listBookmarks';
import { Dialog } from '@beaussan/shared/ui/ui-kit';

const Story: ComponentMeta<typeof Link> = {
  component: Link,
  title: 'Link',
};
export default Story;

const Template: ComponentStory<typeof Link> = (args) =>
  <Dialog.Root><Link {...args} /></Dialog.Root>;

export const Primary = Template.bind({});
Primary.args = {
  item: {
    link: 'https://example.com',
    type: 'search',
    displayName: 'Google it!',
  },
};
