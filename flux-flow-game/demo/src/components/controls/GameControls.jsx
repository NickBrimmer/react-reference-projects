import React from 'react';
import styles from './GameControls.css';
import { useTurn } from '../../hooks/gameContext';
import { attackEnemy, heal, setEnemy } from '../../actions/gameActions';

const GameControls = () => {
  const turn = useTurn();

  return (
    <section className={styles.GameControls}>
      <button onClick={() => turn(attackEnemy())}>Attack</button>
      <button onClick={() => turn(heal())}>Heal</button>
      <button onClick={() => turn(setEnemy())}>Run</button>
    </section>
  );
};

export default GameControls;
