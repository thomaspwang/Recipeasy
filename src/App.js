import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Login from './pages/login.js';
import Saved from './pages/saved.js';
import Main from './pages/main.js';
import Ingredients from './pages/ingredients.js';
import Recipe from './pages/recipe.js';
import {data} from './components/Recipes.js';
import {useAtom} from 'jotai';
import {currUserAtom} from "./atoms.js";

function App() {
    
    const [user] = useAtom(currUserAtom);
    
    if (user == '') {
        return (
            <Router>
                <Navbar />
                <Routes>

                    <Route exact path='/' exact element={<Home />} />
                    <Route path='/ingredients' element={<Ingredients />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/saved' element={<Login />} />
                    <Route path='/main' element={<Login />} />
                    <Route path='/recipe' element={<Recipe />} />
                    
                </Routes>
            </Router>
        );
        
    } else {
        return (
            <Router>
                <Navbar />
                <Routes>
                    
                    <Route exact path='/' exact element={<Home />} />
                    <Route path='/ingredients' element={<Ingredients />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/saved' element={<Saved />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/recipe' element={<Recipe />} />
    
                </Routes>
            </Router>
        );
    }
    // return (
    //     <Router>
    //         <Navbar />
    //         <Routes>
                
    //             <Route exact path='/' exact element={<Home />} />
    //             <Route path='/ingredients' element={<Ingredients />} />
    //             <Route path='/login' element={<Login />} />
    //             <Route path='/saved' element={<Saved />} />
    //             <Route path='/main' element={<Main />} />
    //             <Route path='/recipe' element={<Recipe />} />

    //         </Routes>
    //     </Router>
    // );
}

export default App;