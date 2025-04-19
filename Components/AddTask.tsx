import { useState } from 'react';

interface AddTaskProps {
  onAdd: (taskName: string) => void;
}

export default function AddTask({ onAdd }: AddTaskProps) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}