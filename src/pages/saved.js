import React from "react";
import Recipes from "../components/Recipes.js";
import {currUserAtom, savedAtom} from "../atoms.js";
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

  const recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?'

  let saved  = savedRecipes.toString();
  console.log(saved);

  let searchUrl = recipeUrl + new URLSearchParams({
    ids:saved
  })

  const response = fetch(searchUrl, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': '86d4a1f2eemsh7a4556407c59a5ap1334dajsn28d840fe7925',
    }
  }).then(response => console.log(response.json()))

  
  return (
    <div>
      <h1>
        Saved Recipes
      </h1>
      {/* <div>{response.map(p=>(
        <Recipes data={p}/>
        ))}</div> */}
    </div>
  );
};

export default Saved;