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
            alert("Feladat megnevezése kötelező!")
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
                    <input type='text' className='task-add' placeholder='Új feladat megadása' name='task' value={taskTo.task} onChange={inputChange} required/>
                    <div className='types'>
                        <div>
                            <TagType nameTag="Munka" handleTags={handleTags} selected={showTags("Munka")}/>
                            <TagType nameTag="Személyes" handleTags={handleTags} selected={showTags("Személyes")}/>
                            <TagType nameTag="Családi" handleTags={handleTags} selected={showTags("Családi")}/> 
                        </div>
                        <div>
                            <select className='select-status' name='status' value={taskTo.status} onChange={inputChange}>
                                <option value="megcs">Megcsinálandó</option>
                                <option value="foly">Folyamatban</option>
                                <option value="kesz">Kész</option>
                            </select>
                            <button type='submit' className='add-button'>Megadás</button>
                        </div>
                    </div>
                </form>
            </header>   
    )
}
export default ToDoList