import { useUserData } from '@beaussan/dash/data/user';

export const UserSettingDialog = () => {
  const { user, userId, fetching } = useUserData();

  if (fetching || !user) {
    return <div>Loading...</div>;
  }

  return <div>Button + </div>;
};
