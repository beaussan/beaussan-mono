import { HandlerMap } from './types';
import { handlersPracticeToPromoToGitea } from './practiceToPromoToGitea';
import { yieldToGiteaHandler } from './yieldToGitea';
import { onStudentYieldCreatedWithNoValue } from './onStudentYieldCreatedWithNoValue';

export const webhooksHandler: HandlerMap = {
  ...handlersPracticeToPromoToGitea,
  ...yieldToGiteaHandler,
  onStudentYieldCreatedWithNoValue,
};
