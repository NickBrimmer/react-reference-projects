import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ url, body, method, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="url" value={url} onChange={onChange} />

    <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />
    <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} />
    <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} />
    <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />
    <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />

    <textarea name="body" value={body} onChange={onChange}></textarea>
    <button>Go!</button>

  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request;
