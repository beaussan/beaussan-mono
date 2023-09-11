import React from 'react';
import { Alert, AlertProps } from './index';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Some title',
  noShadow: false,
  children: <div className="font-bold">Hello body</div>,
};

Default.parameters = {
  chromatic: { disable: true },
};

export const Showcase: Story = () => (
  <div className="h-full space-y-4">
    <Alert title="Some title with shadow">
      <div>
        With some <span className="font-bold">content</span>
      </div>
    </Alert>
    <Alert title="Some title with no shadow" noShadow>
      With some <span className="font-bold">content</span>
    </Alert>
  </div>
);
