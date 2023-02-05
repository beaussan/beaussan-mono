import { initialize, mswDecorator } from 'msw-storybook-addon';
import './tailwind.css';
import type { DecoratorFunction } from '@storybook/addons';
import { urqlDecorator } from './urqlDecorator';
import * as jest from '@storybook/jest';

// Fix: fn() is not defined, see: https://github.com/storybookjs/storybook/issues/15391
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.jest = jest;
// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators: DecoratorFunction[] = [mswDecorator, urqlDecorator];
