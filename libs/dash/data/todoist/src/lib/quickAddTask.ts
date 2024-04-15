import { TodoistApi } from '@doist/todoist-api-typescript';
import { QuickAddTaskArgs } from '@doist/todoist-api-typescript/dist/types/requests';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const quickAddTask = async (sdk: TodoistApi, args: QuickAddTaskArgs) => {
  return sdk.quickAddTask(args);
};

export const useQuickAddTask = (sdk: TodoistApi | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: QuickAddTaskArgs) =>
      sdk && quickAddTask(sdk, args),
    onSuccess: () => {
      queryClient.invalidateQueries(['todoist', 'tasks']);
    },
  });
};
