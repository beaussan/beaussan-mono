import { initialize, mswDecorator } from 'msw-storybook-addon';
import './tailwind.css';
import type { DecoratorFunction } from '@storybook/addons';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators: DecoratorFunction[] = [mswDecorator];
