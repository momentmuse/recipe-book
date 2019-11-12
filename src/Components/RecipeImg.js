import React from 'react';
import placeholder from './../assets/placeholder.png';

const RecipeImg = ({ img }) => {
  // set placeholder image if recipe image does not exist
  const sanitizeImg = img => {
    return img.length === 0 ? placeholder : img;
  };

  return <img src={sanitizeImg(img)} alt="recipe-thumbnail" />;
};

export default RecipeImg;
