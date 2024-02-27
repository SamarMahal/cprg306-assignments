import ItemList from './item-list';

export default function Page() {
  return (
    <main >
      <h1 className='font-bold text-4xl p-2'>Shopping list</h1>
      <ItemList />
    </main>
  );
}