import { TodoistApi } from '@doist/todoist-api-typescript';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const closeTask = (sdk: TodoistApi | undefined, taskId: string) => {
  return sdk?.closeTask(taskId);
};

export const useCloseTask = (sdk: TodoistApi | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (taskId: string) => {
      await closeTask(sdk, taskId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todoist', 'tasks']);
    },
  });
};
