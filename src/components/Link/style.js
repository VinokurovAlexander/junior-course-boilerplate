import styled from 'styled-components';

const Component = styled.div`
  a {
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
        case (props.isActive): {
          return '#5695ed'
        }

        case (props.isDisabled): {
          return 'lightgrey'
        }

        default: {
          return '#c5cfde'
        }
      }
    }};

    font-size: 14px;
    cursor: 'pointer';
    transition: opacity 0.3s ease;
    pointer-events: ${props => props.isDisabled ? 'none' : 'auto'};

    &:hover {
      opacity: 0.5;
    }
  }
`

export { Component };
