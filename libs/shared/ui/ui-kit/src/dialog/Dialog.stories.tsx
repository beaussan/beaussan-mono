import { Dialog } from './Dialog';
import Button from '../button/button';

export default {
  title: 'Dialog',
};

export const Showcase = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Trigger dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>My title</Dialog.Title>
        <Dialog.Description>My awesome description</Dialog.Description>
        My body
        <Dialog.ActionGroup>
          <Dialog.CloseButton intent="warn">
            Delete everything
          </Dialog.CloseButton>
          <Dialog.CloseButton intent="primary">
            Keep it as is
          </Dialog.CloseButton>
        </Dialog.ActionGroup>
      </Dialog.Content>
    </Dialog.Root>
  );
};
