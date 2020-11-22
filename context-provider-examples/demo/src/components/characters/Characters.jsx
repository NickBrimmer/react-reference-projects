import React, { useContext } from 'react';
import Character from './Character';
import { CharacterContext } from '../../hooks/characterContext';

const Characters = () => {
  const characters = useContext(CharacterContext);
  
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default Characters;
