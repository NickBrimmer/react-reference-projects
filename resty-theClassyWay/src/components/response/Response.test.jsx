import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

describe('Response component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Response jsonResponse={{ name: 'spot', age: 5, wegiht: '20 lbs' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
