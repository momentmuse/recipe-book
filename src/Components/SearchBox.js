import React from 'react';

const SearchBox = ({ fetchRecipes, searchQuery, setSearchQuery }) => {
  return (
    <div className="search-box">
      <form onSubmit={fetchRecipes}>
        <label htmlFor="search">
          What would you like to make?
          <input
            id="search"
            value={searchQuery}
            placeholder="Pizza, omelet, soup, etc"
            onChange={e => setSearchQuery(e.target.value)}
            onBlur={e => setSearchQuery(e.target.value)}
          />
        </label>
        <button>Let's get cooking!</button>
      </form>
      <p>{searchQuery}</p>
    </div>
  );
};

export default SearchBox;
