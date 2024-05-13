import type { Meta, StoryObj } from '@storybook/react';
import { TaskDisplay } from './Task';

export default {
  title: 'TaskDisplay',
  component: TaskDisplay,
} satisfies Meta<typeof TaskDisplay>;

type Story = StoryObj<typeof TaskDisplay>;

export const Default: Story = {
  render: () => (
    <TaskDisplay
      task={{
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
      }}
    />
  ),
};

export const WithDueDate: Story = {
  args: {
    task: {
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
  },
};

export const HighPriority: Story = {
  args: {
    task: {
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
  },
};
