import React from 'react';
import { shallow } from 'enzyme';
import CatNamesContainer from './CatNamesContainer';

jest.mock('../../models/Cat.js', () => ({
  find: () => Promise.resolve([
    { _id: '1234', name: 'garfield', color: 'orange', spicyFactor: '6' },
    { _id: '5678', name: 'fluffy', color: 'green', spicyFactor: '1' },
    { _id: '4568', name: 'fluffy2', color: 'blue', spicyFactor: '3' }
  ])
}));

describe('CatNamesContainer container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CatNamesContainer />);
  });

  it('has cats state', () => {
    expect(wrapper.state('cats')).not.toBeUndefined();
  });

  it('has a fetchCats method', () => {
    return wrapper.instance()
      .fetchCats()
      .then(() => {
        expect(wrapper.state('cats')).toEqual([
          { _id: '1234', name: 'garfield', color: 'orange', spicyFactor: '6' },
          { _id: '5678', name: 'fluffy', color: 'green', spicyFactor: '1' },
          { _id: '4568', name: 'fluffy2', color: 'blue', spicyFactor: '3' }
        ]);
      });
  });
});
