import { useState } from 'react';
import { TaskStatus } from '../types';
// En CompletionButton.tsx
interface CompletionButtonProps {
  status: TaskStatus;
  onClick: () => void;
}

export default function CompletionButton({ status, onClick }: CompletionButtonProps) {
  const buttonConfig = {
    todo: {
      symbol: '◻',
      nextAction: '▶ Start',
      color: '#4CAF50'
    },
    inProgress: {
      symbol: '↩',
      nextAction: 'Complete',
      color: '#FFC107'
    },
    done: {
      symbol: '✓',
      nextAction: '',
      color: '#2196F3'
    }
  };

  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: buttonConfig[status].color,
        padding: '3px 8px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        color: 'white'
      }}
    >
      {buttonConfig[status].symbol} {buttonConfig[status].nextAction}
    </button>
  );
}