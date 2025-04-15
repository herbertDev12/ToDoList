import React, { useState } from 'react';

export default function CompletionButton(){
    const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(true);
    // Additional completion logic
  };

  return (
    <button 
      onClick={handleComplete}
      disabled={isComplete}
      style={{
        backgroundColor: isComplete ? '#cccccc' : '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px'
      }}
    >
      {isComplete ? '✓ Completed' : 'Mark Complete'}
    </button>
  );
}