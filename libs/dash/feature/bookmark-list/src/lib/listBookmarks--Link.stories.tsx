import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './listBookmarks';

const Story: ComponentMeta<typeof Link> = {
  component: Link,
  title: 'Link',
};
export default Story;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
