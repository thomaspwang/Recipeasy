import React from "react";
import Sidebar from "../components/Sidebar.js"; 
import Recipes from "../components/Recipes.js"; 



const Main = () => {
  return (
    <div>
      <div><Sidebar/></div>
      <div><Recipes/></div>
    </div>
  );
};
  
export default Main;