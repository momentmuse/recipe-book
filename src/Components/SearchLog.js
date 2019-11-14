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
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.primary};
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const SearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${props => (props.open ? '1' : '0')};
  max-height: ${props => (props.open ? '100%' : '0')};
  padding: ${props => (props.open ? '0.5rem 0' : '0')};
  transition: all 0.3s;
`;

const Search = styled.button`
  font-size: 0.8rem;
  color: ${props => props.theme.mid};
  padding: 1rem 0;
  border: none;
  border-bottom: 1px solid #e3e3e3;
  text-align: center;
  background-color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.primary};
    cursor: pointer;
    font-weight: 900;
  }
`;

const SearchLog = ({ searches, setSearches }) => {
  const [toggleRecent, setToggleRecent] = useState(false);

  const renderRecent = searches => {
    const searchesClone = [...searches];
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
  };

  const selectRecent = e => {
    e.preventDefault();
    setSearches([...searches, e.target.value.split(',')]);
  };

  return (
    <React.Fragment>
      <RecentSearches onClick={() => setToggleRecent(!toggleRecent)}>
        Recent Searches &nbsp;{' '}
        {toggleRecent ? (
          <i className="fas fa-angle-double-up"></i>
        ) : (
          <i className="fas fa-angle-double-down"></i>
        )}
      </RecentSearches>
      <SearchesContainer open={toggleRecent}>
        {renderRecent(searches)}
      </SearchesContainer>
    </React.Fragment>
  );
};

export default SearchLog;
