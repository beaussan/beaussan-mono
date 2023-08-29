import React from 'react';
import { Meta } from '@storybook/react';
import { Chip } from '../../components/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

export const Showcase = () => {
  return (
    <div className="flex flex-row space-x-4">
      <Chip variant="success">Success chip</Chip>
      <Chip variant="error">Error chip</Chip>
      <Chip variant="info">Info chip</Chip>
    </div>
  );
};
