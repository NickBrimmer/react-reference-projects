import React from 'react';
import { shallow } from 'enzyme';
import Request from './Request';

describe('Request component', () => {
  let wrapper;
  let handleChange;
  beforeEach(() => {
    handleChange = jest.fn();
    wrapper = shallow(<Request
      url="http://myapi.com"
      body="{}"
      method="PATCH"
      onChange={handleChange}
    />);
  });

  it('has a url input with a value set to the url prop', () => {
    expect(wrapper.find('input[name="url"]').prop('value')).toEqual('http://myapi.com');
  });

  it('invokes the onChange prop whenever the url input is changed', () => {
    wrapper.find('input[name="url"]').simulate('change');

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('has a body textarea with a value set to the body prop', () => {
    expect(wrapper.find('textarea[name="body"]').prop('value')).toEqual('{}');
  });

  it('invokes the onChange prop whenever the body textarea is changed', () => {
    wrapper.find('textarea[name="body"]').simulate('change');

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('has a POST radio button', () => {
    expect(wrapper.find('input[value="POST"]')).toHaveLength(1);
  });

  it('has a checked radio button that matches the method prop', () => {
    expect(wrapper.find('input[name="method"]').findWhere(n => n.prop('checked')).prop('value'))
      .toEqual('PATCH');
  });

  it('invokes the onChange prop whenever the method radio buttons are clicked', () => {
    wrapper.find('input[name="method"]').forEach(radioButton => {
      radioButton.simulate('change');
    });

    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
