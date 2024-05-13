import { initialize, mswDecorator } from 'msw-storybook-addon';
import './tailwind.css';
import { queryClientProvider, urqlDecorator } from './urqlDecorator';
import * as jest from '@storybook/jest';

// Fix: fn() is not defined, see: https://github.com/storybookjs/storybook/issues/15391
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.jest = jest;
// Initialize MSW
const ignoredBase = ['/@fs', '/.storybook', '/virtual:', '/index.json'];
initialize({
  onUnhandledRequest: (request, print) => {
    if (ignoredBase.some((base) => request.url.pathname.startsWith(base))) {
      return;
    }
    print.warning();
  },
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator, urqlDecorator, queryClientProvider];
