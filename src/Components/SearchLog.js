import React, { useState } from 'react';
import styled from 'styled-components';

const RecentSearches = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.mid};
  padding: 1rem 0;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  margin-top: 0.5rem;
  text-align: center;

  &:hover {
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`;

const SearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Search = styled.button`
  font-size: 0.8rem;
  color: ${props => props.theme.mid};
  padding: 1rem 0;
  border: none;
  border-bottom: 1px solid #e3e3e3;
  text-align: center;
  background-color: #fff;

  &:hover {
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`;

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
            <Search
              value={search}
              key={search + index}
              onClick={e => selectRecent(e)}
              onBlur={e => selectRecent(e)}
            >
              {search.join(', ')}
            </Search>
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
      <RecentSearches onClick={() => setToggleRecent(!toggleRecent)}>
        Recent Searches &nbsp;{' '}
        {toggleRecent ? (
          <i class="fas fa-angle-double-up"></i>
        ) : (
          <i class="fas fa-angle-double-down"></i>
        )}
      </RecentSearches>
      <SearchesContainer>{renderRecent(searches)}</SearchesContainer>
    </div>
  );
};

export default SearchLog;
