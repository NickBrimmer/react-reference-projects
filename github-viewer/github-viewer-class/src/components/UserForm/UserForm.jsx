import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ onSelect }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSelect(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <button>Find</button>
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.string.isRequired
};

export default UserForm;
