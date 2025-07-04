import React from "react";
import { showFormattedData } from "../utils/data";

function NoteItemBody({ title, body, createdAt}){
    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{showFormattedData(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemBody;