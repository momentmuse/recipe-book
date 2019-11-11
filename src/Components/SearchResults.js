import React from 'react';
import RecipeCard from './RecipeCard';

const SearchResults = ({ recipes }) => {
  const generateRecipeList = recipes => {
    return recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe.title} />;
    });
  };

  // create conditionals for
  // a: searches.last === [] && recipes.length > 0 (should not display)
  // b: searches.last === [valid] && recipes.length === 0 (should show 'no results found')

  return (
    <div className="search-results">
      {recipes.length > 0 && generateRecipeList(recipes)}
    </div>
  );
};

export default SearchResults;
