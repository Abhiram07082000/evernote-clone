import React from 'react'
import {deleteNote, favoNote} from '../store/actions/noteAction'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }
    const favoNoteHandler = () => {
        dispatch(favoNote(note))
    }
    const editNoteHandler = () => {
        dispatch({type:'EDIT_NOTE', payload:note})
    }
    const heartMarkUp = note.favorite ? "favorite" : "favorite_border"
    return (
        <div>
            <div className="note white">
                <div className="right-align">
                    <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={favoNoteHandler}>{heartMarkUp}</i>
                    <Link to={"/note/"+note.id}>
                    <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={editNoteHandler}>launch</i>
                    </Link>
                    <Link to={`/edit/${note.id}`}>
                    <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={editNoteHandler}>edit</i>
                    </Link>
                    <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={deleteNoteHandler}>delete</i>
                </div>
            <Link to={"/note/"+note.id}>
            <h5 className="notesList black-text">{note.title}</h5>
            </Link>
            <p className="truncate">{note.content}</p>
            <br></br>
            <p className="grey-text">Added {moment(note.createdAt.toDate()).fromNow()}</p>
            </div>   
            
        </div>
    )
}

export default Note
