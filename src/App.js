import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Unsplash from './pages/Unsplash';
import Pexels from './pages/Pexels';
import Instruction from './pages/Instruction';

function App() {
  return (
    <div className="App">
        <NavBar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/unsplash" element={<Unsplash/>}/>
            <Route path="/pexels" element={<Pexels/>}/>
            <Route path="/instructions" element={<Instruction/>}/>

            <Route path="*" element={<p>404</p>}/>
        </Routes>
    </div>
  );
}

export default App;
