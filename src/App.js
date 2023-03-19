import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className ="App"> 
      <nav> 
        <ul> 
          <li> 
            <Link to="/" > Main </Link>
          </li> 
          <li>
            <Link to="/nav" > Navbar </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Main/>}/> 
        <Route path="/nav" element={<Navbar/>}/>
      </Routes>
    </div>
  );
}
export default App;



