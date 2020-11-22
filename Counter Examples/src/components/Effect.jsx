import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [timer, setTimer] = useState(0);

  // componentDidUpdate with no guard
  useEffect(() => {
    setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
  }, []);

  return <h1>I am Effect - {timer}</h1>;
};

export default Effect;
