import React from 'react';
import styled from 'styled-components';
import muffin from './../assets/muffin.png';

const NoResultsContainer = styled.div`
  margin: 1rem 0;
  color: ${props => props.theme.dark};
  font-size: 1rem;
  text-align: center;
`;

const NoResults = () => {
  return (
    <NoResultsContainer>
      <img src={muffin} alt="no results found muffin" />
      <p>
        Sorry, I've searched high and low, but I've got muffin' for ya. Search
        again?
      </p>
    </NoResultsContainer>
  );
};

export default NoResults;
