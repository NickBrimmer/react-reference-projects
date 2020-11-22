import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import Stats from '../stats/Stats';

const CharacterWithStats = ({ character }) => (
  <section>
    <Character image={character.image} />
    <Stats
      health={character.health}
      attack={character.attack}
      experience={character.experience}
    />
  </section>
);

CharacterWithStats.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired
  })
};

export default CharacterWithStats;
