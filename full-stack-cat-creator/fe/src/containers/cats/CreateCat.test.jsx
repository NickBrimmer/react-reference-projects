import React from 'react';
import { shallow } from 'enzyme';
import CreateCat from './CreateCat';
import * as Cat from '../../models/Cat';

jest.mock('../../models/Cat.js', () => ({
  create: jest.fn()
}));

describe('CreateCat container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateCat />);
  });

  it('has name state', () => {
    expect(wrapper.state('name')).not.toBeUndefined();
  });

  it('has color state', () => {
    expect(wrapper.state('color')).not.toBeUndefined();
  });

  it('has spicyFactor state', () => {
    expect(wrapper.state('spicyFactor')).not.toBeUndefined();
  });

  it('handles the name input change', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'name',
        value: 'garfield'
      }
    });

    expect(wrapper.state('name')).toEqual('garfield');
  });

  it('handles the color input change', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'color',
        value: 'orange'
      }
    });

    expect(wrapper.state('color')).toEqual('orange');
  });

  it('handles the spicyFactor input change', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'spicyFactor',
        value: '6'
      }
    });

    expect(wrapper.state('spicyFactor')).toEqual('6');
  });

  it('handles submit and clears the form', () => {
    wrapper.setState({
      name: 'garfield',
      color: 'orange',
      spicyFactor: '6'
    });

    wrapper.instance().handleSubmit({
      preventDefault() {}
    });

    expect(wrapper.state()).toEqual({
      name: '',
      color: '',
      spicyFactor: ''
    });
  });

  it('prevents default on handleSubmit', () => {
    const preventDefault = jest.fn();
    wrapper.instance().handleSubmit({
      preventDefault
    });

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('invokes Cat.create on handleSubmit', () => {
    wrapper.instance().handleSubmit({
      preventDefault() {}
    });

    expect(Cat.create).toHaveBeenCalled();
  });
});
