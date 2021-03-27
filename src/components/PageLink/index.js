import React from 'react';
import PropTypes from 'prop-types';
import { Component } from './style';
import { Link } from 'react-router-dom';


const PageLink = ({ children, isDisabled, isBig, isActive, url }) =>
  <Component $isBig={isBig} $isActive={isActive} disabled={isDisabled} to={url} as={isDisabled ? 'button' : Link}>
    {children}
  </Component>


PageLink.propTypes = {
  url: PropTypes.string,
  isDisabled: PropTypes.bool,
  isBig: PropTypes.bool,
  isActive: PropTypes.bool,
}

PageLink.defaultProps = {
  isDisable: false,
  isBig: false,
  isActive: false
}

export default PageLink;
