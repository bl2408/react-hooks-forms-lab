import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter((item) =>selectedCategory === "All" ? true : item.category === selectedCategory) //category filter
  .filter(item => item.name.toLowerCase().includes(search.toLowerCase())); //search filter

  const onSearchChange=(val)=>{
    setSearch(search=>val);
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit ={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
