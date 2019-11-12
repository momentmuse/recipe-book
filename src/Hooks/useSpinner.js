import React, { useState } from 'react';
import Spinner from './../Components/Spinner';

const useSpinner = () => {
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const spinnerIcon = spinnerVisible ? <Spinner /> : null;

  return { spinnerIcon, setSpinnerVisible };
};

export default useSpinner;
