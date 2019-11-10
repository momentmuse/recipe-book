import React, { useState } from 'react';
import SearchInput from './SearchInput';

const SearchBox = ({ searches, setSearches }) => {
  const [ingredient, setIngredient] = useState('');

  const addIngredient = (e, inputIngredient) => {
    e.preventDefault();

    const lastSearch = searches[searches.length - 1] || [];
    setSearches([...searches, [...lastSearch, inputIngredient]]);

    // clears the input for the next ingredient
    setIngredient('');
  };

  return (
    <div className="search-box">
      <form onSubmit={e => addIngredient(e, ingredient)}>
        <SearchInput ingredient={ingredient} setIngredient={setIngredient} />
        <button>Let's get cooking!</button>
      </form>
      <p>searchquery: {JSON.stringify(searches)}</p>
    </div>
  );
};

export default SearchBox;

// const myComp = () => {
//   const [searches, setSearches] = useState([]);
//   // search 1 [['tomato']]
//   // search 2 [['tomato'], ['tomato', 'potato']]
//   const addIngredient = ingredient => {
//     setSearches([...searches, [...searches[searches.length - 1], ingredient]]);
//   };
//   const removeIngredient = ingredient => {
//     setSearches([
//       ...searches,
//       [...searches[searches.length - 1].filter(item => item !== ingredient)]
//     ]);
//   };
// };

// const buildQuery = searchArray => {
//   proxyUrl + api + searchArray.join(',')
// }
