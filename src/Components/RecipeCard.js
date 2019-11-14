import React from 'react';
import RecipeImg from './RecipeImg';
import Heart from './Heart';
import Ribbon from './Ribbon';
import styled from 'styled-components';

const CardLink = styled.a`
  text-decoration: none;
  &:link {
    color: ${props => props.theme.dark};
  }
  &:active {
    color: ${props => props.theme.primary};
  }
  &:visited {
    color: #9e9e9e;
  }
`;

const Card = styled.div`
  position: relative;
  width: 90vw;
  background: #fff;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }

  @media ${props => props.theme.device.tablet} {
    width: 48.5%;
  }
`;

const RecipeTitle = styled.p`
  margin: 0.5rem 1.5rem;
  font-weight: 900;
  font-size: 1.3rem;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <CardLink href={recipe.href}>
        <Heart recipe={recipe} />
        <Ribbon recipe={recipe} />
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <RecipeImg img={recipe.thumbnail} />
        <p>{recipe.ingredients}</p>
      </CardLink>
    </Card>
  );
};

export default RecipeCard;
