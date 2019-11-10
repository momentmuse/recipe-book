import React from 'react';
import SearchInput from './SearchInput';

const SearchBox = ({
  fetchRecipes,
  searchBy,
  setSearchBy,
  searchQuery,
  setSearchQuery
}) => {
  const toggleSearchBy = searchType => {
    setSearchBy({ ...searchBy, [searchType]: !searchBy[searchType] });
    console.log(searchBy);
  };

  return (
    <div className="search-box">
      <label htmlFor="search-by">
        What would you like to search by?
        <button onClick={() => toggleSearchBy('type')}>Recipe Type</button>
        <button onClick={() => toggleSearchBy('ingredients')}>
          Ingredients
        </button>
      </label>
      <form onSubmit={fetchRecipes}>
        <SearchInput
          searchBy={searchBy}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button>Let's get cooking!</button>
      </form>
      <p>searchquery: {JSON.stringify(searchQuery)}</p>
    </div>
  );
};

export default SearchBox;
