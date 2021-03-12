import React from 'react';
import PropTypes from 'prop-types';
import { toInt } from 'csssr-school-utils';
import { Component } from './style';

class Link extends React.Component {
  handleClick = event => {
    event.preventDefault();

    const { href, handleLinkClick } = this.props;
    const index = toInt(href);

    handleLinkClick && handleLinkClick(index);
  }
  render() {
    const { href, children, isDisabled, isBig, isActive } = this.props;

    return (
        <Component
          disabled={isDisabled}
          isBig={isBig}
          isActive={isActive}
          href={href}
          onClick={this.handleClick}
        >
          {children}
        </Component>
    )
  }
}

Link.propTypes = {
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  handleClickLink: PropTypes.func
}

Link.defaultProps = {
  isDisable: false
}

export default Link;
