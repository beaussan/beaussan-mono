// .lintstagedrc.js
export default {
  '*.{js,jsx,ts,tsx,json}': (filenames) =>
    'nx affected --target=lint --fix --parallel=10 --quiet',
  '*': (fileNames) => 'nx format:write --base=main',
};
