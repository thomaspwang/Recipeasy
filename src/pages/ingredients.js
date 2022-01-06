/* delete file */

import React, { useState } from "react";
import "./ingredients.css";
import Item from "../components/Item.js";
import Slideshow from "../components/Slideshow.js";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function Ingredients() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(arr);
  const [error, setError] = useState("");

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
    } else if (!item) setError("Item cannot be blank.");
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/main");
  }

  return (
    <div className="App">
      <Slideshow />
      <h1>Ingredients</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inputIngredients"
          type="text"
          value={item}

          onChange={handleChange}
        />
        <button className="btnIngredients" type="submit">
          Add
        </button>
        <button className="btnIngredients" onClick={handleRoute}>
          Find Recipes
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <div>
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

export default Ingredients;