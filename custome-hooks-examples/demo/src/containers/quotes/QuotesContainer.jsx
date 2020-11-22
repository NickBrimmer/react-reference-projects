import React, { Component } from 'react';
import Quotes from '../../components/quotes/Quotes';
import { findQuotes } from '../../services/futuramaApi';

export default class QuotesContainer extends Component {
  state = {
    quotes: []
  }

  fetchQuotes = () => {
    return findQuotes()
      .then(quotes => this.setState({ quotes }));
  }

  // lifecycle events
  // on load
  componentDidMount() {
    console.log('Mounted!');
    this.fetchQuotes();
  }

  // whenever state or props change do something
  componentDidUpdate() {

  }

  // on unload
  componentWillUnmount() {
    console.log('Unmounting');
  }

  render() {
    const { quotes } = this.state;

    return (
      <Quotes quotes={quotes} />
    );
  }
}
