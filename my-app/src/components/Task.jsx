import React from "react";
import '../style/TaskForm.css';
import Cards from "./Cards";

const Task = ({nameTag, tasks, status, deleteTask, editTask, moveTask}) => {

    return(
        <section className='app-task'>
            <b>{nameTag}</b>
           {tasks.filter(task => task.status === status).map((task, index) => (
            <Cards
                key={index}
                nameTag={task.task}
                tags={task.tags || []}
                deleteTask={() => deleteTask(index)}
                editTask={editTask}
                index={index}
                moveTask={moveTask}
                currentStatus={task.status}
            />
           ))}
        </section>  
    );
};
export default Task;