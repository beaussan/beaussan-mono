import React from 'react';
import clsx from 'clsx';

export type ChipTypes = 'success' | 'error' | 'info';

export const Chip = ({
  children,
  variant,
}: React.PropsWithChildren<{ variant: ChipTypes }>) => {
  const classes = clsx(
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
    {
      'text-green-800 bg-green-100': variant === 'success',
      'text-red-800 bg-red-100': variant === 'error',
      'text-blue-800 bg-blue-100': variant === 'info',
    }
  );
  return <span className={classes}>{children}</span>;
};
