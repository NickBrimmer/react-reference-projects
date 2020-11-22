import React from 'react';
import Word from './Word';
import { useSelector } from 'react-redux';
import { getDictionary } from '../../selectors/wordsSelectors';

const Words = () => {
  // a hook to access redux
  const words = useSelector(getDictionary);

  const wordElements = words.slice(0, 100).map(word => (
    <Word key={word.word} {...word} />
  ));

  return (
    <dl>
      {wordElements}
    </dl>
  );
};

export default Words;
