import React from 'react';

export function Error500(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-purple-800 text-white font-bold rounded-lg border shadow-lg p-4 text-blue">
        Error 500 : Something went wrong !
      </div>
    </div>
  );
}

export default Error500;
