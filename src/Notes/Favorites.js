import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NoteList from '../Notes/NotesList'
const Favorites = () => {
    useFirestoreConnect({collection:'notes', where:['favorite','==',true], 
    orderBy:['createdAt', 'desc'], storeAs:'favnotes'})
    const favnotes= useSelector((state)=>state.firestore.ordered.favnotes)
    console.log('Favs',favnotes)
    return (
        <div className="container">
            <div className="row center-align">
                
                <div className="col offset-m1 offset-l1 offset-xl1 offset-s1"><NoteList notes={favnotes}/></div>
                
            </div>
        </div>
    )
}

export default Favorites
