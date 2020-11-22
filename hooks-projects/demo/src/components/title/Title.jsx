import React, { useState } from 'react';

const Title = () => {
  // stateStuff is an array
  // [0] is our state
  // [1] is a function to change our state
  const [title, setTitle] = useState('Hello Initial State');

  const handleChange = ({ target }) => setTitle(target.value);

  return (
    <>
      <input type="text" value={title} onChange={handleChange} />
      <p>{title}</p>
    </>
  );
};


export default Title;
