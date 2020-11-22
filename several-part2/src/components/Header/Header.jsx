import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useCatDog, useToggle } from '../../hooks/CatDogProvider';

const Header = () => {
  const catDog = useCatDog();
  const toggle = useToggle();

  return (
    <header>
      <h1>Our Cat/Dog Application</h1>
      <Toggle value={catDog === 'dog'} toggle={toggle} />
    </header>
  );
};

export default Header;
