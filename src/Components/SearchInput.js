import React from 'react';

const SearchInput = ({ searchBy, searchQuery, setSearchQuery }) => {
  return (
    <React.Fragment>
      {searchBy.type && (
        <label htmlFor="type-input">
          What would you like to make?
          <input
            id="search-by-type"
            value={searchQuery.type}
            placeholder="Pizza, omelet, soup, cake etc"
            onChange={e =>
              setSearchQuery({ ...searchQuery, type: e.target.value })
            }
            onBlur={e =>
              setSearchQuery({ ...searchQuery, type: e.target.value })
            }
          />
        </label>
      )}
      {searchBy.ingredients && (
        <label htmlFor="ingredients-input">
          What ingredients do you have? (separate with commas)
          <input
            id="search-by-ingredients"
            value={searchQuery.ingredients}
            placeholder="Carrot, milk, apple, etc"
            onChange={e =>
              setSearchQuery({ ...searchQuery, ingredients: e.target.value })
            }
            onBlur={e =>
              setSearchQuery({ ...searchQuery, ingredients: e.target.value })
            }
          />
        </label>
      )}
    </React.Fragment>
  );
};

export default SearchInput;
