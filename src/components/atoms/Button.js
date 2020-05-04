import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, ...buttonProps }) {
  return (
    <button {...buttonProps}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonProps: PropTypes.object
};
