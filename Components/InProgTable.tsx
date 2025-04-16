import TaskRow from "./TaskRow";
import AddBar from "./AddBar";
import { useState } from "react";

interface Task{
  id: number;
  name: string;
}

export default function InProgTable(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  
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
                  
        <table style={{ marginTop: '120px', marginLeft: '750px' }}>
           <tbody>
              {tasks.map((task) => (
                <TaskRow key={task.id} taskName={task.name} />
              ))}
            </tbody>
        </table>
      </div>
  );
}
  
