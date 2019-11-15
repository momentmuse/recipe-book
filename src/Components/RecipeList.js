import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return recipes.map((recipe, index) => {
    return (
      <RecipeCard
        className="recipe-card"
        recipe={recipe}
        key={recipe.title + index}
      />
    );
  });
};

export default RecipeList;
