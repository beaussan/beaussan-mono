import React from 'react';
import styles from './loader.module.css';
import { clientEnvs } from '@beaussan/courso/data/env-config';

// Inspired from react-loader-spinner triangle spinner
interface LoaderPropsCustom {
  height?: number;
  /**
   * @deprecated deprecated
   */
  visible?: boolean | string;
  width?: number;
  label?: string;
}

const Triangle = (props: LoaderPropsCustom) => (
  <div className={` text-indigo-500`}>
    <svg
      width={props.width}
      height={props.height}
      viewBox="-3 -4 39 39"
      aria-label={props.label}
      className={styles.triangle}
    >
      <linearGradient id="svg-triangle-loader-gradient">
        <stop offset="0%" stopColor="rgb(20, 184, 166)" />
        <stop offset="10%" stopColor="rgb(20, 184, 166)" />
        <stop offset="50%" stopColor="rgb(99, 102, 241)" />
        <stop offset="90%" stopColor="rgb(236, 72, 153)" />
        <stop offset="100%" stopColor="rgb(236, 72, 153)" />
      </linearGradient>
      <polygon
        fill="transparent"
        stroke="url(#svg-triangle-loader-gradient)"
        strokeWidth="1"
        points="16,0 32,32 0,32"
      />
    </svg>
  </div>
);

export const Loader: React.FC<React.PropsWithChildren<LoaderPropsCustom>> = ({
  visible,
  children,
  ...props
}) => {
  if (!visible && children) {
    if (clientEnvs.NODE_ENV !== 'production') {
      console.warn(
        'DEPRECATION NOTICE : Loader visible flag will be removed soon as for children support.'
      );
    }
    return <>{children}</>;
  }
  return (
    <div
      aria-busy="true"
      className="flex items-center justify-center my-12 h-full"
    >
      <Triangle width={70} height={70} visible={visible} {...props} />
    </div>
  );
};
