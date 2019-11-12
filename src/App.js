import React, { useState, useEffect, useRef } from 'react';
import logo192 from './logo192.png';
import './App.css';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults';
import useSpinner from './Hooks/useSpinner';

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
    <div className="App">
      <header className="App-header">
        <img src={logo192} className="App-logo" alt="logo" />
        <p>Recipes</p>
        <SearchForm searches={searches} setSearches={setSearches} />
        <SearchResults
          searches={searches}
          recipes={recipes}
          spinnerIcon={spinnerIcon}
        />
      </header>
    </div>
  );
};

export default App;
