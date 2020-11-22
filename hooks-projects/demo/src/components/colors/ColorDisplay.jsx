import React from 'react';
import PropTypes from 'prop-types';

// const ColorDisplay = () => {
//   return (
//     <section style={{ backgroundColor, width: '500px', height: '500px' }}>
//       <p style={{ color: textColor }}>{text}</p>
//     </section>
//   );
// }
const ColorDisplay = ({ text, backgroundColor, textColor }) => (
  <section style={{ backgroundColor, width: '500px', height: '500px' }}>
    <p style={{ color: textColor }}>{text}</p>
  </section>
);


ColorDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

export default ColorDisplay;
