import TaskDoneRow from "./TaskDoneRow";
import CompletionButton from "./CompletionButton";

// En DoneTable.tsx
interface DoneTableProps {
    tasks: Task[];
    onDelete: (taskId: number) => void;
  }
  
  export default function DoneTable({ tasks, onDelete }: DoneTableProps) {
    return (
      <div>
        <table style={{/* tus estilos */}}>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td style={{/* tus estilos */}}>
                  <CompletionButton 
                    status="done"
                    onClick={() => {}}
                  />
                  <span>{task.name}</span>
                  <DeleteButton onClick={() => onDelete(task.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }