import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #08c781, #00bfb3);
  width: 100%;
  height: 9vh;
  -webkit-box-shadow: 0 8px 6px -6px #333;
  -moz-box-shadow: 0 8px 6px -6px #333;
  box-shadow: 0 8px 6px -6px #333;
  z-index: 2;
`;

const Title = styled.span`
  font-size: 1.8em;
  font-weight: 900;
  color: ${props => props.theme.light};
`;

const Navbar = () => {
  return (
    <Nav>
      <Title>pantry badi</Title>
    </Nav>
  );
};

export default Navbar;
