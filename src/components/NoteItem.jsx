import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ id, title, body, createdAt  }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
        </div>
    )
}

export default NoteItem;