import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Component } from './style';

const BackLink = ({ text, history }) => {
  const handleClick = () => history.goBack();

  return (
    <Component onClick={handleClick}>
      <h2>{text}</h2>
    </Component>
  )
}

BackLink.propTypes = {
  text: PropTypes.string.isRequired
}

export default withRouter(BackLink);
