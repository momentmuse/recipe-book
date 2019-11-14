import React from 'react';

import NoResults from './NoResults';
import styled from 'styled-components';
import RecipeList from './RecipeList';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.device.tablet} {
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }
`;

const SearchResults = ({ searches, recipes, spinnerIcon }) => {
  const lastSearch = searches[searches.length - 1] || [];

  const populateResults = (spinnerIcon, recipes) => {
    if (spinnerIcon) {
      return spinnerIcon;
    } else if (recipes.length > 0) {
      return <RecipeList recipes={recipes} />;
    } else if (lastSearch.length > 0) {
      return <NoResults />;
    } else {
      return;
    }
  };

  return (
    <ResultsContainer>{populateResults(spinnerIcon, recipes)}</ResultsContainer>
  );
};

export default SearchResults;
