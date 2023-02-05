import type { StoryFn, Meta } from '@storybook/react';
import { UserSettingDialog } from './UserSettingDialog';
import { MockUserDataContextProvider } from '@beaussan/dash/data/user';

const Story: Meta<typeof UserSettingDialog> = {
  component: UserSettingDialog,
  title: 'UserSettingDialog',
};
export default Story;

const Loading: StoryFn<typeof UserSettingDialog> = (args) => (
  <MockUserDataContextProvider
    params={{
      fetching: true,
      userId: undefined,
      user: undefined,
      error: undefined,
    }}
  >
    <UserSettingDialog />
  </MockUserDataContextProvider>
);

export const Primary = Loading.bind({});
Primary.args = {};
export const WithNoApiTokenData: StoryFn<typeof UserSettingDialog> = (args) => (
  <MockUserDataContextProvider
    params={{
      fetching: false,
      userId: 'd0800c00-effe-4e66-b7c3-827dce5121ea',
      user: {
        id: 'd0800c00-effe-4e66-b7c3-827dce5121ea',
        canSeeTraefikContent: true,
        todoistApiToken: undefined,
        email: '',
        createdAt: '',
        updatedAt: '',
      },
      error: undefined,
    }}
  >
    <UserSettingDialog />
  </MockUserDataContextProvider>
);
