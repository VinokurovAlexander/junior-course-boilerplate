import styled, { keyframes } from 'styled-components';
import { Button as BaseButton } from '../../style'

const Component = styled(BaseButton)``;

const scaling = keyframes`
    0% {
    transform: scale(1);
  }

  33% {
    transform: scale(1.4);
  }

  66% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
`;

const LoaderItem = styled.span`
  display: inline-block;

  width: 10px;
  height: 10px;
  margin: 0 3px;

  border-radius: 50%;
  background-color: #323C48;
  animation: ${scaling} 1s linear infinite;
`;

const Loader = styled.div`
  ${LoaderItem}:nth-child(2) {
    animation-delay: 0.2s;
  }

  ${LoaderItem}:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export { Component, Loader, LoaderItem };
