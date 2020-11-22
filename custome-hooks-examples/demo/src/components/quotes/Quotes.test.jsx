import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';
import Quote from './Quote';

describe('Quotes component', () => {
  let wrapper;
  beforeEach(() => {
    const quotes = [
      { character: 'Bender', text: 'my quote', image: 'https://bender.png' },
      { character: 'Fry', text: 'my fry quote', image: 'https://fry.png' },
      { character: 'Leela', text: 'my leela quote', image: 'https://leela.png' }
    ];
    wrapper = shallow(<Quotes quotes={quotes} />);
  });

  it('displays a list of 3 Quote components', () => {
    expect(wrapper.find(Quote)).toHaveLength(3);
  });
});
