import { Dialog } from './Dialog';
import Button from '../button/button';
import { fireEvent, within } from '@storybook/testing-library';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Dialog',
};
const Template: StoryFn<typeof Dialog> = (args) => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Button>Trigger dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Title>My title</Dialog.Title>
      <Dialog.Description>My awesome description</Dialog.Description>
      My body
      <Dialog.ActionGroup>
        <Dialog.CloseButton intent="warn">Delete everything</Dialog.CloseButton>
        <Dialog.CloseButton intent="primary">Keep it as is</Dialog.CloseButton>
      </Dialog.ActionGroup>
    </Dialog.Content>
  </Dialog.Root>
);

export const Showcase = Template.bind({});

export const Opened = Template.bind({});

Opened.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('button');

  fireEvent.click(trigger);
};
