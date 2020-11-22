import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ name, username, image, profileUrl}) => (
  <section>
    <h2>{name}</h2>
    <h3>{username}</h3>
    <img src={image} alt={name} />
    <a href={profileUrl}>GitHub Profile</a>
  </section>
);

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired
};

export default UserDetails;
