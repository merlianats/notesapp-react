import React from "react";
import NoteList from "./NoteList";
import { notesData } from "../utils/data";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: notesData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        })
    }

    render() {
        return (
            <>
            <NoteHeader/>
            <div className="noteapp-body">
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes}/>
            </div>
            </>
        )
    }
}

export default NoteApp;