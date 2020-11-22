import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export const List = ({ list, render }) => {
  const listItems = list.map(item => render(item));

  return (
    <ul>
      {listItems}
    </ul>
  );
};

// withFetch(Component, Loading, serviceFn)
// metaprogramming
const withList = (ListItemComponent, propName = 'list') => {
  // it would be better to give this thing a meaningful name
  function WithListHOC(props) {
    const listItems = props[propName].map(item => (
      <li key={item.id}>
        <ListItemComponent {...item} />
      </li>
    ));

    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  WithListHOC.displayName = `WithList(${ListItemComponent.name})`;

  return WithListHOC;
};

const Characters = withList(Character, 'characters');
// const Events = withList(Entry);
// const Characters = ({ characters }) => {
//   const characterElements = characters.map(character => (
//     <li key={character.id}>
//       <Character {...character} />
//     </li>
//   ));

//   return (
//     <ul>
//       {characterElements}
//     </ul>
//   );
// };

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
