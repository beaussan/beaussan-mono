import React from 'react';
import { CodeLangField } from '../../components/CodeLangField';
import { Input, TextArea } from '../../components/Input';
import gql from 'graphql-tag';
import {
  GradeMetricInputYieldFragment,
  PracticeYieldExpectedOutputTypesEnum,
  PracticeYieldTypeEnum,
} from '../../generated/graphql';
import { DropList } from '../../components/DropList';
import { useGradeMetricTypes } from './useGradeMetricTypes';
import { CodeInputFieldLazy } from '../../components/CodeInput/CodeInputFieldLazy';
import { Button } from '../../components/Button';
import * as yup from 'yup';
import { useFormikFieldValue } from '../../hooks/useFormikFieldValue';
import { SupportedLanguages } from '../../components/CodeInput/supportedLangs';
import { ArrayInput } from '../../components/ArrayInput';

export const yupGradeMetricDefSchema = yup.object().shape({
  method: yup.string().required(),
  expected: yup.string().notRequired(),
  lang: yup.string().notRequired(),
  gitPath: yup.string().notRequired(),
  metrics: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          name: yup.string().required(),
          points: yup.number().required(),
          feedbacks: yup.array().of(yup.string()).required(),
        })
        .required()
    )
    .min(1)
    .required(),
  /*  name: yup.string().required(), points: yup.number().required(), */
});

const makeFormName = (name: string) => {
  const methodFormName = `${name}.method`;
  const expectedFormName = `${name}.expected`;
  const langFormName = `${name}.lang`;
  const gitPathFormName = `${name}.gitPath`;
  return {
    methodFormName,
    langFormName,
    expectedFormName,
    gitPathFormName,
  };
};

const fragments = {
  GradeMetricInputYield: gql`
    fragment GradeMetricInputYield on PracticeYield {
      id
      meta
      method
      name
      description
    }
  `,
};

export type GradeMetricInputProps = {
  name: string;
  yieldLinked: GradeMetricInputYieldFragment;
  onRemove: () => void;
};

const gradeMetricTypeToString: (
  data: PracticeYieldExpectedOutputTypesEnum
) => string = (method) => {
  return {
    COMPARE_CODE_FILE: 'Compare code file',
    COMPARE_GIT_FILE: 'Compare git file',
    LINK_OPEN: 'Open link',
    MANUAL: 'Manual review',
    SHOW_GIT_FILE: 'Show git file',
    SHOW_GIT_LOG: 'Show git log',
    MANUAL_GIT_FILE_REVIEW: 'Manual git review',
  }[method];
};

type FnExtraInput = React.FC<{
  name: string;
  yieldLinked: GradeMetricInputYieldFragment;
}>;

const CompareCodeInput: FnExtraInput = ({ name }) => {
  const { langFormName, expectedFormName } = makeFormName(name);
  const langValue = useFormikFieldValue<SupportedLanguages>(langFormName);

  return (
    <>
      <CodeInputFieldLazy
        lang={langValue}
        name={expectedFormName}
        label="Expected value"
      />
    </>
  );
};

const TextareaInput: FnExtraInput = ({ name }) => {
  const { expectedFormName } = makeFormName(name);
  return <TextArea label="Expected result" name={expectedFormName} />;
};

const ExpectedGitInput: FnExtraInput = ({ name }) => {
  const { gitPathFormName } = makeFormName(name);
  return (
    <div className="flex items-center space-x-4">
      <Input label="Path of file" name={gitPathFormName} />
    </div>
  );
};

const ExpectedGitManualInput: FnExtraInput = ({ name, yieldLinked }) => {
  const { expectedFormName } = makeFormName(name);
  return (
    <>
      <ExpectedGitInput name={name} yieldLinked={yieldLinked} />
      <TextArea label="Expected result" name={expectedFormName} />
    </>
  );
};

const ExpectedGitDiffInput: FnExtraInput = ({ name, yieldLinked }) => {
  const { expectedFormName, langFormName } = makeFormName(name);
  const langValue = useFormikFieldValue<SupportedLanguages>(langFormName);

  return (
    <div>
      <ExpectedGitInput name={name} yieldLinked={yieldLinked} />
      <CodeInputFieldLazy
        lang={langValue}
        name={expectedFormName}
        label="Expected value"
      />
    </div>
  );
};

const Noop = () => null;

const extraInput: Record<PracticeYieldExpectedOutputTypesEnum, FnExtraInput> = {
  COMPARE_CODE_FILE: CompareCodeInput,
  MANUAL: TextareaInput,
  LINK_OPEN: TextareaInput,
  SHOW_GIT_FILE: ExpectedGitInput,
  SHOW_GIT_LOG: Noop,
  COMPARE_GIT_FILE: ExpectedGitDiffInput,
  MANUAL_GIT_FILE_REVIEW: ExpectedGitManualInput,
};

const hasLangInput: (
  yieldLinked: GradeMetricInputYieldFragment,
  methodValue: PracticeYieldExpectedOutputTypesEnum
) => boolean = ({ method }, methodValue) => {
  const mapPracticeTypesToBool: Record<PracticeYieldTypeEnum, boolean> = {
    BLOB: true,
    CODE: false,
    GIT_REPO: true,
    URL: true,
  };
  const mapMethodToBool: Record<PracticeYieldExpectedOutputTypesEnum, boolean> =
    {
      COMPARE_CODE_FILE: true,
      MANUAL: false,
      LINK_OPEN: false,
      SHOW_GIT_FILE: true,
      SHOW_GIT_LOG: false,
      COMPARE_GIT_FILE: true,
      MANUAL_GIT_FILE_REVIEW: true,
    };
  return mapPracticeTypesToBool[method] && mapMethodToBool[methodValue];
};

const GradeInput: React.FC<{ name: string }> = ({ name }) => {
  return (
    <ArrayInput
      name={name}
      labelAdd="Add a new metric"
      label="Metrics"
      defaultNewItem={() => ({ points: 1, name: '', feedbacks: [] })}
    >
      {(itemName, removeSelf, t, index) => (
        <div className="shadow-lg ring-4 ring-teal-300 ring-inset ring-opacity-50 bg-white p-5 transition duration-100 rounded-lg space-y-4">
          <div className="text-xl font-bold">Metric {index + 1}</div>
          <div className="flex content-between font-bold justify-between items-center space-x-4 pb-8 border-b border-gray-200">
            <Input label="Name" name={`${itemName}.name`} />
            <Input
              label="Points"
              type="number"
              min={0}
              name={`${itemName}.points`}
            />
            <Button
              type="button"
              Icon={ArrayInput.RemoveIcon}
              variant="secondary"
              onClick={removeSelf}
            />
          </div>

          <ArrayInput
            name={`${itemName}.feedbacks`}
            labelAdd="Add another feedback"
            label="Feedbacks"
            defaultNewItem={() => ''}
          >
            {(name1, removeSelf) => (
              <div className="flex content-between font-bold justify-between items-center space-x-4">
                <TextArea label="Feedback" name={name1} />
                <Button
                  type="button"
                  variant="secondary"
                  Icon={ArrayInput.RemoveIcon}
                  onClick={removeSelf}
                />
              </div>
            )}
          </ArrayInput>
        </div>
      )}
    </ArrayInput>
  );
};

export const GradeMetricDefinitionInput = ({
  name,
  yieldLinked,
  onRemove,
}: GradeMetricInputProps) => {
  const { methodFormName, langFormName } = makeFormName(name);
  const methodValue =
    useFormikFieldValue<PracticeYieldExpectedOutputTypesEnum>(methodFormName);
  const possibleMethods = useGradeMetricTypes(yieldLinked, name);
  const shouldInputLang = hasLangInput(yieldLinked, methodValue);
  const Extra = extraInput[methodValue];

  return (
    <div className="shadow-lg ring-4 ring-indigo-300 ring-inset ring-opacity-50 bg-white p-5 transition duration-100 rounded-lg space-y-4">
      <div className="text-xl font-bold">Expected input</div>
      <div className="flex items-center space-around justify-between space-x-4 ">
        <div className="flex space-x-4">
          <DropList
            values={possibleMethods}
            name={methodFormName}
            label="Method of grading"
            itemToString={gradeMetricTypeToString}
          />
          {shouldInputLang ? (
            <CodeLangField name={langFormName} label="Language of code" />
          ) : null}
        </div>
        <Button
          type="button"
          onClick={onRemove} // remove a friend from the list
          Icon={ArrayInput.RemoveIcon}
        >
          Remove grade expected input
        </Button>
      </div>
      {Extra && (
        <div>
          <Extra name={name} yieldLinked={yieldLinked} />
        </div>
      )}
      <GradeInput name={`${name}.metrics`} />
    </div>
  );
};

GradeMetricDefinitionInput.fragments = fragments;
