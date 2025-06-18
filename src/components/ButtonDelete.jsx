import React from "react";

function ButtonDelete({ onDelete, id }) {
    return <button className="note-item__button-delete" onClick={() => onDelete(id)}>Delete</button>
}

export default ButtonDelete;