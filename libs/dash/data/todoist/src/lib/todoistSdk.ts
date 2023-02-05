import { useUserData } from '@beaussan/dash/data/user';
import { TodoistApi } from '@doist/todoist-api-typescript';

type TodoistSdkHook =
  | {
      loaded: false;
      todoistClient: undefined;
    }
  | {
      loaded: true;
      todoistClient: TodoistApi;
    };

export const useTodoistSdk = (): TodoistSdkHook => {
  const { user, fetching } = useUserData();
  if (fetching || !user?.todoistApiToken) {
    return {
      loaded: false,
      todoistClient: undefined,
    };
  }

  const sdk = new TodoistApi(user.todoistApiToken);

  return {
    loaded: true,
    todoistClient: sdk,
  };
};
