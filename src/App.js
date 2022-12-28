import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Unsplash from './pages/Unsplash';

function App() {
  return (
    <div className="App">
        <NavBar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/unsplash" element={<Unsplash/>}/>
        </Routes>
    </div>
  );
}

export default App;
