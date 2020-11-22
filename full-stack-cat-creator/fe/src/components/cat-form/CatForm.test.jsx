import React from 'react';
import { shallow } from 'enzyme';
import CatForm from './CatForm';

describe('CatForm component', () => {
  let handleChange;
  let handleSubmit;
  let wrapper;
  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    wrapper = shallow(<CatForm
      name="garfield"
      color="orange"
      spicyFactor="1"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />);
  });

  it('has an input named name who\'s value is the name prop', () => {
    expect(wrapper.find('input[name="name"]').prop('value')).toEqual('garfield');
  });

  it('has an input named color who\'s value is the color prop', () => {
    expect(wrapper.find('input[name="color"]').prop('value')).toEqual('orange');
  });

  it('has an input named spicyFactor who\'s value is the spicyFactor prop', () => {
    expect(wrapper.find('input[name="spicyFactor"]').prop('value')).toEqual('1');
  });

  it('invokes the onChange prop when we change the name input', () => {
    wrapper.find('input[name="name"]').simulate('change');

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes the onChange prop when we change the color input', () => {
    wrapper.find('input[name="color"]').simulate('change');
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes the onChange prop when we change the spicyFactor input', () => {
    wrapper.find('input[name="spicyFactor"]').simulate('change');
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes the onSubmit prop when we submit the form', () => {
    wrapper.find('form').simulate('submit');

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
