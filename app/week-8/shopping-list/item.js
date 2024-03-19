import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li
        className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow mb-2"
        onClick={() => onSelect({ name, quantity, category })}
      >
        <span className="font-bold">{name}</span>
        <p>
          Buy {quantity} {category}
        </p>
      </li>
    );
  }
  
  export default Item;