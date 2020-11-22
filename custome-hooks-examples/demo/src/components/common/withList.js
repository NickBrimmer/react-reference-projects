/* eslint-disable react/prop-types */
import React from 'react';

// Component -> Quote
// arrayKey -> quotes
export const withList = (Component, arrayKey, listKey, title) => {
  const ComponentHOC = props => {
    const liElements = props[arrayKey].map(item => (
      <li key={item[listKey]}>
        <Component {...item} />
      </li>
    ));

    return (
      <section>
        {props.title ? <h2>{props.title}</h2> : <h2>{title}</h2>}
        <ul>
          {liElements}
        </ul>
      </section>
    );
  };

  ComponentHOC.displayName = `WithList(${Component.name}List)`;

  return ComponentHOC;
};
