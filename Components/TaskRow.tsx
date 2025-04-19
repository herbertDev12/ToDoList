import { Task, TaskStatus } from './types';

interface TaskRowProps {
  task: Task;
  onStatusChange: (newStatus: TaskStatus) => void;
  onDelete: () => void;
}

export default function TaskRow({ task, onStatusChange, onDelete }: TaskRowProps) {
  return (
    <tr>
      <td>{task.name}</td>
      <td>
        {task.status !== 'todo' && (
          <button onClick={() => onStatusChange('todo')}>◀️ Todo</button>
        )}
        {task.status !== 'inProgress' && (
          <button onClick={() => onStatusChange('inProgress')}>⏳ In Progress</button>
        )}
        {task.status !== 'done' && (
          <button onClick={() => onStatusChange('done')}>✅ Done</button>
        )}
        <button onClick={onDelete}>🗑️ Delete</button>
      </td>
    </tr>
  );
}