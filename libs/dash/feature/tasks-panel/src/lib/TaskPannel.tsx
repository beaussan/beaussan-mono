import {
  usePendingTodoistTasks,
  useQuickAddTask,
  useTodoistSdk,
} from '@beaussan/dash/data/todoist';
import { TaskDisplay } from './Task';

export const TaskPanel = () => {
  const { todoistClient, loaded } = useTodoistSdk();
  const tasks = usePendingTodoistTasks(todoistClient);
  const createQuickTask = useQuickAddTask(todoistClient);

  if (!loaded || tasks.isPaused || !tasks.isFetched || !tasks.data) {
    return <div>...</div>;
  }

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl font-bold">
        Tasks{' '}
        <button
          onClick={() => {
            createQuickTask.mutate({
              text: prompt() ?? 'Unknown task tod',
            });
          }}
        >
          Add task
        </button>
      </h2>
      {tasks.data.map((item) => (
        <TaskDisplay task={item} key={item.id} />
      ))}
    </div>
  );
};
