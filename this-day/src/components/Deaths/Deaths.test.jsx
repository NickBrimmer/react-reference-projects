import React from 'react';
import { shallow } from 'enzyme';
import Deaths from './Deaths';

describe('Deaths component', () => {
  it('renders Deaths', () => {
    const deaths = [
      { year: '2020', text: 'this app' }
    ];

    const wrapper = shallow(<Deaths deaths={deaths} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
