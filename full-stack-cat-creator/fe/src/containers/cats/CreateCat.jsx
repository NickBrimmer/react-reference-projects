import React, { Component } from 'react';
import * as Cat from '../../models/Cat';
import CatForm from '../../components/cat-form/CatForm';

export default class CreateCat extends Component {
  state = {
    name: '',
    color: '',
    spicyFactor: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    Cat.create(this.state);
    
    this.setState({
      name: '',
      color: '',
      spicyFactor: ''
    });
  }

  render() {
    const { name, color, spicyFactor } = this.state;
    return (
      <CatForm
      // {...this.state}
        name={name}
        color={color}
        spicyFactor={spicyFactor}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
