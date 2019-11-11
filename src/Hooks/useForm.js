import { useState } from 'react';

const useForm = (callback, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (Object.keys(validate(values)).length === 0) {
      callback();
      setValues(initialState);
      setErrors({});
    } else {
      setErrors(validate(values));
    }
  };

  return { onChange, onSubmit, values, errors };
};

export default useForm;
