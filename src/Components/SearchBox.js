import React from 'react';
import SearchInput from './SearchInput';

const SearchBox = ({
  fetchRecipes,
  searchBy,
  setSearchBy,
  searchQuery,
  setSearchQuery,
  searchIngredients,
  setSearchIngredients
}) => {
  const toggleSearchBy = searchType => {
    setSearchBy({ ...searchBy, [searchType]: !searchBy[searchType] });
    console.log(searchBy);
  };

  return (
    <div className="search-box">
      <label htmlFor="search-by">
        What would you like to search by?
        <button onClick={() => toggleSearchBy('query')}>Recipe Type</button>
        <button onClick={() => toggleSearchBy('ingredients')}>
          Ingredients
        </button>
      </label>
      <form onSubmit={fetchRecipes}>
        <SearchInput
          searchBy={searchBy}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchIngredients={searchIngredients}
          setSearchIngredients={setSearchIngredients}
        />
        <button>Let's get cooking!</button>
      </form>
      <p>{searchQuery}</p>
    </div>
  );
};

export default SearchBox;
