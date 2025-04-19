import { useState } from 'react';
import AddBar from './AddBar';
import TaskToDoRow from './TaskToDoRow';


interface Task {
  id: number;
  name: string;
}

export default function ToDoTable() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleDeleteTask = (taskId: number) => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }

    const handleAddTask = () => {
        if (newTask.trim()) {
        setTasks([...tasks, { id: Date.now(), name: newTask }]);
        setNewTask('');
        }
    };

    return (
        <div>
          <AddBar 
            newTask={newTask} 
            setNewTask={setNewTask} 
            onAdd={handleAddTask} 
          />
          
          <table style={{ marginTop: '120px', marginLeft: '250px' }}>
            <thead>To-Do</thead>
            <tbody>
              {tasks.map((task) => (
                <TaskToDoRow 
                  key={task.id} 
                  taskName={task.name}
                  taskId={task.id}
                  onDelete={handleDeleteTask}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
    }

