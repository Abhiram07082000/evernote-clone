import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../store/actions/noteAction'
import useInput from '../../src/customhooks/useInput'
import {useNavigate} from 'react-router-dom'
import Home from '../components/home/Home'


const NoteEdit = () => {
    const note = useSelector((state)=>state.note)
    console.log('Edit', note)
    const [title, bindTitle, resetTitle] = useInput(note.title)
    const [content, bindContent, resetContent] = useInput(note.content)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote({id:note.id, title, content}))
        console.log({title,content});
        resetTitle()
        resetContent()
        navigate('/')
    }
    return (
        <div className="section center-align">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>  
                <div className="input-field">
                <input type="text" className="validate" {...bindTitle}></input>
                <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                <label className="active" htmlFor="note_content">Content</label>
                </div>
                <button className="btn green">Update</button>
            </form>
        </div>
    )
}

export default NoteEdit
