import CompletionButton from "./CompletionButton"
import DeleteButton from "./DeleteButton"

export default function TaskRow() {
    return (
      <div>
        <th style={{ 
          border: '4px double #009688', 
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '160px' 
        }}>
          <CompletionButton/>
          <span>(Task1)</span>
          <DeleteButton/>
        </th>           
      </div>
    );
  }