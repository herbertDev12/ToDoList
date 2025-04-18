// En App.tsx (componente principal)
import { useState } from 'react';
import Title from './Components/Title';
import ToDoTable from './Components/ToDoTable';
import DoneTable from './Components/DoneTable';
import InProgTable from './Components/InProgTable';

export type TaskStatus = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: number;
  name: string;
  status: TaskStatus;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Mover tarea entre estados
  const handleStatusChange = (taskId: number, newStatus: TaskStatus) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Eliminar tarea
  const handleDeleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <Title/>
      <ToDoTable
        tasks={tasks.filter(t => t.status === 'todo')}
        onStatusChange={handleStatusChange}
        onDelete={handleDeleteTask}
      />
      <InProgTable
        tasks={tasks.filter(t => t.status === 'inProgress')}
        onStatusChange={handleStatusChange}
        onDelete={handleDeleteTask}
      />
      <DoneTable
        tasks={tasks.filter(t => t.status === 'done')}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
