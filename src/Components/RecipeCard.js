import React from 'react';
import RecipeImg from './RecipeImg';

const RecipeCard = ({ recipe }) => {
  const checkLactose = recipe => {
    const lactoseIngredients = ['milk', 'yogurt', 'cheese'];
    return lactoseIngredients.some(ingredient =>
      recipe.ingredients.includes(ingredient)
    )
      ? ' contains-lactose'
      : '';
  };

  return (
    <a href={recipe.href}>
      <div className={'recipe-card' + checkLactose(recipe)}>
        <h2>{recipe.title}</h2>
        <RecipeImg img={recipe.thumbnail} />
      </div>
    </a>
  );
};

export default RecipeCard;
