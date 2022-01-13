import React, { useState } from "react";
import "./Search.css";
import Item from "./Item.js";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {currUserAtom, recipesAtom} from "../atoms.js";
import {useAtom} from 'jotai';


const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function Search() { 
  const [item, setItem] = useState("");
  const [list, setList] = useState(arr);
  const [error, setError] = useState("");
  const [user] = useAtom(currUserAtom);
  const [recipes, setRecipes] = useAtom(recipesAtom);
  

  const recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?';

  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item: item,
    };
    e.preventDefault();
    if (item) {
      setList([...list, newItem]);
      setItem("");
      setError("");
      console.log(list);
    } else if (!item) setError("");

  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const navigate = useNavigate();

  const handleFindRecipes = async () => {

    fetch("http://localhost:4000/api/ingredients", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      },
      body: JSON.stringify({
        "username" : user,
        "ingredients" : list,
      })
    })
    .then(response => console.log(response.json()));

    let ingredients = list.map(x => x['item']).toString();
    console.log(ingredients);

    const allergiesUrl = 'http://localhost:4000/api/allergies?' + `username=${user}`;

    const allergies = fetch(allergiesUrl, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      }
    })
    .then(response => console.log(response.json()))
    //.then(data => data.toString());

    const dietUrl = 'http://localhost:4000/api/dietary-restrictions?' + `username=${user}`;

    const dietRes = fetch(dietUrl, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      }
    })
    .then(response => console.log(response.json()))
   // .then(data => data.toString());

    // Call route to database to get their health/diet information
    // Loop through each one, and then corss reference some data table for parameters
    
    //original params = {...}
    //fetch healthproblems
    //for i in healthproblems {add dietary restriction to params (check if restriction is already in params)
    //do the same for allergies/diet

    let searchUrl = recipeUrl + new URLSearchParams({
      limitLicense: 'false',
      includeIngredients: ingredients,
      number: '100',
      addRecipeInformation: 'true',
      fillIngredients: 'true',
      instructionsRequired: 'true',
  //intolerances: allergies.toString() ,

    })

    const response = await fetch(searchUrl, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': '86d4a1f2eemsh7a4556407c59a5ap1334dajsn28d840fe7925',
      }
    })
    

    var data = await response.json();
    console.log(data);

    setRecipes(data['results']);
    console.log(recipes);
    navigate("/main");
  }

  // eval("recipes = recipesData");

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}

          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add
        </button>
        <button className="btn" onClick={handleFindRecipes}>
          Find Recipes
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <div className="items">
        {list.map((c, id) => (
          <Item
            key={id}
            id={c.id}
            item={c.item}
            list={list}
            setList={setList}
            setItem={setItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;