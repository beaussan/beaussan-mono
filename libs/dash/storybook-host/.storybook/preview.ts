import { initialize, mswDecorator } from 'msw-storybook-addon';
import './tailwind.css';
import { DecoratorFunction } from '@storybook/addons';
import { urqlDecorator } from './urqlDecorator';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators: DecoratorFunction[] = [mswDecorator, urqlDecorator];
