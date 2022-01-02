import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Switch}
    from 'react-router-dom';
import Home from './pages';
import Login from './pages/login.js';
import Saved from './pages/saved.js';
import Main from './pages/main.js';
import Ingredients from './pages/ingredients.js';
import Recipe from './pages/recipe.js';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/ingredients' element={<Ingredients/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/saved' element={<Saved/>} />
        <Route path='/main' element={<Main/>} />
        <Route path='/recipe' element={<Recipe/>} />
    </Routes>
    </Router>
);
}
  
export default App;