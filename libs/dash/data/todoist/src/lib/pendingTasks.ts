import { TodoistApi, Task } from '@doist/todoist-api-typescript';
import { useQuery } from '@tanstack/react-query';

export const getTodoistPendingTasks = async (
  sdk: TodoistApi
): Promise<Task[]> => {
  return sdk.getTasks({ filter: 'today | overdue' });
};

export const usePendingTodoistTasks = (sdk: TodoistApi | undefined) =>
  useQuery({
    queryKey: ['todoist', 'tasks', 'pending'],
    queryFn: async () => getTodoistPendingTasks(sdk!),
    enabled: !!sdk,
  });
