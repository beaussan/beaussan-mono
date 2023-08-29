import React from 'react';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const FormatSingleDate: React.FC<{
  date: Date;
  prefix: string;
  className?: string;
}> = ({ date, prefix, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span>{`${prefix} `}</span>
      <span className="font-semibold">
        {formatDistanceToNowStrict(date, {
          addSuffix: true,
          locale: enGB,
        })}
      </span>
      <span className="font-semibold">
        {format(date, 'Pp', { locale: enGB })}
      </span>
    </div>
  );
};
