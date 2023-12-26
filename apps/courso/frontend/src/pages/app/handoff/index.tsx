import React from 'react';
import { PageHead } from '../../../components/PageHead';
import {
  HandoffCourseFragment,
  useHandoffListQuery,
} from '../../../generated/graphql';
import { getLayoutRoleStudent } from '../../../layouts/WithRole';
import { format, isAfter, isBefore } from 'date-fns';
import { Chip } from '../../../components/Chip';
import { FormatTimeLeft } from '../../../cmpToSort/FormatTimeLeft';
import Link from 'next/link';
import { routes } from '../../../routGetters';
import { CardBox } from '../../../components/CardBox';
import { enGB } from 'date-fns/locale';

type PracticeHandoff = HandoffCourseFragment['practiceToCourses'][0];

const usePracticeInfo = (practice: PracticeHandoff) => {
  const currDate = new Date();
  const close = new Date(practice.closeDate);
  const open = new Date(practice.openDate);
  const isBeforeStart = isBefore(currDate, open);
  const isStarted = isAfter(currDate, open) && isBefore(currDate, close);
  const isSubmitted = practice.practiceToStudents.length > 0;
  const isOver = isAfter(currDate, close);
  return {
    currDate,
    close,
    open,
    isBeforeStart,
    isSubmitted,
    isStarted,
    isOver,
  };
};

const PracticeHandoffRightSide = ({
  practice,
}: {
  practice: PracticeHandoff;
}) => {
  const { isSubmitted, isOver, close, open } = usePracticeInfo(practice);
  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center ">
        <Chip variant="success">Submitted</Chip>
      </div>
    );
  }
  if (isOver) {
    return (
      <div className="flex justify-center items-center">
        <Chip variant="error">Not submitted</Chip>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-stretch	md:items-center">
      <FormatTimeLeft close={close} open={open} />
      <Link href={routes.handoffId({ handoffId: practice.id })} legacyBehavior>
        {
          // FIXME use a proper link here
          /*

        <Button disabled={!isStarted} as="a">
          Submit
        </Button>
           */
        }
        <a>Submit</a>
      </Link>
    </div>
  );
};

const PracticeHandoff = ({ practice }: { practice: PracticeHandoff }) => {
  const { isBeforeStart, isStarted, close, open } = usePracticeInfo(practice);
  return (
    <CardBox>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
        <div className="flex justify-between flex-col ">
          <div className="text-xl mb-4 space-x-2 flex items-center">
            <Chip
              variant={isStarted ? 'success' : isBeforeStart ? 'info' : 'error'}
            >
              {isStarted ? 'Open' : isBeforeStart ? 'Coming soon' : 'Closed'}
            </Chip>
            <span className="font-bold">{practice.practice.title}</span>
          </div>
          <div className="text-gray-500">
            {isBeforeStart
              ? `Open at ${format(open, 'Pp', { locale: enGB })}`
              : isStarted
              ? `Closes at ${format(close, 'Pp', { locale: enGB })}`
              : `Closed at ${format(close, 'Pp', { locale: enGB })}`}
          </div>
        </div>
        <PracticeHandoffRightSide practice={practice} />
      </div>
    </CardBox>
  );
};

export const HandoffCourse = ({
  course,
}: {
  course: HandoffCourseFragment;
}) => {
  return (
    <div>
      <div className="pb-2 border-b border-gray-300">
        <h3 className="text-lg leading-6 text-gray-900">
          {course.name} - {course.years}
        </h3>
      </div>
      <div className="mt-2 grid grid-cols-1  gap-4">
        {course.practiceToCourses.map((practice) => (
          <PracticeHandoff practice={practice} key={practice.id} />
        ))}
      </div>
    </div>
  );
};

export const HandOffIndex = () => {
  const [{ data }] = useHandoffListQuery({
    requestPolicy: 'network-only',
  });

  return (
    <>
      <PageHead>Handoff</PageHead>
      <div className="space-y-8 mt-4">
        {data?.course.map((item) => (
          <HandoffCourse course={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
HandOffIndex.getLayout = getLayoutRoleStudent;

export default HandOffIndex;
