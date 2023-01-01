import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Unsplash from './pages/Unsplash';
import Pexels from './pages/Pexels';
import Instruction from './pages/Instruction';
import Pixebay from './pages/Pixebay';
import Fullscreen from './components/Fullscreen';
import Up from './components/Up';

function App() {
  return (
    <div className="App" id='App'>
        <NavBar/>
        <Fullscreen/>
        <Up/>

        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/unsplash" element={<Unsplash/>}/>
            <Route path="/pexels" element={<Pexels/>}/>
            <Route path="/pixebay" element={<Pixebay/>}/>

            <Route path="/instructions" element={<Instruction/>}/>

            <Route path="*" element={<p>404</p>}/>
        </Routes>
    </div>
  );
}

export default App;
