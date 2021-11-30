import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

const NoteDetail = (props) => {
    const {id}=useParams()
    useFirestoreConnect({collection:'notes', doc:id})
    const note= useSelector(({firestore:{data}})=>data.notes&&data.notes[id])
    const noteMarkUp = !isLoaded(note)? (
        <div className="container section">
            <div className="center-align detail card z-depth-0">
        <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
                <div className="circle"></div>
            </div><div className="gap-patch">
                <div className="circle"></div>
            </div><div className="circle-clipper right">
                <div className="circle"></div>
            </div>
            </div>
        </div>
        </div>
        </div>
    ):isEmpty(note)?(
        <div className="container section">
            <div className="center-align detail card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                    Note not found                  </span>
                    <p></p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    Check the id
                    <div></div>
                </div>
            </div>
        </div>
    ) : (
        <div className="container section">
            <div className="center-align detail card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                    {note.title}
                    </span>
                    <p>{note.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{moment(note.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )
    return (
        noteMarkUp
    )
}

export default NoteDetail
