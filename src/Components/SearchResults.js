import React from 'react';
import RecipeCard from './RecipeCard';
import RecipeImg from './RecipeImg';

const SearchResults = ({ recipes }) => {
  const generateRecipeList = recipes => {
    return recipes.map(recipe => {
      return (
        <a href={recipe.href}>
          <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <RecipeImg img={recipe.thumbnail} />
          </div>
        </a>
      );
    });
  };

  return (
    <RecipeCard generateRecipeList={generateRecipeList} recipes={recipes} />
  );
};

export default SearchResults;
