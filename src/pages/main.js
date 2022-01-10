import React from "react";
import "./main.css";
import Sidebar from "../components/Sidebar.js";
import Recipes from "../components/Recipes.js";

import {recipesAtom} from "../atoms.js";
import {useAtom} from 'jotai';


const Main = () => {

  const [recipes] = useAtom(recipesAtom);

  return (
    <div>

      <div className="side"><Sidebar /></div>
      <div className="one" >
        {recipes.map(p=>(
        <Recipes data={p}/>
        ))}
     </div>
    </div>
  );
};

export default Main;