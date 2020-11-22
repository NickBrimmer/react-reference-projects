import React from 'react';
import { shallow } from 'enzyme';
import ColorControls from './ColorControls';

describe('ColorControls component', () => {
  let handleChange; 
  let wrapper;
  beforeEach(() => {
    handleChange = jest.fn();
    wrapper = shallow(<ColorControls
      text="Hello!"
      backgroundColor="lightskyblue"
      textColor="red"
      onChange={handleChange}
    />);
  });

  it('has an input with a value set to the text prop', () => {
    expect(wrapper.find('input[name="text"]').prop('value')).toEqual('Hello!');
  });
  
  it('has an input with a value set to the backgroundColor prop', () => {
    expect(wrapper.find('input[name="backgroundColor"]').prop('value')).toEqual('lightskyblue');
  });
  
  it('has an input with a value set to the textColor prop', () => {
    expect(wrapper.find('input[name="textColor"]').prop('value')).toEqual('red');
  });

  it('invokes an onChange prop when the text input changes', () => {
    // onChange
    wrapper.find('input[name="text"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes an onChange prop when the backgroundColor input changes', () => {
    wrapper.find('input[name="backgroundColor"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes an onChange prop when the textColor input changes', () => {
    wrapper.find('input[name="textColor"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
