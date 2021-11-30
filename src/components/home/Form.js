import React from 'react'
import useInput from '../../customhooks/useInput'
import { addNote } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
const Form = () => {
    const [title, bindTitle, resetTitle] = useInput("")
    const [content, bindContent, resetContent] = useInput("")
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({title, content}))
        console.log({title,content});
        resetTitle()
        resetContent()
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
                <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default Form
