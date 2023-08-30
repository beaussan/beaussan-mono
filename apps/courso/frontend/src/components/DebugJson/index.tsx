import React from 'react';
import { clientEnvs } from '@beaussan/courso/data/env-config';

export const DebugJson: React.FC<{ json: any; title?: string }> = ({
  json,
  title,
}) => {
  if (clientEnvs.NODE_ENV !== 'development') {
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
