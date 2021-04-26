import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Component } from './style';
import Title from '../Title';

const BackLink = ({ text, history }) => {
  const handleClick = () => history.goBack();

  return (
    <Component onClick={handleClick}>
      <Title text={text} />
    </Component>
  )
}

BackLink.propTypes = {
  text: PropTypes.string.isRequired
}

export default withRouter(BackLink);
