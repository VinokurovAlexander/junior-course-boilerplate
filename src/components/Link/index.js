import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Component } from './style';
const queryString = require('query-string');

const LinkUI = ({ children, isDisabled, isBig, isActive, index, location }) => {
  const query = location.search;
  const parsedQuery = queryString.parse(query,
    {
      arrayFormat: 'comma',
      parseNumbers: true
    });
  const url = `?${queryString.stringify({...parsedQuery, page: index}, { skipEmptyString: true, arrayFormat: 'comma' })}`;

  return (
    <Component isDisabled={isDisabled} isBig={isBig} isActive={isActive}>
      <Link to={url}>
        {children}
      </Link>
    </Component>
  )
}


LinkUI.propTypes = {
  index: PropTypes.number,
  isDisabled: PropTypes.bool,
  isBig: PropTypes.bool,
  isActive: PropTypes.bool,
}

LinkUI.defaultProps = {
  isDisable: false,
  isBig: false,
  isActive: false
}

export default withRouter(LinkUI);
