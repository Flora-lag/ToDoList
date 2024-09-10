import React, {useState, useEffect} from 'react';
import ToDoList from './components/ToDo.jsx';
import Task from './components/Task.jsx';
import './App.css'

const oldTask = localStorage.getItem("tasks");

const App = () => {
  const [tasks,setToDo]= useState (JSON.parse (oldTask) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (indexTask) => {
    const newTasks =tasks.filter((task, index) => index !== indexTask);
    setToDo(newTasks);
  }
  const editTask = (indexTasks, newData) => {
    const updated = [...tasks];
    updated[indexTasks] = {
      ...updated[indexTasks], ...newData,};
    
    setToDo(updated);
  }
  return(
      <>
      <div className='app'>
        <header className='head'>Feladatok</header>
        <ToDoList setToDo={setToDo} />
        <main className='main'>
        <Task nameTag="Megcsinálandó 🪷" tasks={tasks} className='box' status="megcs" deleteTask={deleteTask} editTask={editTask}/>
        <Task nameTag="Folyamatban 💮" tasks={tasks} status="foly" deleteTask={deleteTask} editTask={editTask}/>
        <Task nameTag="Elkészített 🌸" tasks={tasks} status="kesz" deleteTask={deleteTask} editTask={editTask}/>
        </main> 
      </div>
      <footer className='app'>
        <div className='flower'></div>
      </footer>
      </>
  )
}

export default App