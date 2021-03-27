import React from 'react';
import PropTypes from 'prop-types';
import { Component } from './style';

const Rating = ({ isFilled }) =>
  <Component isFilled={isFilled} />

Rating.propTypes = {
  isFilled: PropTypes.bool.isRequired
}

export default Rating;
