import React from 'react';
import RecipeCard from './RecipeCard';

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
        Sorry, we couldn't find any recipes!
        <span role="img" aria-label="sad-emoji">
          😢
        </span>
      </div>
    );
  };

  return (
    <div className="search-results">
      {populateResults(spinnerIcon, recipes)}
    </div>
  );
};

export default SearchResults;
