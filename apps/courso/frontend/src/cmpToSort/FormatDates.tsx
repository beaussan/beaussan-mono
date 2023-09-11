import React from 'react';
import { FormatSingleDate } from './FormatSingleDate';

export const FormatDates: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  return (
    <div className="flex justify-between">
      <FormatSingleDate date={open} prefix="Open" />
      <FormatSingleDate date={close} prefix="Close" className="items-end" />
    </div>
  );
};
