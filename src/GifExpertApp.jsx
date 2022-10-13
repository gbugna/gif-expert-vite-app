import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = newCategory => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map( category => (
          <GifGrid key={category} category={category}/>
        ))}
      </ol>
    </>
  );
};