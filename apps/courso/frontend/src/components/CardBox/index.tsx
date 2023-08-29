import React from 'react';
import clsx from 'clsx';

export const CardBox: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  children,
  className,
  ...rest
}) => {
  const classes = clsx(
    'bg-white p-5 shadow-md transition duration-100 rounded-lg',
    {
      'cursor-pointer hover:shadow-lg': !!rest.onClick,
    },
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
