import React from "react";
import SearchBar from "./SearchBar";

function NoteHeader({ onSearch }){
    return (
        <div className="noteapp-header">
            <h2>NOTES APP</h2>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default NoteHeader;