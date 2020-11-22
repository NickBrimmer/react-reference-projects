import React, { Component } from 'react';
import * as Cat from '../../models/Cat';
import CatNames from '../../components/cats/CatNames';

export default class CatNamesContainer extends Component {
  state = {
    cats: []
  }

  fetchCats = () => {
    return Cat
      .find()
      .then(cats => this.setState({ cats }));
  }

  componentDidMount() {
    this.fetchCats();
  }
  
  render() {
    const { cats } = this.state;
    return <CatNames cats={cats} />;
  }
}
