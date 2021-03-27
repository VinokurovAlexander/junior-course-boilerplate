import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem';
import { Component, ListItem } from './style';

const Products = ({ products }) => (
  <Component>
    {products.map(({ name, price, subPriceContent, isInStock, id }, index) =>
      <ListItem key={`${index}_${name}`}>
        <ProductItem
          title = {name}
          price = {price}
          subPriceContent = {subPriceContent}
          isInStock={isInStock}
          id={id}
        />
      </ListItem>)
    }
  </Component>
)

Products.propTypes = {
  products: PropTypes.array.isRequired
}

export default Products;
