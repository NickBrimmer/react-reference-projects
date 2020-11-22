import React from 'react';
import Characters, { List } from '../Characters/Characters';
import Character from '../Characters/Character';

export default function App() {
  return (
    <>
      <List list={[]} render={character => (
        <li>
          <Character {...character} />
        </li>
      )} />
      
      <Characters characters={[]} />
    </>
  );
}
  
