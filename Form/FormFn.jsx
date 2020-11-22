import React, { useState } from 'react';
import MyForm from './MyForm';

const FormFn = () => {
  const [text, setText] = useState('my first state w/ hook');
  const handleChange = ({ target }) => setText(target.value);

  return (
    <MyForm text={text} changeFunction={handleChange} />
  );
};

export default FormFn;
