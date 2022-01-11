import React from "react";
import Recipes from "../components/Recipes.js";
import {currUserAtom} from "../atoms.js";
import {useAtom} from 'jotai';

const Saved = () => {

  const [user, setUser] = useAtom(currUserAtom);

  const endpoint = 'http://localhost:4000/api/recipes?' + `username=${user}`;

  const savedRecipes = fetch(endpoint, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin' : 'http://localhost:5000'
    }
  }).then(result => result.json());

  console.log(savedRecipes);


  return (
    <div>
      <h1>
        Saved Recipes
      </h1>
      <div><Recipes /></div>
    </div>
  );
};

export default Saved;