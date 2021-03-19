import styled from 'styled-components';
import ArrowIcon from './arrow.svg';

const Component = styled.div`
  position: relative;
  padding-left: 40px;

  cursor: pointer;
  transition: opacity ease-in 0.3s;

  &:hover {
    opacity: 0.5;
  }

  h2 {
      margin: 0;

      font-size: 36px;
      font-weight: 300;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    width: 25px;
    height: 100%;

    background-image: url(${ArrowIcon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`

export { Component };
