import React from 'react';
import { Meta } from '@storybook/react';
import { PageHead } from '../../components/PageHead';

export default {
  title: 'Components/PageHead',
  component: PageHead,
} as Meta;

export const Showcase = () => (
  <PageHead>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus.
  </PageHead>
);
