import styled from 'styled-components';

const Component = styled.a`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 34px;
  width: ${props => props.isBig ? '88px' : 'auto'};
  height: 32px;

  color: ${props => {
    switch (true) {
      case props.isDisabled: {
        return 'lightgrey';
      }

      case props.isActive: {
        return '#fff';
      }

      default: {
        return '#7f8fa4';
      }
    }
  }};
  background-color: ${props => props.isActive ? '#5695ed' : '#fff'};
  border: 1px solid ${props => {
    switch (true) {
      case props.isDisabled: {
        return 'lightgrey';
      }

      case props.isActive: {
        return '#5695ed';
      }

      default: {
        return '#c5cfde';
      }
    }
  }};
  font-size: 14px;
  text-decoration: none;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: ${props => props.isDisabled ? '1' : '0.5'};
  }
`

export { Component };
