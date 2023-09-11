import React from 'react';

export const PageHead: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <h1 className={`text-2xl font-semibold text-gray-900 ${className ?? ''}`}>
    {children}
  </h1>
);
