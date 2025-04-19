import React from 'react';
import { useState } from 'react';
import { Task } from '../types';
interface AddBarProps {
  onAdd: (task: Task) => void;
}

export default function AddBar({ onAdd }: AddBarProps) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAdd({
        id: Date.now(),
        name: newTask,
        status: 'todo'
      });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{/* tus estilos */}}>
      {/* ... resto del componente */}
    </form>
  );
}