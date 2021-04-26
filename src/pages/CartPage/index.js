import React from 'react';
import BackLink from '../../components/BackLink';
import Products from '../../components/Products';
import { Component } from '../ProductPage/style';
import { Content } from './style';
import Cart from '../../containers/Cart';

const CartPage = ({ items }) => (
  <Component>
    <BackLink text="Корзина" />
    <Content>
      <Products products={items} />
      <Cart isFullInfo />
    </Content>
  </Component>
)

export default CartPage;
