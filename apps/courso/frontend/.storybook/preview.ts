import '../src/tailwind.css';
import '../src/fonts/monoid/monoid.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { urqlDecorator } from './urqlDecorator';

initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'black',
        value: '#000000',
      },
    ],
  },
};
export const decorators = [mswDecorator, urqlDecorator];
