import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character image="my image" name="Cool" description="hello" />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
