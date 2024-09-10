import React from "react";
import '../style/TaskForm.css';
import Cards from "./Cards";

const Task = ({nameTag, tasks, status, deleteTask, editTask}) => {
   
    return(
        <section className='app-task'>
            <b>{nameTag}</b>
           {
            tasks.map((task, index) => task.status === status && <Cards key={index} nameTag={task.task} tags={task.tags} deleteTask={deleteTask} editTask={editTask} index={index}  />) 
           }
        </section>  
    );
};
export default Task;