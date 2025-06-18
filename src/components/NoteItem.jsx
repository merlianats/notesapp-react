import React from "react";
import NoteItemBody from "./NoteItemBody";
import ButtonDelete from "./ButtonDelete";

function NoteItem({ id, title, body, createdAt, onDelete }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
            <div className="note-item__delete">
                <ButtonDelete id={id} onDelete={onDelete} />
            </div>
        </div>
    )
}

export default NoteItem;