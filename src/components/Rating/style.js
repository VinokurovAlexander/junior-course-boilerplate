import styled from 'styled-components';
import IconStarFilled from './star-fill.svg';
import IconStar from './star.svg';

const Component = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${props => props.isFilled ? IconStarFilled : IconStar});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export { Component };
