import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchedIngredients from './SearchedIngredients';

const SearchBox = ({ searches, setSearches }) => {
  const [ingredient, setIngredient] = useState('');

  const addIngredient = (e, inputIngredient) => {
    e.preventDefault();
    const lastSearch = searches[searches.length - 1] || [];
    setSearches([...searches, [...lastSearch, inputIngredient]]);
    // clears the input for the next ingredient
    setIngredient('');
  };

  return (
    <div className="search-box">
      <form onSubmit={e => addIngredient(e, ingredient)}>
        <p>searchquery: {JSON.stringify(searches)}</p>
        <SearchInput ingredient={ingredient} setIngredient={setIngredient} />
        <button>Let's get cooking!</button>
      </form>
      <SearchedIngredients searches={searches} setSearches={setSearches} />
    </div>
  );
};

export default SearchBox;
