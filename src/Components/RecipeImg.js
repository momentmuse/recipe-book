import React from 'react';
import placeholder from './../assets/placeholder.png';
import styled from 'styled-components';

const Image = styled.img`
  margin-top: 1rem;
`;

const RecipeImg = ({ img }) => {
  // set placeholder image if recipe image does not exist
  const sanitizeImg = img => {
    return img.length === 0 ? placeholder : img;
  };

  return <Image src={sanitizeImg(img)} alt="recipe-thumbnail" />;
};

export default RecipeImg;
