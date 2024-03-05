"use client"

import { useState } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './item.json';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main >
      <h1 className='font-bold text-4xl p-2'>Shopping list</h1>
      <NewItem addItem={handleAddItem} />
      <ItemList items={items}/>
    </main>
  );
}