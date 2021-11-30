import firebase from "firebase/compat";
export const addNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const db = firebase.firestore();
        const noteValues = db.collection("notes")
        .add({
            ...note,
            favorite: false,
            createdAt: new Date()
        })
        .then(()=>{
        console.log("Note Added Successfully!")
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const db = firebase.firestore();
        const noteValues = db.collection("notes").doc(note.id).delete()
        
        .then(()=>{
        console.log("Note Deleted Successfully!")
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const favoNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const favoritenote = !note.favorite
        const db = firebase.firestore();
        const noteValues = db.collection("notes").doc(note.id).update({
            favorite: favoritenote
        })
        .then(()=>{
            console.log("Favorites button is toggled Successfully!")
            })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const updateNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        
        const db = firebase.firestore();
        const noteValues = db.collection("notes").doc(note.id).update({
            title:note.title,
            content: note.content
        })
        .then(()=>{
            console.log("Favorites button is toggled Successfully!")
            })
        .catch((err) => {
            console.log(err)
        })
    }
}
