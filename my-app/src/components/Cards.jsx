import React, {useState} from "react";
import '../style/CardsForm.css';
import TagType from "./TagType";

const Cards = ({nameTag, tags, deleteTask, editTask, index}) =>{
    const [isEdit, setEdit] = useState(false);
    const[ctask, setCurrent] = useState(nameTag);

    const handleClick = () => {
        setEdit(true);
    }
    const editChange = (event) => {
        setCurrent(event.target.value);
    }
    const editSubmit = () => {
        editTask(index, {task: ctask});
        setEdit(false);
    }
    return(
        <article className="article-card">
            {
            isEdit ? (
                <input type="text" className="edit-input" value={ctask} onChange={editChange} />
            ) : (<p className="text-card">{nameTag}</p>)}
            
            <div className="card-tag" >
                <div className="tags">
                    {
                        tags.map((tag, index) => (
                            <TagType key={index} nameTag={tag} selected={true} />
                        ))
                    }
                </div>
            </div>
            {isEdit ? (
                <button className="save" onClick={editSubmit}>Mentés</button>
            ): 
            <div className="task-change" onClick={handleClick}>✏️</div>
            }
            
            <div className="task-delete" onClick={() => deleteTask(index)}>❌</div>
        </article>
    )
}
export default Cards;