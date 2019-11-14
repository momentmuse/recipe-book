import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return recipes.map((recipe, index) => {
    return <RecipeCard recipe={recipe} key={recipe.title + index} />;
  });
};

export default RecipeList;
