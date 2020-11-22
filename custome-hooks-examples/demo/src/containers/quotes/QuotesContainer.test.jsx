import React from 'react';
import { shallow } from 'enzyme';
import QuotesContainer from './QuotesContainer';

jest.mock('../../services/futuramaApi.js', () => ({
  findQuotes() {
    return Promise.resolve([
      { character: 'Bender', text: 'my quote', image: 'https://bender.png' },
      { character: 'Fry', text: 'my fry quote', image: 'https://fry.png' },
      { character: 'Leela', text: 'my leela quote', image: 'https://leela.png' }
    ]);
  }
}));

describe('QuotesContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QuotesContainer />);
  });

  it('has quotes in state', () => {
    expect(wrapper.state('quotes')).not.toBeUndefined();
  });

  it('has a fetch method that gets quotes and sets state', () => {
    return wrapper.instance()
      .fetchQuotes()
      .then(() => {
        expect(wrapper.state('quotes')).toEqual([
          { character: 'Bender', text: 'my quote', image: 'https://bender.png' },
          { character: 'Fry', text: 'my fry quote', image: 'https://fry.png' },
          { character: 'Leela', text: 'my leela quote', image: 'https://leela.png' }
        ]);
      });
  });
});
