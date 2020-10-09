import React from 'react';
import { connect } from 'react-redux';
import Products from '../../components/Products';

const isMoreThanMinPrice = (product, currentPrice) => product.price >= currentPrice.min;
const isLessThanMaxPrice = (product, currentPrice) => product.price <= currentPrice.max;
const isRelevantDiscount = (product, discountSize) =>
  product.price === (product.subPriceContent - product.subPriceContent * discountSize);

const isRelevantCategory = (product, checkedCategories) =>
  checkedCategories.length === 0 ? true : checkedCategories.includes(product.category);

const isMatchesFilter = (product, currentPrice, discountSize, checkedCategories) =>
  isMoreThanMinPrice(product, currentPrice)
  && isLessThanMaxPrice(product, currentPrice)
  && isRelevantDiscount(product, discountSize)
  && isRelevantCategory(product, checkedCategories)

const getFilteredProducts = (currentPrice, checkedCategories, products) => {
  const discountSize = currentPrice.discount / 100 ;

  return products.filter(product => isMatchesFilter(product, currentPrice, discountSize, checkedCategories));
}

const mapStateToProps = ({ price, checkedCategories, products }) => {
  return {
    price,
    checkedCategories,
    products
  }
}

const List = ({ price, checkedCategories, products }) => <Products products={getFilteredProducts(price, checkedCategories, products)} />

export default connect(mapStateToProps)(List);
