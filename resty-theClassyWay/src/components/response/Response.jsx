import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ jsonResponse }) => (
  <pre>
    {JSON.stringify(jsonResponse, null, 2)}
  </pre>
);

Response.propTypes = {
  jsonResponse: PropTypes.oneOf([PropTypes.array, PropTypes.object])
};

export default Response;
