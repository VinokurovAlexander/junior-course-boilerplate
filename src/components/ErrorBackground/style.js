import styled from 'styled-components';
import image from './image.png';

const Component = styled.div`
  width: 100%;
  min-height: 500px;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export { Component };
