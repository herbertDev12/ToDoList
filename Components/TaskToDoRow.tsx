import DeleteButton from "./DeleteButton";
import CompletionButton from "./CompletionButton";
import { TaskStatus, Task } from "../types";
interface TaskToDoRowProps {
  task: Task; 
  onStatusChange: (newStatus: TaskStatus) => void; 
  onDelete: (taskId: number) => void;
}

export default function TaskToDoRow({ task, onStatusChange, onDelete }: TaskToDoRowProps) {
  return (
    <tr>
      <td>
        <CompletionButton 
          onClick={() => onStatusChange('inProgress')}
          status="todo"
        />
        <span style={{ minWidth: '140px' }}>{task.name}</span>
        <DeleteButton onClick={() => onDelete(task.id)} />
      </td>           
    </tr>
  );
}