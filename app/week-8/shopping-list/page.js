"use client"

"use client";
import { useUserAuth } from "../_utils/auth-context";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";


function Page() {
 
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-[#C0C0C0] flex flex-col md:flex-row justify-start items-start">
    <div className="flex-1">
        <h1 className="text-4xl font-bold underline my-4 mx-12 py-3 text-[#000000]">
          Shopping List
        </h1>
        <h2 className="text-2xl font-medium mx-10 my-2 text-[#FF8C00]">Add New Item</h2>
        <div className="px-5">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
    </div>
    <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
    </div>
</main>
  );
}

export default Page;