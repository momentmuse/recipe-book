import React from 'react';
import RecipeImg from './RecipeImg';

const RecipeCard = ({ recipe }) => {
  const lactoseCheck = recipe => {
    return recipe.ingredients.includes('milk') ||
      recipe.ingredients.includes('cheese')
      ? ' contains-lactose'
      : '';
  };

  return (
    <a href={recipe.href}>
      <div className={'recipe-card' + lactoseCheck(recipe)}>
        <h2>{recipe.title}</h2>
        <RecipeImg img={recipe.thumbnail} />
      </div>
    </a>
  );
};

export default RecipeCard;
