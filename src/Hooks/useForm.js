import { useState } from 'react';

const useForm = (callback, initialState = {}, validator) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (Object.keys(validator(values)).length === 0) {
      callback();
      setValues(initialState);
      setErrors({});
    } else {
      setErrors(validator(values));
    }
  };

  return { onChange, onSubmit, values, errors };
};

export default useForm;
