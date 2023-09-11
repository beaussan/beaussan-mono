import React from 'react';
import { Meta } from '@storybook/react';
import { CardBox } from '../../components/CardBox';

export default {
  title: 'Components/CardBox',
  component: CardBox,
} as Meta;

export const Showcase = () => {
  return (
    <div className="grid gap-4">
      <CardBox>Hello world</CardBox>
      <CardBox onClick={() => console.log('clocked')}>
        Hello world with an on click
      </CardBox>
    </div>
  );
};
