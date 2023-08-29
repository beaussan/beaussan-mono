import React from 'react';
import { DropList } from '../../components/DropList';
// TODO FIX THIS WAY OF IMPORTING THE COMPONENT
// eslint-disable-next-line no-restricted-imports
import { supportedAceLang } from '../../components/CodeInput/supportedLangs';

export const CodeLangField: React.FC<{ name: string; label?: string }> = ({
  name,
  label,
}) => {
  return (
    <DropList
      label={label ?? 'Code language'}
      name={name}
      values={supportedAceLang as unknown as string[]}
    />
  );
};
