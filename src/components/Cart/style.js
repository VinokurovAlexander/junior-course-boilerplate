import styled from 'styled-components';
import CartIcon from './icon-cart.svg';
import { Component as Price } from '../Price/style';
import { Component as BaseButton } from '../Button/style';

const Component = styled.div`
  display: flex;
  flex-direction: column;

  ${BaseButton} {
    margin-bottom: 16px;
  }
`;

const Title = styled.span`
  position: relative;

  display: inline-block;
  padding-left: 30px;
  margin-right: 15px;

  font-size: 20px;
  line-height: 28px;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 20px;
    height: 20px;

    background-image: url(${CartIcon});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const TextWrapper = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
`

const Value = styled.span`
  font-size: 14px;
`

const Icon = styled.img`
  width: 17px;
  height: 14px;
  margin-left: 10px;
`

const Text = styled.p`
  margin-top: 0;
`

const CartLink = styled.a`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  transition: opacity ease-in 0.3s;
  text-align: center;

  &:hover {
    opacity: 0.5;
  }
`

const Info = styled.div`
  font-size: 14px;
  font-weight: 600;

  ${Value},
  ${Price} {
    margin-left: 15px;
  }
`

export { Component, Title, TextWrapper, Value, Icon, Text, CartLink, Info };
