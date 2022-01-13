import React, { useEffect, useState } from "react";
import Recipes from "../components/Recipes.js";
import {currUserAtom, savedAtom} from "../atoms.js";
import {useAtom} from 'jotai';

const Saved = () => {

  const [user, setUser] = useAtom(currUserAtom); 
  const [recipeList, setRecipeList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const endpoint = 'http://localhost:4000/api/recipes?' + `username=${user}`;



  useEffect(() => {
    fetch(endpoint, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      }
    })
    .then(result => result.json())
    .then(data => {
      console.log(data);
      return data.toString();
    })
    .then(savedRecipes => {
      console.log(savedRecipes);
      let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?';
      let url =  recipeUrl + new URLSearchParams({
        ids:savedRecipes
      });
      return decodeURIComponent(url);
    })
    .then(searchUrl => {
      console.log(searchUrl);
      return fetch(searchUrl, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': '86d4a1f2eemsh7a4556407c59a5ap1334dajsn28d840fe7925',
        }
      })
      .then(response => response.json());
    })
    .then(recipeData => {
      setRecipeList(recipeData);
      setLoaded(true);
    });
  }, [loaded]);

  
  if (recipeList.length > 0) {
    return (
      <div>
        <h1>
          Saved Recipes
        </h1>
        <div>{recipeList.map(p=>(
          <Recipes data={p}/>
          ))}</div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          Saved Recipes
        </h1>
        <div></div>
      </div>
    );
  }
};

export default Saved;