import React from 'react';
import { Component, Image, Title, Rating, Price, ContentWrapper } from '../ProductItem/style';
import { GhostTitle, GhostRating, GhostPrice, GhostMainStyle } from './style';

const ProductItemGhost = ({ isDetailPage }) => (
  <Component isDetailPage={isDetailPage}>
    <Image as={GhostMainStyle} />
    <ContentWrapper>
      <Title as={GhostTitle} />
      <Rating as={GhostRating} />
      <Price as={GhostPrice} />
    </ContentWrapper>
  </Component>
)

export default ProductItemGhost;
