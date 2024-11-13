import React from "react";
import '../style/TagTypeForm.css';

const TagType = ({nameTag, handleTags, selected}) =>{
    const tagStyle = {
        Work: {backgroundColor: "#cc0000"},
        Personal: {backgroundColor: "#6666ff"},
        Family: {backgroundColor: "#2cb093"},
        default: {backgroundColor: "#dfe3e6"},
    }
    return(
     <button type="button" className='tag' 
        style={selected ? tagStyle[nameTag] ||  tagStyle.default : tagStyle.default}
        onClick={() => handleTags(nameTag)}>{nameTag}</button>
     )
}
export default TagType;