import { useArrayNavigator } from '../../../hooks/useArrayNavigator';
import { useCallback, useMemo } from 'react';
import {
  PracticeToStudentGradeMetricInsertInput,
  PracticeToStudentGradeMetricForGradingFragment,
  PracticeToStudentYieldForGradingFragment,
  useInsertPracticeToStudentGradeMetricMutation,
} from '../../../generated/graphql';
import { useFormikMutationSubmit } from '../../../hooks/useFormikMutationSubmit';
import { FormikHelpers } from 'formik';
import { useFullScreenContext } from '../../../components/FullScreen';
import { PracticeToStudentForGradingFrontEdit } from './Mapper';

interface GradeItemFormType {
  [key: string]: {
    feedbacks: string[];
    grade: string;
  };
}

type useGradeItemDataType = (props: {
  data: PracticeToStudentForGradingFrontEdit;
  goNext?: () => void;
  goPrev?: () => void;
  isFirstBlock: boolean;
  isLastBlock: boolean;
}) => {
  initialFormValue: GradeItemFormType;
  onSubmit: (
    values: GradeItemFormType,
    formikHelpers: FormikHelpers<GradeItemFormType>
  ) => Promise<void>;
  item?: PracticeToStudentYieldForGradingFragment;
  goNextStep: () => void;
  goPreviousStep: () => void;
  isLastInGroup: boolean;
  isFirstInGroup: boolean;
  isFirstItemEver: boolean;
  isLastItemEver: boolean;
  position: number;
  maybeGradeForStudents: {
    [key: string]: PracticeToStudentGradeMetricForGradingFragment | undefined;
  };
};

export const useGradeItemDataSetup: useGradeItemDataType = ({
  data,
  goNext,
  goPrev,
  isFirstBlock,
  isLastBlock,
}) => {
  const {
    item,
    goNext: nextItem,
    isLast,
    isFirst,
    goPrev: prevItem,
    goFirst,
    goLast,
    position,
  } = useArrayNavigator(data.studentYields);
  const { toggle } = useFullScreenContext();

  const isLastItemEver = useMemo(
    () => isLast && isLastBlock,
    [isLast, isLastBlock]
  );
  const isFirstItemEver = useMemo(
    () => isFirst && isFirstBlock,
    [isFirst, isFirstBlock]
  );

  const goNextStep = useCallback(
    (whenOnLastStep?: () => void) => {
      if (isLast) {
        if (isLastBlock) {
          whenOnLastStep && whenOnLastStep();
          return;
        }
        goNext?.();
        goFirst();
      } else {
        nextItem();
      }
    },
    [goFirst, goNext, isLast, isLastBlock, nextItem]
  );

  const goPreviousStep = useCallback(() => {
    if (isFirst) {
      if (isFirstBlock) {
        return;
      }
      goPrev?.();
      goLast();
    } else {
      prevItem();
    }
  }, [goLast, goPrev, isFirst, isFirstBlock, prevItem]);

  const maybeGradeForStudents = useMemo<{
    [key: string]: PracticeToStudentGradeMetricForGradingFragment | undefined;
  }>(() => {
    return data.gradeMetrics
      .map((tm) => ({
        [tm.id]: item?.practiceToStudentGradeMetrics.find(
          ({ practiceYieldGradeMetricId }) =>
            practiceYieldGradeMetricId === tm.id
        ),
      }))
      .reduce((prev, curr) => ({ ...prev, ...curr }), {});
  }, [data, item]);

  const [, insertNewGrade] = useInsertPracticeToStudentGradeMetricMutation();

  const onSubmit = useFormikMutationSubmit({
    mutation: insertNewGrade,
    onSuccess: (data) => {
      data.resetForm();
      goNextStep(() => {
        toggle();
      });
    },
    mapFormData: (values: GradeItemFormType) => ({
      objects: Object.entries(values).map(
        ([key, toSave]): PracticeToStudentGradeMetricInsertInput => ({
          practiceYieldGradeMetricId: key,
          feedback: toSave.feedbacks,
          percentGrade: parseInt(toSave.grade),
          practiceToStudentYieldId: item?.practiceToStudentYieldId,
        })
      ),
    }),
  });

  const initialFormValue = useMemo<GradeItemFormType>(
    () =>
      data.gradeMetrics
        .map(({ id }) => ({
          [id]: {
            feedbacks: maybeGradeForStudents?.[id]?.feedback ?? [],
            grade: `${maybeGradeForStudents?.[id]?.percentGrade ?? 1}`,
          },
        }))
        .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
    [data, maybeGradeForStudents]
  );

  return {
    initialFormValue,
    onSubmit,
    item,
    goNextStep,
    goPreviousStep,
    isLastInGroup: isLast,
    isFirstInGroup: isFirst,
    maybeGradeForStudents,
    position,
    isLastItemEver,
    isFirstItemEver,
  };
};
