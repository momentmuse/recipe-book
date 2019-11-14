import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import muffin from './../assets/muffin.png';

const ResultsContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

const SearchResults = ({ searches, recipes, spinnerIcon }) => {
  const lastSearch = searches[searches.length - 1] || [];

  const populateResults = (spinnerIcon, recipes) => {
    if (spinnerIcon) {
      return spinnerIcon;
    } else if (recipes.length > 0) {
      return recipeList(recipes);
    } else if (lastSearch.length > 0) {
      return noResultsFound();
    } else {
      return;
    }
  };

  const recipeList = recipes => {
    return recipes.map((recipe, index) => {
      return <RecipeCard recipe={recipe} key={recipe.title + index} />;
    });
  };

  const noResultsFound = () => {
    return (
      <div>
        <img src={muffin} alt="no results found muffin" />
        Sorry, I took a look, but I've got muffin' for ya. Search again?
      </div>
    );
  };

  return (
    <ResultsContainer className="search-results">
      {populateResults(spinnerIcon, recipes)}
    </ResultsContainer>
  );
};

export default SearchResults;
