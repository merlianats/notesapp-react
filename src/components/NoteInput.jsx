import React from 'react';

class NoteInput extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        console.log(this.state)
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Create Note</h2>
                <p className='note-input__title__char-limit'>Remaining characters : {50 - this.state.title.length}</p>
                <input className="note-input-title" type="text" placeholder="Ttile" value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={50} required />
                <textarea className="note-input-body" placeholder="Write your note in here ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
                <button type="submit">Create</button>
            </form>
        )
    }
}

export default NoteInput;
