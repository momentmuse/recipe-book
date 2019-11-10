import React from 'react';

const SearchInput = ({
  searchBy,
  searchQuery,
  setSearchQuery,
  searchIngredients,
  setSearchIngredients
}) => {
  return (
    <React.Fragment>
      {searchBy.query && (
        <label htmlFor="query-input">
          What would you like to make?
          <input
            id="search"
            value={searchQuery}
            placeholder="Pizza, omelet, soup, cake etc"
            onChange={e => setSearchQuery(e.target.value)}
            onBlur={e => setSearchQuery(e.target.value)}
          />
        </label>
      )}
      {searchBy.ingredients && (
        <label htmlFor="query-input">
          What ingredients do you have?
          <input
            id="search"
            value={searchIngredients}
            placeholder="Carrot, milk, apple, etc"
            onChange={e => setSearchIngredients(e.target.value)}
            onBlur={e => setSearchIngredients(e.target.value)}
          />
        </label>
      )}
    </React.Fragment>
  );
};

export default SearchInput;
