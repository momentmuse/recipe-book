import React from 'react';

const SearchInput = ({ ingredient, setIngredient }) => {
  return (
    <React.Fragment>
      <label htmlFor="ingredients-input">
        What ingredients do you have? (separate with commas)
        <input
          id="search-by-ingredients"
          placeholder="tomato"
          value={ingredient}
          type="text"
          onChange={e => setIngredient(e.target.value)}
          onBlur={e => setIngredient(e.target.value)}
        />
      </label>
    </React.Fragment>
  );
};

export default SearchInput;
