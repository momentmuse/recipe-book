import React from 'react';
import styled from 'styled-components';
import IngredientButton from './IngredientButton';

const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 85vw;

  @media ${props => props.theme.device.tablet} {
    width: 55vw;
  }
`;

const Ingredients = ({ searches, setSearches }) => {
  return (
    <IngredientsContainer>
      <IngredientButton searches={searches} setSearches={setSearches} />
    </IngredientsContainer>
  );
};

export default Ingredients;
