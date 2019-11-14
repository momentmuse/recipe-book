import React from 'react';
import styled from 'styled-components';

const IngredientsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

const Button = styled.button`
  background: ${props => props.theme.mid};
  color: ${props => props.theme.light};
  border: none;
  padding: 0.5rem 0.8rem;
  margin: 0.3rem 0;
  border-radius: 2rem;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.dark};
    cursor: pointer;
  }
`;

const Ingredients = ({ searches, setSearches }) => {
  const removeIngredient = ingredient => {
    setSearches([
      ...searches,
      [...searches[searches.length - 1].filter(item => item !== ingredient)]
    ]);
  };

  const generateIngredientButtons = searches => {
    const lastSearch = searches[searches.length - 1] || [];
    return lastSearch.map(ingredient => {
      return (
        <Button onClick={() => removeIngredient(ingredient)} key={ingredient}>
          {ingredient} <i className="fas fa-times-circle"></i>
        </Button>
      );
    });
  };

  return (
    <IngredientsContainer>
      {generateIngredientButtons(searches)}
    </IngredientsContainer>
  );
};

export default Ingredients;
