import React from "react";

function ButtonArchive({ id, onArchive, archived }) {
  return (
    <button
      className="note-item__button-archive"
      onClick={() => onArchive(id)}
    >
      {archived ? "Move" : "Archive"}
    </button>
  );
}

export default ButtonArchive;