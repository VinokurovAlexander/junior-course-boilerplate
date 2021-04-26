import styled from 'styled-components';

const Component = styled.a`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 34px;
  width: ${props => props.$isBig ? '88px' : 'auto'};
  height: 32px;

  color: ${props => props.$isActive ? '#fff' : '#7f8fa4'};
  background-color: ${props => props.$isActive ? '#5695ed' : '#fff'};
  border: 1px solid ${props => props.$isActive ? '#5695ed' : '#c5cfde'};
  font-size: 14px;
  cursor: 'pointer';
  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 0.5;
  }

  &:disabled {
    pointer-events: none;
    border-color: lightgrey;
    color: lightgrey;
  }
`

export { Component };
