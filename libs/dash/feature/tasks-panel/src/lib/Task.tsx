import clsx from 'clsx';
import type { Task } from '@doist/todoist-api-typescript';
import { useCloseTask, useTodoistSdk } from '@beaussan/dash/data/todoist';

const PriorityCircle = ({
  priority,
  taskId,
}: {
  priority: 1 | 2 | 3 | 4;
  taskId: string;
}) => {
  const { todoistClient } = useTodoistSdk();
  const closeTask = useCloseTask(todoistClient);
  const baseCss = 'rounded-full h-5 w-5 border-2';

  const theme = {
    1: 'bg-gray-200 border-gray-400',
    2: 'bg-blue-200 border-blue-400',
    3: 'bg-yellow-200 border-yellow-400',
    4: 'bg-red-200 border-red-400',
  }[priority];

  return (
    <button
      className={clsx(baseCss, theme)}
      onClick={() => closeTask.mutate(taskId)}
    />
  );
};

export const TaskDisplay = ({ task }: { task: Task }) => {
  return (
    <a
      className="flex items-center bg-gray-100 rounded-lg py-2 px-4"
      href={`https://todoist.com/app/today/task/${task.id}`}
    >
      <PriorityCircle
        priority={task.priority as 1 | 2 | 3 | 4}
        taskId={task.id}
      />
      <div className="ml-4">
        <div>{task.content}</div>
        <div className="text-sm">
          {task.due ? <div>{task.due.date}</div> : null}
        </div>
      </div>
    </a>
  );
};
