import { useState } from 'react';
import AddBar from './AddTask';
import TaskToDoRow from './TaskToDoRow';
import { Task, TaskStatus } from '../types';

interface ToDoTableProps{
  tasks,
}

export default function ToDoTable({ 
  tasks, 
  onStatusChange, 
  onDelete 
}: ToDoTableProps) { // Add props here
  // Remove local state for tasks as they're now coming from props
  const [newTask, setNewTask] = useState('');
  
  const handleAddTask = () => {
    if (newTask.trim()) {
      onStatusChange(Date.now(), 'todo'); // Update this to use the prop
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
              task={task} 
              onStatusChange={(newStatus) => onStatusChange(task.id, newStatus)}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

