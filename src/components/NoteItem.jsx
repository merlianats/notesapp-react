import React from "react";
import NoteItemBody from "./NoteItemBody";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NoteItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className="note-item__action">
        <ButtonDelete id={id} onDelete={onDelete} />
        <ButtonArchive id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}

export default NoteItem;