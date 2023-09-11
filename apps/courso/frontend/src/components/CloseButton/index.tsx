import React from 'react';
import { XIcon } from '@heroicons/react/outline';

export const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      type="button"
      className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
      aria-label="Close"
    >
      <XIcon className="h-6 w-6" />
    </button>
  );
};
