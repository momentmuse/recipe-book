import React from 'react';

const SearchLog = ({ searches, setSearches }) => {
  const renderRecent = searches => {
    const searchesClone = [...searches];

    return searchesClone
      .reverse()
      .slice(0, 5)
      .map(search => {
        return (
          <option value={search} key={search}>
            {search.join(', ')}
          </option>
        );
      });
  };

  const selectRecent = e => {
    e.preventDefault();
    setSearches(e.target.value);
  };

  return (
    <select name="search-log">
      <option value="">Recent Searches</option>
      {renderRecent(searches)}
    </select>
  );
};

export default SearchLog;
