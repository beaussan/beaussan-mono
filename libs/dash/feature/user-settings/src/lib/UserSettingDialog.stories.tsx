import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserSettingDialog } from './UserSettingDialog';
import { MockUserDataContextProvider } from '@beaussan/dash/data/user';

const Story: ComponentMeta<typeof UserSettingDialog> = {
  component: UserSettingDialog,
  title: 'UserSettingDialog',
};
export default Story;

const Loading: ComponentStory<typeof UserSettingDialog> = (args) => (
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
