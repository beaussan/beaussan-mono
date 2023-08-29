import React, { ReactNode } from 'react';
import { ExclamationIcon } from '@heroicons/react/outline';

export type AlertProps = {
  title?: string;
  className?: string;
  noShadow?: boolean;
  children?: ReactNode;
};

export const Alert = ({ children, className, title, noShadow }: AlertProps) => {
  return (
    <div
      className={`rounded-md bg-yellow-50 p-4 ${
        noShadow ? '' : 'shadow'
      } ${className}`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          {title && (
            <h3 className="text-sm leading-5 font-medium text-yellow-800 mb-2">
              {title}
            </h3>
          )}

          <div className="text-sm leading-5 text-yellow-700">{children}</div>
        </div>
      </div>
    </div>
  );
};
