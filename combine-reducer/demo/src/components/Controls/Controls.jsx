import React from 'react';
import { characters } from '../../utils/characters';
import styles from './Controls.css';
import { useDispatch, useSelector } from '../../store/Store';
import { setCharacter, setQuote } from '../../actions/quoteActions';
import { fetchQuote } from '../../services/futuramaApi';
import { getSelectedCharacter } from '../../selectors/quoteSelectors';

const Controls = () => {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector(getSelectedCharacter);

  const characterOptions = characters.map(character => (
    <option key={character} value={character}>{character}</option>
  ));

  const handleChange = ({ target }) => {
    dispatch(setCharacter(target.value));
  };

  const handleClick = () => {
    // fetch a quote
    dispatch(setQuote(selectedCharacter));
  };

  return (
    <section className={styles.Controls}>
      <select onChange={handleChange}>
        {characterOptions}
      </select>
      <button onClick={handleClick}>Fetch Another</button>
    </section>
  );
};


export default Controls;
