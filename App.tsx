import React from 'react';
import Title from './Components/Title'
import ToDoTable from './Components/ToDoTable';
import DoneTable from './Components/DoneTable';
import InProgTable from './Components/InProgTable';



const App: React.FC = () =>{
  return (
    <div className = "App">
      <Title/>
      
      <ToDoTable/>
      <DoneTable/>
      <InProgTable/>
    </div>
      
  );
};

export default App
