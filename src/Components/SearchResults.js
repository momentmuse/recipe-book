import React from 'react';
import RecipeCard from './RecipeCard';
import NoResults from './NoResults';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const SearchResults = ({ searches, recipes, spinnerIcon }) => {
  const lastSearch = searches[searches.length - 1] || [];

  const populateResults = (spinnerIcon, recipes) => {
    if (spinnerIcon) {
      return spinnerIcon;
    } else if (recipes.length > 0) {
      return recipeList(recipes);
    } else if (lastSearch.length > 0) {
      return <NoResults />;
    } else {
      return;
    }
  };

  const recipeList = recipes => {
    return recipes.map((recipe, index) => {
      return <RecipeCard recipe={recipe} key={recipe.title + index} />;
    });
  };

  return (
    <ResultsContainer>{populateResults(spinnerIcon, recipes)}</ResultsContainer>
  );
};

export default SearchResults;
