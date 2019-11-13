import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchLog from './SearchLog';
import Ingredients from './Ingredients';
import useForm from '../Hooks/useForm';

const SearchFormContainer = styled.div`
  color: ${props => props.theme.dark};
`;

const Form = styled.form`
  margin: 1.5rem 0;
`;

const Button = styled.button`
  background: ${props => props.theme.warning};
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: 100%;
  color: ${props => props.theme.dark};
  color: #3e3e3e;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 900;
`;

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
    <SearchFormContainer>
      <Form onSubmit={e => onSubmit(e)}>
        <SearchInput onChange={onChange} values={values} errors={errors} />
        <Button>{`Let's get cooking!`.toUpperCase()}</Button>
      </Form>
      <SearchLog searches={searches} setSearches={setSearches} />
      <Ingredients searches={searches} setSearches={setSearches} />
    </SearchFormContainer>
  );
};

export default SearchForm;
