import React from 'react';
import Events from '../../components/Events/Events';
import Births from '../Births/Births';
import styles from './ThisDay.css';
import Deaths from '../Deaths/Deaths';

const ThisDay = () => {
  return (
    <section className={styles.ThisDay}>
      <Events />
      <Births />
      <Deaths />
    </section>
  );
};

export default ThisDay;
