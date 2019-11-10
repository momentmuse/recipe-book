import React from 'react';

const RecipeCard = ({ generateRecipeList, recipes }) => {
  return (
    <div className="recipes-container">
      {recipes.length > 0 && generateRecipeList(recipes)}
    </div>
  );
};

export default RecipeCard;
