import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const defaultFormData = {
    name: "",
    category: "Produce"
  };

  const [formData, setFormData] = useState(defaultFormData);

  const onChange =(e)=>{
    const name = e.target.name;
    const val = e.target.value;
    setFormData({
      ...formData,
      [name]: val
    });
  };

  const onSubmitForm =(e)=>{
    e.preventDefault();
    onItemFormSubmit(
      { id: uuid(), ...formData }
    );
    setFormData(defaultFormData);
  };

  return (
    <form className="NewItem" onSubmit={onSubmitForm}>
      <label>
        Name:
        <input type="text" name="name" onChange={onChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={onChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
