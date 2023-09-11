import React from 'react';
import { useRouter } from 'next/router';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';

export const BackButton: React.FC<{ className: string; backTo?: string }> = ({
  className,
  backTo = '..',
}) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(backTo)}
      className={`inline-flex items-center cursor-pointer text-gray-500 hover:text-gray-700 focus:text-gray-700 px-2 py-2 ${className}`}
    >
      <ArrowNarrowLeftIcon className="w-6" />
      <span className="sr-only">back</span>
    </button>
  );
};
