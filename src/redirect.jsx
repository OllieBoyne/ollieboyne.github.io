// Redirect.js
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Redirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null; // This component does not render anything
};

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Redirect;