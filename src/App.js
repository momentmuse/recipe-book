import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme.js';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults';
import useSpinner from './Hooks/useSpinner';

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
  margin: 1.5rem 1rem;

  @media ${props => props.theme.device.laptop} {
    width: 60vw;
  }
`;

const App = () => {
  const isInitialMount = useRef(true);
  const [searches, setSearches] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const { spinnerIcon, setSpinnerVisible } = useSpinner();

  const buildQuery = searchArray => {
    // API is not configured for CORS, so I spun up a cors-anywhere server on heroku to serve as proxy
    const proxyUrl = 'https://stark-taiga-49462.herokuapp.com/';
    const api = `http://www.recipepuppy.com/api/?i=`;
    return proxyUrl + api + searchArray.join(',');
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const fetchRecipes = async searchArray => {
        // triggers if all previously searched items are deleted
        if (searchArray.length === 0) {
          setRecipes([]);
          return;
        }

        setSpinnerVisible(true);
        const response = await fetch(buildQuery(searchArray));
        if (response.ok) {
          const json = await response.json();
          setSpinnerVisible(false);
          setRecipes(json.results);
        } else {
          // send error to a designated logging service
          setSpinnerVisible(false);
          console.error('HTTP-Error: ' + response.status);
        }
      };

      fetchRecipes(searches[searches.length - 1]);
    }
  }, [searches, setSpinnerVisible]);

  return (
    <ThemeProvider theme={theme}>
      <RecipeBook>
        <Navbar />
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
