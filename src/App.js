import React from 'react';
import logo512 from './logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo512} className="App-logo" alt="logo" />
        <p>
          Recipes <span role="img" aria-label="book">📖</span>
        </p>
      </header>
    </div>
  );
}

export default App;
