import { MockUserDataContextProvider } from '@beaussan/dash/data/user';
import { TaskPanel } from './TaskPannel';
import { type Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

export default {
  title: 'TaskPannel',
  component: TaskPanel,
  decorators: [
    (story) => (
      <MockUserDataContextProvider
        params={{
          fetching: false,
          userId: 'd0800c00-effe-4e66-b7c3-827dce5121ea',
          user: {
            id: 'd0800c00-effe-4e66-b7c3-827dce5121ea',
            canSeeTraefikContent: true,
            todoistApiToken: 'b99eafce36facda64621df862a23f69d12fe952e',
            email: '',
            createdAt: '',
            updatedAt: '',
          },
          error: undefined,
        }}
      >
        {story()}
      </MockUserDataContextProvider>
    ),
  ],
} satisfies Meta<typeof TaskPanel>;

type Story = StoryObj<typeof TaskPanel>;

const getAllTasks = rest.get(
  'https://api.todoist.com/rest/v2/tasks',
  (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.json([
        {
          id: '1',
          duration: null,
          order: 1,
          content: 'Complete the project',
          description: '',
          projectId: 'project1',
          isCompleted: false,
          labels: [],
          priority: 1,
          commentCount: 0,
          createdAt: '2023-06-08T10:00:00Z',
          url: 'https://todoist.com/app/today/task/1',
          creatorId: 'user1',
        },
        {
          id: '7890443575',
          assigner_id: null,
          assignee_id: null,
          project_id: '2242897017',
          section_id: null,
          parent_id: null,
          order: 141,
          content: 'Add shortcut to add a task from dash ui',
          description: '',
          is_completed: false,
          labels: [],
          priority: 1,
          comment_count: 0,
          creator_id: '29488169',
          created_at: '2024-04-11T13:58:56.845699Z',
          due: {
            date: '2024-04-11',
            string: 'Apr 11',
            lang: 'en',
            is_recurring: false,
          },
          url: 'https://todoist.com/showTask?id=7890443575',
          duration: null,
        },
        {
          id: '3',
          duration: null,
          order: 3,
          content: 'Urgent task',
          description: '',
          projectId: 'project1',
          isCompleted: false,
          labels: [],
          priority: 4,
          commentCount: 0,
          createdAt: '2023-06-08T12:00:00Z',
          url: 'https://todoist.com/app/today/task/3',
          creatorId: 'user1',
        },
        {
          id: '2',
          duration: null,
          order: 2,
          content: 'Submit the report',
          description: '',
          projectId: 'project2',
          isCompleted: false,
          labels: [],
          priority: 2,
          commentCount: 0,
          createdAt: '2023-06-08T11:00:00Z',
          url: 'https://todoist.com/app/today/task/2',
          creatorId: 'user1',
          due: {
            isRecurring: false,
            string: 'tomorrow',
            date: '2023-06-09',
          },
        },
      ])
    );
  }
);

export const Default = {
  render: () => <TaskPanel />,
  parameters: {
    msw: [getAllTasks],
  },
} satisfies Story;
