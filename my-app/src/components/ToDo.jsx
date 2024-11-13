import React, {useState} from 'react'
import '../style/ToDoForm.css'
import TagType from './TagType';

const ToDoList = ({setToDo}) =>{

    const [taskTo, setTask] = useState ({
        task: "",
        status: "megcs",
        tags: [],
    });

    const inputChange = (event) => {
        const {name, value} = event.target;
        setTask((p) => {
            return {...p, [name]: value};
        });       
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!taskTo.task.trim()){
            alert("Please name your task!")
            return
        }
        setToDo((p) => {
            return [...p, taskTo];
        });
        setTask({
            task: "",
            status: "megcs",
            tags: [],
        });
    }
    const handleTags = (tag) => {
        if(taskTo.tags.some((it) => it === tag)){
            const filt = taskTo.tags.filter((it) => it !== tag);
            setTask((pr) => {
                return {...pr, tags: filt};
            });
        }else{
            setTask((pr) => {
                return {...pr, tags: [...pr.tags, tag]};
            });
        }
      };

    function showTags(event){
        return taskTo.tags.some( (it) => it === event);
    }
    return (
        <header className='do-head'>
                <form onSubmit={handleSubmit}>
                    <input type='text' className='task-add' placeholder='New Task' name='task' value={taskTo.task} onChange={inputChange} required/>
                    <div className='types'>
                        <div>
                            <TagType nameTag="Work" handleTags={handleTags} selected={showTags("Work")}/>
                            <TagType nameTag="Personal" handleTags={handleTags} selected={showTags("Personal")}/>
                            <TagType nameTag="Family" handleTags={handleTags} selected={showTags("Family")}/> 
                        </div>
                        <div>
                            <select className='select-status' name='status' value={taskTo.status} onChange={inputChange}>
                                <option value="megcs">To-Do</option>
                                <option value="foly">In Progress</option>
                                <option value="kesz">Done</option>
                            </select>
                            <button type='submit' className='add-button'>Add</button>
                        </div>
                    </div>
                </form>
            </header>   
    )
}
export default ToDoList