import React from 'react';
import { useQuote, useTheme } from '../../hooks/appContext';
import styles from './Quote.css';

const Quote = () => {
  const theme = useTheme();
  const quote = useQuote();
  if(!quote) return <h1>Loading!!</h1>;

  return (
    <figure className={styles[`Quote-${theme}`]}>
      <img src={quote.image} alt={quote.character} />
      <figcaption>{quote.text} - {quote.character}</figcaption>
    </figure>
  );
};

export default Quote;
