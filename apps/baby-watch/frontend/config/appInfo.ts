import * as process from 'process';

const port = process.env.APP_PORT || 4200;

const apiBasePath = '/api/auth/';

export const websiteDomain =
  process.env.APP_URL || process.env.NX_APP_URL || `http://localhost:${port}`;

export const appInfo = {
  appName: 'Baby Watch Demo App',
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath,
};
