import React from 'react';

const yieldTypes = {
  BLOB: 'Content as a string',
  GIT_REPO:
    'A git repo url that will be copied into another git. You will be able to read content of the git for the correction.',
  CODE: 'An input form with syntax highlighting for code input, you can chose the lang.',
  URL: 'A web url',
};

export const YieldTypesDescription: React.FC = () => {
  const data = Object.entries(yieldTypes);
  return (
    <div className="mb-4 flex flex-col">
      <div>
        Right now, we only support {data.length} way for student to yield
        answers :
      </div>
      <ul className="list-disc pl-4">
        {data.map(([name, comment]) => (
          <li key={name}>
            <span className="font-bold ">
              {name}
              {' : '}
            </span>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};
