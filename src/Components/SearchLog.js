import React, { useState } from 'react';

const SearchLog = ({ searches, setSearches }) => {
  const [toggleRecent, setToggleRecent] = useState(false);

  const renderRecent = searches => {
    const searchesClone = [...searches];

    if (toggleRecent) {
      return searchesClone
        .filter(search => search.length > 0)
        .reverse()
        .slice(0, 5)
        .map((search, index) => {
          return (
            <button
              value={search}
              key={search + index}
              onClick={e => selectRecent(e)}
              onBlur={e => selectRecent(e)}
            >
              {search.join(', ')}
            </button>
          );
        });
    } else {
      return;
    }
  };

  const selectRecent = e => {
    e.preventDefault();
    setSearches([...searches, e.target.value.split(',')]);
  };

  return (
    <div className="search-log">
      <button onClick={() => setToggleRecent(!toggleRecent)}>
        Recent Searches
      </button>
      {renderRecent(searches)}
    </div>
  );
};

export default SearchLog;
