import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  border: 1px solid #e4e4e4;
  padding: 1rem;
  margin-bottom: 1rem;
  width: -webkit-fill-available;
  font-size: 0.9rem;
`;

const ErrorMessage = styled.div`
  background: ${props => props.theme.danger};
  color: #fff;
  width: 100%;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.1rem;
  text-align: center;
`;

const SearchInput = ({ onChange, values, errors }) => {
  return (
    <Label htmlFor="input">
      <Input
        type="text"
        name="ingredient"
        className={`ingredient-input${errors.ingredient ? ' is-invalid' : ''}`}
        placeholder="Enter an ingredient eg. 'tomato'"
        value={values.ingredient}
        onChange={e => onChange(e)}
        onBlur={e => onChange(e)}
      />
      {errors.ingredient && (
        <ErrorMessage className="invalid-message">
          {errors.ingredient}
        </ErrorMessage>
      )}
    </Label>
  );
};

export default SearchInput;
