import { initialize, mswDecorator } from 'msw-storybook-addon';
import './tailwind.css';
import type { DecoratorFunction } from '@storybook/addons';
import * as jest from '@storybook/jest';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators: DecoratorFunction[] = [mswDecorator];

// Fix: fn() is not defined, see: https://github.com/storybookjs/storybook/issues/15391
(window as any).jest = jest;
