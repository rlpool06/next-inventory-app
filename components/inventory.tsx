import { useEffect, useState } from "react";

function Inventory() {
  const [item, setItem] = useState('');

  useEffect(() => {
    const storedItem = window.localStorage.getItem('item');
    if (storedItem) {
      setItem(storedItem);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.localStorage.setItem('item', item);
    alert('item added');
  }

  const handleChange = (e: any) => {
    setItem(e.target.value)
  }


  return (
    <div className="flex justify-center flex-col">
      <h1 className='font-bold text-2xl mb-4 text-center'>Boat Inventory</h1>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap justify-center py-12  border border-solid border-gray-400 rounded-md">
        <select onChange={handleChange}>
          <option value="Lures">Lures</option>
          <option value="Rods and Reels">Rods and Reels</option>
          <option value="Accessories">Accessories</option>
        </select>
        <button type="submit" className="border border-solid rounded-md border-gray-300 p-3 bg-blue-500 text-white">Add Item</button>
      </form>
      <div className="flex flex-col pt-12">
        {item && item}
      </div>
    </div>
  );
}

export default Inventory;
