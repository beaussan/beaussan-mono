import { Meta } from '@storybook/react';
import { LoadingFullScreen } from '../../layouts/LoadingFullScreen';

export default {
  title: 'Pages/FullscreenLoader',
  component: LoadingFullScreen,
} as Meta;

export const Showcase = () => {
  return <LoadingFullScreen debugName={'Storybook'} />;
};
