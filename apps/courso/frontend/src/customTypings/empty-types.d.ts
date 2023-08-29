declare module 'remark-emoji' {
  const noTypesYet: any;
  export default noTypesYet;
}
// Fix typescript error for plugin vite-plugin-svgr

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
