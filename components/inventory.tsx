/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { FormContext } from "./FormProvider";

function Inventory() {
  const {
    formData,
    setFormData,
    inventory,
    setInventory,
  } = useContext(FormContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newItem = { ...formData };
    setInventory([...inventory, newItem]);
  }

  const handleChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }


  return (
    <div className="flex justify-center flex-col">
      <h1 className='font-bold text-2xl mb-4 text-center'>Boat Inventory</h1>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap justify-center py-12  border border-solid border-gray-400 rounded-md">

        <label htmlFor="type">Type</label>
        <select name="type" onChange={handleChange}>
          <option value="Lures">Lures</option>
          <option value="Rods and Reels">Rods and Reels</option>
          <option value="Accessories">Accessories</option>
        </select>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />

        <label htmlFor="color">Color</label>
        <select name="color" onChange={handleChange}>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="Yellow">Yellow</option>
        </select>

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          placeholder="Quantity"
        />
        <button type="submit" className="border border-solid rounded-md border-gray-300 p-3 bg-blue-500 text-white">Add Item</button>
      </form>
      <div className="flex flex-col pt-12">
        {inventory && inventory.map((item: any, index: any) => (
          <div key={index}>
            <p>Type: {item.type}</p>
            <p>Name: {item.name}</p>
            <p>Color: {item.color}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
