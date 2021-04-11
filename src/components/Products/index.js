import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../containers/ProductItem';
import { Component, ListItem } from './style';

const Products = ({ products }) => (
  <Component>
    {products.map(({ name, price, discount, status, id, img, stars }, index) =>
      <ListItem key={`${index}_${name}`}>
        <ProductItem
          title = {name}
          price = {price}
          discount={discount}
          isInStock={status === 'IN_STOCK'}
          id={id}
          img={img}
          rating={stars}
        />
      </ListItem>
    )}
  </Component>
)

Products.defaultProps = {
  products: [],
  isLoading: false
}


Products.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
}

export default Products;
