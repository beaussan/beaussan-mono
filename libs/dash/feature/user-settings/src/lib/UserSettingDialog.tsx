import {
  useEditUserSettingsMutation,
  useUserData,
} from '@beaussan/dash/data/user';
import {
  Button,
  Dialog,
  InputField,
  useDialogContext,
  useZodForm,
} from '@beaussan/shared/ui/ui-kit';
import React from 'react';
import { z } from 'zod';
import { RiHomeGearLine } from 'react-icons/ri';

type UserSettingFormProps = {
  userId: string;
  todoistToken?: string | null;
};

const Form = ({ todoistToken, userId }: UserSettingFormProps) => {
  const { setIsOpen } = useDialogContext();
  const [{ error }, editUserSettings] = useEditUserSettingsMutation();
  const {
    Form,
    methods: { name },
  } = useZodForm({
    schema: z.object({
      todoistToken: z.string().nullish(),
    }),
    options: {
      defaultValues: {
        todoistToken: todoistToken,
      },
    },
  });
  return (
    <Form
      onSubmit={async (input) => {
        const { data } = await editUserSettings({
          userId: userId,
          todoistApiToken: input.todoistToken,
        });
        if (!data) {
          return;
        }
        setIsOpen(false);
      }}
    >
      <Dialog.Title>User settings</Dialog.Title>
      <div className="space-y-2">
        <InputField {...name('todoistToken')} label="Todoist token" />
      </div>

      {error ? <div>{error.message}</div> : null}

      <Dialog.ActionGroup>
        <Dialog.CloseButton intent="warn">Cancel</Dialog.CloseButton>
        <Button intent="primary" type="submit">
          Update
        </Button>
      </Dialog.ActionGroup>
    </Form>
  );
};

const UserSettingDialogComp = ({
  userId,
  todoistToken,
}: UserSettingFormProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <span className="sr-only">User settings</span>
          <RiHomeGearLine />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Form todoistToken={todoistToken} userId={userId} />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export const UserSettingDialog = () => {
  const { user, fetching } = useUserData();

  if (fetching || !user) {
    return <div>Loading...</div>;
  }

  return (
    <UserSettingDialogComp
      userId={user.id}
      todoistToken={user.todoistApiToken}
    />
  );
};
