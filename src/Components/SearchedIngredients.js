import React from 'react';

const SearchedIngredients = ({ searches, setSearches }) => {
  const removeIngredient = ingredient => {
    setSearches([
      ...searches,
      [...searches[searches.length - 1].filter(item => item !== ingredient)]
    ]);

    // need to trigger side effect of clearing search results if searches === []
  };

  const generateIngredientButtons = searches => {
    const lastSearch = searches[searches.length - 1] || [];
    return lastSearch.map(ingredient => {
      return (
        <button onClick={() => removeIngredient(ingredient)}>
          x {ingredient}
        </button>
      );
    });
  };

  return (
    <div>
      <h1>Ingredient Buttons down here</h1>
      {generateIngredientButtons(searches)}
    </div>
  );
};

export default SearchedIngredients;
