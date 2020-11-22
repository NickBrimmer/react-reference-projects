import React from 'react';
import CharacterWithStats from '../character/CharacterWithStats';
import { useCharacter, useEnemy, useDispatch } from '../../hooks/gameContext';
import styles from './GameBoard.css';
import GameControls from '../controls/GameControls';
import { useEffect } from 'react';
import Results from './Results';
import { updateExperience, setEnemy } from '../../actions/gameActions';

const GameBoard = () => {
  const dispatch = useDispatch();
  const character = useCharacter();
  const enemy = useEnemy();

  useEffect(() => {
    if(enemy.health > 0) return;

    dispatch(updateExperience());
    dispatch(setEnemy());
  }, [enemy.health]);

  if(character.health <= 0) return <Results />;

  return (
    <section className={styles.GameBoard}>
      <CharacterWithStats character={character} />
      <GameControls />
      <CharacterWithStats character={enemy} />
    </section>
  );
};

export default GameBoard;
