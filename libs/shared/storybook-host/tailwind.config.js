const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components}/**/*!(*.spec).{ts,tsx,html,mdx}'),
    ...createGlobPatternsForDependencies(
      __dirname,
      '/**/!(*.spec).{tsx,jsx,ts,js,mdx,html}'
    ),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minWidth: (theme) => ({
        0: '0',
        ...theme('spacing'),
        full: '100%',
        'min-content': 'min-content',
        'max-content': 'max-content',
      }),
      minHeight: (theme) => ({
        0: '0',
        full: '100%',
        ...theme('spacing'),
        screen: '100vh',
      }),
    },
  },
  plugins: [],
};
