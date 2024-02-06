import React from 'react';
import ItemList from './item-list'; 

const Page = () => {
  return (
    <main className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;