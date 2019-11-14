import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${props => props.theme.primary},
    ${props => props.theme.secondary}
  );
  width: 100%;
  height: 9vh;
  box-shadow: 0 8px 6px -6px #333;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  font-size: 1.8em;
  font-weight: 900;
  letter-spacing: 1px;
  color: #fff;
`;

const scrollToTop = () => {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = ({ appTitle }) => {
  return (
    <Head onClick={() => scrollToTop()}>
      <Title>
        <i className="fas fa-utensils"></i>
        {` ${appTitle}`}
      </Title>
    </Head>
  );
};

export default Header;
