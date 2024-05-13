/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import dts from 'vite-plugin-dts';
import { joinPathFragments } from '@nx/devkit';
export default defineConfig({
  root: __dirname,
  cacheDir:
    '../../../../../node_modules/.vite/shared-utils-next-auth-hasura-adaptor',
  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: joinPathFragments(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    react(),
    nxViteTsPaths(),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../../../../',
  //    }),
  //  ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../../../../dist/libs/shared/utils/next-auth/hasura-adaptor',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'shared-utils-next-auth-hasura-adaptor',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  test: {
    reporters: ['default'],
    coverage: {
      reportsDirectory:
        '../../../../../coverage/libs/shared/utils/next-auth/hasura-adaptor',
      provider: 'v8',
    },
    globals: true,
    cache: {
      dir: '../../../../../node_modules/.vitest',
    },
    passWithNoTests: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: './src/test-setup.ts',
  },
});
