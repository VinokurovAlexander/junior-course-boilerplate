import React from 'react';
import ProductItemUI from 'csssr-school-product-card';
import PropTypes from 'prop-types';
import { Component, ListItem } from './style';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : undefined} />;
};

class Products extends React.PureComponent {
  render() {
    const { products } = this.props;

    return (
      <Component>
        {products.map((item, number) =>
          <ListItem key={number}>
            <ProductItemUI
              title = {item.name}
              price = {item.price}
              subPriceContent = {item.subPriceContent}
            />
          </ListItem>)
        }
      </Component>
    )
  }
}

ProductItemUI.propTypes = {
  isInStock: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  subPriceContent: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  ratingComponent: PropTypes.func.isRequired
};

ProductItemUI.defaultProps = {
  isInStock: true,
  img: '',
  title: 'Название первого товара',
  price: '23 000',
  subPriceContent: '23 000',
  maxRating: 5,
  rating: 4,
  ratingComponent: ratingComponent
};

export default Products;
