import { cva } from 'cva';
import React from 'react';

export type ButtonProps = React.PropsWithChildren<{ varient: string }>;

export function Button(props: ButtonProps) {
  return (
    <div>
      <h1>Welcome to Button!</h1>
    </div>
  );
}

export default Button;
