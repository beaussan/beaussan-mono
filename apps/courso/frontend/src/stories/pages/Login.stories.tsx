import { Meta } from '@storybook/react';
import Login from '../../pages/login';
import { signOutState } from '../../stories/decorators';

export default {
  title: 'Pages/Login',
  component: Login,
  decorators: [signOutState],
} as Meta;

export const Showcase = () => (
  <Login csrfToken={'TOKEN'} session={null} providers={{} as any} />
);
