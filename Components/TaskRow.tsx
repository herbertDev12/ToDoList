import CompletionButton from "./CompletionButton";
import DeleteButton from "./DeleteButton";

interface TaskRowProps {
  taskName: string;
}

export default function TaskRow({taskName} : TaskRowProps ) {
  return (
    <tr>
      <td style={{ 
        border: '4px double #009688', 
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        margin: '5px 0'
      }}>
        <CompletionButton/>
        <span style={{ minWidth: '120px' }}>{taskName}</span>
        <DeleteButton/>
      </td>           
    </tr>
  );
}