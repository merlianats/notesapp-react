import React from "react";
import NoteList from "./NoteList";
import { notesData } from "../utils/data";
import NoteHeader from "./NoteHeader";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: notesData(),
        }
    }

    render() {
        return (
            <>
            <NoteHeader/>
            <div className="noteapp-body">
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes}/>
            </div>
            </>
        )
    }
}

export default NoteApp;