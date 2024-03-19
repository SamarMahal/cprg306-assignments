"use client";

import React, {useState, useEffect} from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });



return (

  <div>
      <button onClick={() => setSortBy('name')} className="p-5 m-2 text-xl bg-gray-400 rounded-xl hover:bg-orange-300">
        Sort by Name</button>
      <button onClick={() => setSortBy('category')} className="p-5 m-2 text-xl bg-gray-400 rounded-xl  hover:bg-orange-300">
        Sort by Category</button>
      <ul>
        {items.map(item => (
             <Item
             key={item.id}
             name={item.name}
             quantity={item.quantity}
             category={item.category}
             onSelect={() => onItemSelect(item)}
           />
        ))}
      </ul>
    </div>
);
};

export default ItemList