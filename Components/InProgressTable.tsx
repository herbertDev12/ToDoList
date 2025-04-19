import { Task, TaskStatus } from '../types';
import TaskRow from './TaskRow';

interface InProgressTableProps {
  tasks: Task[];
  onStatusChange: (taskId: number, newStatus: TaskStatus) => void;
  onDelete: (taskId: number) => void;
}

export default function InProgressTable({ tasks, onStatusChange, onDelete }: InProgressTableProps) {
  return (
    <div className="column">
      <h2>In Progress({tasks.length})</h2>
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
