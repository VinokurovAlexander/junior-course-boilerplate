import React from 'react';
import propTypes from 'prop-types';
import { Component } from './style';
import WithNumberMask from '../WithNumberMask';

class Input extends React.PureComponent {
  render() {
    const { name, value, handleChange } = this.props;

    return (
      <Component
        name={name}
        value={value}
        onChange={handleChange} />
        );
    }
}

Input.propTypes = {
  value: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

export default WithNumberMask(Input);
