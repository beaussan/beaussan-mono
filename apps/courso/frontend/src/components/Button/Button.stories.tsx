import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonVariant } from '.';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const variants: ButtonVariant[] = ['primary', 'secondary', 'ghost', 'warn'];

export const Showcase = () => {
  return (
    <div className="h-full grid grid-cols-4 gap-4">
      {variants.map((variant) => (
        <div key={variant} className="grid gap-4">
          <div className="flex items-center w-full">
            <div className="mx-auto">{variant}</div>
          </div>
          <div>
            <Button variant={variant}>do the thing</Button>
          </div>
          <div>
            <Button variant={variant} disabled>
              do the thing
            </Button>
          </div>
          <div>
            <Button variant={variant} Icon={ArrowNarrowLeftIcon}>
              do the thing
            </Button>
          </div>
          <div>
            <Button variant={variant} Icon={ArrowNarrowLeftIcon} disabled>
              do the thing
            </Button>
          </div>
          <Button variant={variant}>do the thing</Button>
          <Button variant={variant} disabled>
            do the thing
          </Button>
        </div>
      ))}
    </div>
  );
};
