import React from 'react';
import { Component, ListItem } from '../Products/style';
import ProductItemGhost from '../ProductItemGhost';
import { PRODUCTS_ON_PAGE_COUNT } from '../../constants';

const ProductsGhost = () => (
  <Component>
    {Array(PRODUCTS_ON_PAGE_COUNT)
      .fill()
      .map((_item, key) => <ListItem key={key}><ProductItemGhost /></ListItem>)}
  </Component>
);

export default ProductsGhost;
