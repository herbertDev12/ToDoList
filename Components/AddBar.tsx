import React from 'react';
// En AddBar.tsx (modificar para incluir estado inicial)
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