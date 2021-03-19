import React from 'react';
import PropTypes from 'prop-types';
import { Component } from './styles';

const Title = ({ text }) => <Component>{text}</Component>

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
