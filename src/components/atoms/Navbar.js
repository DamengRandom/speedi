import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ children, ...optionProps }) {
  return (
    <nav className={optionProps.className}>
      {children}
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node,
  optionProps: PropTypes.object
};
