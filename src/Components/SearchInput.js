import React from 'react';

const SearchInput = ({ ingredient, setIngredient }) => {
  return (
    <label htmlFor="ingredients-input">
      Search by ingredient
      <input
        id="search-by-ingredients"
        placeholder="tomato"
        value={ingredient}
        type="text"
        onChange={e => setIngredient(e.target.value)}
        onBlur={e => setIngredient(e.target.value)}
      />
    </label>
  );
};

export default SearchInput;
