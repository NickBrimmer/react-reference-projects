import React, { Component } from 'react';
import { requestService } from '../service/requestService';
import Response from '../components/response/Response';
import Request from '../components/request/Request';

export default class Resty extends Component {
  state = {
    url: '',
    method: 'GET',
    body: '',
    jsonResponse: {}
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { url, method, body } = this.state;
    return requestService(url, method, body)
      .then(jsonResponse => this.setState({ jsonResponse }));
  }

  render() {
    const { url, method, body, jsonResponse } = this.state;
    return (
      <>
        <Request
          url={url}
          method={method}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Response jsonResponse={jsonResponse} />
      </>
    );
  }
}
