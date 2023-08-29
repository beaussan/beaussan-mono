import React from 'react';

export const DebugJson: React.FC<{ json: any; title?: string }> = ({
  json,
  title,
}) => {
  if (process.env.PROD) {
    return null;
  }
  return (
    <details>
      <summary>{title ?? 'Debug data'}</summary>
      <pre className="font-mono bg-gray-300 text-xs p-2 rounded-lg">
        {JSON.stringify(json, null, 2)}
      </pre>
    </details>
  );
};
