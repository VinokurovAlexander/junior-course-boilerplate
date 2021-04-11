import React from 'react';
import PropTypes from 'prop-types';
import { Component, Loader, LoaderItem } from './style';

const Button = ({ children, clickHandler, isDisabled, isLoading }) => {
  const handleClick = () => {
    clickHandler && clickHandler();
  }

  const renderLoader = () => (
    <Loader>
      <LoaderItem />
      <LoaderItem />
      <LoaderItem />
    </Loader>
  )

  return (
    <Component onClick={handleClick} disabled={isDisabled || isLoading} isLoading={isLoading}>
      {isLoading ? renderLoader() : children}
    </Component>
  )
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default Button;
