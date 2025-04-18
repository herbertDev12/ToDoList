import CompletionButton from "./CompletionButton";
import DeleteButton from "./DeleteButton";

interface TaskToDoRowProps {
  taskId: number;
  taskName: string;
  onDelete: (taskId: number) => void;
}

export default function TaskToDoRow({ taskId, taskName, onDelete} : TaskToDoRowProps ) {
  return (
    <tr>
      <td style={{ 
        border: '4px double #009688',
        padding: '8px',
        display: 'flex',
        gap: '10px',
        margin: '5px 0',
        minWidth: '10px',
        marginLeft: '-600px',
        justifyContent: 'space-between'
      }}>
        <CompletionButton/>
        <span style={{ minWidth: '140px' }}>{taskName}</span>
        <DeleteButton onClick={() => onDelete(taskId)} />
      </td>           
    </tr>
  );
}