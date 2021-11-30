import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from "./components/layout/NavBar"
import Home from './components/home/Home';
import Favorites from '../src/Notes/Favorites';
import react from 'react';
import NoteDetail from '../src/Notes/NoteDetail';
import NoteEdit from '../src/Notes/NoteEdit';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
          <Route path="/note/:id" element={<NoteDetail/>}></Route>
          <Route path="/edit/:id" element={<NoteEdit/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
