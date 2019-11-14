import React from 'react';
import styled from 'styled-components';

const RibbonRight = styled.div`
  display: ${props => (props.hasLactose ? 'block' : 'none')};
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  top: -10px;
  right: -10px;

  &:before,
  &:after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
    border-top-color: transparent;
    border-right-color: transparent;
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    bottom: 0;
    right: 0;
  }
`;

const RibbonSpan = styled.span`
  position: absolute;
  display: block;
  width: 225px;
  padding: 16px 0;
  background-color: #3498db;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 16px/1 ${props => props.theme.font}, sans-serif;
  letter-spacing: 1px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
`;

const Ribbon = ({ recipe }) => {
  const checkLactose = recipe => {
    const lactoseIngredients = ['milk', 'yogurt', 'cheese', 'cream'];
    return lactoseIngredients.some(ingredient =>
      recipe.ingredients.includes(ingredient)
    );
  };

  return (
    <RibbonRight hasLactose={checkLactose(recipe)}>
      <RibbonSpan>Has Lactose</RibbonSpan>
    </RibbonRight>
  );
};

export default Ribbon;
