import React, { useState } from 'react';

const SearchBox = () => {
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
    <div className="search-box">
      <form onSubmit={fetchRecipes}>
        <label htmlFor="search">
          What would you like to make?
          <input
            id="search"
            value={searchQuery}
            placeholder="Pizza, omelet, soup, etc"
            onChange={e => setSearchQuery(e.target.value)}
            onBlur={e => setSearchQuery(e.target.value)}
          />
        </label>
        <button>Let's get cooking!</button>
      </form>
      <p>{searchQuery}</p>
    </div>
  );
};

export default SearchBox;
