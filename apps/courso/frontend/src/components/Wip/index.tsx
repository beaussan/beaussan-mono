import React from 'react';
import { Alert } from '../../components/Alert';

export const Wip: React.FC<{ todo: string[] }> = ({ todo }) => (
  <div className="bg-yellow-50 p-4 shadow-lg rounded-lg my-4">
    <Alert noShadow title="This page is still WIP. This is what is missing :">
      <ul className="list-disc pl-5 space-y-1">
        {todo.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </Alert>
  </div>
);
