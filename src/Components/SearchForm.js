import React from 'react';
import SearchInput from './SearchInput';
import Ingredients from './Ingredients';
import useForm from '../Hooks/useForm';

const SearchForm = ({ searches, setSearches }) => {
  const addIngredient = ingredient => {
    const lastSearch = searches[searches.length - 1] || [];
    setSearches([...searches, [...lastSearch, ingredient]]);
  };

  const validateIngredientForm = values => {
    const errors = {};
    if (values.ingredient.trim().length < 3) {
      errors.ingredient = 'Ingredients must be at least 3 characters long';
    }
    return errors;
  };

  const { onChange, onSubmit, values, errors } = useForm(
    () => addIngredient(values.ingredient),
    { ingredient: '' },
    validateIngredientForm
  );

  return (
    <div className="search-form">
      <form onSubmit={e => onSubmit(e)}>
        <p>searchquery: {JSON.stringify(searches)}</p>
        <SearchInput onChange={onChange} values={values} errors={errors} />
        <button>Let's get cooking!</button>
      </form>
      <Ingredients searches={searches} setSearches={setSearches} />
    </div>
  );
};

export default SearchForm;
