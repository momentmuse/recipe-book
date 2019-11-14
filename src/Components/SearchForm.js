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
  margin: 1rem 0;
`;

const Button = styled.button`
  background: ${props => props.theme.warning};
  border: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  width: 100%;
  color: ${props => props.theme.dark};
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 900;
  transition: 0.3s;
  box-shadow: 0 8px 6px -6px #999;

  &:hover {
    background: ${props => props.theme.mid};
    color: ${props => props.theme.light};
    cursor: pointer;
  }
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
      <Ingredients searches={searches} setSearches={setSearches} />
      {searches.length > 0 && (
        <SearchLog searches={searches} setSearches={setSearches} />
      )}
    </SearchFormContainer>
  );
};

export default SearchForm;
