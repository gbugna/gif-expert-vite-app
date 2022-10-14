import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';



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
