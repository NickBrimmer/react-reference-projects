import React from 'react';
import { shallow } from 'enzyme';
import CatNames from './CatNames';

describe('CatNames component', () => {
  let wrapper;
  beforeEach(() => {
    const cats = [
      { _id: '1234', name: 'garfield', color: 'orange', spicyFactor: '6' },
      { _id: '5678', name: 'fluffy', color: 'green', spicyFactor: '1' },
      { _id: '4568', name: 'fluffy2', color: 'blue', spicyFactor: '3' }
    ];
    wrapper = shallow(<CatNames
      cats={cats}
    />);
  });

  it('to have 3 lis', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });
});
