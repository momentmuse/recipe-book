import React from 'react';
import RecipeCard from './RecipeCard';

const SearchResults = ({ searches, recipes, spinnerIcon }) => {
  const lastSearch = searches[searches.length - 1] || [];

  const generateRecipeList = recipes => {
    return recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe.title} />;
    });
  };

  // this is displaying while the API fetch is happening
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
      {spinnerIcon}
      {recipes.length > 0 && generateRecipeList(recipes)}
      {lastSearch.length > 0 && recipes.length === 0 && noResultsFound()}
    </div>
  );
};

export default SearchResults;
