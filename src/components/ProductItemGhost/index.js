import React from 'react';
import { Component, Image, Title, Rating, Price } from '../ProductItem/style';
import { GhostTitle, GhostRating, GhostPrice, GhostMainStyle } from './style';

const ProductItemGhost = () => (
  <Component>
    <Image as={GhostMainStyle} />
    <Title as={GhostTitle} />
    <Rating as={GhostRating} />
    <Price as={GhostPrice} />
  </Component>
)

export default ProductItemGhost;
