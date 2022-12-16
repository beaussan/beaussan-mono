import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBookmarks } from './listBookmarks';

const Story: ComponentMeta<typeof ListBookmarks> = {
  component: ListBookmarks,
  title: 'ListBookmarks',
};
export default Story;

const Template: ComponentStory<typeof ListBookmarks> = (args) => (
  <ListBookmarks {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
