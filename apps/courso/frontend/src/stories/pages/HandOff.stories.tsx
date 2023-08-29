import React from 'react';
import { Meta, Story } from '@storybook/react';
import HandOffIndexPage from '../../pages/app/handoff/index';
import { graphql } from 'msw';
import { HTTP_URL } from '../../services/urqlClient';
import {
  HandoffListQuery,
  HandoffListQueryVariables,
} from '../../generated/graphql';
import { formatRFC3339, add } from 'date-fns';
import { fullScreenBody } from '../../stories/decorators';

export default {
  component: HandOffIndexPage,
  title: 'Pages/HandOffList',
  decorators: [fullScreenBody],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const gqlEndpoint = graphql.link(HTTP_URL);

const Template: Story = () => <HandOffIndexPage />;

export const EmptyList = Template.bind({});

EmptyList.parameters = {
  msw: [
    gqlEndpoint.query<HandoffListQuery, HandoffListQueryVariables>(
      'handoffList',
      (req, res, ctx) => {
        return res(ctx.data({ course: [] }));
      }
    ),
  ],
};

export const AllFinished = Template.bind({});

const aDayAgo = formatRFC3339(add(new Date(), { days: -1 }));
const twoDayAgo = formatRFC3339(add(new Date(), { days: -2 }));
const aDayLater = formatRFC3339(add(new Date(), { days: 1 }));
const twoDayLater = formatRFC3339(add(new Date(), { days: 2 }));

AllFinished.parameters = {
  msw: [
    gqlEndpoint.query<HandoffListQuery, HandoffListQueryVariables>(
      'handoffList',
      (req, res, ctx) => {
        return res(
          ctx.data({
            course: [
              {
                id: '34000107-1cc3-4fef-824a-fc2ea0d1b5e0',
                name: 'Course with closed practices',
                years: '2021-2022',
                practice_to_courses: [
                  {
                    id: '3ec736fa-28f4-4a6a-acc0-950988d8d33b',
                    practice: {
                      id: '706d5ea7-4a35-4b76-bac2-96962ecbec63',
                      title: 'Closed practice',
                    },
                    open_date: twoDayAgo,
                    close_date: aDayAgo,
                    is_open: true,
                    practice_to_students: [],
                  },
                  {
                    id: '621f1d35-119d-43cf-a5e3-ac3b138546f4',
                    practice: {
                      id: '706d5ea7-4a35-4b76-bac2-96962ecbec63',
                      title: 'Closed practice',
                    },
                    open_date: twoDayAgo,
                    close_date: aDayAgo,
                    is_open: true,
                    practice_to_students: [
                      {
                        id: '2e6c8d55-f116-443a-882f-cc3e36cb112a',
                        student_id: 'b7383b51-7247-4130-a623-e6f9ec6653f3',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'a0846b30-ebc6-4210-8a74-5f37ffafaf8f',
                name: 'Course with open practices',
                years: '2021-2022',
                practice_to_courses: [
                  {
                    id: 'd24571b6-fdfb-40d7-9e11-28a1089da96d',
                    practice: {
                      id: '4bf36c28-6efc-479d-874b-62031e576d21',
                      title: 'Docker',
                    },
                    close_date: aDayLater,
                    practice_to_students: [],
                    is_open: true,
                    open_date: aDayAgo,
                  },
                  {
                    id: '244e8575-9cc5-4b0c-8986-5e29e79f5cd3',
                    practice: {
                      id: '4bf36c28-6efc-479d-874b-62031e576d21',
                      title: 'Docker open and subimited',
                    },
                    close_date: aDayLater,
                    practice_to_students: [
                      {
                        id: 'efc040e7-f114-40bb-ab66-a78e6a90e034',
                        student_id: 'fc2367f8-dd3b-4145-b17d-f894d4a3b1e4',
                      },
                    ],
                    is_open: true,
                    open_date: aDayAgo,
                  },
                  {
                    id: '7d8dff0e-acf5-45ec-b341-fd87be2be46a',
                    practice: {
                      id: '4bf36c28-6efc-479d-874b-62031e576d21',
                      title: 'Docker with no is open but date is good',
                    },
                    close_date: aDayLater,
                    practice_to_students: [],
                    is_open: false,
                    open_date: aDayAgo,
                  },
                  {
                    id: '26e169fa-7856-49bc-85f6-b602dffade8e',
                    practice: {
                      id: '4bf36c28-6efc-479d-874b-62031e576d21',
                      title: 'Docker no isopen submited',
                      //created_at: aDayAgo,
                    },
                    close_date: aDayLater,
                    practice_to_students: [
                      {
                        id: 'efc040e7-f114-40bb-ab66-a78e6a90e034',
                        //created_at: formatRFC3339(new Date()),
                        student_id: 'fc2367f8-dd3b-4145-b17d-f894d4a3b1e4',
                      },
                    ],
                    is_open: false,
                    open_date: aDayAgo,
                  },
                ],
              },
              {
                id: 'e6c0000c-8cd6-4c66-9d34-bc3e517ad625',
                name: 'Empty course',
                years: '2025-2026',
                practice_to_courses: [],
              },
              {
                id: '9f27bfa4-a4c5-4f78-80ee-f25ee3267934',
                name: 'Course with soon open things',
                years: '2020-2021',
                practice_to_courses: [
                  {
                    id: 'fb553d6e-54c5-4c64-8740-a7f94c11effa',
                    is_open: false,
                    open_date: aDayLater,
                    practice_to_students: [],
                    practice: {
                      id: '26ced1d4-1c38-479e-b1f0-450a7e0bd0b9',
                      title: 'Soon...',
                    },
                    close_date: twoDayLater,
                  },
                ],
              },
            ],
          })
        );
      }
    ),
  ],
};
