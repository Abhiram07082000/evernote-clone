import React from 'react'
import Note from './Note'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const NotesList = ({notes}) => {
    return (
        <div className="notesList">
            {notes && notes.map(note=><Note note={note} key={note.id}/>)}
        </div>
    )
}

export default NotesList
