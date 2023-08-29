import { Meta } from '@storybook/react';
import { Loader } from '../../components/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;

export const Showcase = () => {
  return (
    <div className="h-full grid grid-cols-3 gap-4">
      <Loader label="some label" />
      <Loader height={100} width={100} />
      <Loader height={200} width={200} />
    </div>
  );
};
