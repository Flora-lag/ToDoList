import React, {useState} from "react";
import '../style/CardsForm.css';
import TagType from "./TagType";

const Cards = ({nameTag, tags=[], deleteTask, editTask, index, moveTask, currentStatus}) =>{
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
                            <TagType key={index} nameTag={tag} selected={true} handleTags={() => {}} />
                        ))
                    }
                </div>
            </div>
            {isEdit ? (
                <button className="save" onClick={editSubmit}>Mentés</button>
            ): 
            <div className="task-change" title="szerkesztés" onClick={handleClick}>✏️</div>
            }
            
            <div className="task-delete" title="törlés" onClick={() => deleteTask(index)}>❌</div>
            <div className="task-move" >{currentStatus !== "megcs" && (
                <button onClick={() => moveTask(index, "megcs")} className="mb" title="megcsinálandó">📌</button>)}</div>
            <div className="task-move" >{currentStatus !== "foly" && (
                <button onClick={() => moveTask(index, "foly")} className="mb" title="folyamatban">⚙️</button>)}</div>
            <div className="task-move" >{currentStatus !== "kesz" && (
                <button onClick={() => moveTask(index, "kesz")} className="mb" title="kész">✔️</button>)}</div>    

        </article>
    )
}
export default Cards;