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
            allNotes: notesData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const updatedAllNotes = this.state.allNotes.filter(note => note.id !== id);
        const updatedNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({ 
            notes: updatedNotes,
            allNotes: updatedAllNotes,
        });
    }

    onAddNoteHandler({ title, body }) {
        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
        }

        this.setState((prevState) => {
            const updatedAllNotes = [...prevState.allNotes, newNote];
            return {
                notes: updatedAllNotes,
                allNotes: updatedAllNotes,
            }
        })
    }


    onArchiveNoteHandler(id) {
        const updatedAllNotes = this.state.allNotes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
        );
        this.setState({
            allNotes: updatedAllNotes,
            notes: updatedAllNotes
        });
    }

    onSearchHandler(keyword){
        const filteredNotes = this.state.allNotes.filter((note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
        );
        this.setState({ notes: filteredNotes });
    }

    render() {
        const activeNotes = this.state.notes.filter((note) => !note.archived);
        const archivedNotes = this.state.notes.filter((note) => note.archived);

        return (
            <>
            <NoteHeader onSearch={this.onSearchHandler}/>
            <div className="noteapp-body">
                <NoteInput addNote={this.onAddNoteHandler} />

                <h2>Active Notes</h2>
                <NoteList notes={activeNotes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler}/>
                
                <h2>Archive Notes</h2>
                <NoteList notes={archivedNotes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler}/>
            </div>
            </>
        )
    }
}

export default NoteApp;