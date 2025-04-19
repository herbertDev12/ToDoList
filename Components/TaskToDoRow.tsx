import DeleteButton from "./DeleteButton";
import CompletionButton from "./CompletionButton";
import { TaskStatus, Task } from "../types";
interface TaskToDoRowProps {
  task: Task;
  onStatusChange: (taskId: number, newStatus: TaskStatus) => void;
  onDelete: (taskId: number) => void;
}

export default function TaskToDoRow({ task, onStatusChange, onDelete }: TaskToDoRowProps) {
  return (
    <tr>
      <td style={{/* tus estilos */}}>
        <CompletionButton 
          onClick={() => onStatusChange(task.id, 'inProgress')}
          status="todo"
        />
        <span style={{ minWidth: '140px' }}>{task.name}</span>
        <DeleteButton onClick={() => onDelete(task.id)} />
      </td>           
    </tr>
  );
}