import styled from 'styled-components';
import image from './image.png';

const Component = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
`;

export { Component };
