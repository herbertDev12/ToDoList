// AddBar.tsx (completo)
import React, { FormEvent } from 'react';

interface AddBarProps {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  onAdd: () => void;
}

export default function AddBar({ newTask, setNewTask, onAdd }: AddBarProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} style={{
      position: "absolute",
      top: "100px",
      left: "750px",
    }}>
      <input 
        type="text" 
        placeholder="Type here..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{
          width: '150px',
          padding: '5px',
          marginRight: '10px'
        }}
      />           
      <button 
        type="submit"
        style={{
          padding: '5px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >+</button>
    </form>
  );
}