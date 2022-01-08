import React, { useState } from "react";
import "./Search.css";
import Item from "./Item.js";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {currUserAtom} from "../atoms.js";
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

    let searchUrl = recipeUrl + new URLSearchParams({
      limitLicense: 'false',
      includeIngredients: ingredients,
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

    var recipeList = data['results'];
    console.log(recipeList);

    navigate("/main");
  }


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