const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: colors.teal,
      },
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
