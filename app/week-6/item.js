

const Item = ({ name, quantity, category }) => {
    return (
      <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-gray-600">Quantity: {quantity}</span>
        <span className="text-sm text-gray-500 italic">{category}</span>
      </li>
    );
  }
  
  export default Item;