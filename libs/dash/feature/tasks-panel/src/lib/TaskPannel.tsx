import {
  usePendingTodoistTasks,
  useQuickAddTask,
  useTodoistSdk,
} from '@beaussan/dash/data/todoist';
import { TaskDisplay } from './Task';
import { Button } from '@beaussan/shared/ui/ui-kit';

export const TaskPanel = () => {
  const { todoistClient, loaded } = useTodoistSdk();
  const tasks = usePendingTodoistTasks(todoistClient);
  const createQuickTask = useQuickAddTask(todoistClient);

  if (!loaded || tasks.isPaused || !tasks.isFetched || !tasks.data) {
    return <div>...</div>;
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center">
        <h2 className="text-xl font-bold">Tasks</h2>
        <div className="ml-auto">
          <Button
            onClick={() => {
              createQuickTask.mutate({
                text: prompt() ?? 'Unknown task tod',
              });
            }}
          >
            Add task
          </Button>
        </div>
      </div>
      {tasks.data.map((item) => (
        <TaskDisplay task={item} key={item.id} />
      ))}
    </div>
  );
};
