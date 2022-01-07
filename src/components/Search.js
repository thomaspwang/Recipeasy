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
    } else if (!item) setError("");

  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const navigate = useNavigate();

  const handleFindRecipes = () => {

    // const response = await fetch("http://localhost:4000/api/register", {
    //   mode: 'cors',
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Origin' : 'http://localhost:5000'
    //   },
    //   body: JSON.stringify({ 
    //     "username" : username.value,
    //     "password" : password.value
    //   })
    // });

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