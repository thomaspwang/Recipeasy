import React, { useState } from "react";
import "./index.css";
import Search from "../components/Search.js";
import Slideshow from "../components/Slideshow.js"; 

function Home() {
  return (
    <div className="App">
       <Slideshow/>
       <h1>Ingredients</h1>
      <Search/>
    </div>
  );
}

export default Home;