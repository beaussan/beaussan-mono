import React from 'react';
import { Meta } from '@storybook/react';
import { ButtonWithConfirm } from '../../components/ButtonWithConfirm';

export default {
  title: 'Components/ButtonWithConfirm',
  component: ButtonWithConfirm,
} as Meta;

export const Showcase = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <ButtonWithConfirm
        variant="confirm"
        buttonLabel="Are you sure ?"
        actionLabel="AAAAAAAAAA"
        onClick={() => console.log('Yes')}
      />
      <ButtonWithConfirm
        variant="delete"
        buttonLabel="Do you want to delete it ?"
        actionLabel="AAAAAAAAAA"
        onClick={() => console.log('Yes')}
      />
    </div>
  );
};
