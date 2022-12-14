import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Boca', 'DC']);

  const addCategory = () => {
    setCategories([...categories, 'marvel'])
    console.log(categories);
  };


  return (
    <>
    <h1>GifExpertApp</h1>

      {/* <AddCategory setCategories={setCategories}/> */}
      <AddCategory setCategories={setCategories}/>

      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
