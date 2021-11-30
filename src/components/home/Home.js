import React from 'react'
import Form from './Form'
import NotesList from '../../Notes/NotesList'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


const Home = () => {
    useFirestoreConnect({collection:'notes', orderBy:['createdAt', 'desc']})
    const notes= useSelector((state)=>state.firestore.ordered.notes)
    console.log('Notes',notes)
    const loadingAnimation = (
        <div className="container loading-anim">
            <div className="preloader-wrapper active">
                <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
            </div>
    </div>
    </div>
    )
    const homeMarkUp = !isLoaded?(notes,<Form/>)(
        loadingAnimation
    ):isEmpty(notes,<Form/>)?(loadingAnimation):(
    <div className="container">
        <div className="row center-align">
            
            <div className="col m12 l7 xl7 s12"><Form/></div>
            
            <div className="notes-list-heading col offset-m1 l5 xl5 offset-s1">
                <h4 className="black-text text-darken-3">Notes List</h4>
                <NotesList notes={notes}/>
            </div>
            
        </div>
    </div>
    )
    return (
        homeMarkUp
    )
}

export default Home
