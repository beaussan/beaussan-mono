import { Meta, Story } from '@storybook/react';
import HandOffId from '../../pages/app/handoff/[handoffId]';
import { fullScreenBody } from '../../stories/decorators';
import { graphql } from 'msw';
import {
  HandOffByIdQuery,
  HandOffByIdQueryVariables,
  PracticeYieldTypeEnum,
} from '../../generated/graphql';
import { add, formatRFC3339 } from 'date-fns';
import { clientEnvs } from '@beaussan/courso/data/env-config';

export default {
  component: HandOffId,
  title: 'Pages/HandOffId',
  decorators: [fullScreenBody],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const gqlEndpoint = graphql.link(
  clientEnvs.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL
);

const Template: Story = () => <HandOffId />;

export const FullExample = Template.bind({});

const aDayAgo = formatRFC3339(add(new Date(), { days: -1 }));
const aDayLater = formatRFC3339(add(new Date(), { days: 1 }));

FullExample.parameters = {
  msw: [
    gqlEndpoint.query<HandOffByIdQuery, HandOffByIdQueryVariables>(
      'HandOffById',
      (req, res, ctx) =>
        res(
          ctx.data({
            practiceToCourseByPk: {
              id: 'a49bf50d-d336-4ba5-9a28-ef64192b953a',
              practice: {
                id: 'd66592d8-5fe3-4cf9-a12f-1c8bc468a77a',
                title: 'Practice title',
                description: 'A description for the practice',
                practiceYields: [
                  {
                    id: '1b6e04a2-f244-427a-bf46-5899932a70f4',
                    description: 'The url of the git repository',
                    name: 'Github repository',
                    method: PracticeYieldTypeEnum.GitRepo,
                  },
                  {
                    id: '424de02f-2e02-46ae-ae43-53656e6a4fc8',
                    method: PracticeYieldTypeEnum.Url,
                    name: 'Circle CI link with all custom',
                    description: 'A description',
                    meta: {
                      label: 'A CUSTOM TITLE',
                    },
                  },
                  {
                    id: '34831c5c-971b-4cd5-8a1c-7439a4c95ea0',
                    method: PracticeYieldTypeEnum.Url,
                    name: 'Circle CI link',
                  },
                  {
                    id: '07168a72-5e96-4038-b757-27804d154bb3',
                    method: PracticeYieldTypeEnum.Blob,
                    name: 'Blob full custom',
                    description: 'A description',
                    meta: {
                      label: 'A custom label',
                    },
                  },
                  {
                    id: '2c5fd5c1-9cb3-4254-99d0-3008a1116487',
                    method: PracticeYieldTypeEnum.Blob,
                    name: 'Blob simple',
                  },
                  {
                    id: '5af56446-5c24-48dd-a39f-e23250d69b98',
                    method: PracticeYieldTypeEnum.Code,
                    name: 'Js file',
                    description: 'A random js file',
                    meta: {
                      lang: 'javascript',
                    },
                  },
                ],
              },
              practiceToStudents: [],
              openDate: aDayAgo,
              is_open: true,
              closeDate: aDayLater,
            },
          })
        )
    ),
  ],
  nextRouter: {
    path: '/app/handoff/[handoffId]',
    asPath: '/app/handoff/396e93c9-fda2-41d3-b7e1-a22cbe468238',
    query: {
      handoffId: '396e93c9-fda2-41d3-b7e1-a22cbe468238',
    },
  },
};
