import React from 'react';
import styled from 'styled-components';
import muffin from './../assets/muffin.png';

const NoResultsContainer = styled.div`
  margin: 1rem auto;
  color: ${props => props.theme.dark};
  font-size: 1rem;
  text-align: center;
`;

const NoResults = () => {
  return (
    <NoResultsContainer>
      <img src={muffin} alt="no results found muffin" />
      <p className="no-results">
        Sorry, I've searched high and low, but I've got muffin' for ya. Search
        again? <br /> (Try the singular and plural form of the ingredient, too!)
      </p>
    </NoResultsContainer>
  );
};

export default NoResults;
