import React, { useState } from 'react';
import logo512 from './logo512.png';
import './App.css';
import SearchBox from './Components/SearchBox';
import RecipeCard from './Components/RecipeCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const fetchRecipes = async e => {
    e.preventDefault();

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `http://www.recipepuppy.com/api/?q=${searchQuery}`;
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
      return json.results;
    } else {
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
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <RecipeCard />
      </header>
    </div>
  );
}

export default App;
