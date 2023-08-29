export const routes = {
  login: () => '/login',
  root: () => '/',
  link: ({ linkId }: { linkId: string }) => `/link/${linkId}`,
  appRoot: () => '/app',
  courseList: () => `${routes.appRoot()}/courses`,
  courseNew: () => `${routes.courseList()}/new`,
  courseId: ({ courseId }: { courseId: string }) =>
    `${routes.courseList()}/${courseId}`,
  dash: () => `${routes.appRoot()}/dash`,
  handoff: () => `${routes.appRoot()}/handoff`,
  handoffId: ({ handoffId }: { handoffId: string }) =>
    `${routes.handoff()}/${handoffId}`,
  practice: () => `${routes.appRoot()}/practice`,
  practiceNew: () => `${routes.practice()}/new`,
  practiceId: ({ practiceId }: { practiceId: string }) =>
    `${routes.practice()}/${practiceId}`,
  practiceNewMetrics: ({ practiceId }: { practiceId: string }) =>
    `${routes.practiceId({ practiceId })}/newGradesMetrics`,
  practiceGrading: ({
    practiceId,
    courseId,
  }: {
    practiceId: string;
    courseId: string;
  }) => `${routes.practiceId({ practiceId })}/grading/${courseId}`,
};
