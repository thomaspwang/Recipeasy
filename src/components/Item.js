import React from "react";
import "./Item.css";

const Item = ({
  id,
  item,
  list,
  setList,

}) => {
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  return (
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "black",
          fontSize: "20px",
        }}
      />

      <img
        style={{ cursor: "pointer" }}
        onClick={() => remove(id)}
        src="https://www.i2symbol.com/images/symbols/math/circled_times_u2297_icon_256x256.png" 
        width= "30"
        height="30"
        alt="delete item"
      />
    </div>
  );
};
export default Item;