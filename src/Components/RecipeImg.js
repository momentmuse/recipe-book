import React from 'react';

const RecipeImg = ({ img }) => {
  // set placeholder image if recipe image does not exist
  const sanitizeImg = img => {
    return img.length === 0 ? 'https://cataas.com/cat?width=100' : img;
  };

  return <img src={sanitizeImg(img)} alt="recipe-thumbnail" />;
};

export default RecipeImg;
