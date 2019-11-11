import React from 'react';

const SearchInput = ({ onChange, values, errors }) => {
  return (
    <label htmlFor="input">
      Search by ingredient
      <input
        type="text"
        name="ingredient"
        className={'ingredient-input' + (errors.ingredient && ' is-invalid')}
        placeholder="tomato"
        value={values.ingredient}
        onChange={e => onChange(e)}
        onBlur={e => onChange(e)}
      />
      {errors.ingredient && (
        <div className="invalid-message">{errors.ingredient}</div>
      )}
    </label>
  );
};

export default SearchInput;
