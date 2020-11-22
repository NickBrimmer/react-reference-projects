import React, { useState, useEffect } from 'react';
import Characters from '../../components/Characters/Characters';
import { fetchCharacters } from '../../services/xfiles';

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  // componentDidMount
  useEffect(() => {
    fetchCharacters(page)
      // setCharacters -> this.setState({ characters })
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, [page]);

  const changePage = by => setPage(prevPage => prevPage + by);

  // const decrement = () => setPage(prevPage => prevPage - 1);
  // const increment = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <button onClick={() => changePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage(1)} disabled={characters.length < 20}>&gt;</button>
      <Characters characters={characters} />
    </>
  );
};

export default CharactersPage;
