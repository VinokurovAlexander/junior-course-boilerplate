import React from 'react';
import PropTypes from 'prop-types';
import { Component } from './style';

const Title = ({ text }) => <Component>{text}</Component>

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
