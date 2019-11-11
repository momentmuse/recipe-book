import React, { useState, useEffect, useRef } from 'react';
import logo512 from './logo512.png';
import './App.css';
import SearchBox from './Components/SearchBox';
import SearchResults from './Components/SearchResults';

function App() {
  const isInitialMount = useRef(true);
  const [searches, setSearches] = useState([]);
  const [recipes, setRecipes] = useState([]);
  // additional logic for performing precious searches?
  // const [searchArray, setSearchArray] = useState([]);

  const buildQuery = searchArray => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const api = `http://www.recipepuppy.com/api/?i=`;
    return proxyUrl + api + searchArray.join(',');
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const fetchRecipes = async searchArray => {
        // API is not configured for CORS, so we need to request through a proxy
        const response = await fetch(buildQuery(searchArray), {
          method: 'GET',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const json = await response.json();
          console.log('yo here are the API results: ', json.results);
          setRecipes(json.results);
        } else {
          // send error to a designated logging service
          console.log('HTTP-Error: ' + response.status);
        }
      };

      fetchRecipes(searches[searches.length - 1]);
    }
  }, [searches]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo512} className="App-logo" alt="logo" />
        <p>
          Recipes{' '}
          <span role="img" aria-label="book">
            📖
          </span>
        </p>
        <SearchBox searches={searches} setSearches={setSearches} />
        <SearchResults recipes={recipes} />
      </header>
    </div>
  );
}

export default App;
