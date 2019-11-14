import React from 'react';
import styled from 'styled-components';

const HeartContainer = styled.div`
  position: absolute;
  display: block;
  font-size: 1.8rem;
  top: 12px;
  left: 12px;
  color: ${props => props.theme.danger};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;

const Heart = ({ recipe }) => {
  return (
    <HeartContainer>
      <i className="far fa-heart"></i>
    </HeartContainer>
  );
};

export default Heart;
