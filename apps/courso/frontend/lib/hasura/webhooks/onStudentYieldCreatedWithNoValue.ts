import { handlerFn } from './types';
import { gqlSdk } from '../../gql';

interface YieldFromEvent {
  id: string;
  value?: string;
}

export const onStudentYieldCreatedWithNoValue: handlerFn<
  YieldFromEvent
> = async (data) => {
  const after = data.event.data.new;

  if (!after) {
    return 'no after';
  }
  if (after.value && after?.value?.trim().length > 0) {
    return 'value set';
  }

  await gqlSdk.setSubmitedFalseOnEmpty({
    id: after.id,
  });

  return 'ok';
};
