import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Login from './pages/login.js';
import Saved from './pages/saved.js';
import Main from './pages/main.js';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/saved' element={<Saved/>} />
        <Route path='/main' element={<Main/>} />
    </Routes>
    </Router>
);
}
  
export default App;