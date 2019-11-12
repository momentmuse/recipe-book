import { useState } from 'react';

const useForm = (callback, initialState = {}, validator) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = e => {
    if (values[e.target.name] === '') {
      setErrors({});
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (Object.keys(validator(values)).length === 0) {
      callback();
      setValues(initialState);
    } else {
      setErrors(validator(values));
      setValues(initialState);
    }
  };

  return { onChange, onSubmit, values, errors };
};

export default useForm;
