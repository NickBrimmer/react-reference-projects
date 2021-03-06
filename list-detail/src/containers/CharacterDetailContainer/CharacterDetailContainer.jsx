import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import { fetchCharacter } from '../../services/xfiles';

const CharacterDetailContainer = ({ match }) => {
  // const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  if(!character) return <h1>Loading</h1>;

  return <CharacterDetail name={character.name}
    species={character.species}
    status={character.status}
    image={character.image}
    origin={character.origin} />;
};

CharacterDetailContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetailContainer;
