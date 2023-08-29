import { SupportedLanguages } from './supportedLangs';
import { ISplitEditorProps, split as SplitEditor } from 'react-ace';
import * as React from 'react';
import { makeSplitProps } from './aceSharedConfig';

const Split = (SplitEditor as unknown) as React.FC<ISplitEditorProps>;

export interface DiffViewerProps {
  lang: SupportedLanguages;
  expected?: string;
  got?: string;
  className?: string;
}

export const DiffViewer: React.FC<DiffViewerProps> = ({
  expected,
  got,
  lang,
  className,
}) => {
  return (
    <div>
      <Split
        {...makeSplitProps({
          // readOnly: true,
          mode: (lang as unknown) as string,
          value: [expected ?? '', got ?? ''],
          splits: 2,
          className,
        })}
      />
    </div>
  );
};

export default DiffViewer;
