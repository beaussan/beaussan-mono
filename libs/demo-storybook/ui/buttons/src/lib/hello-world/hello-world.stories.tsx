import type { StoryFn, Meta } from '@storybook/react';
import { HelloWorld } from './hello-world';

const Story: Meta<typeof HelloWorld> = {
  component: HelloWorld,
  title: 'HelloWorld',
};
export default Story;

const Template: StoryFn<typeof HelloWorld> = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
