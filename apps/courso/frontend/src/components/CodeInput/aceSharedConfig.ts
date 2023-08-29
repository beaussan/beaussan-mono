import 'react-ace';
import { IAceEditorProps, ISplitEditorProps } from 'react-ace';
/*
 * Manual inputs in order to reduce the bundle size from 1.3M to 278KB
 */
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-kotlin';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/mode-sh';
import 'ace-builds/src-noconflict/mode-dockerfile';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/snippets/xml';
import 'ace-builds/src-noconflict/snippets/yaml';
import 'ace-builds/src-noconflict/snippets/typescript';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/snippets/sass';
import 'ace-builds/src-noconflict/snippets/json';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/kotlin';
import 'ace-builds/src-noconflict/snippets/text';
import 'ace-builds/src-noconflict/snippets/sh';
import 'ace-builds/src-noconflict/snippets/dockerfile';
import 'ace-builds/src-noconflict/theme-dracula';

export const themes = ['dracula'];

const aceSharedProps: IAceEditorProps = {
  theme: themes[0],
  width: 'w-full',
  setOptions: {
    fontFamily: 'Monoid',
    useWorker: false,
    /*
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
     */
    showLineNumbers: true,

    tabSize: 2,
  },
};

const splitSharedProps: Partial<ISplitEditorProps> = {
  theme: themes[0],
  width: 'w-full',
  setOptions: {
    fontFamily: 'Monoid',
    fontSize: '10px',
    useWorker: false,
    /*
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
     */
    showLineNumbers: true,

    tabSize: 2,
  },
};

export const makeAceProps: (props: IAceEditorProps) => IAceEditorProps = (
  props,
) => {
  return {
    ...aceSharedProps,
    ...props,
    setOptions: {
      ...aceSharedProps.setOptions,
      ...props.setOptions,
    },
  };
};

export const makeSplitProps: (props: ISplitEditorProps) => ISplitEditorProps = (
  props,
) => {
  return {
    ...splitSharedProps,
    ...props,
    setOptions: {
      ...splitSharedProps.setOptions,
      ...props.setOptions,
    },
  };
};
