import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme.js';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults';
import useSpinner from './Hooks/useSpinner';
import getRecipes from './Services/RecipeService';

const RecipeBook = styled.div`
  font-family: ${props => props.theme.font}, sans-serif;
  color: ${props => props.theme.light};
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 9vh;
  margin: 1rem;
  @media ${props => props.theme.device.tablet} {
    width: 70vw;
  }
  @media ${props => props.theme.device.laptop} {
    width: 60vw;
  }
`;

const App = () => {
  const isInitialMount = useRef(true);
  const [searches, setSearches] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const { spinnerIcon, setSpinnerVisible } = useSpinner();

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (searches[searches.length - 1].length === 0) {
      setRecipes([]);
    } else {
      setSpinnerVisible(true);
      getRecipes(searches[searches.length - 1])
        .then(response => {
          setSpinnerVisible(false);
          setRecipes(response.results);
        })
        .catch(error => {
          setSpinnerVisible(false);
          // send to designated error logging service
          console.error('There was an error!', error);
        });
    }
  }, [searches, setSpinnerVisible]);

  return (
    <ThemeProvider theme={theme}>
      <RecipeBook>
        <Header appTitle="recipe badi" />
        <MainWrapper>
          <Hero />
          <SearchForm searches={searches} setSearches={setSearches} />
          <SearchResults
            searches={searches}
            recipes={recipes}
            spinnerIcon={spinnerIcon}
          />
        </MainWrapper>
      </RecipeBook>
    </ThemeProvider>
  );
};

export default App;
