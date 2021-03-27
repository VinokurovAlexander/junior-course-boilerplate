import React from 'react';
import PropTypes from 'prop-types';
import { Component, Value } from './style';

const Price = ({ value, isSmall }) => <Component isSmall={isSmall}><Value>{value}</Value> &#8381;</Component>

Price.propTypes = {
  value: PropTypes.number.isRequired,
  isSmall: PropTypes.bool
}

Price.defaultProps = {
  isSmall: false
}

export default Price;
