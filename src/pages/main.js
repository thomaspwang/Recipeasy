import React from "react";
import "./main.css";
import Sidebar from "../components/Sidebar.js"; 
import Recipes from "../components/Recipes.js"; 



const Main = () => {
  return (
    <div>
      <div><Sidebar/></div>
      <div className="one" ><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/><Recipes/></div>
    </div>
  );
};
  
export default Main;