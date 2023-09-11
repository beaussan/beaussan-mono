import {
  GradeMetricInputYieldFragment,
  PracticeYieldExpectedOutputTypesEnum,
  PracticeYieldTypeEnum,
} from '../../generated/graphql';
import { useFormikContext } from 'formik';
import { useEffect, useMemo } from 'react';

export const shouldShowLangInput: (
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

export const mapper: Record<
  PracticeYieldTypeEnum,
  PracticeYieldExpectedOutputTypesEnum[]
> = {
  BLOB: [
    'MANUAL',
    'COMPARE_CODE_FILE',
  ] as PracticeYieldExpectedOutputTypesEnum[],
  CODE: [
    'COMPARE_CODE_FILE',
    'MANUAL',
  ] as PracticeYieldExpectedOutputTypesEnum[],
  GIT_REPO: [
    'COMPARE_GIT_FILE',
    'SHOW_GIT_LOG',
    'SHOW_GIT_FILE',
    'MANUAL_GIT_FILE_REVIEW',
  ] as PracticeYieldExpectedOutputTypesEnum[],
  URL: ['LINK_OPEN', 'MANUAL'] as PracticeYieldExpectedOutputTypesEnum[],
};

export const useGradeMetricTypes = (
  yieldLinked: GradeMetricInputYieldFragment,
  name: string
): PracticeYieldExpectedOutputTypesEnum[] => {
  const methodFormName = `${name}.method`;
  const langFormName = `${name}.lang`;
  const { getFieldProps, setFieldValue } = useFormikContext<any>();
  const { value: methodValue } = getFieldProps(methodFormName);
  const { value: langValue } = getFieldProps(langFormName);
  const yieldMethod = yieldLinked?.method;

  const possibleMethods = useMemo<
    PracticeYieldExpectedOutputTypesEnum[]
  >(() => {
    return yieldMethod ? mapper[yieldMethod] : [];
  }, [yieldMethod]);

  useEffect(() => {
    if (!yieldMethod) {
      return;
    }

    if (
      yieldMethod === 'CODE' &&
      yieldLinked?.meta?.lang &&
      yieldLinked?.meta?.lang !== langValue
    ) {
      setFieldValue(langFormName, yieldLinked.meta.lang);
    }
  }, [
    langFormName,
    langValue,
    methodValue,
    setFieldValue,
    yieldLinked,
    yieldMethod,
  ]);

  useEffect(() => {
    if (!yieldMethod) {
      return;
    }

    if (!possibleMethods.includes(methodValue)) {
      setFieldValue(methodFormName, possibleMethods[0]);
    }
  }, [
    methodFormName,
    methodValue,
    name,
    possibleMethods,
    setFieldValue,
    yieldMethod,
  ]);

  return possibleMethods;
};
