import { Task, TaskStatus } from '../types';
import TaskRow from './TaskRow';

interface TodoTableProps {
  tasks: Task[];
  onStatusChange: (taskId: number, newStatus: TaskStatus) => void;
  onDelete: (taskId: number) => void;
}

export default function TodoTable({ tasks, onStatusChange, onDelete }: TodoTableProps) {
  return (
    <div className="column">
      <h2>To-Do ({tasks.length})</h2>
      <table>
        <tbody>
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onStatusChange={(newStatus) => onStatusChange(task.id, newStatus)}
              onDelete={() => onDelete(task.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

