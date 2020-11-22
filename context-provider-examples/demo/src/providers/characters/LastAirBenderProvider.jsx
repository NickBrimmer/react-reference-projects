import React, { useState, useEffect } from 'react';
import { CharacterContext } from '../../hooks/characterContext';
import { fetchCharacters } from '../../services/lastAirbenderApi';

// eslint-disable-next-line react/prop-types
const LastAirBenderProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <CharacterContext.Provider value={characters}>
      {children}
    </CharacterContext.Provider>
  );
};

export default LastAirBenderProvider;
