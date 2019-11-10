import React from 'react';
import RecipeCard from './RecipeCard';

const SearchResults = ({ recipes }) => {
  const generateRecipeList = recipes => {
    return recipes.map(recipe => {
      return <RecipeCard recipe={recipe} />;
    });
  };

  return (
    <div className="search-results">
      {recipes.length > 0 && generateRecipeList(recipes)}
    </div>
  );
};

export default SearchResults;
