import { useState } from 'react';

const useHandleChange = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {values, handleChange};
};

export default useHandleChange;
