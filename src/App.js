import React, { useState } from 'react';
import logo512 from './logo512.png';
import './App.css';
import SearchBox from './Components/SearchBox';
import SearchResults from './Components/SearchResults';

function App() {
  // search for recipes by ingredients or by query
  const [searchBy, setSearchBy] = useState({ ingredients: true, query: false });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchIngredients, setSearchIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const assembleQueryString = () => {
    const ingredients = searchIngredients.replace(' ', '');
    const query = searchQuery;

    if (searchBy.ingredients && searchBy.query) {
      return `?i=${ingredients}&q=${query}`;
    } else if (searchBy.ingredients) {
      return `?i=${ingredients}`;
    } else {
      return `?q=${query}`;
    }
  };

  const fetchRecipes = async e => {
    e.preventDefault();

    // the API is not correctly configured for CORS, so we need to make the request through a proxy
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `http://www.recipepuppy.com/api/${assembleQueryString()}`;
    const response = await fetch(proxyUrl + url, {
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
      console.log('json response: ', json.results);
      setRecipes(json.results);
    } else {
      // send the error to the designated logging service
      console.log('HTTP-Error: ' + response.status);
    }
  };

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
        <SearchBox
          fetchRecipes={fetchRecipes}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchIngredients={searchIngredients}
          setSearchIngredients={setSearchIngredients}
        />
        <SearchResults recipes={recipes} />
      </header>
    </div>
  );
}

export default App;
