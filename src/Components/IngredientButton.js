import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.mid};
  color: ${props => props.theme.light};
  border: none;
  padding: 0.5rem 0.8rem;
  margin: 0.3rem 0.3rem;
  border-radius: 2rem;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.dark};
    cursor: pointer;
  }
`;

const IngredientButton = ({ searches, setSearches }) => {
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
        <Button
          className="ingredient-btn"
          onClick={() => removeIngredient(ingredient)}
          key={ingredient}
        >
          {ingredient} <i className="fas fa-times-circle"></i>
        </Button>
      );
    });
  };

  return <React.Fragment>{generateIngredientButtons(searches)}</React.Fragment>;
};

export default IngredientButton;
