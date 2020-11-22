import React from 'react';
import HomeLeft from '../../components/home/HomeLeft';
import HomeRight from '../../components/home/HomeRight';
import styles from './Home.css';
import ColorProvider from '../../providers/colors/ColorProvider';

const Home = () => (
  <ColorProvider>
    <section className={styles.Home}>
      <HomeLeft />
      <HomeRight />
    </section>
  </ColorProvider>
);

export default Home;
