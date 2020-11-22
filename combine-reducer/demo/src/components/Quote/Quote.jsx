import React from 'react';
import styles from './Quote.css';
import { useSelector } from '../../store/Store';
import { getQuote } from '../../selectors/quoteSelectors';

const Quote = () => {
  const { image, character, text } = useSelector(getQuote);
  if(!text) return null;

  return (
    <section className={styles.Quote}>
      <img src={image} alt={character} />
      <p>{character} said, &quot;{text}&quot;</p>
    </section>
  );
};

export default Quote;
