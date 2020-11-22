import React from 'react';
import HeyArnoldProvider from '../../providers/characters/HeyArnoldProvider';
import Characters from '../../components/characters/Characters';
import LastAirBenderProvider from '../../providers/characters/LastAirBenderProvider';
import styles from './CharactersPage.css';

const CharactersPage = () => (
  <section className={styles.CharactersPage}>
    <HeyArnoldProvider>
      <Characters />
    </HeyArnoldProvider>
    <LastAirBenderProvider>
      <Characters />
    </LastAirBenderProvider>
  </section>
);

export default CharactersPage;
