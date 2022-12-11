import * as process from 'process';

const port = process.env.APP_PORT || 4238;

const apiBasePath = '/api/auth/';

export const websiteDomain =
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${port}`;

console.log('APP INFO');
console.log(process.env.APP_URL);
console.log(process.env.NEXT_PUBLIC_APP_URL);
console.log(websiteDomain);
console.log('------');

export const appInfo = {
  appName: 'SuperTokens Demo App',
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath,
};
