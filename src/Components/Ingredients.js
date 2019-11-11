import React from 'react';

const Ingredients = ({ searches, setSearches }) => {
  const removeIngredient = ingredient => {
    setSearches([
      ...searches,
      [...searches[searches.length - 1].filter(item => item !== ingredient)]
    ]);

    // this needs integration with recipe fetching
  };

  const generateIngredientButtons = searches => {
    const lastSearch = searches[searches.length - 1] || [];
    return lastSearch.map(ingredient => {
      return (
        <button onClick={() => removeIngredient(ingredient)} key={ingredient}>
          x {ingredient}
        </button>
      );
    });
  };

  return <div>{generateIngredientButtons(searches)}</div>;
};

export default Ingredients;
