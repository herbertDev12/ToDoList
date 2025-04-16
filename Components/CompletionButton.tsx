import { useState } from 'react';

export default function CompletionButton() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <button 
      onClick={() => setIsComplete(!isComplete)}
      style={{
        backgroundColor: isComplete ? '#4CAF50' : '#cccccc',
        padding: '3px 8px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
      }}
    >
      {isComplete ? '✓' : '◻'}
    </button>
  );
}