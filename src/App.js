import React from 'react';
import logo512 from './logo512.png';
import './App.css';
import SearchBox from './Components/SearchBox';
import RecipeCard from './Components/RecipeCard';

function App() {
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
        <SearchBox />
        <RecipeCard />
      </header>
    </div>
  );
}

export default App;
