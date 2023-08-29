import React from 'react';
import { makeAceProps } from './aceSharedConfig';
import AceEditor, { IAceEditorProps } from 'react-ace';
import { Field } from 'formik';
import { FieldProps } from 'formik/dist/Field';
import { SupportedLanguages } from './supportedLangs';

export interface CodeInputProps {
  lang: SupportedLanguages;
  value: string;
  onChange?: IAceEditorProps['onChange'];
  isReadonly?: boolean;
}

export const CodeInput: React.FC<CodeInputProps> = ({
  value,
  lang,
  isReadonly = false,
  onChange,
}) => {
  return (
    <AceEditor
      {...makeAceProps({
        value,
        onChange,
        mode: lang as unknown as string,
        setOptions: {
          readOnly: isReadonly,
        },
      })}
    />
  );
};

export interface CodeInputFieldProps {
  lang: SupportedLanguages;
  name: string;
  label: string;
  isReadonly?: boolean;
}
export const CodeInputField: React.FC<CodeInputFieldProps> = ({
  name,
  label,
  lang,
  isReadonly = false,
}) => {
  return (
    <Field name={name}>
      {({
        field: { value },
        form: { setFieldValue },
        meta: { error, touched },
      }: FieldProps<string>) => (
        <div>
          <label className="block text-sm font-semibold leading-5 text-gray-700 mb-1">
            {label}
          </label>
          <div>
            <CodeInput
              value={value}
              lang={lang}
              isReadonly={isReadonly}
              onChange={(val) => setFieldValue(name, val)}
            />
          </div>
          {touched && error ? (
            <>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="mt-2 text-sm text-red-600">{error}</div>
            </>
          ) : null}
        </div>
      )}
    </Field>
  );
};

export default CodeInputField;
