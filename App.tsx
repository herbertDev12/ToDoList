import { useState } from 'react';
import AddTask from './AddTask';
import TodoTable from './TodoTable';
import InProgressTable from './InProgressTable';
import DoneTable from './DoneTable';
import { Task, TaskStatus } from './types';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskName: string) => {
    setTasks(prev => [...prev, {
      id: Date.now(),
      name: taskName,
      status: 'todo'
    }]);
  };

  const handleStatusChange = (taskId: number, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleDelete = (taskId: number) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <TodoTable
          tasks={tasks.filter(t => t.status === 'todo')}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
        <InProgressTable
          tasks={tasks.filter(t => t.status === 'inProgress')}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
        <DoneTable
          tasks={tasks.filter(t => t.status === 'done')}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
