import { Task, TaskStatus } from "../types";
import CompletionButton from "./CompletionButton";
import DeleteButton from "./DeleteButton";
interface InProgTableProps {
  tasks: Task[];
  onStatusChange: (taskId: number, newStatus: TaskStatus) => void;
  onDelete: (taskId: number) => void;
}

export default function InProgTable({ tasks, onStatusChange, onDelete }: InProgTableProps) {
  return (
    <div>
      <table style={{ marginTop: '120px', marginLeft: '750px' }}>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td style={{/* tus estilos */}}>
                <CompletionButton 
                  onClick={() => onStatusChange(task.id, 'done')}
                  status="inProgress"
                />
                <span style={{ minWidth: '140px' }}>{task.name}</span>
                <DeleteButton onClick={() => onDelete(task.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
