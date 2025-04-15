import React from 'react';
import Title from './Components/Title'
import AddBar from './Components/AddBar';
import AddButton from './Components/AddButton';
import ToDoTable from './Components/ToDoTable';
import DoneTable from './Components/DoneTable';
import InProgTable from './Components/InProgTable';

const App: React.FC = () =>{
  return (
    <div className = "App">
      <Title/>
      <AddBar/>
      <AddButton/>
      <ToDoTable/>
      <DoneTable/>
      <InProgTable/>
    </div>
      
  );
};

export default App
